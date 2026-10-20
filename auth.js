/* Autenticación de la aplicación. Aislada del código de plantillas de EPI/fabricantes. */
(function(){
  // URL explícita para autenticación; no depende de una constante declarada en app.js.
  const AUTH_GAS_URL = "https://script.google.com/macros/s/AKfycbylJ9W5lSuvTvE600uoNc53zkl7v4-Mn1T6pnfoyEKHguteV8ALLwOOPCRP_zFgVq9V/exec";
  const tokenKey = "appAuditoriasSessionToken";
  const gate = document.getElementById("authGate");
  const root = document.getElementById("appRoot");
  const form = document.getElementById("authLoginForm");
  const msg = document.getElementById("authMessage");
  const adminPanel = document.getElementById("authAdminPanel");
  const usersList = document.getElementById("authUsersList");
  // Los mensajes del login quedan ocultos cuando se abre la aplicación; los de administración deben verse en su propio panel.
  let adminMsg = document.getElementById("authAdminMessage");
  if (!adminMsg && adminPanel) {
    adminMsg = document.createElement("p");
    adminMsg.id = "authAdminMessage";
    adminMsg.className = "auth-message";
    adminMsg.setAttribute("role", "status");
    adminMsg.setAttribute("aria-live", "polite");
    const heading = adminPanel.querySelector("h3");
    if (heading) heading.insertAdjacentElement("afterend", adminMsg);
    else adminPanel.prepend(adminMsg);
  }
  function adminMensaje(texto, tipo) {
    let destino=document.getElementById("authAdminMessage");
    if(!destino){
      const p=document.createElement("p");p.id="authAdminMessage";p.className="auth-message";p.setAttribute("role","status");p.setAttribute("aria-live","polite");
      const panel=document.getElementById("authAdminPanel");if(panel){panel.prepend(p);destino=p;}else if(msg){msg.textContent=texto||"";msg.className="auth-message"+(tipo?" "+tipo:"");return;}
    }
    if (!destino) return;
    destino.textContent = texto || "";
    destino.className = "auth-message" + (tipo ? " " + tipo : "");
  }
  async function postAdmin(payload) {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) throw new Error("La sesión no está iniciada. Vuelve a iniciar sesión.");
    return post(Object.assign({}, payload, { sessionToken: token }));
  }
  let rolActual = "";
  async function post(payload){
    const body = new URLSearchParams(); body.set("payload", JSON.stringify(payload));
    const response = await fetch(AUTH_GAS_URL,{method:"POST",body,cache:"no-store",redirect:"follow"});
    const raw = await response.text(); let data;
    try{data=JSON.parse(raw)}catch(_){throw new Error("Respuesta no válida del servidor de autenticación.")}
    if(!data.ok) throw new Error(data.error || "No se pudo completar la operación.");
    return data;
  }
  function mensaje(texto,tipo){msg.textContent=texto||"";msg.className="auth-message"+(tipo?" "+tipo:"")}
  let adminScreen = null;
  function mostrarPantallaSegura(id){
    // La pantalla se activa explícitamente incluso si la función global de app.js
    // no estuviera disponible por orden de carga o por un error previo.
    if (typeof window.mostrarPantalla === "function") {
      window.mostrarPantalla(id);
    } else {
      document.querySelectorAll(".screen").forEach(p => p.classList.remove("active"));
      const target = document.getElementById(id);
      if (target) target.classList.add("active");
    }
    const target = document.getElementById(id);
    if (target) target.classList.add("active");
  }
  function instalarModuloAdministracion(){
    // El menú lo crea app.js al inicializar. Si aún no está, intentamos invocar
    // su inicializador público antes de buscar la tarjeta.
    let menu=document.getElementById("auditoriasInicio");
    if (!menu && typeof window.instalarDashboardAuditoriasIndependientes === "function") {
      try { window.instalarDashboardAuditoriasIndependientes(); } catch (_) {}
      menu=document.getElementById("auditoriasInicio");
    }
    const grid=menu&&menu.querySelector(".module-grid");
    const main=document.querySelector("main.container")||document.querySelector("main");
    if(!main)return false;
    adminScreen=document.getElementById("administracionUsuariosScreen");
    if(!adminScreen){
      adminScreen=document.createElement("section");adminScreen.id="administracionUsuariosScreen";adminScreen.className="screen";
      adminScreen.innerHTML='<div class="dashboard-header"><div><h2>Administración de usuarios</h2><p>Alta y desactivación de cuentas de auditor.</p></div><button type="button" class="secondary-button" id="btnVolverMenuAdministracion">← Volver al menú principal</button></div>';
      const anchor=document.getElementById("dashboardEstadisticas")||document.getElementById("modulo");main.insertBefore(adminScreen,anchor||null);
      const back=adminScreen.querySelector("#btnVolverMenuAdministracion");if(back)back.addEventListener("click",()=>mostrarPantallaSegura("auditoriasInicio"));
      if (adminPanel) adminScreen.appendChild(adminPanel);
      else {
        // Compatibilidad con index.html anterior: crea el panel si aún no está en el HTML.
        const panel=document.createElement("section");panel.id="authAdminPanel";panel.className="auth-admin-panel";
        panel.innerHTML='<h3>Administración de usuarios</h3><p id="authAdminMessage" class="auth-message" role="status" aria-live="polite"></p><form id="authCreateUserForm"><label for="authNewUsername">Nuevo usuario</label><input id="authNewUsername" required minlength="3" maxlength="60" autocomplete="off"><label for="authNewPassword">Contraseña inicial (mínimo 12 caracteres)</label><input id="authNewPassword" type="password" required minlength="12" maxlength="256" autocomplete="new-password"><button type="submit" class="secondary-button">Crear auditor</button></form><div class="auth-user-list"><h4>Usuarios registrados</h4><div id="authUsersList"></div></div>';
        adminScreen.appendChild(panel);
        // Actualizar referencias locales al panel y sus elementos creados.
        panel.hidden=true;
      }
    }
    let panelReal=document.getElementById("authAdminPanel");
    if(!panelReal && adminScreen){
      panelReal=document.createElement("section");panelReal.id="authAdminPanel";panelReal.className="auth-admin-panel";panelReal.hidden=true;
      panelReal.innerHTML='<h3>Administración de usuarios</h3><p id="authAdminMessage" class="auth-message" role="status" aria-live="polite"></p><form id="authCreateUserForm"><label for="authNewUsername">Nuevo usuario</label><input id="authNewUsername" required minlength="3" maxlength="60" autocomplete="off"><label for="authNewPassword">Contraseña inicial (mínimo 12 caracteres)</label><input id="authNewPassword" type="password" required minlength="12" maxlength="256" autocomplete="new-password"><button type="submit" class="secondary-button">Crear auditor</button></form><div class="auth-user-list"><h4>Usuarios registrados</h4><div id="authUsersList"></div></div>';
      adminScreen.appendChild(panelReal); enlazarFormularioAlta();
    }
    if (panelReal) panelReal.hidden=true;
    if(!grid)return false;
    if(grid&&!document.getElementById("cardAdministracionUsuarios")){
      const card=document.createElement("button");card.type="button";card.id="cardAdministracionUsuarios";card.className="module-card summary-card";
      card.innerHTML='<span class="module-icon">👥</span><strong>Administración de usuarios</strong><span class="status status-gray">Solo administrador</span>';
      card.addEventListener("click",()=>{const p=document.getElementById("authAdminPanel");if(p)p.hidden=false;mostrarPantallaSegura("administracionUsuariosScreen");cargarUsuarios().catch(e=>adminMensaje("No se pudo cargar el listado: "+e.message,"error"));});grid.appendChild(card);
    }
    return true;
  }
  function mostrarAcceso(){
    if (gate) gate.hidden=false;
    if (root) root.hidden=true;
    const p=document.getElementById("authAdminPanel");if(p)p.hidden=true;
    rolActual="";
    const pass=document.getElementById("authPassword");if(pass)pass.value="";
  }
  function mostrarAplicacion(data){
    rolActual=data.rol||"AUDITOR";gate.hidden=true;root.hidden=false;mensaje("","");
    if(rolActual==="ADMIN"){
      const listo=instalarModuloAdministracion();
      if(!listo)adminMensaje("No se ha encontrado el menú de módulos. Recarga la página con Ctrl+F5 y vuelve a iniciar sesión.","error");
      const p=document.getElementById("authAdminPanel");if(p)p.hidden=true;
      cargarUsuarios().catch(e=>adminMensaje("No se pudo cargar el listado: "+e.message,"error"));
    }else{
      const card=document.getElementById("cardAdministracionUsuarios");if(card)card.remove();
      const p=document.getElementById("authAdminPanel");if(p)p.hidden=true;
    }
    // Tras el login se abre el selector principal de módulos, no la auditoría de vehículo.
    // Si el menú aún no existe, reintentar una vez en el siguiente ciclo de renderizado.
    mostrarPantallaSegura("auditoriasInicio");
    // Los indicadores se solicitan después del login, cuando ya existe un token válido.
    if (typeof window.actualizarResumenDashboardGeneral === "function") {
      window.actualizarResumenDashboardGeneral();
    }
    if(!document.getElementById("auditoriasInicio")){
      setTimeout(()=>{if(typeof window.instalarDashboardAuditoriasIndependientes==="function")window.instalarDashboardAuditoriasIndependientes();mostrarPantallaSegura("auditoriasInicio");},0);
    }
  }
  if (!form || !gate || !root || !msg) {
    console.error("Autenticación V39: faltan elementos base en index.html (authGate, appRoot, authLoginForm o authMessage).");
    return;
  }
  form.addEventListener("submit",async e=>{
    e.preventDefault(); const button=document.getElementById("authLoginButton");button.disabled=true;mensaje("Comprobando credenciales…","");
    try{const data=await post({accion:"iniciarSesion",usuario:document.getElementById("authUsername").value,contrasena:document.getElementById("authPassword").value});sessionStorage.setItem(tokenKey,data.token);mostrarAplicacion(data)}
    catch(err){mensaje(err.message||String(err),"error");}
    finally{button.disabled=false;}
  });
  async function cargarUsuarios(){
    enlazarFormularioAlta();
    const lista=document.getElementById("authUsersList");
    if(!lista)throw new Error("No se encuentra el contenedor del listado de usuarios en index.html.");
    const data=await postAdmin({accion:"adminListarUsuarios"});lista.replaceChildren();(data.usuarios||[]).forEach(u=>{const row=document.createElement("div");row.className="auth-user-row";const label=document.createElement("div");const strong=document.createElement("strong");strong.textContent=u.usuario;const small=document.createElement("small");small.textContent=(u.rol==="ADMIN"?"Administrador":"Auditor")+" · "+(u.activo?"Activo":"Desactivado");label.append(strong,small);row.append(label);if(u.activo&&u.rol!=="ADMIN"){const b=document.createElement("button");b.type="button";b.className="secondary-button";b.textContent="Desactivar";b.addEventListener("click",async()=>{if(!confirm("¿Desactivar al usuario "+u.usuario+"? No podrá volver a iniciar sesión."))return;try{await postAdmin({accion:"adminDesactivarUsuario",usuario:u.usuario});await cargarUsuarios();adminMensaje("Usuario desactivado.","success")}catch(e){adminMensaje(e.message,"error")}});row.append(b)}lista.append(row)});}
  function enlazarFormularioAlta(){
    const createForm=document.getElementById("authCreateUserForm");
    if(!createForm || createForm.dataset.authBound==="1")return;
    createForm.dataset.authBound="1";
    createForm.addEventListener("submit",async e=>{
      e.preventDefault();
      const usuario=document.getElementById("authNewUsername").value;
      const contrasena=document.getElementById("authNewPassword").value;
      try{await postAdmin({accion:"adminCrearUsuario",usuario,contrasena});e.target.reset();adminMensaje("Usuario creado correctamente.","success");await cargarUsuarios()}
      catch(err){adminMensaje(err.message||String(err),"error")}
    });
  }
  enlazarFormularioAlta();
  window.addEventListener("appAuditoriasSesionCaducada",()=>{sessionStorage.removeItem(tokenKey);mostrarAcceso();mensaje("La sesión ha caducado. Vuelve a iniciar sesión.","error")});
  // El token solo se conserva en sessionStorage: desaparece al cerrar la pestaña.
  // No se confía en el rol almacenado en el navegador; cada operación admin se valida en el servidor.
  window.appAuditoriasCerrarSesion=async function(){const token=sessionStorage.getItem(tokenKey);try{if(token)await post({accion:"cerrarSesion",sessionToken:token})}catch(_){}sessionStorage.removeItem(tokenKey);mostrarAcceso();};
  const header=document.querySelector(".app-header");if(header){const button=document.createElement("button");button.type="button";button.className="secondary-button";button.textContent="Cerrar sesión";button.style.cssText="float:right;margin:8px";button.addEventListener("click",()=>window.appAuditoriasCerrarSesion());header.append(button)}
  // No se restaura una sesión anterior automáticamente: obliga a autenticarse al abrir la pestaña.
  sessionStorage.removeItem(tokenKey);mostrarAcceso();
})();
