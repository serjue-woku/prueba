/* Autenticación de la aplicación. Aislada del código de plantillas de EPI/fabricantes. */
(function(){
  const tokenKey = "appAuditoriasSessionToken";
  const gate = document.getElementById("authGate");
  const root = document.getElementById("appRoot");
  const form = document.getElementById("authLoginForm");
  const msg = document.getElementById("authMessage");
  const adminPanel = document.getElementById("authAdminPanel");
  const usersList = document.getElementById("authUsersList");
  let rolActual = "";
  async function post(payload){
    const body = new URLSearchParams(); body.set("payload", JSON.stringify(payload));
    const response = await fetch(APP_AUDITORIAS_GAS_URL,{method:"POST",body,cache:"no-store",redirect:"follow"});
    const raw = await response.text(); let data;
    try{data=JSON.parse(raw)}catch(_){throw new Error("Respuesta no válida del servidor de autenticación.")}
    if(!data.ok) throw new Error(data.error || "No se pudo completar la operación.");
    return data;
  }
  function mensaje(texto,tipo){msg.textContent=texto||"";msg.className="auth-message"+(tipo?" "+tipo:"")}
  function mostrarAcceso(){gate.hidden=false;root.hidden=true;adminPanel.hidden=true;rolActual="";document.getElementById("authPassword").value="";}
  function mostrarAplicacion(data){rolActual=data.rol||"AUDITOR";gate.hidden=true;root.hidden=false;adminPanel.hidden=rolActual!=="ADMIN";mensaje("","");if(rolActual==="ADMIN") cargarUsuarios().catch(e=>mensaje(e.message,"error"));}
  form.addEventListener("submit",async e=>{
    e.preventDefault(); const button=document.getElementById("authLoginButton");button.disabled=true;mensaje("Comprobando credenciales…","");
    try{const data=await post({accion:"iniciarSesion",usuario:document.getElementById("authUsername").value,contrasena:document.getElementById("authPassword").value});localStorage.setItem(tokenKey,data.token);localStorage.setItem("appAuditoriasSessionRole",data.rol||"AUDITOR");mostrarAplicacion(data)}
    catch(err){mensaje(err.message||String(err),"error");}
    finally{button.disabled=false;}
  });
  async function cargarUsuarios(){const data=await appGasPost({accion:"adminListarUsuarios"});usersList.replaceChildren();(data.usuarios||[]).forEach(u=>{const row=document.createElement("div");row.className="auth-user-row";const label=document.createElement("div");const strong=document.createElement("strong");strong.textContent=u.usuario;const small=document.createElement("small");small.textContent=(u.rol==="ADMIN"?"Administrador":"Auditor")+" · "+(u.activo?"Activo":"Desactivado");label.append(strong,small);row.append(label);if(u.activo&&u.rol!=="ADMIN"){const b=document.createElement("button");b.type="button";b.className="secondary-button";b.textContent="Desactivar";b.addEventListener("click",async()=>{if(!confirm("¿Desactivar al usuario "+u.usuario+"? No podrá volver a iniciar sesión."))return;try{await appGasPost({accion:"adminDesactivarUsuario",usuario:u.usuario});await cargarUsuarios();mensaje("Usuario desactivado.","success")}catch(e){mensaje(e.message,"error")}});row.append(b)}usersList.append(row)});}
  document.getElementById("authCreateUserForm").addEventListener("submit",async e=>{e.preventDefault();const usuario=document.getElementById("authNewUsername").value;const contrasena=document.getElementById("authNewPassword").value;try{await appGasPost({accion:"adminCrearUsuario",usuario,contrasena});e.target.reset();mensaje("Usuario creado correctamente.","success");await cargarUsuarios()}catch(err){mensaje(err.message||String(err),"error")}});
  window.addEventListener("appAuditoriasSesionCaducada",()=>{localStorage.removeItem(tokenKey);localStorage.removeItem("appAuditoriasSessionRole");mostrarAcceso();mensaje("La sesión ha caducado. Vuelve a iniciar sesión.","error")});
  // El token se conserva en localStorage para sobrevivir a recargas y reaperturas del navegador.
  // El servidor sigue validando el token en cada operación; no se confía en un rol local.
  window.appAuditoriasCerrarSesion=async function(){const token=localStorage.getItem(tokenKey);try{if(token)await post({accion:"cerrarSesion",sessionToken:token})}catch(_){}localStorage.removeItem(tokenKey);localStorage.removeItem("appAuditoriasSessionRole");mostrarAcceso();};
  const header=document.querySelector(".app-header");if(header){const button=document.createElement("button");button.type="button";button.className="secondary-button";button.textContent="Cerrar sesión";button.style.cssText="float:right;margin:8px";button.addEventListener("click",()=>window.appAuditoriasCerrarSesion());header.append(button)}
  // Al cargar se valida la sesión existente con el backend. Solo se solicita acceso si ya no es válida.
  (async function restaurarSesion(){
    const token=localStorage.getItem(tokenKey);
    if(!token){mostrarAcceso();return;}
    try{
      const data=await post({accion:"comprobarConexion",sessionToken:token});
      mostrarAplicacion({rol:localStorage.getItem("appAuditoriasSessionRole")||data.rol||"AUDITOR"});
    }catch(_){localStorage.removeItem(tokenKey);localStorage.removeItem("appAuditoriasSessionRole");mostrarAcceso();mensaje("La sesión ha caducado. Inicia sesión de nuevo.","error");}
  })();
})();
