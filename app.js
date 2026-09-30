/* =========================================================
   APP AUDITORÍAS VEHÍCULOS
   MOTOR PRINCIPAL
   PASO 1 + PASO 2 VEHÍCULO
   ========================================================= */


/* =========================================================
   OBJETO PRINCIPAL DE LA AUDITORÍA
   ========================================================= */

const auditoria = {

    id: generarIdAuditoria(),

    estado: "BORRADOR",


    /* =====================================================
       DATOS GENERALES
       ===================================================== */

    datosGenerales: {

        fecha: obtenerFechaActual(),

        horaInicio: obtenerHoraActual(),

        auditor: "",

        tipoPersonal: "",

        actividad: "",

        actividadOtra: "",

        empresa: "",

        proyecto: "",

        trabajador: "",

        dniNie: "",

        localizacion: {

            tipo: "",

            direccion: "",

            poblacion: "",

            provincia: "",

            codigoPostal: "",

            latitud: null,

            longitud: null
        }
    },


    /* =====================================================
       MÓDULOS
       ===================================================== */

    modulos: {


        /* =================================================
           VEHÍCULO
           ================================================= */

        vehiculo: {

            estado: "NO_INICIADO",

            utiliza: null,


            datos: {

                matricula: "",

                marca: "",

                modelo: "",

                tipo: "",

                observaciones: "",


                /* =========================================
                   ITV
                   ========================================= */

                itv: {

                    resultado: "CORRECTO",

                    fecha: "",

                    descripcion: "",

                    medida: "",

                    observaciones: ""
                },


                /* =========================================
                   SEGURO
                   ========================================= */

                seguro: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: ""
                },


                observacionesDocumentacion: ""
            },


            /* =============================================
               CONTROLES VEHÍCULO
               ============================================= */

            controles: {


                conductorLibre: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                },


                cargaAsegurada: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                },


                desplazamientoCarga: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                },


                separacionOcupantes: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                },


                sistemaRetencionAdecuado: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                },


                sistemaRetencionEstado: {

                    resultado: "CORRECTO",

                    descripcion: "",

                    medida: "",

                    observaciones: "",

                    incidenciaId: null,

                    fotografias: []
                }
            }
        },


        /* =================================================
           RESTO DE MÓDULOS
           ================================================= */

        extintor: {
    estado: "NO_INICIADO",

    dispone: null,

    datos: {
        tipo: "",
        agente: "",
        capacidad: "",
        ubicacion: "",
        identificacion: "",
        observaciones: ""
    },

    controles: {
        disponibleAccesible: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        ubicacionAdecuada: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        senalizacion: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        estadoExterior: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        indicador: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        precintoSeguridad: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        mangueraBoquilla: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        etiquetaInstrucciones: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        mantenimientoVigente: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        },

        sujecionAdecuada: {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            foto: null
        }
    }
},
        escaleras: {
            estado: "NO_INICIADO",
            dispone: null,
            tipo: "",
            datos: {
                fabricante: "",
                modelo: "",
                identificacion: "",
                observaciones: ""
            },
            controles: {}
        },


        epis: {

            estado: "NO_INICIADO",

            controles: {}
        },


        botiquin: {

            estado: "NO_INICIADO",
            dispone: null,
            datos: { ubicacion: "", identificacion: "", observaciones: "" },
            elementos: {},
            controles: {
                materialBuenEstado: { resultado: "CORRECTO", descripcion: "", medida: "", observaciones: "", foto: null },
                materialNoCaducado: { resultado: "CORRECTO", descripcion: "", medida: "", observaciones: "", foto: null },
                comunicacionDeficiencias: { resultado: "CORRECTO", descripcion: "", medida: "", observaciones: "", foto: null }
            }
        },


        radio: {

            estado: "NO_INICIADO",
            unidades: {}
        }
    },


    /* =====================================================
       INCIDENCIAS
       ===================================================== */

    incidencias: [],


    /* =====================================================
       FIRMAS DIGITALES
       ===================================================== */

    firmas: {
        auditor: "",
        trabajador: ""
    },


    /* =====================================================
       FOTOGRAFÍAS
       ===================================================== */

    fotografias: []
};


/* =========================================================
   GENERAR ID AUDITORÍA
   ========================================================= */

function generarIdAuditoria() {

    const ahora = new Date();


    const año =
        ahora.getFullYear();


    const mes =
        String(
            ahora.getMonth() + 1
        ).padStart(2, "0");


    const dia =
        String(
            ahora.getDate()
        ).padStart(2, "0");


    const aleatorio =
        Math.floor(
            Math.random() * 9000
        ) + 1000;


    return (
        `AUD-${año}${mes}${dia}-${aleatorio}`
    );
}


/* =========================================================
   FECHA ACTUAL
   ========================================================= */


function asegurarEstilosDocumentacionFabricante() {
    if (document.getElementById("estilosDocumentacionFabricante")) return;
    const style = document.createElement("style");
    style.id = "estilosDocumentacionFabricante";
    style.textContent = `
        .manufacturer-documentation{margin:10px 0;padding:10px 12px;border-left:4px solid #555;background:#f5f5f5;border-radius:4px;font-size:.92rem;line-height:1.45}
        .manufacturer-documentation.pending{border-left-color:#999}
        .manufacturer-review{margin-top:14px;border:1px solid #bbb}
        .manufacturer-review-table{border:1px solid #ccc;border-radius:4px;overflow:hidden}
        .manufacturer-review-head,.manufacturer-review-row{display:grid;grid-template-columns:minmax(260px,1fr) repeat(5,48px);align-items:center}
        .manufacturer-review-head{background:#eee;font-weight:700;padding:7px}
        .manufacturer-review-row{border-top:1px solid #ddd;padding:7px;column-gap:6px}
        .manufacturer-review-row>label{text-align:center;display:flex;align-items:center;justify-content:center;gap:4px;min-width:0;white-space:nowrap}
        .manufacturer-review-row input{margin:0;flex:0 0 auto}
        .manufacturer-review-meta{margin-top:10px}

        /* Miguel Miranda y PATAchO tienen 3 resultados por control, no 5.
           Se separan sus rejillas para evitar que los radios/etiquetas se monten
           o queden desplazados por la rejilla de IRUDEK (5 columnas). */
        .manufacturer-review-table-mm .manufacturer-review-head,
        .manufacturer-review-table-mm .manufacturer-review-row{
            grid-template-columns:minmax(0,58%) repeat(3,minmax(0,14%));
            align-items:center;
            column-gap:4px;
        }
        .manufacturer-review-table-mm{
            width:100%;
            overflow:hidden;
        }
        .manufacturer-review-table-mm .manufacturer-review-head{
            padding:5px 6px;
            font-size:10px;
            line-height:1.05;
        }
        .manufacturer-review-table-mm .manufacturer-review-head>span{
            min-width:0;
            overflow-wrap:anywhere;
        }
        .manufacturer-review-table-mm .manufacturer-review-head>span:not(:first-child){
            text-align:center;
            white-space:normal;
        }
        .manufacturer-review-table-mm .manufacturer-review-row{
            padding:5px 6px;
        }
        .manufacturer-review-table-mm .manufacturer-review-row>div{
            min-width:0;
            font-size:10.5px;
            line-height:1.15;
            overflow-wrap:anywhere;
        }
        .manufacturer-review-table-mm .manufacturer-review-row>label{
            min-width:0;
            min-height:30px;
            padding:3px 2px;
            border:1px solid #ccc;
            border-radius:3px;
            justify-content:center;
            align-items:center;
            white-space:normal;
            overflow-wrap:anywhere;
            text-align:center;
            font-size:9px;
            line-height:1;
            gap:2px;
        }
        .manufacturer-review-table-mm .manufacturer-review-row>label input[type="radio"]{
            width:13px;
            height:13px;
            margin:0;
            flex:0 0 auto;
        }
        /* PATAchO: rejilla compacta.
           El control ocupa la mayor parte de la fila y los tres resultados
           tienen columnas estrechas e independientes. Se reduce la tipografía
           para que los textos largos no invadan las opciones. */
        .manufacturer-review-table-patacho{
            width:100%;
            overflow:hidden;
        }
        .manufacturer-review-table-patacho .manufacturer-review-head{
            display:grid;
            grid-template-columns:minmax(0,58%) repeat(3,minmax(0,14%));
            align-items:center;
            column-gap:4px;
            padding:5px 6px;
            font-size:10px;
            line-height:1.05;
        }
        .manufacturer-review-table-patacho .manufacturer-review-head>span{
            min-width:0;
            overflow-wrap:anywhere;
        }
        .manufacturer-review-table-patacho .manufacturer-review-head>span:not(:first-child){
            text-align:center;
            white-space:normal;
        }
        .manufacturer-review-table-patacho .manufacturer-review-row{
            display:grid;
            grid-template-columns:minmax(0,58%) repeat(3,minmax(0,14%));
            align-items:center;
            column-gap:4px;
            padding:5px 6px;
        }
        .manufacturer-review-table-patacho .manufacturer-review-row>div{
            min-width:0;
            font-size:10.5px;
            line-height:1.15;
            overflow-wrap:anywhere;
            word-break:normal;
        }
        .manufacturer-review-table-patacho .manufacturer-review-row>label{
            min-width:0;
            min-height:30px;
            padding:3px 2px;
            border:1px solid #ccc;
            border-radius:3px;
            justify-content:center;
            align-items:center;
            white-space:normal;
            overflow-wrap:anywhere;
            text-align:center;
            font-size:9px;
            line-height:1.0;
            gap:2px;
        }
        .manufacturer-review-table-patacho .manufacturer-review-row>label input[type="radio"]{
            width:13px;
            height:13px;
            margin:0;
            flex:0 0 auto;
        }
        @media (max-width: 760px){
            .manufacturer-review-table-patacho .manufacturer-review-head,
            .manufacturer-review-table-patacho .manufacturer-review-row{
                grid-template-columns:minmax(0,52%) repeat(3,minmax(0,16%));
                column-gap:3px;
            }
            .manufacturer-review-table-patacho .manufacturer-review-head{
                font-size:9px;
                padding:4px;
            }
            .manufacturer-review-table-patacho .manufacturer-review-row{
                padding:4px;
            }
            .manufacturer-review-table-patacho .manufacturer-review-row>div{
                font-size:9.5px;
            }
            .manufacturer-review-table-patacho .manufacturer-review-row>label{
                min-height:28px;
                padding:2px 1px;
                font-size:8px;
            }
            .manufacturer-review-table-patacho .manufacturer-review-row>label input[type="radio"]{
                width:12px;
                height:12px;
            }
        }
        @media (max-width: 760px){
            .manufacturer-review-table-mm .manufacturer-review-head,
            .manufacturer-review-table-mm .manufacturer-review-row{
                grid-template-columns:minmax(0,52%) repeat(3,minmax(0,16%));
                column-gap:3px;
            }
            .manufacturer-review-table-mm .manufacturer-review-head{
                font-size:9px;
                padding:4px;
            }
            .manufacturer-review-table-mm .manufacturer-review-row{
                padding:4px;
            }
            .manufacturer-review-table-mm .manufacturer-review-row>div{
                font-size:9.5px;
            }
            .manufacturer-review-table-mm .manufacturer-review-row>label{
                min-height:28px;
                padding:2px 1px;
                font-size:8px;
            }
            .manufacturer-review-table-mm .manufacturer-review-row>label input[type="radio"]{
                width:12px;
                height:12px;
            }
        }
    `;
    document.head.appendChild(style);
}

function obtenerFechaActual() {

    const ahora =
        new Date();


    return ahora
        .toISOString()
        .substring(0, 10);
}


/* =========================================================
   HORA ACTUAL
   ========================================================= */

function obtenerHoraActual() {

    const ahora =
        new Date();


    return ahora
        .toTimeString()
        .substring(0, 5);
}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        asegurarEstilosDocumentacionFabricante();


        const idAuditoria =
            document.getElementById(
                "idAuditoria"
            );


        if (idAuditoria) {

            idAuditoria.value =
                auditoria.id;
        }


        const auditIdHeader =
            document.getElementById(
                "auditIdHeader"
            );


        if (auditIdHeader) {

            auditIdHeader.textContent =
                auditoria.id;
        }


        const fechaAuditoria =
            document.getElementById(
                "fechaAuditoria"
            );


        if (fechaAuditoria) {

            fechaAuditoria.value =
                auditoria.datosGenerales.fecha;
        }


        const horaInicio =
            document.getElementById(
                "horaInicio"
            );


        if (horaInicio) {

            horaInicio.value =
                auditoria.datosGenerales.horaInicio;
        }


        actualizarAplicabilidad();

        inicializarCampoDniNie();
        inicializarBotonDatosGeneralesDashboard();
        inicializarBotonDashboardTodosLosModulos();

    }
);


/* =========================================================
   ACTUALIZAR APLICABILIDAD
   ========================================================= */

function actualizarAplicabilidad() {


    const tipoPersonal =
        document.querySelector(
            'input[name="tipoPersonal"]:checked'
        )?.value || "";


    const actividad =
        document.querySelector(
            'input[name="actividad"]:checked'
        )?.value || "";


    auditoria
        .datosGenerales
        .tipoPersonal =
        tipoPersonal;


    auditoria
        .datosGenerales
        .actividad =
        actividad;


    /* -----------------------------------------------------
       ACTIVIDAD OTRA
       ----------------------------------------------------- */

    const otraContainer =
        document.getElementById(
            "actividadOtraContainer"
        );


    if (otraContainer) {

        if (
            actividad === "OTRA"
        ) {

            otraContainer.classList.remove(
                "hidden"
            );

        } else {

            otraContainer.classList.add(
                "hidden"
            );
        }
    }


    /* -----------------------------------------------------
       RADIO
       ----------------------------------------------------- */

    const cardRadio =
        document.getElementById(
            "cardRadio"
        );


    if (
        actividad === "RADIO"
    ) {

        if (cardRadio) {
            cardRadio.style.display = "flex";
        }

        /* No se borran datos al volver a seleccionar RADIO. */
        if (auditoria.modulos.radio.estado === "NO_APLICA") {
            auditoria.modulos.radio.estado = "NO_INICIADO";
        }

    } else {

        if (cardRadio) {
            cardRadio.style.display = "flex";
        }

        auditoria.modulos.radio.estado = "NO_APLICA";
    }


    actualizarEstadosDashboard();
}


/* =========================================================
   GUARDAR DATOS GENERALES
   ========================================================= */

function guardarDatosGenerales() {


    const auditor =
        document.getElementById(
            "auditor"
        );


    if (auditor) {

        auditoria
            .datosGenerales
            .auditor =
            auditor.value.trim();
    }


    const actividadOtra =
        document.getElementById(
            "actividadOtra"
        );


    if (actividadOtra) {

        auditoria
            .datosGenerales
            .actividadOtra =
            actividadOtra.value.trim();
    }


    const empresa =
        document.getElementById(
            "empresa"
        );


    if (empresa) {

        auditoria
            .datosGenerales
            .empresa =
            empresa.value.trim();
    }


    const proyecto =
        document.getElementById(
            "proyecto"
        );


    if (proyecto) {

        auditoria
            .datosGenerales
            .proyecto =
            proyecto.value.trim();
    }


    const trabajador =
        document.getElementById(
            "trabajador"
        );


    if (trabajador) {

        auditoria
            .datosGenerales
            .trabajador =
            trabajador.value.trim();
    }


    const dniNie =
        document.getElementById(
            "dniNieTrabajador"
        );


    if (dniNie) {

        auditoria
            .datosGenerales
            .dniNie =
            normalizarDniNie(dniNie.value);
    }


    const fechaAuditoria =
        document.getElementById(
            "fechaAuditoria"
        );


    if (fechaAuditoria) {

        auditoria
            .datosGenerales
            .fecha =
            fechaAuditoria.value;
    }


    const horaInicio =
        document.getElementById(
            "horaInicio"
        );


    if (horaInicio) {

        auditoria
            .datosGenerales
            .horaInicio =
            horaInicio.value;
    }


    const direccion =
        document.getElementById(
            "direccion"
        );


    if (direccion) {

        auditoria
            .datosGenerales
            .localizacion
            .direccion =
            direccion.value.trim();
    }


    const poblacion =
        document.getElementById(
            "poblacion"
        );


    if (poblacion) {

        auditoria
            .datosGenerales
            .localizacion
            .poblacion =
            poblacion.value.trim();
    }


    const provincia =
        document.getElementById(
            "provincia"
        );


    if (provincia) {

        auditoria
            .datosGenerales
            .localizacion
            .provincia =
            provincia.value.trim();
    }


    const codigoPostal =
        document.getElementById(
            "codigoPostal"
        );


    if (codigoPostal) {

        auditoria
            .datosGenerales
            .localizacion
            .codigoPostal =
            codigoPostal.value.trim();
    }
}


/* =========================================================
   VALIDAR DATOS GENERALES
   ========================================================= */

function validarDatosGenerales() {

    guardarDatosGenerales();


    if (
        !auditoria
            .datosGenerales
            .auditor
    ) {

        alert(
            "Debe indicar el auditor."
        );

        return false;
    }


    if (
        !auditoria
            .datosGenerales
            .tipoPersonal
    ) {

        alert(
            "Debe seleccionar el tipo de personal."
        );

        return false;
    }


    if (
        !auditoria
            .datosGenerales
            .actividad
    ) {

        alert(
            "Debe seleccionar la actividad."
        );

        return false;
    }


    if (
        auditoria
            .datosGenerales
            .actividad === "OTRA"
        &&
        !auditoria
            .datosGenerales
            .actividadOtra
    ) {

        alert(
            "Debe especificar la actividad."
        );

        return false;
    }


    if (
        !auditoria
            .datosGenerales
            .empresa
    ) {

        alert(
            "Debe indicar la empresa."
        );

        return false;
    }


    if (
        !auditoria
            .datosGenerales
            .trabajador
    ) {

        alert(
            "Debe indicar el trabajador."
        );

        return false;
    }


    const dniNie =
        auditoria
            .datosGenerales
            .dniNie;


    if (
        dniNie &&
        !validarDniNie(dniNie)
    ) {

        alert(
            "El DNI/NIE indicado no es válido. Compruebe el número y la letra."
        );

        const campoDni =
            document.getElementById(
                "dniNieTrabajador"
            );

        if (campoDni) {
            campoDni.focus();
        }

        return false;
    }


    return true;
}


/* =========================================================
   INICIAR AUDITORÍA
   ========================================================= */

function iniciarAuditoria() {

    if (
        !validarDatosGenerales()
    ) {

        return;
    }


    auditoria.estado =
        "EN_CURSO";


    mostrarPantalla(
        "dashboard"
    );


    actualizarDashboard();
}


/* =========================================================
   DNI / NIE ESPAÑOL — VALIDACIÓN
   ========================================================= */

function normalizarDniNie(valor) {

    return String(valor || "")
        .toUpperCase()
        .replace(/[\s-]/g, "");
}


function validarDniNie(valor) {

    const documento =
        normalizarDniNie(valor);

    if (!documento) {
        return false;
    }

    /* DNI: 8 dígitos + letra */
    if (/^\d{8}[A-Z]$/.test(documento)) {

        const numero =
            parseInt(
                documento.substring(0, 8),
                10
            );

        const letras =
            "TRWAGMYFPDXBNJZSQVHLCKE";

        return (
            letras[numero % 23] ===
            documento.charAt(8)
        );
    }

    /* NIE: X/Y/Z + 7 dígitos + letra */
    if (/^[XYZ]\d{7}[A-Z]$/.test(documento)) {

        const prefijo = {
            X: "0",
            Y: "1",
            Z: "2"
        }[documento.charAt(0)];

        const numero =
            parseInt(
                prefijo + documento.substring(1, 8),
                10
            );

        const letras =
            "TRWAGMYFPDXBNJZSQVHLCKE";

        return (
            letras[numero % 23] ===
            documento.charAt(8)
        );
    }

    return false;
}


function inicializarCampoDniNie() {

    const trabajador =
        document.getElementById(
            "trabajador"
        );

    if (!trabajador) {
        return;
    }

    let campo =
        document.getElementById(
            "dniNieTrabajador"
        );

    if (campo) {
        campo.value =
            auditoria.datosGenerales.dniNie || "";
        return;
    }

    const contenedorTrabajador =
        trabajador.closest(".field") ||
        trabajador.parentElement;

    if (!contenedorTrabajador || !contenedorTrabajador.parentElement) {
        return;
    }

    const contenedor =
        document.createElement("div");

    contenedor.className =
        "field";

    contenedor.innerHTML = `
        <label for="dniNieTrabajador">
            DNI/NIE del trabajador
        </label>
        <input
            type="text"
            id="dniNieTrabajador"
            maxlength="9"
            autocomplete="off"
            placeholder="Ej.: 12345678Z / X1234567L"
        >
        <small
            id="dniNieTrabajadorError"
            style="display:block;margin-top:6px;"
        ></small>
    `;

    contenedorTrabajador.parentElement.insertBefore(
        contenedor,
        contenedorTrabajador.nextSibling
    );

    campo =
        document.getElementById(
            "dniNieTrabajador"
        );

    const mensaje =
        document.getElementById(
            "dniNieTrabajadorError"
        );

    campo.value =
        auditoria.datosGenerales.dniNie || "";

    campo.addEventListener(
        "input",
        function () {

            const normalizado =
                normalizarDniNie(this.value);

            this.value =
                normalizado;

            auditoria
                .datosGenerales
                .dniNie =
                normalizado;

            if (!normalizado) {
                mensaje.textContent = "";
                return;
            }

            if (validarDniNie(normalizado)) {
                mensaje.textContent =
                    "✓ DNI/NIE válido.";
                mensaje.style.color = "green";
            } else {
                mensaje.textContent =
                    "DNI/NIE no válido: compruebe el número y la letra.";
                mensaje.style.color = "#b00020";
            }
        }
    );
}


/* =========================================================
   VOLVER A DATOS GENERALES DESDE DASHBOARD
   ========================================================= */

function volverDatosGenerales() {

    guardarDatosGenerales();

    mostrarPantalla(
        "datosGenerales"
    );

    inicializarCampoDniNie();
}


function inicializarBotonDatosGeneralesDashboard() {

    const dashboard =
        document.getElementById(
            "dashboard"
        );

    if (!dashboard) {
        return;
    }

    if (
        document.getElementById(
            "btnDatosGeneralesDashboard"
        )
    ) {
        return;
    }

    const boton =
        document.createElement("button");

    boton.type = "button";
    boton.id =
        "btnDatosGeneralesDashboard";
    boton.className = "btn btn-secondary";
    boton.textContent =
        "← Volver a Datos Generales";
    boton.onclick =
        volverDatosGenerales;
    boton.style.marginBottom = "16px";

    dashboard.insertBefore(
        boton,
        dashboard.firstChild
    );
}


/* =========================================================
   GPS
   ========================================================= */

function obtenerGPS() {

    const status =
        document.getElementById(
            "gpsStatus"
        );


    if (
        !navigator.geolocation
    ) {

        if (status) {

            status.textContent =
                "El navegador no permite geolocalización. Introduzca la dirección manualmente.";
        }


        auditoria
            .datosGenerales
            .localizacion
            .tipo =
            "MANUAL";


        return;
    }


    if (status) {

        status.textContent =
            "Obteniendo ubicación...";
    }


    navigator.geolocation.getCurrentPosition(

        function (position) {


            const lat =
                position
                    .coords
                    .latitude;


            const lon =
                position
                    .coords
                    .longitude;


            auditoria
                .datosGenerales
                .localizacion
                .tipo =
                "GPS";


            auditoria
                .datosGenerales
                .localizacion
                .latitud =
                lat;


            auditoria
                .datosGenerales
                .localizacion
                .longitud =
                lon;


            const latitud =
                document.getElementById(
                    "latitud"
                );


            if (latitud) {

                latitud.textContent =
                    lat.toFixed(6);
            }


            const longitud =
                document.getElementById(
                    "longitud"
                );


            if (longitud) {

                longitud.textContent =
                    lon.toFixed(6);
            }


            if (status) {

                status.textContent =
                    "✓ GPS obtenido. Obteniendo dirección...";
            }

            // Una vez obtenidas las coordenadas, intentamos obtener
            // automáticamente la dirección mediante geocodificación inversa.
            obtenerDireccionDesdeGPS(lat, lon);

        },


        function () {


            auditoria
                .datosGenerales
                .localizacion
                .tipo =
                "MANUAL";


            if (status) {

                status.textContent =
                    "No se pudo obtener la ubicación. Puede introducirla manualmente.";
            }

        },


        {

            enableHighAccuracy:
                true,

            timeout:
                10000,

            maximumAge:
                0
        }
    );
}



/* =========================================================
   GEOCODIFICACIÓN INVERSA GPS
   ========================================================= */

async function obtenerDireccionDesdeGPS(latitud, longitud) {

    const status =
        document.getElementById(
            "gpsStatus"
        );

    try {

        const url =
            "https://nominatim.openstreetmap.org/reverse" +
            "?format=jsonv2" +
            "&lat=" + encodeURIComponent(latitud) +
            "&lon=" + encodeURIComponent(longitud) +
            "&zoom=18" +
            "&addressdetails=1" +
            "&accept-language=es";

        const respuesta =
            await fetch(
                url,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

        if (!respuesta.ok) {
            throw new Error(
                "No se pudo consultar la dirección (HTTP " +
                respuesta.status +
                ")."
            );
        }

        const datos =
            await respuesta.json();

        if (!datos || !datos.address) {
            throw new Error(
                "No se encontró una dirección para estas coordenadas."
            );
        }

        const address =
            datos.address;

        const localizacion =
            auditoria
                .datosGenerales
                .localizacion;

        /*
         * Construimos la dirección de forma legible.
         * road: calle/carretera; house_number: número.
         * Si no existe road, usamos pedestrian o display_name.
         */
        let direccion = "";

        if (address.road) {
            direccion = address.road;

            if (address.house_number) {
                direccion +=
                    ", " +
                    address.house_number;
            }
        } else if (address.pedestrian) {
            direccion = address.pedestrian;

            if (address.house_number) {
                direccion +=
                    ", " +
                    address.house_number;
            }
        } else if (datos.display_name) {
            direccion =
                datos.display_name;
        }

        /*
         * Nominatim puede devolver city, town, village,
         * municipality o hamlet según el lugar.
         */
        const poblacion =
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.hamlet ||
            "";

        /*
         * En España "state" suele corresponder a la comunidad
         * autónoma. Preferimos county/province cuando estén disponibles
         * para cumplimentar el campo Provincia.
         */
        const provincia =
            address.province ||
            address.county ||
            address.state ||
            "";

        const codigoPostal =
            address.postcode ||
            "";

        // Solo sustituimos los datos que realmente se han encontrado.
        if (direccion) {
            localizacion.direccion = direccion;
        }

        if (poblacion) {
            localizacion.poblacion = poblacion;
        }

        if (provincia) {
            localizacion.provincia = provincia;
        }

        if (codigoPostal) {
            localizacion.codigoPostal = codigoPostal;
        }

        // Actualizamos inmediatamente los campos visibles.
        const campoDireccion =
            document.getElementById(
                "direccion"
            );

        if (campoDireccion && direccion) {
            campoDireccion.value = direccion;
        }

        const campoPoblacion =
            document.getElementById(
                "poblacion"
            );

        if (campoPoblacion && poblacion) {
            campoPoblacion.value = poblacion;
        }

        const campoProvincia =
            document.getElementById(
                "provincia"
            );

        if (campoProvincia && provincia) {
            campoProvincia.value = provincia;
        }

        const campoCodigoPostal =
            document.getElementById(
                "codigoPostal"
            );

        if (campoCodigoPostal && codigoPostal) {
            campoCodigoPostal.value = codigoPostal;
        }

        if (status) {
            status.textContent =
                "✓ GPS obtenido y dirección cumplimentada automáticamente.";
        }

    } catch (error) {

        console.error(
            "Error en la geocodificación inversa:",
            error
        );

        // Las coordenadas siguen siendo válidas aunque falle
        // la consulta de dirección.
        if (status) {
            status.textContent =
                "✓ GPS obtenido. No se pudo obtener automáticamente la dirección; puede introducirla manualmente.";
        }
    }
}


/* =========================================================
   UBICACIÓN MANUAL
   ========================================================= */

function activarUbicacionManual() {

    auditoria
        .datosGenerales
        .localizacion
        .tipo =
        "MANUAL";


    const status =
        document.getElementById(
            "gpsStatus"
        );


    if (status) {

        status.textContent =
            "Modo de ubicación manual.";
    }
}/* =========================================================
   DASHBOARD
   ========================================================= */

function actualizarDashboard() {

    const datos =
        auditoria.datosGenerales;


    const identificacion =
        document.getElementById(
            "dashboardIdentification"
        );


    if (identificacion) {

        identificacion.textContent =
            `${auditoria.id} · ${datos.empresa} · ${datos.trabajador}`;
    }


    const contadorIncidencias =
        document.getElementById(
            "incidentCount"
        );


    if (contadorIncidencias) {

        contadorIncidencias.textContent =
            auditoria.incidencias.length;
    }


    actualizarEstadosDashboard();
}


/* =========================================================
   ESTADOS DEL DASHBOARD
   ========================================================= */

function actualizarEstadosDashboard() {


    actualizarEstadoModulo(
        "Vehiculo",
        auditoria
            .modulos
            .vehiculo
            .estado
    );


    actualizarEstadoModulo(
        "Extintor",
        auditoria
            .modulos
            .extintor
            .estado
    );


    actualizarEstadoModulo(
        "Escaleras",
        auditoria
            .modulos
            .escaleras
            .estado
    );


    actualizarEstadoModulo(
        "Epis",
        episEsAplicable()
            ? auditoria.modulos.epis.estado
            : "NO_APLICA"
    );


    actualizarEstadoModulo(
        "Botiquin",
        auditoria
            .modulos
            .botiquin
            .estado
    );


    actualizarEstadoModulo(
        "Radio",
        auditoria
            .modulos
            .radio
            .estado
    );
}


/* =========================================================
   ACTUALIZAR ESTADO MÓDULO
   ========================================================= */

function actualizarEstadoModulo(
    nombre,
    estado
) {

    const elemento =
        document.getElementById(
            "status" + nombre
        );


    if (!elemento) {

        return;
    }


    switch (estado) {


        case "NO_INICIADO":

            elemento.textContent =
                "NO INICIADO";

            break;


        case "EN_CURSO":

            elemento.textContent =
                "EN CURSO";

            break;


        case "COMPLETADO":

            elemento.textContent =
                "COMPLETADO";

            break;


        case "NO_APLICA":

            elemento.textContent =
                "NO APLICA";

            break;


        default:

            elemento.textContent =
                estado;
    }


    elemento.className =
        "status";


    switch (estado) {


        case "NO_INICIADO":

            elemento.classList.add(
                "status-gray"
            );

            break;


        case "EN_CURSO":

            elemento.classList.add(
                "status-orange"
            );

            break;


        case "COMPLETADO":

            elemento.classList.add(
                "status-green"
            );

            break;


        case "NO_APLICA":

            elemento.classList.add(
                "status-gray"
            );

            break;
    }
}


/* =========================================================
   MOSTRAR PANTALLA
   ========================================================= */

function mostrarPantalla(
    id
) {

    document
        .querySelectorAll(
            ".screen"
        )
        .forEach(
            pantalla => {

                pantalla.classList.remove(
                    "active"
                );
            }
        );


    const pantalla =
        document.getElementById(
            id
        );


    if (pantalla) {

        pantalla.classList.add(
            "active"
        );
    }
}


/* =========================================================
   BOTÓN DASHBOARD EN TODOS LOS MÓDULOS
   ========================================================= */

function asegurarBotonDashboardModulo() {
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;

    const botonesDashboard = Array.from(contenido.querySelectorAll("button")).filter(btn => {
        const texto = (btn.textContent || "").trim().toLowerCase();
        return texto === "volver al dashboard";
    });

    let top = contenido.querySelector("[data-boton-dashboard-modulo='top']");
    let bottom = contenido.querySelector("[data-boton-dashboard-modulo='bottom']");

    // Reutilizamos el último botón existente del módulo como botón inferior.
    // Así evitamos duplicados en Vehículo, Escaleras y Resumen.
    if (!bottom) {
        const candidatos = botonesDashboard.filter(btn => {
            if (btn === top) return false;
            const contenedorMarcado = btn.closest("[data-boton-dashboard-modulo]");
            return !contenedorMarcado;
        });
        if (candidatos.length) {
            bottom = candidatos[candidatos.length - 1];
            bottom.setAttribute("data-boton-dashboard-modulo", "bottom");
        }
    }

    // Elimina botones Dashboard adicionales que no sean los dos oficiales.
    botonesDashboard.forEach(btn => {
        if (btn !== top && btn !== bottom) {
            const contenedor = btn.closest("[data-boton-dashboard-modulo]");
            if (!contenedor || (contenedor !== top && contenedor !== bottom)) {
                btn.remove();
            }
        }
    });

    if (!top) {
        const barra = document.createElement("div");
        barra.setAttribute("data-boton-dashboard-modulo", "top");
        barra.style.cssText = "display:flex;justify-content:flex-start;gap:10px;margin:0 0 12px 0;";
        barra.innerHTML = `<button type="button" class="btn-secondary secondary-button" onclick="volverDashboard()">Volver al Dashboard</button>`;
        contenido.insertBefore(barra, contenido.firstChild);
        top = barra;
    }

    if (!bottom) {
        const barra = document.createElement("div");
        barra.setAttribute("data-boton-dashboard-modulo", "bottom");
        barra.style.cssText = "display:flex;justify-content:flex-start;gap:10px;margin:16px 0 0 0;";
        barra.innerHTML = `<button type="button" class="btn-secondary secondary-button" onclick="volverDashboard()">Volver al Dashboard</button>`;
        contenido.appendChild(barra);
    }
}

function inicializarBotonDashboardTodosLosModulos() {
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido || contenido.dataset.dashboardObserverInicializado === "true") return;

    contenido.dataset.dashboardObserverInicializado = "true";
    asegurarBotonDashboardModulo();

    const observer = new MutationObserver(() => {
        asegurarBotonDashboardModulo();
    });
    observer.observe(contenido, { childList: true, subtree: true });
}


/* =========================================================
   VOLVER DASHBOARD
   ========================================================= */

function volverDashboard() {

    mostrarPantalla(
        "dashboard"
    );


    actualizarDashboard();
}


/* =========================================================
   RESUMEN / FINALIZAR — FASE 4
   ========================================================= */

function obtenerDefinicionModulosResumen() {
    const actividad = auditoria.datosGenerales.actividad || "";
    return [
        { clave: "vehiculo", nombre: "Vehículo", estado: auditoria.modulos.vehiculo.estado, aplicable: true },
        { clave: "extintor", nombre: "Extintor", estado: auditoria.modulos.extintor.estado, aplicable: true },
        { clave: "escaleras", nombre: "Escaleras", estado: auditoria.modulos.escaleras.estado, aplicable: true },
        { clave: "epis", nombre: "EPIs", estado: episEsAplicable() ? auditoria.modulos.epis.estado : "NO_APLICA", aplicable: episEsAplicable() },
        { clave: "botiquin", nombre: "Botiquín", estado: auditoria.modulos.botiquin.estado, aplicable: true },
        { clave: "radio", nombre: "RADIO — EPIs específicos", estado: actividad === "RADIO" ? auditoria.modulos.radio.estado : "NO_APLICA", aplicable: actividad === "RADIO" }
    ];
}

function textoEstadoResumen(estado) {
    const mapa = {
        NO_INICIADO: "NO INICIADO",
        EN_CURSO: "EN CURSO",
        COMPLETADO: "COMPLETADO",
        NO_APLICA: "NO APLICA"
    };
    return mapa[estado] || estado || "NO INICIADO";
}

function claseEstadoResumen(estado) {
    if (estado === "COMPLETADO") return "status-green";
    if (estado === "EN_CURSO") return "status-orange";
    return "status-gray";
}

function escaparValorResumen(valor) {
    return escapeHtml(valor == null ? "" : String(valor));
}

function normalizarEstadoElemento(estado) {
    return ["ACTIVO", "NO_APLICA", "NO_DISPONIBLE"].includes(estado) ? estado : "ACTIVO";
}
function textoEstadoElemento(estado) {
    return ({ACTIVO:"REVISIÓN / DISPONIBLE",NO_APLICA:"NO APLICA",NO_DISPONIBLE:"NO DISPONIBLE"})[normalizarEstadoElemento(estado)];
}
function estiloEstadoElemento(estado) {
    const e=normalizarEstadoElemento(estado);
    return e==="NO_APLICA"?"background:#e8e8e8;color:#444;border-color:#999;":e==="NO_DISPONIBLE"?"background:#f7d7d7;color:#8a1f1f;border-color:#c44;":"background:#dff3e3;color:#176b2c;border-color:#4b9b61;";
}
function renderizarSelectorEstadoElemento(estado,llamada,nombre){
    const e=normalizarEstadoElemento(estado); const base="border:1px solid #aaa;border-radius:7px;padding:7px 10px;margin:3px;cursor:pointer;font-weight:600;";
    const b=(v,t)=>`<button type="button" class="secondary-button" style="${base}${e===v?estiloEstadoElemento(v):"background:#fff;color:#333;"}" onclick="${llamada}'${v}')">${t}</button>`;
    return `<div class="card" style="margin-top:8px;border:1px solid #ddd;"><div style="font-weight:700;margin-bottom:4px;">Estado del elemento: ${escapeHtml(nombre||"Elemento")}</div><div class="vehicle-help">Seleccione <strong>NO APLICA</strong> cuando por el puesto de trabajo no sea necesario este elemento. Seleccione <strong>NO DISPONIBLE</strong> cuando sea obligatorio y no se disponga de él; se generará automáticamente una inconformidad.</div><div class="vehicle-actions" style="flex-wrap:wrap;align-items:center;">${b("ACTIVO","✓ REVISAR / DISPONIBLE")}${b("NO_APLICA","NO APLICA")}${b("NO_DISPONIBLE","⚠ NO DISPONIBLE")}</div></div>`;
}
function crearIncidenciaNoDisponibleEpi(claveEpi,unidad){
    const def=obtenerEstructuraEpis()[claveEpi]; if(!def||!unidad)return null; const id="EPIS_NO_DISPONIBLE_"+claveEpi+(unidad.id?"_"+unidad.id:""); let i=auditoria.incidencias.find(x=>x.id===id); const nombre=def.nombre+(def.multiple?" #"+(unidad.numero||""):""); const descripcion="El EPI "+nombre+" es obligatorio para el puesto de trabajo y NO está disponible."; const medida="Proporcionar el EPI obligatorio antes de realizar los trabajos y no iniciar la tarea sin el equipo requerido."; if(!i){i={id,origen:"EPIS_DISPONIBILIDAD",modulo:"EPIs",controlClave:claveEpi,unidadId:unidad.id||null,control:nombre,resultado:"NO_DISPONIBLE",descripcion,medida,observaciones:"Inconformidad generada automáticamente por falta de disponibilidad del EPI.",fotografias:[],estado:"ABIERTA"};auditoria.incidencias.push(i);}else{i.resultado="NO_DISPONIBLE";i.descripcion=descripcion;i.medida=medida;i.estado="ABIERTA";} return i;
}
function eliminarIncidenciaNoDisponibleEpi(claveEpi,unidad){if(!unidad)return;const id="EPIS_NO_DISPONIBLE_"+claveEpi+(unidad.id?"_"+unidad.id:"");auditoria.incidencias=auditoria.incidencias.filter(i=>i.id!==id);}
function limpiarIncidenciasElementoEpi(claveEpi,unidad){
    const def=obtenerEstructuraEpis()[claveEpi]; if(!def||!unidad)return;
    const unidadId=unidad.id;
    auditoria.incidencias=auditoria.incidencias.filter(i=>{
        if(i.id==="EPIS_NO_DISPONIBLE_"+claveEpi+(unidadId?"_"+unidadId:"")) return true;
        if(i.origen!=="EPIS") return true;
        if(i.controlClave!==claveEpi) return true;
        if(def.multiple) return i.unidadId!==unidadId;
        return !!i.unidadId;
    });
    Object.values(unidad.subcontroles||{}).forEach(sub=>{sub.incidenciaId=null;});
}
function cambiarEstadoElementoEpi(claveEpi,estado,idUnidad){const control=auditoria.modulos.epis.controles[claveEpi];if(!control)return;const def=obtenerEstructuraEpis()[claveEpi];const unidad=def&&def.multiple?(control.unidades||{})[idUnidad]:control;if(!unidad)return;unidad.estadoElemento=normalizarEstadoElemento(estado);if(unidad.estadoElemento!=="ACTIVO") limpiarIncidenciasElementoEpi(claveEpi,unidad);if(unidad.estadoElemento==="NO_DISPONIBLE")crearIncidenciaNoDisponibleEpi(claveEpi,unidad);else eliminarIncidenciaNoDisponibleEpi(claveEpi,unidad);auditoria.modulos.epis.estado="EN_CURSO";renderizarModuloEpis();actualizarDashboard();}
function crearIncidenciaNoDisponibleRadio(id){const u=auditoria.modulos.radio.unidades[id];if(!u)return null;const def=obtenerEstructuraRadio()[u.tipo];if(!def)return null;const iid="RADIO_NO_DISPONIBLE_"+id;let i=auditoria.incidencias.find(x=>x.id===iid);const nombre=(def.nombre||u.tipo)+(def.multiple?" #"+(u.numero||""):"");const descripcion="El equipo/EPI específico de RADIO "+nombre+" es obligatorio para el puesto de trabajo y NO está disponible.";const medida="Proporcionar el equipo/EPI obligatorio antes de realizar los trabajos y no iniciar la tarea sin el equipo requerido.";if(!i){i={id:iid,origen:"RADIO_DISPONIBILIDAD",modulo:"RADIO — EPIs específicos",controlClave:u.tipo,unidadId:id,control:nombre,resultado:"NO_DISPONIBLE",descripcion,medida,observaciones:"Inconformidad generada automáticamente por falta de disponibilidad del equipo/EPI de RADIO.",fotografias:[],estado:"ABIERTA"};auditoria.incidencias.push(i);}else{i.resultado="NO_DISPONIBLE";i.descripcion=descripcion;i.medida=medida;i.estado="ABIERTA";}return i;}
function eliminarIncidenciaNoDisponibleRadio(id){auditoria.incidencias=auditoria.incidencias.filter(i=>i.id!=="RADIO_NO_DISPONIBLE_"+id);}
function limpiarIncidenciasElementoRadio(id){const u=auditoria.modulos.radio.unidades[id];if(!u)return;auditoria.incidencias=auditoria.incidencias.filter(i=>!(i.origen==="RADIO_EPIS"&&i.unidadId===id));Object.values(u.subcontroles||{}).forEach(sub=>{sub.incidenciaId=null;});}
function cambiarEstadoElementoRadio(id,estado){const u=auditoria.modulos.radio.unidades[id];if(!u)return;u.estadoElemento=normalizarEstadoElemento(estado);if(u.estadoElemento!=="ACTIVO") limpiarIncidenciasElementoRadio(id);if(u.estadoElemento==="NO_DISPONIBLE")crearIncidenciaNoDisponibleRadio(id);else eliminarIncidenciaNoDisponibleRadio(id);auditoria.modulos.radio.estado="EN_CURSO";renderizarModuloRadio();actualizarDashboard();}

function obtenerResumenEpis() {
    const resultado = [];
    if (!episEsAplicable()) return resultado;
    inicializarEpis();
    const estructura = obtenerEstructuraEpis();
    Object.keys(estructura).forEach(claveEpi => {
        const def = estructura[claveEpi];
        const control = auditoria.modulos.epis.controles[claveEpi];
        if (!control) return;
        const unidades = def.multiple ? Object.values(control.unidades || {}) : [control];
        unidades.forEach((unidad, indice) => {
            const estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
            const marca = unidad.campos && unidad.campos.marca || "";
            const modelo = unidad.campos && unidad.campos.modelo || "";
            const identificacion = unidad.campos && (unidad.campos.numeroEpi || unidad.campos.identificacion || unidad.campos.numeroSerie || unidad.campos.descripcionElemento) || "";
            const config = obtenerConfiguracionRevisionFabricante(marca, claveEpi);
            inicializarRevisionFabricante(unidad, config);
            // Recalcular siempre el veredicto antes de construir el resumen/PDF.
            // Esto evita que el informe dependa de si el auditor ha vuelto a
            // abrir el elemento después de marcar los controles.
            if (estadoElemento === "ACTIVO") sincronizarVeredictoEpi(claveEpi, unidad, true);
            const revision = unidad.revisionFabricante;
            const controlesGenerales = Object.values(unidad.subcontroles || {});
            const controlesFabricante = revision && revision.controles ? Object.values(revision.controles) : [];
            const controles = controlesGenerales.concat(controlesFabricante);
            const incorrectos = controles.filter(c => c && c.resultado && ["INCORRECTO", "NO_OK", "M", "R", "MALO", "NO_APTO"].includes(c.resultado)).length;
            let resultadoEpi = "";
            if (estadoElemento === "NO_APLICA") resultadoEpi = "NO APLICA";
            else if (estadoElemento === "NO_DISPONIBLE") resultadoEpi = "NO DISPONIBLE";
            else resultadoEpi = revision && revision.resultado ? revision.resultado : obtenerEstadoAutomaticoEpi(claveEpi, unidad);
            resultado.push({
                nombre: def.nombre + (def.multiple ? " #" + (unidad.numero || indice + 1) : ""),
                estadoElemento,
                marca, modelo, identificacion,
                fabricante: revision && revision.fabricante ? revision.fabricante : "",
                resultado: resultadoEpi,
                controles: controles.length,
                incorrectos,
                tienePlantilla: !!config
            });
        });
    });
    return resultado;
}

function obtenerResumenRadio() {
    const resultado = [];
    const radio = auditoria.modulos.radio;
    Object.values(radio.unidades || {}).forEach(unidad => {
        const def = obtenerEstructuraRadio()[unidad.tipo];
        if (!def) return;
        const marca = unidad.campos && unidad.campos.marca || "";
        const controles = Object.values(unidad.revisionFabricante && unidad.revisionFabricante.controles || {});
        resultado.push({
            nombre: (def.nombre || unidad.tipo) + (def.multiple ? " #" + (unidad.numero || "") : ""),
            estadoElemento: normalizarEstadoElemento(unidad.estadoElemento),
            marca,
            modelo: unidad.campos && unidad.campos.modelo || "",
            identificacion: unidad.campos && (unidad.campos.numeroSerie || unidad.campos.identificacion || unidad.campos.descripcionElemento) || "",
            resultado: (normalizarEstadoElemento(unidad.estadoElemento) === "NO_APLICA")
                ? "NO APLICA"
                : (normalizarEstadoElemento(unidad.estadoElemento) === "NO_DISPONIBLE")
                    ? "NO DISPONIBLE"
                    : (unidad.revisionFabricante && unidad.revisionFabricante.resultado || ""),
            controles: controles.length,
            incorrectos: controles.filter(c => c && ["INCORRECTO", "NO_OK", "R", "M", "MALO"].includes(c.resultado)).length
        });
    });
    return resultado;
}

function obtenerResumenEscaleras() {
    const e = auditoria.modulos.escaleras;
    return Array.isArray(e.unidades) ? e.unidades.map((u, i) => ({
        nombre: "Escalera #" + (u.numero || i + 1),
        tipo: u.tipo || "",
        fabricante: u.datos && u.datos.fabricante || "",
        modelo: u.datos && u.datos.modelo || "",
        identificacion: u.datos && u.datos.identificacion || "",
        estado: u.estado || "NO_INICIADO",
        incorrectos: Object.values(u.controles || {}).filter(c => c && c.resultado === "INCORRECTO").length,
        fotografiasIdentificacion: u.fotografiasIdentificacion || {}
    })) : [];
}

function obtenerResumenIncidencias() {
    return Array.isArray(auditoria.incidencias) ? auditoria.incidencias : [];
}

function inicializarFirmasAuditoria() {
    if (!auditoria.firmas || typeof auditoria.firmas !== "object") auditoria.firmas = {};
    if (typeof auditoria.firmas.auditor !== "string") auditoria.firmas.auditor = "";
    if (typeof auditoria.firmas.trabajador !== "string") auditoria.firmas.trabajador = "";
}

function configurarCanvasFirmaAuditoria(idCanvas, claveFirma) {
    const canvas = document.getElementById(idCanvas);
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = Math.max(1, Math.round(rect.width * ratio));
    canvas.height = Math.max(1, Math.round(rect.height * ratio));
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111";
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, rect.width, rect.height);

    const data = auditoria.firmas && auditoria.firmas[claveFirma];
    if (data) {
        const imagen = new Image();
        imagen.onload = () => ctx.drawImage(imagen, 0, 0, rect.width, rect.height);
        imagen.src = data;
    }

    let dibujando = false;
    let huboTrazo = false;
    const posicion = ev => {
        const r = canvas.getBoundingClientRect();
        const punto = ev.touches ? ev.touches[0] : ev;
        return { x: punto.clientX - r.left, y: punto.clientY - r.top };
    };
    const comenzar = ev => { ev.preventDefault(); dibujando = true; huboTrazo = true; const p = posicion(ev); ctx.beginPath(); ctx.moveTo(p.x, p.y); };
    const mover = ev => { if (!dibujando) return; ev.preventDefault(); const p = posicion(ev); ctx.lineTo(p.x, p.y); ctx.stroke(); };
    const terminar = ev => { if (!dibujando) return; ev.preventDefault(); dibujando = false; if (huboTrazo) auditoria.firmas[claveFirma] = canvas.toDataURL("image/png"); };
    canvas.onmousedown = comenzar;
    canvas.onmousemove = mover;
    canvas.onmouseup = terminar;
    canvas.onmouseleave = terminar;
    canvas.ontouchstart = comenzar;
    canvas.ontouchmove = mover;
    canvas.ontouchend = terminar;
}

function limpiarFirmaAuditoria(claveFirma, idCanvas) {
    inicializarFirmasAuditoria();
    auditoria.firmas[claveFirma] = "";
    const canvas = document.getElementById(idCanvas);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width / ratio, canvas.height / ratio);
}

function resumenTieneFirmas() {
    inicializarFirmasAuditoria();
    return !!auditoria.firmas.auditor && !!auditoria.firmas.trabajador;
}

function validarRevisionesEspecificasAntesDeFinalizar() {
    const pendientes = [];
    if (episEsAplicable()) {
        inicializarEpis();
        const estructura = obtenerEstructuraEpis();
        Object.keys(estructura).forEach(claveEpi => {
            const def = estructura[claveEpi];
            const control = auditoria.modulos.epis.controles[claveEpi];
            if (!control) return;
            const unidades = def.multiple ? Object.values(control.unidades || {}) : [control];
            unidades.forEach((unidad, idx) => {
                unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
                if (unidad.estadoElemento !== "ACTIVO") return;
                const marca = unidad.campos && unidad.campos.marca || "";
                const config = obtenerConfiguracionRevisionFabricante(marca, claveEpi);
                if (!config) return;
                inicializarRevisionFabricante(unidad, config);
                const rev = unidad.revisionFabricante;
                (config.controles || []).forEach(item => {
                    const c = rev.controles && rev.controles[item[0]];
                    if (!c || !c.resultado) pendientes.push(def.nombre + (def.multiple ? " #" + (unidad.numero || idx + 1) : "") + " — " + item[0]);
                });
                if (!rev.resultado) pendientes.push(def.nombre + (def.multiple ? " #" + (unidad.numero || idx + 1) : "") + " — veredicto de revisión");
            });
        });
    }
    if ((auditoria.datosGenerales.actividad || "") === "RADIO") {
        Object.values(auditoria.modulos.radio.unidades || {}).forEach(unidad => {
            unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
            if (unidad.estadoElemento !== "ACTIVO") return;
            const config = obtenerConfiguracionPlantillaRadio(unidad);
            if (!config) return;
            inicializarRevisionFabricante(unidad, config);
            const rev = unidad.revisionFabricante;
            (config.controles || []).forEach(item => {
                const c = rev.controles && rev.controles[item[0]];
                if (!c || !c.resultado) pendientes.push((obtenerEstructuraRadio()[unidad.tipo] || {}).nombre + " — " + item[0]);
            });
            if (!rev.resultado) pendientes.push((obtenerEstructuraRadio()[unidad.tipo] || {}).nombre + " — veredicto de revisión");
        });
    }
    return pendientes;
}

function validarAuditoriaAntesDeFinalizar() {
    const pendientes = [];
    const modulos = obtenerDefinicionModulosResumen();
    modulos.forEach(m => {
        if (m.aplicable && m.estado !== "COMPLETADO" && m.estado !== "NO_APLICA") pendientes.push(m.nombre + " → " + textoEstadoResumen(m.estado));
    });
    pendientes.push(...validarRevisionesEspecificasAntesDeFinalizar());
    if (!resumenTieneFirmas()) pendientes.push("Faltan las dos firmas obligatorias: auditor y trabajador/auditado.");
    return pendientes;
}

function finalizarAuditoriaDesdeResumen() {
    guardarDatosGenerales();
    const pendientes = validarAuditoriaAntesDeFinalizar();
    if (pendientes.length) {
        alert("No se puede finalizar todavía.\n\n" + pendientes.map((p, i) => (i + 1) + ". " + p).join("\n"));
        renderizarResumenFinalizar();
        return;
    }
    auditoria.estado = "FINALIZADA";
    auditoria.fechaFinalizacion = obtenerFechaActual();
    auditoria.horaFinalizacion = obtenerHoraActual();
    auditoria.finalizada = true;
    actualizarDashboard();
    renderizarResumenFinalizar();
    alert("Auditoría finalizada correctamente. ID: " + auditoria.id);
}

function renderizarResumenFinalizar() {
    inicializarFirmasAuditoria();
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;
    const datos = auditoria.datosGenerales;
    const modulos = obtenerDefinicionModulosResumen();
    const incidencias = obtenerResumenIncidencias();
    const epis = obtenerResumenEpis();
    const radio = obtenerResumenRadio();
    const escaleras = obtenerResumenEscaleras();
    const fin = auditoria.estado === "FINALIZADA";

    const estadoHtml = modulos.map(m => `<div class="card" style="padding:12px;margin:0 0 10px 0;"><div style="display:flex;justify-content:space-between;gap:12px;align-items:center;"><strong>${escaparValorResumen(m.nombre)}</strong><span class="status ${claseEstadoResumen(m.estado)}">${escaparValorResumen(textoEstadoResumen(m.estado))}</span></div></div>`).join("");

    const datosHtml = `<div class="form-grid">
        <div><strong>ID auditoría:</strong><br>${escaparValorResumen(auditoria.id)}</div>
        <div><strong>Fecha:</strong><br>${escaparValorResumen(datos.fecha)}</div>
        <div><strong>Hora inicio:</strong><br>${escaparValorResumen(datos.horaInicio)}</div>
        <div><strong>Auditor:</strong><br>${escaparValorResumen(datos.auditor)}</div>
        <div><strong>Empresa:</strong><br>${escaparValorResumen(datos.empresa)}</div>
        <div><strong>Proyecto:</strong><br>${escaparValorResumen(datos.proyecto)}</div>
        <div><strong>Trabajador:</strong><br>${escaparValorResumen(datos.trabajador)}</div>
        <div><strong>DNI/NIE:</strong><br>${escaparValorResumen(datos.dniNie)}</div>
        <div><strong>Actividad:</strong><br>${escaparValorResumen(datos.actividad === "OTRA" ? datos.actividadOtra : datos.actividad)}</div>
        <div><strong>Estado auditoría:</strong><br>${fin ? "FINALIZADA" : "BORRADOR"}</div>
    </div>`;

    const epiHtml = epis.length ? `<div class="table-responsive"><table style="width:100%;border-collapse:collapse;"><thead><tr><th style="text-align:left;padding:6px;">EPI</th><th>Marca</th><th>Modelo</th><th>Identificación</th><th>Controles</th><th>Veredicto</th></tr></thead><tbody>${epis.map(e => `<tr><td style="padding:6px;">${escaparValorResumen(e.nombre)}</td><td>${escaparValorResumen(e.marca)}</td><td>${escaparValorResumen(e.modelo)}</td><td>${escaparValorResumen(e.identificacion)}</td><td>${e.controles}</td><td>${escaparValorResumen(e.resultado || "Pendiente")}</td></tr>`).join("")}</tbody></table></div>` : `<p>No hay elementos de EPIs registrados.</p>`;
    const radioHtml = radio.length ? `<div class="table-responsive"><table style="width:100%;border-collapse:collapse;"><thead><tr><th style="text-align:left;padding:6px;">Equipo</th><th>Marca</th><th>Modelo</th><th>Identificación</th><th>Veredicto</th></tr></thead><tbody>${radio.map(e => `<tr><td style="padding:6px;">${escaparValorResumen(e.nombre)}</td><td>${escaparValorResumen(e.marca)}</td><td>${escaparValorResumen(e.modelo)}</td><td>${escaparValorResumen(e.identificacion)}</td><td>${escaparValorResumen(e.resultado || "Pendiente")}</td></tr>`).join("")}</tbody></table></div>` : `<p>No hay elementos específicos de RADIO registrados.</p>`;
    const escHtml = escaleras.length ? `<div class="table-responsive"><table style="width:100%;border-collapse:collapse;"><thead><tr><th style="text-align:left;padding:6px;">Escalera</th><th>Tipo</th><th>Fabricante</th><th>Modelo</th><th>Identificación</th><th>Estado</th></tr></thead><tbody>${escaleras.map(e => `<tr><td style="padding:6px;">${escaparValorResumen(e.nombre)}</td><td>${escaparValorResumen(e.tipo)}</td><td>${escaparValorResumen(e.fabricante)}</td><td>${escaparValorResumen(e.modelo)}</td><td>${escaparValorResumen(e.identificacion)}</td><td>${escaparValorResumen(textoEstadoResumen(e.estado))}</td></tr>`).join("")}</tbody></table></div>` : `<p>No hay escaleras registradas.</p>`;
    const incHtml = incidencias.length ? `<div class="table-responsive"><table style="width:100%;border-collapse:collapse;"><thead><tr><th>ID</th><th style="text-align:left;padding:6px;">Elemento</th><th>Descripción</th><th>Medida correctora</th><th>Estado</th><th>Fotos</th></tr></thead><tbody>${incidencias.map(i => `<tr><td>${escaparValorResumen(i.id)}</td><td style="padding:6px;">${escaparValorResumen(i.control || i.subcontrol || i.modulo || "")}</td><td>${escaparValorResumen(i.descripcion)}</td><td>${escaparValorResumen(i.medida)}</td><td>${escaparValorResumen(i.estado || "ABIERTA")}</td><td>${Array.isArray(i.fotografias) ? i.fotografias.length : 0}</td></tr>`).join("")}</tbody></table></div>` : `<p>No hay incidencias registradas.</p>`;

    contenido.innerHTML = `<div class="card"><h3>Resumen de la auditoría</h3>${datosHtml}</div>
        <div class="card"><h3>Estado de módulos</h3>${estadoHtml}</div>
        <div class="card"><h3>EPIs y revisiones específicas</h3>${epiHtml}</div>
        <div class="card"><h3>RADIO — EPIs específicos</h3>${radioHtml}</div>
        <div class="card"><h3>Escaleras</h3>${escHtml}</div>
        <div class="card"><h3>Incidencias (${incidencias.length})</h3>${incHtml}</div>
        <div class="card"><h3>Firmas digitales</h3>
            <div style="display:grid;grid-template-columns:repeat(2,minmax(280px,1fr));gap:20px;">
                <div><strong>Firma del auditor *</strong><canvas id="firmaAuditorCanvas" width="600" height="180" style="width:100%;height:180px;border:1px solid #999;background:#fff;touch-action:none;"></canvas><button type="button" class="secondary-button" onclick="limpiarFirmaAuditoria('auditor','firmaAuditorCanvas')">Borrar firma</button></div>
                <div><strong>Firma del trabajador/auditado *</strong><canvas id="firmaTrabajadorCanvas" width="600" height="180" style="width:100%;height:180px;border:1px solid #999;background:#fff;touch-action:none;"></canvas><button type="button" class="secondary-button" onclick="limpiarFirmaAuditoria('trabajador','firmaTrabajadorCanvas')">Borrar firma</button></div>
            </div>
            <small>Las firmas son obligatorias para finalizar la auditoría.</small>
        </div>
        <div class="card" style="display:flex;gap:10px;flex-wrap:wrap;">
            <button type="button" class="secondary-button" onclick="volverDashboard()">Volver al Dashboard</button>
            ${fin ? `<button type="button" class="primary-button" disabled>Auditoría FINALIZADA · ${escaparValorResumen(auditoria.id)}</button><button type="button" class="primary-button" onclick="generarPdfAuditoriaLocal()">Generar PDF</button><button type="button" class="secondary-button" onclick="verPdfAuditoriaLocal()">Ver PDF</button>` : `<button type="button" class="primary-button" onclick="finalizarAuditoriaDesdeResumen()">FINALIZAR AUDITORÍA</button>`}
        </div>`;

    configurarCanvasFirmaAuditoria("firmaAuditorCanvas", "auditor");
    configurarCanvasFirmaAuditoria("firmaTrabajadorCanvas", "trabajador");
}



/* =========================================================
   FASE 5A - GENERACIÓN LOCAL DE PDF
   ========================================================= */

let _jsPdfCargaPromise = null;
let _ultimoPdfAuditoriaUrl = null;

function cargarJsPdfLocal() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if (_jsPdfCargaPromise) return _jsPdfCargaPromise;

    _jsPdfCargaPromise = new Promise((resolve, reject) => {
        const existente = document.querySelector('script[data-auditoria-jspdf="true"]');
        if (existente) {
            existente.addEventListener("load", () => {
                if (window.jspdf && window.jspdf.jsPDF) resolve(window.jspdf.jsPDF);
                else reject(new Error("jsPDF no quedó disponible."));
            }, { once: true });
            existente.addEventListener("error", () => reject(new Error("No se pudo cargar jsPDF.")), { once: true });
            return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
        script.async = true;
        script.dataset.auditoriaJspdf = "true";
        script.onload = () => {
            if (window.jspdf && window.jspdf.jsPDF) resolve(window.jspdf.jsPDF);
            else reject(new Error("jsPDF no quedó disponible."));
        };
        script.onerror = () => reject(new Error("No se pudo cargar la librería PDF. Compruebe la conexión a Internet."));
        document.head.appendChild(script);
    });
    return _jsPdfCargaPromise;
}

function normalizarTextoPdf(valor) {
    if (valor == null) return "";
    return String(valor)
        .replace(/\u00a0/g, " ")
        .replace(/[\u2013\u2014]/g, "-")
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201c\u201d]/g, '"');
}

function obtenerResumenBotiquinPdf() {
    const b = auditoria.modulos.botiquin || {};
    const resultado = [];
    if (b.dispone === false) {
        resultado.push({ nombre: "Disponibilidad", resultado: "INCORRECTO", detalle: "No se dispone del botiquín requerido." });
        return resultado;
    }
    if (b.dispone !== true) return resultado;
    try { inicializarBotiquin(); } catch (e) {}
    obtenerElementosBotiquin().forEach(item => {
        const c = b.elementos && b.elementos[item.id];
        if (!c) return;
        resultado.push({ nombre: item.nombre, resultado: c.resultado || "CORRECTO", detalle: c.fecha ? "Fecha indicada: " + c.fecha : "Sin fecha indicada" });
    });
    Object.keys(b.controles || {}).forEach(k => {
        const c = b.controles[k];
        if (!c) return;
        resultado.push({ nombre: "Comprobación general: " + k, resultado: c.resultado || "", detalle: c.observaciones || "" });
    });
    return resultado;
}

function obtenerResumenBasicoPdf() {
    const v = auditoria.modulos.vehiculo || {};
    const e = auditoria.modulos.extintor || {};
    return {
        vehiculo: {
            estado: v.estado || "NO_INICIADO",
            matricula: v.datos && v.datos.matricula || "",
            marca: v.datos && v.datos.marca || "",
            modelo: v.datos && v.datos.modelo || "",
            tipo: v.datos && v.datos.tipo || "",
            itv: v.datos && v.datos.itv && v.datos.itv.resultado || "",
            seguro: v.datos && v.datos.seguro && v.datos.seguro.resultado || ""
        },
        extintor: {
            estado: e.estado || "NO_INICIADO",
            dispone: e.dispone === true ? "SI" : e.dispone === false ? "NO" : "",
            tipo: e.datos && e.datos.tipo || "",
            agente: e.datos && e.datos.agente || "",
            capacidad: e.datos && e.datos.capacidad || "",
            ubicacion: e.datos && e.datos.ubicacion || "",
            identificacion: e.datos && e.datos.identificacion || ""
        }
    };
}

function recopilarFotografiasAuditoriaPdf() {
    const resultado = [];
    const vistos = new Set();
    const visitados = new WeakSet();

    function registrar(dataUrl, contexto, objeto) {
        if (typeof dataUrl !== "string" || !dataUrl.startsWith("data:image/")) return;
        if (vistos.has(dataUrl)) return;
        vistos.add(dataUrl);
        resultado.push({
            dataUrl,
            contexto: normalizarTextoPdf(contexto || "Fotografía"),
            nombre: normalizarTextoPdf(objeto && (objeto.nombreArchivo || objeto.nombre || objeto.name) || "Fotografía"),
            descripcion: normalizarTextoPdf(objeto && (objeto.descripcion || objeto.description) || "")
        });
    }

    function recorrer(valor, contexto, profundidad) {
        if (valor == null || profundidad > 12) return;
        if (typeof valor === "string") {
            if (valor.startsWith("data:image/")) registrar(valor, contexto, null);
            return;
        }
        if (typeof valor !== "object") return;
        if (visitados.has(valor)) return;
        visitados.add(valor);

        if (typeof valor.dataUrl === "string") registrar(valor.dataUrl, contexto, valor);
        if (typeof valor.dataURL === "string") registrar(valor.dataURL, contexto, valor);
        if (typeof valor.foto === "string" && valor.foto.startsWith("data:image/")) registrar(valor.foto, contexto, valor);
        if (valor.foto && typeof valor.foto === "object") {
            if (typeof valor.foto.dataUrl === "string") registrar(valor.foto.dataUrl, contexto, valor.foto);
            if (typeof valor.foto.dataURL === "string") registrar(valor.foto.dataURL, contexto, valor.foto);
        }

        if (Array.isArray(valor)) {
            valor.forEach((item, i) => recorrer(item, contexto + " #" + (i + 1), profundidad + 1));
            return;
        }
        Object.keys(valor).forEach(clave => {
            if (clave === "firmas") return;
            const siguiente = contexto ? contexto + " / " + clave : clave;
            recorrer(valor[clave], siguiente, profundidad + 1);
        });
    }

    recorrer(auditoria, "Auditoría", 0);
    return resultado;
}

const LOGO_ZENER_PNG = "data:image/png;base64,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";

function crearPdfAuditoriaLocal() {
    return cargarJsPdfLocal().then(jsPDF => {
        const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
        const PAGE_W = 210, PAGE_H = 297;
        const M = 14, CONTENT_W = PAGE_W - (M * 2);
        const TOP = 23, BOTTOM = 23;
        const LOGO_W = 34, LOGO_H = 34 / (2048 / 436);
        const CONTENT_BOTTOM = PAGE_H - BOTTOM;
        let y = TOP, pagina = 1;

        const fechaHora = () => {
            const fecha = auditoria.fechaFinalizacion || (auditoria.datosGenerales || {}).fecha || "";
            const hora = auditoria.horaFinalizacion || (auditoria.datosGenerales || {}).horaInicio || "";
            return [fecha, hora].filter(Boolean).join(" ");
        };

        function encabezado() {
            // Identidad corporativa del informe: título a la izquierda y logotipo Zener arriba a la derecha.
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);
            doc.text("AUDITORÍA SPM GRUPO ZENER", M, 9);
            try {
                doc.addImage(LOGO_ZENER_PNG, "PNG", PAGE_W - M - LOGO_W, 2, LOGO_W, LOGO_H, "ZENER_LOGO", "FAST");
            } catch (e) {
                // Si el navegador/jsPDF no admite la imagen embebida, el informe sigue generándose con el encabezado textual.
            }
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.text("ID: " + normalizarTextoPdf(auditoria.id || "-"), M, 14);
            doc.setDrawColor(180);
            doc.line(M, 17, PAGE_W - M, 17);
        }
        function pie() {
            doc.setDrawColor(200);
            doc.line(M, PAGE_H - 11, PAGE_W - M, PAGE_H - 11);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.text("Resumen generado localmente en la aplicación", M, PAGE_H - 6);
            doc.text("Página " + pagina, PAGE_W - M, PAGE_H - 6, { align: "right" });
        }
        function nuevaPagina() {
            pie();
            doc.addPage();
            pagina++;
            encabezado();
            y = TOP;
        }
        function asegurar(h, margenExtra = 0) {
            const altura = Math.max(0, Number(h) || 0) + margenExtra;
            if (y + altura > CONTENT_BOTTOM) nuevaPagina();
        }
        function textoLineas(texto, ancho, tam=8.5) {
            doc.setFontSize(tam);
            return doc.splitTextToSize(normalizarTextoPdf(texto == null ? "" : String(texto)), ancho);
        }
        function titulo(texto) {
            asegurar(12);
            doc.setFillColor(235,235,235);
            doc.rect(M, y - 5, CONTENT_W, 8, "F");
            doc.setFont("helvetica","bold"); doc.setFontSize(11);
            doc.text(normalizarTextoPdf(texto), M + 2, y);
            y += 9;
        }
        function linea(label, valor) {
            const lines = textoLineas(label + ": " + (valor || "-"), CONTENT_W, 8.5);
            const h = Math.max(4.5, lines.length * 4.4) + 2;
            asegurar(h);
            doc.setFont("helvetica","normal"); doc.setFontSize(8.5);
            doc.text(lines, M, y);
            y += h;
        }
        function parrafo(texto) {
            const lines = textoLineas(texto || "", CONTENT_W, 8.2);
            const h = Math.max(4.5, lines.length * 4.2) + 2;
            asegurar(h);
            doc.setFont("helvetica","normal"); doc.setFontSize(8.2);
            doc.text(lines, M, y);
            y += h;
        }

        // Tabla robusta: calcula la altura de cada fila antes de pintarla y nunca
        // permite que una fila atraviese el límite inferior de la página.
        function tabla(filas, anchos, encabezados) {
            const suma = anchos.reduce((a,b)=>a+b,0);
            const factor = suma > CONTENT_W ? CONTENT_W / suma : 1;
            const widths = anchos.map(w=>w*factor);
            const xs=[M]; widths.forEach(w=>xs.push(xs[xs.length-1]+w));

            function medir(celdas, header=false) {
                const fs = header ? 7.1 : 6.8;
                const lh = header ? 3.2 : 3.35;
                const lines = celdas.map((c,i)=>textoLineas(c, Math.max(8,widths[i]-2), fs));
                const n = Math.max(1,...lines.map(a=>a.length));
                return { lines, h: Math.max(6.2, n*lh+2.5), fs, lh };
            }
            function dibujarFila(celdas, header=false) {
                const m = medir(celdas, header);
                if (y + m.h > CONTENT_BOTTOM) nuevaPagina();
                doc.setFillColor(header ? 225 : 255, header ? 225 : 255, header ? 225 : 255);
                doc.setDrawColor(185);
                doc.rect(M, y-4.0, CONTENT_W, m.h, header ? "FD" : "S");
                for (let i=0;i<celdas.length;i++) {
                    if (i>0) doc.line(xs[i], y-4.0, xs[i], y-4.0+m.h);
                    doc.setFont("helvetica", header ? "bold" : "normal");
                    doc.setFontSize(m.fs);
                    doc.text(m.lines[i], xs[i]+1, y);
                }
                y += m.h;
            }

            if (!filas || !filas.length) return;
            // Cabecera nunca queda sola al final de una página: reservamos al menos
            // una fila de datos si existe.
            const hCab = medir(encabezados, true).h;
            const hPrimera = medir(filas[0], false).h;
            if (y + hCab + hPrimera > CONTENT_BOTTOM) nuevaPagina();
            dibujarFila(encabezados, true);
            filas.forEach(f => dibujarFila(f, false));
            y += 3;
        }

        function imagen(dataUrl, x, maxW, maxH) {
            if (!dataUrl) return false;
            try {
                const props = doc.getImageProperties(dataUrl);
                const ratio = props.width / props.height;
                let w=maxW, h=w/ratio;
                if (h>maxH) { h=maxH; w=h*ratio; }
                // Si no cabe, saltamos antes de escribir.
                asegurar(h+5);
                const yy=y;
                doc.addImage(dataUrl, undefined, x, yy, w, h, undefined, "FAST");
                y=yy+h+4;
                return true;
            } catch(e) { return false; }
        }
        function moduloEstaNoAplica(clave) {
            const m = auditoria.modulos && auditoria.modulos[clave];
            return !!(m && m.estado === "NO_APLICA");
        }
        function mostrarModuloNoAplica(nombre) {
            asegurar(12);
            doc.setFillColor(238,238,238);
            doc.rect(M, y-4.5, CONTENT_W, 8, "F");
            doc.setFont("helvetica","bold"); doc.setFontSize(9);
            doc.text(normalizarTextoPdf(nombre + ": NO APLICA"), M+2, y);
            y += 10;
        }

        encabezado();
        doc.setFont("helvetica","bold"); doc.setFontSize(16);
        doc.text("RESUMEN DE AUDITORÍA", M, y); y+=8;
        doc.setFont("helvetica","normal"); doc.setFontSize(9);
        doc.text("Estado: " + normalizarTextoPdf(auditoria.estado || "BORRADOR"), M, y); y+=7;

        const datos = auditoria.datosGenerales || {};
        titulo("1. Datos generales");
        linea("ID de auditoría", auditoria.id);
        linea("Fecha / hora", fechaHora());
        linea("Auditor", datos.auditor);
        linea("Empresa", datos.empresa);
        linea("Proyecto", datos.proyecto);
        linea("Trabajador/auditado", datos.trabajador);
        linea("DNI/NIE", datos.dniNie);
        linea("Tipo de personal", datos.tipoPersonal);
        linea("Actividad", datos.actividad === "OTRA" ? datos.actividadOtra : datos.actividad);
        const loc = datos.localizacion || {};
        linea("Localización", [loc.direccion, loc.poblacion, loc.provincia, loc.codigoPostal].filter(Boolean).join(", "));
        if (loc.latitud != null && loc.longitud != null) linea("Coordenadas", loc.latitud + ", " + loc.longitud);

        titulo("2. Estado de módulos");
        const mods = obtenerDefinicionModulosResumen();
        tabla(mods.map(m => [m.nombre, textoEstadoResumen(m.estado)]), [130,42], ["Módulo","Estado"]);

        const basico = obtenerResumenBasicoPdf();
        titulo("3. Vehículo");
        if (moduloEstaNoAplica("vehiculo")) mostrarModuloNoAplica("Vehículo");
        else {
            linea("Estado", textoEstadoResumen(basico.vehiculo.estado));
            linea("Matrícula", basico.vehiculo.matricula);
            linea("Marca / modelo", [basico.vehiculo.marca,basico.vehiculo.modelo].filter(Boolean).join(" "));
            linea("Tipo", basico.vehiculo.tipo); linea("ITV", basico.vehiculo.itv);
            linea("Seguro", basico.vehiculo.seguro);
        }

        titulo("4. Extintor");
        if (moduloEstaNoAplica("extintor")) mostrarModuloNoAplica("Extintor");
        else {
            linea("Estado", textoEstadoResumen(basico.extintor.estado));
            linea("Dispone", basico.extintor.dispone);
            linea("Tipo / agente", [basico.extintor.tipo,basico.extintor.agente].filter(Boolean).join(" / "));
            linea("Capacidad", basico.extintor.capacidad);
            linea("Ubicación", basico.extintor.ubicacion);
            linea("Identificación", basico.extintor.identificacion);
        }

        const epis = obtenerResumenEpis();
        titulo("5. EPIs");
        if (moduloEstaNoAplica("epis")) mostrarModuloNoAplica("EPIs");
        else if (epis.length) {
            tabla(epis.map(e => [
                e.nombre, textoEstadoElemento(e.estadoElemento), e.marca, e.modelo, e.identificacion,
                e.estadoElemento === "ACTIVO" ? (e.resultado || "PENDIENTE") : "—"
            ]), [34,27,22,22,32,45], ["EPI","Estado","Marca","Modelo","Identificación","Veredicto"]);
        } else parrafo("No hay elementos de EPIs registrados.");

        const radio = obtenerResumenRadio();
        titulo("6. RADIO - EPIs específicos");
        if (moduloEstaNoAplica("radio")) mostrarModuloNoAplica("RADIO");
        else if ((datos.actividad || "") === "RADIO" && radio.length) {
            tabla(radio.map(e => [
                e.nombre, textoEstadoElemento(e.estadoElemento), e.marca, e.modelo, e.identificacion,
                e.resultado || (e.estadoElemento === "NO_APLICA" ? "NO APLICA" : e.estadoElemento === "NO_DISPONIBLE" ? "NO DISPONIBLE" : "PENDIENTE")
            ]), [35,27,22,25,35,38], ["Equipo","Estado","Marca","Modelo","Identificación","Veredicto"]);
        } else parrafo((datos.actividad || "") === "RADIO" ? "No hay elementos específicos de RADIO registrados." : "RADIO: NO APLICA por actividad.");

        const escaleras = obtenerResumenEscaleras();
        titulo("7. Escaleras");
        if (moduloEstaNoAplica("escaleras")) mostrarModuloNoAplica("Escaleras");
        else if (escaleras.length) {
            tabla(escaleras.map(e=>[e.nombre,e.tipo,e.fabricante,e.modelo,e.identificacion,textoEstadoResumen(e.estado)]),
                [28,23,31,29,32,39],["Escalera","Tipo","Fabricante","Modelo","Identificación","Estado"]);
            const unidadesEsc = auditoria.modulos.escaleras.unidades || [];
            unidadesEsc.forEach((unidad,idx)=>{
                inicializarFotografiasIdentificacionEscalera(unidad);
                const fotos=[
                    ["pegatinaRevision1","Fotografía pegatina revisión 1"],
                    ["pegatinaRevision2","Fotografía pegatina revisión 2"],
                    ["placaIdentificativa1","Fotografía placa identificativa 1"],
                    ["placaIdentificativa2","Fotografía placa identificativa 2"]
                ].filter(([k])=>unidad.fotografiasIdentificacion[k] && unidad.fotografiasIdentificacion[k].dataUrl);
                if (!fotos.length) return;
                asegurar(10);
                doc.setFont("helvetica","bold"); doc.setFontSize(9);
                doc.text("Fotografías de identificación — Escalera " + (idx+1), M, y); y+=6;
                fotos.forEach(([k,et])=>{
                    const f=unidad.fotografiasIdentificacion[k];
                    asegurar(9);
                    doc.setFont("helvetica","bold"); doc.setFontSize(8); doc.text(et,M,y); y+=4;
                    imagen(f.dataUrl,M,78,50);
                    if (f.descripcion) parrafo(f.descripcion);
                });
            });
        } else parrafo("No hay escaleras registradas.");

        const botiquin = obtenerResumenBotiquinPdf();
        titulo("8. Botiquín");
        if (moduloEstaNoAplica("botiquin")) mostrarModuloNoAplica("Botiquín");
        else if (botiquin.length) tabla(botiquin.map(e=>[e.nombre,e.resultado,e.detalle]),[75,35,60],["Comprobación","Resultado","Detalle"]);
        else parrafo("No hay datos de botiquín registrados.");

        const incidencias = obtenerResumenIncidencias();
        titulo("9. Incidencias");
        if (incidencias.length) {
            tabla(incidencias.map(i=>[
                i.id||"", i.control||i.subcontrol||i.modulo||"", i.descripcion||"", i.medida||"",
                i.observaciones||"", String(Array.isArray(i.fotografias)?i.fotografias.length:(i.fotografia?1:0))
            ]),[17,31,46,44,33,11],["ID","Elemento","Descripción","Medida correctora","Observaciones","Fotos"]);
        } else parrafo("No hay incidencias registradas.");

        const fotos = recopilarFotografiasAuditoriaPdf();
        titulo("10. Fotografías");
        if (fotos.length) {
            fotos.forEach((f,i)=>{
                const caption = "Fotografía " + (i+1) + " - " + (f.contexto || f.nombre || "");
                asegurar(10+4);
                doc.setFont("helvetica","bold"); doc.setFontSize(8); doc.text(normalizarTextoPdf(caption),M,y); y+=4;
                if (f.descripcion) parrafo(f.descripcion);
                imagen(f.dataUrl,M,82,55);
            });
        } else parrafo("No hay fotografías registradas.");

        titulo("11. Firmas digitales");
        const firmaH = 38, firmaGap=6, firmaW=(CONTENT_W-firmaGap)/2;
        asegurar(62);
        const x1=M, x2=M+firmaW+firmaGap, yFirma=y+2;
        doc.setFont("helvetica","bold"); doc.setFontSize(8);
        doc.text("Firma del auditor",x1,yFirma);
        doc.text("Firma del trabajador/auditado",x2,yFirma);
        const dibujarFirma=(dataUrl,x,yy,wMax,hMax,texto)=>{
            try{
                if(!dataUrl)throw new Error("sin firma");
                const p=doc.getImageProperties(dataUrl); const ratio=p.width/p.height;
                let w=wMax,h=w/ratio; if(h>hMax){h=hMax;w=h*ratio;}
                doc.addImage(dataUrl,undefined,x,yy+4,w,h,undefined,"FAST");
            }catch(e){
                doc.setFont("helvetica","normal");doc.setFontSize(7.5);doc.text(texto,x,yy+12);
            }
        };
        dibujarFirma(auditoria.firmas&&auditoria.firmas.auditor,x1,yFirma,firmaW,firmaH,"Firma no disponible.");
        dibujarFirma(auditoria.firmas&&auditoria.firmas.trabajador,x2,yFirma,firmaW,firmaH,"Firma no disponible.");
        doc.setDrawColor(150);
        doc.line(x1,yFirma+firmaH+5,x1+firmaW,yFirma+firmaH+5);
        doc.line(x2,yFirma+firmaH+5,x2+firmaW,yFirma+firmaH+5);
        doc.setFont("helvetica","normal");doc.setFontSize(7.5);
        doc.text(normalizarTextoPdf(datos.auditor||"Auditor"),x1,yFirma+firmaH+10);
        doc.text(normalizarTextoPdf(datos.trabajador||"Trabajador/auditado"),x2,yFirma+firmaH+10);
        y=yFirma+firmaH+16;
        linea("Fecha de finalización",[auditoria.fechaFinalizacion,auditoria.horaFinalizacion].filter(Boolean).join(" "));

        pie();
        return doc;
    });
}

async function obtenerBlobPdfAuditoriaLocal() {
    const doc = await crearPdfAuditoriaLocal();
    return { doc, blob: doc.output("blob") };
}

async function generarPdfAuditoriaLocal() {
    if (auditoria.estado !== "FINALIZADA") {
        alert("La auditoría debe estar FINALIZADA para generar el PDF.");
        return;
    }
    if (!resumenTieneFirmas()) {
        alert("No se puede generar el PDF porque faltan las dos firmas obligatorias.");
        return;
    }
    try {
        const { blob } = await obtenerBlobPdfAuditoriaLocal();
        if (_ultimoPdfAuditoriaUrl) URL.revokeObjectURL(_ultimoPdfAuditoriaUrl);
        _ultimoPdfAuditoriaUrl = URL.createObjectURL(blob);
        const enlace = document.createElement("a");
        enlace.href = _ultimoPdfAuditoriaUrl;
        enlace.download = (auditoria.id || "AUDITORIA") + "_Auditoria_Vehiculo.pdf";
        document.body.appendChild(enlace);
        enlace.click();
        enlace.remove();
    } catch (error) {
        console.error(error);
        alert("No se ha podido generar el PDF local. " + (error && error.message ? error.message : "Compruebe la conexión para cargar la librería PDF."));
    }
}

async function verPdfAuditoriaLocal() {
    if (auditoria.estado !== "FINALIZADA") {
        alert("La auditoría debe estar FINALIZADA para generar el PDF.");
        return;
    }
    if (!resumenTieneFirmas()) {
        alert("No se puede generar el PDF porque faltan las dos firmas obligatorias.");
        return;
    }
    try {
        const { blob } = await obtenerBlobPdfAuditoriaLocal();
        if (_ultimoPdfAuditoriaUrl) URL.revokeObjectURL(_ultimoPdfAuditoriaUrl);
        _ultimoPdfAuditoriaUrl = URL.createObjectURL(blob);
        const ventana = window.open(_ultimoPdfAuditoriaUrl, "_blank", "noopener");
        if (!ventana) {
            alert("El navegador ha bloqueado la ventana emergente. Use 'Generar PDF' para descargarlo.");
        }
    } catch (error) {
        console.error(error);
        alert("No se ha podido generar el PDF local. " + (error && error.message ? error.message : "Compruebe la conexión para cargar la librería PDF."));
    }
}

/* =========================================================
   ABRIR MÓDULO
   ========================================================= */

function abrirModulo(
    modulo
) {

    mostrarPantalla(
        "modulo"
    );


    const titulo =
        document.getElementById(
            "tituloModulo"
        );


    const contenido =
        document.getElementById(
            "contenidoModulo"
        );


    if (
        !titulo ||
        !contenido
    ) {

        console.error(
            "No existe tituloModulo o contenidoModulo en el HTML."
        );

        return;
    }

    inicializarBotonDashboardTodosLosModulos();


    /* =====================================================
       VEHÍCULO
       ===================================================== */

    if (
        modulo === "vehiculo"
    ) {

        titulo.textContent =
            "VEHÍCULO";


        renderizarModuloVehiculo();


        return;
    }


/* =====================================================
       Extintor
       ===================================================== */
	   if (modulo === "extintor") {
    renderizarModuloExtintor();
    return;
}
    /* =====================================================
       BOTIQUÍN
       ===================================================== */

    if (modulo === "botiquin") {
        titulo.textContent = "BOTIQUÍN";
        renderizarModuloBotiquin();
        return;
    }

    /* =====================================================
       EPIs
       ===================================================== */

    if (modulo === "epis") {

        titulo.textContent = "EPIs";

        renderizarModuloEpis();

        return;
    }


    /* =====================================================
       ESCALERAS
       ===================================================== */

    if (modulo === "escaleras") {

        titulo.textContent = "ESCALERAS";

        renderizarModuloEscaleras();

        return;
    }


    /* =====================================================
       RADIO — EPIs ESPECÍFICOS
       ===================================================== */

    if (modulo === "radio") {

        titulo.textContent = "RADIO — EPIs ESPECÍFICOS";
        renderizarModuloRadio();
        return;
    }


    /* =====================================================
       INCIDENCIAS
       ===================================================== */

    if (
        modulo === "incidencias"
    ) {

        titulo.textContent =
            "INCIDENCIAS";


        renderizarIncidencias();


        return;
    }


    /* =====================================================
       RESUMEN / FINALIZAR
       ===================================================== */

    if (modulo === "resumen") {
        titulo.textContent = "RESUMEN / FINALIZAR";
        renderizarResumenFinalizar();
        return;
    }


    /* =====================================================
       OTROS MÓDULOS
       ===================================================== */

    titulo.textContent =
        modulo.toUpperCase();


    contenido.innerHTML = `

        <div class="card">

            <p>
                El módulo
                <strong>
                    ${escapeHtml(modulo)}
                </strong>
                se desarrollará en el siguiente paso.
            </p>

        </div>

    `;
}


/* =========================================================
   INICIALIZAR VEHÍCULO
   ========================================================= */

function inicializarVehiculo() {

    const vehiculo =
        auditoria
            .modulos
            .vehiculo;


    if (
        !vehiculo.datos
    ) {

        vehiculo.datos = {};
    }


    if (
        !vehiculo.datos.itv
    ) {

        vehiculo.datos.itv = {

            resultado:
                "CORRECTO",

            fecha:
                "",

            descripcion:
                "",

            medida:
                "",

            observaciones:
                ""
        };
    }


    if (
        !vehiculo.datos.seguro
    ) {

        vehiculo.datos.seguro = {

            resultado:
                "CORRECTO",

            descripcion:
                "",

            medida:
                "",

            observaciones:
                ""
        };
    }


    if (
        !vehiculo.controles
    ) {

        vehiculo.controles = {};
    }


    const claves = [

        "conductorLibre",

        "cargaAsegurada",

        "desplazamientoCarga",

        "separacionOcupantes",

        "sistemaRetencionAdecuado",

        "sistemaRetencionEstado"
    ];


    claves.forEach(
        clave => {

            if (
                !vehiculo
                    .controles
                    [clave]
            ) {

                vehiculo
                    .controles
                    [clave] = {

                    resultado:
                        "CORRECTO",

                    descripcion:
                        "",

                    medida:
                        "",

                    observaciones:
                        "",

                    incidenciaId:
                        null,

                    fotografias:
                        []
                };
            }


            if (
                !vehiculo
                    .controles
                    [clave]
                    .resultado
            ) {

                vehiculo
                    .controles
                    [clave]
                    .resultado =
                    "CORRECTO";
            }


            if (
                !Array.isArray(
                    vehiculo
                        .controles
                        [clave]
                        .fotografias
                )
            ) {

                vehiculo
                    .controles
                    [clave]
                    .fotografias =
                    [];
            }
        }
    );
}


/* =========================================================
   RENDERIZAR MÓDULO VEHÍCULO
   ========================================================= */

function renderizarModuloVehiculo() {

    inicializarVehiculo();


    const contenido =
        document.getElementById(
            "contenidoModulo"
        );


    if (!contenido) {

        console.error(
            "No existe contenidoModulo."
        );

        return;
    }


    const vehiculo =
        auditoria
            .modulos
            .vehiculo;


    let html = `

        <div class="card">

            <h3>
                ¿Se utiliza vehículo?
            </h3>

            <p class="vehicle-help">
                Indique si durante la actividad
                auditada se utiliza vehículo.
            </p>

            <div class="vehicle-actions" style="margin:8px 0;">
                <button type="button" class="secondary-button" onclick="marcarModuloVehiculoNoAplica()">NO APLICA — no se utiliza vehículo</button>
            </div>

            <div class="radio-group">

                <label class="radio-option">

                    <input
                        type="radio"
                        name="vehiculoUtiliza"
                        value="SI"
                        ${
                            vehiculo.utiliza === true
                                ? "checked"
                                : ""
                        }
                        onchange="
                            cambiarUsoVehiculo('SI')
                        "
                    >

                    <span>
                        Sí
                    </span>

                </label>


                <label class="radio-option">

                    <input
                        type="radio"
                        name="vehiculoUtiliza"
                        value="NO"
                        ${
                            vehiculo.utiliza === false
                                ? "checked"
                                : ""
                        }
                        onchange="
                            cambiarUsoVehiculo('NO')
                        "
                    >

                    <span>
                        No
                    </span>

                </label>

            </div>

        </div>

    `;


    /* =====================================================
       NO
       ===================================================== */

    if (
        vehiculo.utiliza === false
    ) {

        html +=
            renderizarVehiculoNoAplica();


        contenido.innerHTML =
            html;


        return;
    }


    /* =====================================================
       SÍ
       ===================================================== */

    if (
        vehiculo.utiliza === true
    ) {

        html +=
            renderizarDatosVehiculo();

    } else {

        html += `

            <div class="card">

                <p>
                    Seleccione
                    <strong>Sí</strong>
                    o
                    <strong>No</strong>
                    para continuar.
                </p>

            </div>

        `;
    }


    contenido.innerHTML =
        html;
}


/* =========================================================
   CAMBIAR USO VEHÍCULO
   ========================================================= */

function cambiarUsoVehiculo(
    valor
) {

    const vehiculo =
        auditoria
            .modulos
            .vehiculo;


    console.log(
        "Cambio utilización vehículo:",
        valor
    );


    if (
        valor === "SI"
    ) {

        vehiculo.utiliza =
            true;


        vehiculo.estado =
            "EN_CURSO";


        inicializarVehiculo();


    } else if (
        valor === "NO"
    ) {

        vehiculo.utiliza =
            false;


        vehiculo.estado =
            "NO_APLICA";
    }


    /* ==============================================
       AQUÍ ESTÁ LA CLAVE:
       SE VUELVE A DIBUJAR EL MÓDULO
       ============================================== */

    renderizarModuloVehiculo();


    actualizarDashboard();
}


/* =========================================================
   VEHÍCULO NO APLICA
   ========================================================= */

function renderizarVehiculoNoAplica() {

    return `

        <div class="card vehicle-not-applicable">

            <h3>
                VEHÍCULO — NO APLICA
            </h3>

            <p>
                Se ha indicado que durante la actividad
                auditada no se utiliza vehículo.
            </p>

            <p>
                El módulo queda marcado como
                <strong>
                    NO APLICA
                </strong>.
            </p>

        </div>

    `;
}/* =========================================================
   RENDERIZAR DATOS VEHÍCULO
   ========================================================= */

function renderizarDatosVehiculo() {

    const vehiculo =
        auditoria
            .modulos
            .vehiculo;


    const datos =
        vehiculo.datos;


    return `

        <!-- ==============================================
             IDENTIFICACIÓN
             ============================================== -->

        <div class="card">

            <h3>
                1. Identificación del vehículo
            </h3>


            <div class="form-grid">


                <div class="field">

                    <label
                        for="vehiculoMatricula"
                    >
                        Matrícula *
                    </label>


                    <input
                        type="text"
                        id="vehiculoMatricula"
                        value="${escapeHtml(datos.matricula)}"
                        placeholder="Ej.: 1234 ABC"
                        oninput="
                            actualizarDatoVehiculo(
                                'matricula',
                                this.value
                            )
                        "
                    >

                </div>


                <div class="field">

                    <label
                        for="vehiculoMarca"
                    >
                        Marca *
                    </label>


                    <input
                        type="text"
                        id="vehiculoMarca"
                        value="${escapeHtml(datos.marca)}"
                        placeholder="Ej.: Ford"
                        oninput="
                            actualizarDatoVehiculo(
                                'marca',
                                this.value
                            )
                        "
                    >

                </div>


                <div class="field">

                    <label
                        for="vehiculoModelo"
                    >
                        Modelo *
                    </label>


                    <input
                        type="text"
                        id="vehiculoModelo"
                        value="${escapeHtml(datos.modelo)}"
                        placeholder="Ej.: Transit"
                        oninput="
                            actualizarDatoVehiculo(
                                'modelo',
                                this.value
                            )
                        "
                    >

                </div>


                <div class="field">

                    <label
                        for="vehiculoTipo"
                    >
                        Tipo de vehículo *
                    </label>


                    <select
                        id="vehiculoTipo"
                        onchange="
                            actualizarDatoVehiculo(
                                'tipo',
                                this.value
                            )
                        "
                    >

                        <option value="">
                            Seleccionar...
                        </option>


                        <option
                            value="TURISMO"
                            ${
                                datos.tipo === "TURISMO"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Turismo
                        </option>


                        <option
                            value="FURGONETA"
                            ${
                                datos.tipo === "FURGONETA"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Furgoneta
                        </option>


                        <option
                            value="CAMIONETA"
                            ${
                                datos.tipo === "CAMIONETA"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Camioneta
                        </option>


                        <option
                            value="CAMION"
                            ${
                                datos.tipo === "CAMION"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Camión
                        </option>


                        <option
                            value="OTRO"
                            ${
                                datos.tipo === "OTRO"
                                    ? "selected"
                                    : ""
                            }
                        >
                            Otro
                        </option>

                    </select>

                </div>

            </div>


            <div class="field">

                <label
                    for="vehiculoObservaciones"
                >
                    Observaciones
                </label>


                <textarea
                    id="vehiculoObservaciones"
                    rows="3"
                    placeholder="Observaciones generales del vehículo"
                    oninput="
                        actualizarDatoVehiculo(
                            'observaciones',
                            this.value
                        )
                    "
                >${escapeHtml(datos.observaciones)}</textarea>

            </div>

        </div>


        <!-- ==============================================
             DOCUMENTACIÓN
             ============================================== -->

        <div class="card">

            <h3>
                2. Documentación del vehículo
            </h3>


            ${crearControlDocumentacionVehiculo(
                "ITV en vigor",
                "itv"
            )}


            ${crearControlDocumentacionVehiculo(
                "Seguro en vigor",
                "seguro"
            )}


            <div class="field vehicle-doc-observations">

                <label
                    for="vehiculoObservacionesDocumentacion"
                >
                    Observaciones de documentación
                </label>


                <textarea
                    id="vehiculoObservacionesDocumentacion"
                    rows="3"
                    placeholder="Observaciones sobre la documentación"
                    oninput="
                        actualizarDatoVehiculo(
                            'observacionesDocumentacion',
                            this.value
                        )
                    "
                >${escapeHtml(datos.observacionesDocumentacion)}</textarea>

            </div>

        </div>


        <!-- ==============================================
             CARGA Y HABITÁCULO
             ============================================== -->

        <div class="card">

            <h3>
                3. Carga y habitáculo
            </h3>


            <p class="vehicle-help">

                Compruebe cada uno de los siguientes
                aspectos.

                Los controles parten de
                <strong>CORRECTO</strong>
                y pueden modificarse cuando proceda.

            </p>


            ${crearControlVehiculo(
                "conductorLibre",
                "La zona del conductor está libre de cargas que puedan interferir con la conducción."
            )}


            ${crearControlVehiculo(
                "cargaAsegurada",
                "La carga está adecuadamente asegurada."
            )}


            ${crearControlVehiculo(
                "desplazamientoCarga",
                "La carga no puede desplazarse peligrosamente durante la circulación."
            )}


            ${crearControlVehiculo(
                "separacionOcupantes",
                "La carga está adecuadamente separada o protegida respecto de la zona de ocupantes cuando la configuración y el riesgo lo requieren."
            )}


            ${crearControlVehiculo(
                "sistemaRetencionAdecuado",
                "Existe un sistema de retención adecuado cuando resulta necesario."
            )}


            ${crearControlVehiculo(
                "sistemaRetencionEstado",
                "El sistema de retención utilizado se encuentra en buen estado."
            )}

        </div>


        <!-- ==============================================
             BOTONES
             ============================================== -->

        <div class="actions vehicle-actions">


            <button
                type="button"
                class="primary-button"
                onclick="
                    guardarVehiculo()
                "
            >
                Guardar vehículo
            </button>

            <button type="button" class="secondary-button" onclick="marcarModuloVehiculoNoAplica()">NO APLICA — no se utiliza vehículo</button>

            <button
                type="button"
                class="secondary-button"
                onclick="
                    volverDashboard()
                "
            >
                Volver al dashboard
            </button>


        </div>

    `;
}


/* =========================================================
   ACTUALIZAR DATOS VEHÍCULO
   ========================================================= */

function actualizarDatoVehiculo(
    campo,
    valor
) {

    const datos =
        auditoria
            .modulos
            .vehiculo
            .datos;


    if (
        Object.prototype.hasOwnProperty.call(
            datos,
            campo
        )
    ) {

        datos[campo] =
            valor;
    }


    auditoria
        .modulos
        .vehiculo
        .estado =
        "EN_CURSO";


    actualizarDashboard();
}


/* =========================================================
   DOCUMENTACIÓN
   ========================================================= */

function crearControlDocumentacionVehiculo(
    titulo,
    tipo
) {

    const datos =
        auditoria
            .modulos
            .vehiculo
            .datos;


    let objeto;


    if (
        tipo === "itv"
    ) {

        objeto =
            datos.itv;

    } else {

        objeto =
            datos.seguro;
    }


    const resultado =
        objeto.resultado;


    const funcionResultado =
        tipo === "itv"
            ? "cambiarResultadoITV"
            : "cambiarResultadoSeguro";


    return `

        <div class="vehicle-document-control">

            <div class="vehicle-control-main">

                <div class="vehicle-control-text">

                    <strong>
                        ${escapeHtml(titulo)}
                    </strong>

                </div>


                <div class="vehicle-result-group">

                    <div class="radio-group">


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_${tipo}_resultado"
                                value="CORRECTO"
                                ${
                                    resultado ===
                                    "CORRECTO"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    ${funcionResultado}(
                                        'CORRECTO'
                                    )
                                "
                            >

                            <span>
                                CORRECTO
                            </span>

                        </label>


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_${tipo}_resultado"
                                value="INCORRECTO"
                                ${
                                    resultado ===
                                    "INCORRECTO"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    ${funcionResultado}(
                                        'INCORRECTO'
                                    )
                                "
                            >

                            <span>
                                INCORRECTO
                            </span>

                        </label>


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_${tipo}_resultado"
                                value="NO_PROCEDE"
                                ${
                                    resultado ===
                                    "NO_PROCEDE"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    ${funcionResultado}(
                                        'NO_PROCEDE'
                                    )
                                "
                            >

                            <span>
                                NO PROCEDE
                            </span>

                        </label>

                    </div>

                </div>

            </div>


            ${
                tipo === "itv" &&
                resultado === "CORRECTO"

                ?

                `

                <div
                    class="field vehicle-date-field"
                >

                    <label
                        for="vehiculoFechaITV"
                    >
                        Fecha ITV *
                    </label>


                    <input
                        type="date"
                        id="vehiculoFechaITV"
                        value="${escapeHtml(objeto.fecha)}"
                        onchange="
                            cambiarFechaITV(
                                this.value
                            )
                        "
                    >

                </div>

                `

                :

                ""
            }


            ${
                resultado === "INCORRECTO"

                ?

                `

                <div
                    class="vehicle-incident-detail"
                >

                    <div
                        class="vehicle-incident-inner"
                    >

                        <div
                            class="vehicle-incident-title"
                        >
                            INCIDENCIA
                        </div>


                        <div class="field">

                            <label>
                                Descripción
                            </label>


                            <textarea
                                rows="3"
                                placeholder="Describa la incidencia"
                                oninput="
                                    actualizarIncidenciaDocumentacion(
                                        '${tipo}',
                                        'descripcion',
                                        this.value
                                    )
                                "
                            >${escapeHtml(
                                objeto.descripcion
                            )}</textarea>

                        </div>


                        <div class="field">

                            <label>
                                Medida correctiva
                            </label>


                            <textarea
                                rows="3"
                                placeholder="Indique la medida correctiva"
                                oninput="
                                    actualizarIncidenciaDocumentacion(
                                        '${tipo}',
                                        'medida',
                                        this.value
                                    )
                                "
                            >${escapeHtml(
                                objeto.medida
                            )}</textarea>

                        </div>


                        <div class="field">

                            <label>
                                Observaciones
                            </label>


                            <textarea
                                rows="3"
                                placeholder="Observaciones"
                                oninput="
                                    actualizarIncidenciaDocumentacion(
                                        '${tipo}',
                                        'observaciones',
                                        this.value
                                    )
                                "
                            >${escapeHtml(
                                objeto.observaciones
                            )}</textarea>

                        </div>


                        <small>
                            La fotografía es opcional.
                        </small>

                    </div>

                </div>

                `

                :

                ""
            }

        </div>

    `;
}


/* =========================================================
   CONTROL INDIVIDUAL VEHÍCULO
   ========================================================= */

function crearControlVehiculo(
    clave,
    texto
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    const resultado =
        control.resultado;


    return `

        <div class="vehicle-control">


            <div class="vehicle-control-main">


                <div
                    class="vehicle-control-text"
                >

                    ${escapeHtml(texto)}

                </div>


                <div
                    class="vehicle-result-group"
                >

                    <div
                        class="radio-group"
                    >


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_control_${clave}"
                                value="CORRECTO"
                                ${
                                    resultado ===
                                    "CORRECTO"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    cambiarResultadoVehiculo(
                                        '${clave}',
                                        'CORRECTO'
                                    )
                                "
                            >

                            <span>
                                CORRECTO
                            </span>

                        </label>


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_control_${clave}"
                                value="INCORRECTO"
                                ${
                                    resultado ===
                                    "INCORRECTO"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    cambiarResultadoVehiculo(
                                        '${clave}',
                                        'INCORRECTO'
                                    )
                                "
                            >

                            <span>
                                INCORRECTO
                            </span>

                        </label>


                        <label
                            class="radio-option"
                        >

                            <input
                                type="radio"
                                name="vehiculo_control_${clave}"
                                value="NO_PROCEDE"
                                ${
                                    resultado ===
                                    "NO_PROCEDE"
                                        ? "checked"
                                        : ""
                                }
                                onchange="
                                    cambiarResultadoVehiculo(
                                        '${clave}',
                                        'NO_PROCEDE'
                                    )
                                "
                            >

                            <span>
                                NO PROCEDE
                            </span>

                        </label>


                    </div>

                </div>

            </div>


            ${
                resultado ===
                "INCORRECTO"

                ?

                mostrarDetalleIncidenciaVehiculo(
                    clave,
                    control
                )

                :

                ""
            }

        </div>

    `;
}


/* =========================================================
   CAMBIAR RESULTADO CONTROL
   ========================================================= */

function cambiarResultadoVehiculo(
    clave,
    resultado
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    if (!control) {

        return;
    }


    control.resultado =
        resultado;


    auditoria
        .modulos
        .vehiculo
        .estado =
        "EN_CURSO";


    if (
        resultado ===
        "INCORRECTO"
    ) {

        crearIncidenciaVehiculo(
            clave
        );

    } else {

        eliminarIncidenciaVehiculo(
            clave
        );
    }


    renderizarModuloVehiculo();


    actualizarDashboard();
}


/* =========================================================
   DETALLE INCIDENCIA VEHÍCULO
   ========================================================= */

function mostrarDetalleIncidenciaVehiculo(
    clave,
    control
) {

    return `

        <div
            class="vehicle-incident-detail"
        >

            <div
                class="vehicle-incident-inner"
            >


                <div
                    class="vehicle-incident-title"
                >

                    INCIDENCIA DETECTADA

                </div>


                <div class="field">

                    <label>
                        Descripción de la incidencia
                    </label>


                    <textarea
                        rows="3"
                        placeholder="Describa qué se ha detectado"
                        oninput="
                            actualizarDatoIncidenciaVehiculo(
                                '${clave}',
                                'descripcion',
                                this.value
                            )
                        "
                    >${escapeHtml(
                        control.descripcion
                    )}</textarea>

                </div>


                <div class="field">

                    <label>
                        Medida correctiva
                    </label>


                    <textarea
                        rows="3"
                        placeholder="Indique la medida correctiva"
                        oninput="
                            actualizarDatoIncidenciaVehiculo(
                                '${clave}',
                                'medida',
                                this.value
                            )
                        "
                    >${escapeHtml(
                        control.medida
                    )}</textarea>

                </div>


                <div class="field">

                    <label>
                        Observaciones
                    </label>


                    <textarea
                        rows="3"
                        placeholder="Observaciones adicionales"
                        oninput="
                            actualizarDatoIncidenciaVehiculo(
                                '${clave}',
                                'observaciones',
                                this.value
                            )
                        "
                    >${escapeHtml(
                        control.observaciones
                    )}</textarea>

                </div>


                <div>

                    <button
                        type="button"
                        class="secondary-button"
                        onclick="
                            registrarFotoVehiculo(
                                '${clave}'
                            )
                        "
                    >
                        Añadir fotografía
                    </button>

                </div>


                <small>
                    La fotografía es opcional y no
                    impide completar el módulo.
                </small>

            </div>

        </div>

    `;
}/* =========================================================
   ACTUALIZAR DATOS INCIDENCIA VEHÍCULO
   ========================================================= */

function actualizarDatoIncidenciaVehiculo(
    clave,
    campo,
    valor
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    if (!control) {

        return;
    }


    if (
        campo === "descripcion" ||
        campo === "medida" ||
        campo === "observaciones"
    ) {

        control[campo] =
            valor;
    }


    actualizarIncidenciaVehiculo(
        clave
    );
}


/* =========================================================
   CREAR INCIDENCIA VEHÍCULO
   ========================================================= */

function crearIncidenciaVehiculo(
    clave
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    if (!control) {

        return null;
    }


    let incidencia =
        auditoria.incidencias.find(
            item =>

                item.origen ===
                    "VEHICULO"

                &&

                item.controlClave ===
                    clave
        );


    if (!incidencia) {

        incidencia = {

            id:
                "INC-" +
                Date.now() +
                "-" +
                Math.floor(
                    Math.random() * 1000
                ),

            origen:
                "VEHICULO",

            modulo:
                "VEHÍCULO",

            controlClave:
                clave,

            control:
                obtenerNombreControlVehiculo(
                    clave
                ),

            resultado:
                "INCORRECTO",

            descripcion:
                control.descripcion ||
                "",

            medida:
                control.medida ||
                "",

            observaciones:
                control.observaciones ||
                "",

            fotografias:
                control.fotografias ||
                [],

            estado:
                "ABIERTA"
        };


        auditoria
            .incidencias
            .push(
                incidencia
            );


        control.incidenciaId =
            incidencia.id;

    } else {

        incidencia.descripcion =
            control.descripcion ||
            "";


        incidencia.medida =
            control.medida ||
            "";


        incidencia.observaciones =
            control.observaciones ||
            "";


        incidencia.fotografias =
            control.fotografias ||
            [];
    }


    actualizarDashboard();


    return incidencia;
}


/* =========================================================
   ACTUALIZAR INCIDENCIA VEHÍCULO
   ========================================================= */

function actualizarIncidenciaVehiculo(
    clave
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    if (!control) {

        return;
    }


    if (
        control.resultado !==
        "INCORRECTO"
    ) {

        return;
    }


    const incidencia =
        crearIncidenciaVehiculo(
            clave
        );


    if (!incidencia) {

        return;
    }


    incidencia.descripcion =
        control.descripcion ||
        "";


    incidencia.medida =
        control.medida ||
        "";


    incidencia.observaciones =
        control.observaciones ||
        "";


    incidencia.fotografias =
        control.fotografias ||
        [];


    actualizarDashboard();
}


/* =========================================================
   ELIMINAR INCIDENCIA VEHÍCULO
   ========================================================= */

function eliminarIncidenciaVehiculo(
    clave
) {

    const control =
        auditoria
            .modulos
            .vehiculo
            .controles
            [clave];


    if (!control) {

        return;
    }


    const incidencia =
        auditoria.incidencias.find(
            item =>

                item.origen ===
                    "VEHICULO"

                &&

                item.controlClave ===
                    clave
        );


    if (incidencia) {

        auditoria.incidencias =
            auditoria
                .incidencias
                .filter(
                    item =>
                        item.id !==
                        incidencia.id
                );
    }


    control.incidenciaId =
        null;


    actualizarDashboard();
}


/* =========================================================
   NOMBRE CONTROL VEHÍCULO
   ========================================================= */

function obtenerNombreControlVehiculo(
    clave
) {

    const nombres = {

        conductorLibre:
            "Zona del conductor libre de cargas que puedan interferir con la conducción",

        cargaAsegurada:
            "Carga adecuadamente asegurada",

        desplazamientoCarga:
            "Carga sin posibilidad de desplazamiento peligroso",

        separacionOcupantes:
            "Separación o protección adecuada respecto de los ocupantes",

        sistemaRetencionAdecuado:
            "Sistema de retención adecuado",

        sistemaRetencionEstado:
            "Sistema de retención en buen estado"
    };


    return (
        nombres[clave] ||
        clave
    );
}


/* =========================================================
   RESULTADO ITV
   ========================================================= */

function cambiarResultadoITV(
    resultado
) {

    const itv =
        auditoria
            .modulos
            .vehiculo
            .datos
            .itv;


    itv.resultado =
        resultado;


    auditoria
        .modulos
        .vehiculo
        .estado =
        "EN_CURSO";


    if (
        resultado ===
        "INCORRECTO"
    ) {

        crearIncidenciaDocumentacion(
            "itv"
        );

    } else {

        eliminarIncidenciaDocumentacion(
            "itv"
        );
    }


    renderizarModuloVehiculo();


    actualizarDashboard();
}


/* =========================================================
   FECHA ITV
   ========================================================= */

function cambiarFechaITV(
    fecha
) {

    auditoria
        .modulos
        .vehiculo
        .datos
        .itv
        .fecha =
        fecha;


    auditoria
        .modulos
        .vehiculo
        .estado =
        "EN_CURSO";
}


/* =========================================================
   RESULTADO SEGURO
   ========================================================= */

function cambiarResultadoSeguro(
    resultado
) {

    const seguro =
        auditoria
            .modulos
            .vehiculo
            .datos
            .seguro;


    seguro.resultado =
        resultado;


    auditoria
        .modulos
        .vehiculo
        .estado =
        "EN_CURSO";


    if (
        resultado ===
        "INCORRECTO"
    ) {

        crearIncidenciaDocumentacion(
            "seguro"
        );

    } else {

        eliminarIncidenciaDocumentacion(
            "seguro"
        );
    }


    renderizarModuloVehiculo();


    actualizarDashboard();
}


/* =========================================================
   ACTUALIZAR INCIDENCIA DOCUMENTACIÓN
   ========================================================= */

function actualizarIncidenciaDocumentacion(
    tipo,
    campo,
    valor
) {

    const datos =
        auditoria
            .modulos
            .vehiculo
            .datos;


    const objeto =
        tipo === "itv"
            ? datos.itv
            : datos.seguro;


    objeto[campo] =
        valor;


    if (
        objeto.resultado ===
        "INCORRECTO"
    ) {

        crearIncidenciaDocumentacion(
            tipo
        );
    }
}


/* =========================================================
   CREAR INCIDENCIA DOCUMENTACIÓN
   ========================================================= */

function crearIncidenciaDocumentacion(
    tipo
) {

    const datos =
        auditoria
            .modulos
            .vehiculo
            .datos;


    const objeto =
        tipo === "itv"
            ? datos.itv
            : datos.seguro;


    const clave =
        "DOCUMENTACION_" +
        tipo.toUpperCase();


    let incidencia =
        auditoria.incidencias.find(
            item =>

                item.origen ===
                    "VEHICULO"

                &&

                item.controlClave ===
                    clave
        );


    if (!incidencia) {

        incidencia = {

            id:
                "INC-" +
                Date.now() +
                "-" +
                Math.floor(
                    Math.random() * 1000
                ),

            origen:
                "VEHICULO",

            modulo:
                "VEHÍCULO",

            controlClave:
                clave,

            control:
                tipo === "itv"
                    ? "ITV en vigor"
                    : "Seguro en vigor",

            resultado:
                "INCORRECTO",

            descripcion:
                objeto.descripcion ||
                "",

            medida:
                objeto.medida ||
                "",

            observaciones:
                objeto.observaciones ||
                "",

            fotografias:
                [],

            estado:
                "ABIERTA"
        };


        auditoria
            .incidencias
            .push(
                incidencia
            );

    } else {

        incidencia.descripcion =
            objeto.descripcion ||
            "";


        incidencia.medida =
            objeto.medida ||
            "";


        incidencia.observaciones =
            objeto.observaciones ||
            "";
    }


    actualizarDashboard();
}


/* =========================================================
   ELIMINAR INCIDENCIA DOCUMENTACIÓN
   ========================================================= */

function eliminarIncidenciaDocumentacion(
    tipo
) {

    const clave =
        "DOCUMENTACION_" +
        tipo.toUpperCase();


    auditoria.incidencias =
        auditoria
            .incidencias
            .filter(
                item =>

                    !(
                        item.origen ===
                            "VEHICULO"

                        &&

                        item.controlClave ===
                            clave
                    )
            );


    actualizarDashboard();
}


/* =========================================================
   REGISTRAR FOTOGRAFÍA
   ========================================================= */

function registrarFotoVehiculo(clave) {
    const control = auditoria.modulos.vehiculo.controles[clave];
    if (!control) return;
    if (!Array.isArray(control.fotografias)) control.fotografias = [];

    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        control.fotografias.push(foto);
        actualizarIncidenciaVehiculo(clave);
        renderizarModuloVehiculo();
        actualizarDashboard();
    });
}


/* =========================================================
   GUARDAR VEHÍCULO
   ========================================================= */

function marcarModuloVehiculoNoAplica() {
    const vehiculo = auditoria.modulos.vehiculo;
    if (!confirm("¿Marcar el módulo VEHÍCULO como NO APLICA? Se conservarán los datos introducidos.")) return;
    vehiculo.estado = "NO_APLICA";
    vehiculo.utiliza = false;
    actualizarEstadoModulo("vehiculo", "NO_APLICA");
    actualizarDashboard();
    volverDashboard();
}

function guardarVehiculo() {

    const vehiculo =
        auditoria
            .modulos
            .vehiculo;


    /* =====================================================
       NO APLICA
       ===================================================== */

    if (
        vehiculo.utiliza ===
        false
    ) {

        vehiculo.estado =
            "NO_APLICA";


        actualizarDashboard();


        alert(
            "Módulo VEHÍCULO guardado como NO APLICA."
        );


        volverDashboard();


        return;
    }


    /* =====================================================
       NO SE HA INDICADO
       ===================================================== */

    if (
        vehiculo.utiliza !==
        true
    ) {

        alert(
            "Debe indicar si se utiliza vehículo."
        );


        return;
    }


    const datos =
        vehiculo.datos;


    /* =====================================================
       IDENTIFICACIÓN
       ===================================================== */

    if (
        !datos.matricula
    ) {

        alert(
            "Debe indicar la matrícula."
        );


        return;
    }


    if (
        !datos.marca
    ) {

        alert(
            "Debe indicar la marca."
        );


        return;
    }


    if (
        !datos.modelo
    ) {

        alert(
            "Debe indicar el modelo."
        );


        return;
    }


    if (
        !datos.tipo
    ) {

        alert(
            "Debe indicar el tipo de vehículo."
        );


        return;
    }


    /* =====================================================
       ITV
       ===================================================== */

    if (
        !datos.itv.resultado
    ) {

        alert(
            "Debe indicar el resultado de la ITV."
        );


        return;
    }


    if (
        datos.itv.resultado ===
            "CORRECTO"
        &&
        !datos.itv.fecha
    ) {

        alert(
            "Si la ITV es CORRECTA debe indicar la fecha de ITV."
        );


        return;
    }


    /* =====================================================
       SEGURO
       ===================================================== */

    if (
        !datos.seguro.resultado
    ) {

        alert(
            "Debe indicar el resultado del seguro."
        );


        return;
    }


    /* =====================================================
       CONTROLES
       ===================================================== */

    const controles =
        Object.values(
            vehiculo.controles
        );


    for (
        const control
        of controles
    ) {

        if (
            !control.resultado
        ) {

            alert(
                "Todos los controles del vehículo deben tener resultado."
            );


            return;
        }
    }


    /* =====================================================
       COMPLETADO
       ===================================================== */

    vehiculo.estado =
        "COMPLETADO";


    actualizarDashboard();


    alert(
        "Módulo VEHÍCULO completado correctamente."
    );


    volverDashboard();
}


/* =========================================================
   RENDERIZAR INCIDENCIAS
   ========================================================= */

function actualizarIncidenciaDesdeListado(id, campo, valor) {
    const incidencia = auditoria.incidencias.find(i => i.id === id);
    if (!incidencia || !["descripcion", "medida", "observaciones"].includes(campo)) return;
    incidencia[campo] = valor;
    sincronizarIncidenciaConOrigen(incidencia);
    actualizarDashboard();
}

function renderizarIncidencias() {
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;

    if (!Array.isArray(auditoria.incidencias)) auditoria.incidencias = [];

    if (auditoria.incidencias.length === 0) {
        contenido.innerHTML = `<div class="card"><h3>Incidencias</h3><p>No existen incidencias registradas.</p></div>`;
        return;
    }

    let html = `<div class="card"><h3>Incidencias de la auditoría</h3><p>Total de incidencias: <strong>${auditoria.incidencias.length}</strong></p><p class="vehicle-help">Las fotografías se mantienen en memoria durante la auditoría y quedarán pendientes de subida hasta que se conecte el almacenamiento definitivo.</p></div>`;

    auditoria.incidencias.forEach((incidencia, indice) => {
        const fotos = obtenerFotografiasIncidencia(incidencia);
        html += `<div class="card">
            <h3>Incidencia ${indice + 1}</h3>
            <p><strong>Módulo:</strong> ${escapeHtml(incidencia.modulo || "")}</p>
            <p><strong>Control:</strong> ${escapeHtml(incidencia.control || "")}</p>
            ${incidencia.subcontrol ? `<p><strong>Comprobación:</strong> ${escapeHtml(incidencia.subcontrol)}</p>` : ""}
            <p><strong>Resultado:</strong> ${escapeHtml(incidencia.resultado || "INCORRECTO")}</p>
            <div class="field"><label>Descripción</label><textarea rows="3" onchange="actualizarIncidenciaDesdeListado('${escapeHtml(incidencia.id)}','descripcion',this.value)">${escapeHtml(incidencia.descripcion || "")}</textarea></div>
            <div class="field"><label>Medida correctiva</label><textarea rows="3" onchange="actualizarIncidenciaDesdeListado('${escapeHtml(incidencia.id)}','medida',this.value)">${escapeHtml(incidencia.medida || "")}</textarea></div>
            <div class="field"><label>Observaciones</label><textarea rows="3" onchange="actualizarIncidenciaDesdeListado('${escapeHtml(incidencia.id)}','observaciones',this.value)">${escapeHtml(incidencia.observaciones || "")}</textarea></div>
            <div class="vehicle-actions"><button type="button" class="secondary-button" onclick="registrarFotoIncidenciaCentral('${escapeHtml(incidencia.id)}')">📷 Añadir fotografía</button></div>
            <div class="field"><label>Fotografías</label>
                ${fotos.length ? fotos.map(f => `<div class="photo-preview" style="margin:8px 0;"><img src="${f.dataUrl || ""}" alt="${escapeHtml(f.descripcion || f.nombreArchivo || "Fotografía")}" style="max-width:220px;max-height:180px;display:${f.dataUrl ? "block" : "none"};border-radius:6px;"><small>${escapeHtml(f.nombreArchivo || "Fotografía registrada")} ${f.descripcion ? "— " + escapeHtml(f.descripcion) : ""}</small><br><button type="button" class="secondary-button" onclick="eliminarFotografiaIncidenciaCentral('${escapeHtml(incidencia.id)}','${escapeHtml(f.id || "")}')">Eliminar fotografía</button></div>`).join("") : `<small>No hay fotografías asociadas.</small>`}
            </div>
        </div>`;
    });

    contenido.innerHTML = html;
}

/* =========================================================
   MÓDULO EXTINTOR
   ========================================================= */

function inicializarExtintor() {

    const extintor = auditoria.modulos.extintor;

    if (!extintor.datos) {
        extintor.datos = {
            tipo: "",
            agente: "",
            capacidad: "",
            ubicacion: "",
            identificacion: "",
            observaciones: ""
        };
    }

    if (!extintor.controles) {
        extintor.controles = {};
    }

    const controles = [
        "disponibleAccesible",
        "ubicacionAdecuada",
        "senalizacion",
        "estadoExterior",
        "indicador",
        "precintoSeguridad",
        "mangueraBoquilla",
        "etiquetaInstrucciones",
        "mantenimientoVigente",
        "sujecionAdecuada"
    ];

    controles.forEach(nombre => {

        if (!extintor.controles[nombre]) {

            extintor.controles[nombre] = {
                resultado: "CORRECTO",
                descripcion: "",
                medida: "",
                observaciones: "",
                foto: null
            };

        }

    });
}
function renderizarModuloExtintor() {

    inicializarExtintor();

    const extintor = auditoria.modulos.extintor;

    document.getElementById("tituloModulo").textContent =
        "Módulo Extintor";

    let html = "";

    html += `
        <div class="module-intro">

            <h3>Comprobación del extintor</h3>

            <p>
                Compruebe el estado y las condiciones del extintor
                disponible en el vehículo, instalación o puesto de trabajo.
            </p>

            <div class="vehicle-actions" style="margin:8px 0;">
                <button type="button" class="secondary-button" onclick="marcarModuloExtintorNoAplica()">NO APLICA — no existe extintor que deba comprobarse</button>
            </div>

            <div class="form-group">

                <label>
                    ¿La actividad dispone de extintor que deba ser comprobado?
                </label>

                <div class="radio-group">

                    <label>
                        <input
                            type="radio"
                            name="disponeExtintor"
                            value="SI"
                            ${extintor.dispone === true ? "checked" : ""}
                            onchange="cambiarDisponibilidadExtintor('SI')"
                        >
                        Sí
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="disponeExtintor"
                            value="NO"
                            ${extintor.dispone === false ? "checked" : ""}
                            onchange="cambiarDisponibilidadExtintor('NO')"
                        >
                        No
                    </label>

                </div>

            </div>

        <div class="vehicle-actions">
            <button type="button" class="secondary-button" onclick="marcarModuloExtintorNoAplica()">NO APLICA — no existe extintor que deba comprobarse</button>
        </div>

    `;

    if (extintor.dispone === false) {

        html += `
            <div class="vehicle-not-applicable module-not-applicable">

                <div class="not-applicable-icon">✓</div>

                <h3>Módulo no aplicable</h3>

                <p>
                    Se ha indicado que no existe extintor que deba ser
                    comprobado en esta auditoría.
                </p>

            </div>
        `;

        html += `
            <div class="vehicle-actions">

                <button
                    type="button"
                    class="btn-primary"
                    onclick="guardarExtintor()"
                >
                    Guardar módulo
                </button>

            </div>
        `;

        html += `</div>`;

        document.getElementById("contenidoModulo").innerHTML = html;

        return;
    }

    if (extintor.dispone === true) {

        html += renderizarDatosExtintor();

        html += `
            <div class="extintor-seccion">

                <h3>Comprobaciones</h3>

                <p class="vehicle-help">
                    Seleccione el resultado de cada comprobación.
                    Todas parten inicialmente como CORRECTO.
                </p>

                ${crearControlExtintor(
                    "disponibleAccesible",
                    "El extintor está disponible y es fácilmente accesible."
                )}

                ${crearControlExtintor(
                    "ubicacionAdecuada",
                    "El extintor está correctamente ubicado."
                )}

                ${crearControlExtintor(
                    "senalizacion",
                    "El extintor está correctamente señalizado cuando procede."
                )}

                ${crearControlExtintor(
                    "estadoExterior",
                    "El estado exterior del extintor es adecuado."
                )}

                ${crearControlExtintor(
                    "indicador",
                    "El manómetro o indicador de presión se encuentra en condiciones adecuadas cuando existe."
                )}

                ${crearControlExtintor(
                    "precintoSeguridad",
                    "El precinto y los elementos de seguridad se encuentran en condiciones adecuadas."
                )}

                ${crearControlExtintor(
                    "mangueraBoquilla",
                    "La manguera, boquilla o elementos equivalentes se encuentran en buen estado cuando existen."
                )}

                ${crearControlExtintor(
                    "etiquetaInstrucciones",
                    "La etiqueta e instrucciones de utilización son legibles."
                )}

                ${crearControlExtintor(
                    "mantenimientoVigente",
                    "La revisión o mantenimiento del extintor se encuentra vigente cuando puede verificarse."
                )}

                ${crearControlExtintor(
                    "sujecionAdecuada",
                    "El extintor está correctamente sujeto cuando la configuración requiere un sistema de sujeción."
                )}

            </div>
        `;

        html += `
            <div class="vehicle-actions">

                <button
                    type="button"
                    class="btn-primary"
                    onclick="guardarExtintor()"
                >
                    Guardar módulo
                </button>

            </div>
        `;

    }

    html += `</div>`;

    document.getElementById("contenidoModulo").innerHTML = html;
}
/* =========================================================
   CAMBIAR DISPONIBILIDAD EXTINTOR
   ========================================================= */

function cambiarDisponibilidadExtintor(valor) {

    const extintor =
        auditoria.modulos.extintor;

    console.log(
        "Cambio disponibilidad extintor:",
        valor
    );

    if (valor === "SI") {

        extintor.dispone = true;

        /*
         * Si estaba como NO APLICA,
         * vuelve a estar en curso.
         */
        extintor.estado = "EN_CURSO";

        /*
         * Nos aseguramos de que la estructura
         * del módulo existe.
         */
        inicializarExtintor();

    } else if (valor === "NO") {

        extintor.dispone = false;

        extintor.estado = "NO_APLICA";

    }

    /*
     * Volvemos a pintar el módulo para mostrar
     * el contenido correspondiente.
     */
    renderizarModuloExtintor();

    /*
     * Actualizamos el estado de la tarjeta
     * del dashboard.
     */
    actualizarDashboard();
}
function renderizarDatosExtintor() {

    const extintor = auditoria.modulos.extintor;
    const datos = extintor.datos;

    return `
        <div class="card">
            <h3>1. Identificación del extintor</h3>

            <div class="form-grid">
                <div class="field">
                    <label for="extintorTipo">Tipo de extintor *</label>
                    <input
                        type="text"
                        id="extintorTipo"
                        value="${escapeHtml(datos.tipo)}"
                        placeholder="Ej.: Extintor portátil"
                        oninput="actualizarDatoExtintor('tipo', this.value)"
                    >
                </div>

                <div class="field">
                    <label for="extintorAgente">Agente extintor *</label>
                    <input
                        type="text"
                        id="extintorAgente"
                        value="${escapeHtml(datos.agente)}"
                        placeholder="Ej.: Polvo ABC"
                        oninput="actualizarDatoExtintor('agente', this.value)"
                    >
                </div>

                <div class="field">
                    <label for="extintorCapacidad">Capacidad *</label>
                    <input
                        type="text"
                        id="extintorCapacidad"
                        value="${escapeHtml(datos.capacidad)}"
                        placeholder="Ej.: 6 kg"
                        oninput="actualizarDatoExtintor('capacidad', this.value)"
                    >
                </div>

                <div class="field">
                    <label for="extintorUbicacion">Ubicación *</label>
                    <input
                        type="text"
                        id="extintorUbicacion"
                        value="${escapeHtml(datos.ubicacion)}"
                        placeholder="Ej.: Vehículo / almacén / puesto"
                        oninput="actualizarDatoExtintor('ubicacion', this.value)"
                    >
                </div>
            </div>

            <div class="field">
                <label for="extintorIdentificacion">Identificación / nº de equipo</label>
                <input
                    type="text"
                    id="extintorIdentificacion"
                    value="${escapeHtml(datos.identificacion)}"
                    placeholder="Número o identificación del extintor"
                    oninput="actualizarDatoExtintor('identificacion', this.value)"
                >
            </div>

            <div class="field">
                <label for="extintorObservaciones">Observaciones generales</label>
                <textarea
                    id="extintorObservaciones"
                    rows="3"
                    placeholder="Observaciones generales del extintor"
                    oninput="actualizarDatoExtintor('observaciones', this.value)"
                >${escapeHtml(datos.observaciones)}</textarea>
            </div>
        </div>
    `;
}

function actualizarDatoExtintor(campo, valor) {

    const extintor = auditoria.modulos.extintor;

    if (extintor.datos && Object.prototype.hasOwnProperty.call(extintor.datos, campo)) {
        extintor.datos[campo] = valor;
    }

    extintor.estado = "EN_CURSO";
    actualizarDashboard();
}

function crearControlExtintor(nombre, texto) {

    const control =
        auditoria.modulos.extintor.controles[nombre];

    if (!control) {
        return "";
    }

    const esIncorrecto =
        control.resultado === "INCORRECTO";

    return `
        <div class="vehicle-control extintor-control">

            <div class="vehicle-control-main">

                <div class="vehicle-control-text">
                    ${texto}
                </div>

                <div class="vehicle-result-group">

                    <select
                        onchange="cambiarResultadoExtintor('${nombre}', this.value)"
                    >

                        <option
                            value="CORRECTO"
                            ${control.resultado === "CORRECTO" ? "selected" : ""}
                        >
                            CORRECTO
                        </option>

                        <option
                            value="INCORRECTO"
                            ${control.resultado === "INCORRECTO" ? "selected" : ""}
                        >
                            INCORRECTO
                        </option>

                        <option
                            value="NO_PROCEDE"
                            ${control.resultado === "NO_PROCEDE" ? "selected" : ""}
                        >
                            NO PROCEDE
                        </option>

                    </select>

                </div>

            </div>


            ${
                esIncorrecto
                ?
                `
                <div class="vehicle-incident-detail">

                    <div class="vehicle-incident-title">
                        Incidencia detectada
                    </div>

                    <div class="vehicle-incident-inner">

                        <label>
                            Descripción
                        </label>

                        <textarea
                            rows="2"
                            onchange="actualizarDatoIncidenciaExtintor(
                                '${nombre}',
                                'descripcion',
                                this.value
                            )"
                        >${escapeHtml(control.descripcion)}</textarea>


                        <label>
                            Medida correctiva propuesta
                        </label>

                        <textarea
                            rows="2"
                            onchange="actualizarDatoIncidenciaExtintor(
                                '${nombre}',
                                'medida',
                                this.value
                            )"
                        >${escapeHtml(control.medida)}</textarea>


                        <label>
                            Observaciones
                        </label>

                        <textarea
                            rows="2"
                            onchange="actualizarDatoIncidenciaExtintor(
                                '${nombre}',
                                'observaciones',
                                this.value
                            )"
                        >${escapeHtml(control.observaciones)}</textarea>


                        <button
                            type="button"
                            class="btn-secondary"
                            onclick="registrarFotoExtintor('${nombre}')"
                        >
                            📷 Añadir fotografía
                        </button>

                        ${
                            control.foto
                            ?
                            `<small>
                                Fotografía registrada
                            </small>`
                            :
                            `<small>
                                La fotografía es opcional.
                            </small>`
                        }

                    </div>

                </div>
                `
                :
                ""
            }

        </div>
    `;
}
/* =========================================================
   CAMBIAR RESULTADO CONTROL EXTINTOR
   ========================================================= */

function cambiarResultadoExtintor(nombre, resultado) {

    const extintor =
        auditoria.modulos.extintor;

    const control =
        extintor.controles[nombre];

    if (!control) {
        return;
    }

    control.resultado =
        resultado;

    /*
     * El módulo está siendo trabajado.
     */
    extintor.estado =
        "EN_CURSO";


    /*
     * Si es incorrecto:
     * crear/actualizar incidencia.
     */
    if (resultado === "INCORRECTO") {

        crearIncidenciaExtintor(nombre);

    } else {

        /*
         * Si vuelve a CORRECTO o NO PROCEDE,
         * eliminamos la incidencia automática.
         */
        eliminarIncidenciaExtintor(nombre);

        control.descripcion = "";
        control.medida = "";
        control.observaciones = "";
        control.foto = null;
    }


    renderizarModuloExtintor();

    actualizarDashboard();
}
function actualizarDatoIncidenciaExtintor(
    nombre,
    campo,
    valor
) {

    const control =
        auditoria.modulos.extintor.controles[nombre];

    if (!control) {
        return;
    }

    control[campo] = valor;

    actualizarIncidenciaExtintor(nombre);

}
function crearIncidenciaExtintor(nombre) {

    const extintor =
        auditoria.modulos.extintor;

    const control =
        extintor.controles[nombre];

    if (!auditoria.incidencias) {
        auditoria.incidencias = [];
    }

    const id =
        "EXTINTOR_" + nombre;

    const existente =
        auditoria.incidencias.find(
            incidencia => incidencia.id === id
        );

    if (!existente) {

        auditoria.incidencias.push({

            id: id,

            modulo: "EXTINTOR",

            controlClave: nombre,

            control: obtenerNombreControlExtintor(nombre),

            resultado: "INCORRECTO",

            titulo:
                obtenerNombreControlExtintor(nombre),

            descripcion:
                control.descripcion || "",

            medida:
                control.medida || "",

            observaciones:
                control.observaciones || "",

            foto:
                control.foto || null,

            estado: "ABIERTA"

        });

    }

}
function registrarFotoExtintor(nombre) {
    const c = auditoria.modulos.extintor.controles[nombre];
    if (!c) return;
    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        c.foto = foto;
        actualizarIncidenciaExtintor(nombre);
        renderizarModuloExtintor();
        actualizarDashboard();
    });
}

function actualizarIncidenciaExtintor(nombre) {

    if (!auditoria.incidencias) {
        auditoria.incidencias = [];
    }

    const control =
        auditoria.modulos.extintor.controles[nombre];

    const id =
        "EXTINTOR_" + nombre;

    const incidencia =
        auditoria.incidencias.find(
            item => item.id === id
        );

    if (!incidencia) {
        return;
    }

    incidencia.descripcion =
        control.descripcion || "";

    incidencia.medida =
        control.medida || "";

    incidencia.observaciones =
        control.observaciones || "";

    incidencia.foto =
        control.foto || null;

}
function eliminarIncidenciaExtintor(nombre) {

    if (!auditoria.incidencias) {
        return;
    }

    const id =
        "EXTINTOR_" + nombre;

    auditoria.incidencias =
        auditoria.incidencias.filter(
            incidencia => incidencia.id !== id
        );

}
function obtenerNombreControlExtintor(nombre) {

    const nombres = {

        disponibleAccesible:
            "Extintor disponible y accesible",

        ubicacionAdecuada:
            "Ubicación adecuada",

        senalizacion:
            "Señalización",

        estadoExterior:
            "Estado exterior",

        indicador:
            "Manómetro o indicador",

        precintoSeguridad:
            "Precinto y elementos de seguridad",

        mangueraBoquilla:
            "Manguera / boquilla",

        etiquetaInstrucciones:
            "Etiqueta e instrucciones",

        mantenimientoVigente:
            "Revisión / mantenimiento vigente",

        sujecionAdecuada:
            "Sujeción adecuada"

    };

    return nombres[nombre] || nombre;

}
function marcarModuloExtintorNoAplica() {
    const extintor = auditoria.modulos.extintor;
    if (!confirm("¿Marcar el módulo EXTINTOR como NO APLICA? Se conservarán los datos introducidos.")) return;
    extintor.estado = "NO_APLICA";
    extintor.dispone = false;
    actualizarEstadoModulo("extintor", "NO_APLICA");
    actualizarDashboard();
    volverDashboard();
}

function guardarExtintor() {

    const extintor =
        auditoria.modulos.extintor;

    /*
     * NO dispone de extintor
     */
    if (extintor.dispone === false) {

        extintor.estado = "NO_APLICA";

        actualizarEstadoModulo(
            "extintor",
            "NO_APLICA"
        );

        actualizarDashboard();

        alert(
            "Módulo Extintor guardado como NO APLICA."
        );

        volverDashboard();
        return;
    }


    /*
     * Todavía no se ha indicado Sí/No
     */
    if (extintor.dispone === null) {

        alert(
            "Debe indicar si dispone de extintor."
        );

        return;
    }
    /*
     * Datos mínimos de identificación
     */
    const datos =
        extintor.datos;

    if (!datos.tipo.trim()) {

        alert(
            "Indique el tipo de extintor."
        );

        return;
    }

    if (!datos.agente.trim()) {

        alert(
            "Indique el agente extintor."
        );

        return;
    }

    if (!datos.capacidad.trim()) {

        alert(
            "Indique la capacidad del extintor."
        );

        return;
    }

    if (!datos.ubicacion.trim()) {

        alert(
            "Indique la ubicación del extintor."
        );

        return;
    }


    /*
     * Todos los controles deben tener resultado
     */
    const controles =
        Object.values(extintor.controles);

    const faltaResultado =
        controles.some(
            control => !control.resultado
        );

    if (faltaResultado) {

        alert(
            "Debe completar todas las comprobaciones del extintor."
        );

        return;
    }


    extintor.estado =
        "COMPLETADO";


    actualizarEstadoModulo(
        "extintor",
        "COMPLETADO"
    );

    actualizarDashboard();

    alert(
        "Módulo Extintor completado correctamente."
    );

    volverDashboard();

}
/* =========================================================
   ESCAPE HTML
   ========================================================= */


/* =========================================================
   BOTIQUÍN
   ========================================================= */

function obtenerElementosBotiquin() {
    return [
        { id: "aguaOxigenada", nombre: "Botella agua oxigenada" },
        { id: "alcohol", nombre: "Botella de Alcohol" },
        { id: "algodon", nombre: "Paquete de algodón arrollado" },
        { id: "gasasEsteriles", nombre: "Sobres de gasas estériles" },
        { id: "vendas", nombre: "Vendas" },
        { id: "tiritas", nombre: "Caja de tiritas" },
        { id: "bandasProtectoras", nombre: "Caja de bandas protectoras" },
        { id: "esparadrapoHipoalergico", nombre: "Esparadrapo hipoalérgico" },
        { id: "tijera", nombre: "Tijera" },
        { id: "pinza", nombre: "Pinza" },
        { id: "povidonaClorexidina", nombre: "Povidona yodada o clorexidina" },
        { id: "sueroFisiologico", nombre: "Suero fisiológico" },
        { id: "vendaCrepe", nombre: "Venda crepe" }
    ];
}

function crearControlElementoBotiquin() {
    return {
        fecha: "",
        resultado: "CORRECTO",
        descripcion: "",
        medida: "",
        observaciones: "",
        incidenciaId: null,
        foto: null
    };
}

function inicializarBotiquin() {
    const b = auditoria.modulos.botiquin;
    if (!b.datos) b.datos = { ubicacion: "", identificacion: "", observaciones: "" };
    if (!b.controles) b.controles = {};

    const controlesGenerales = {
        materialBuenEstado: "El material del botiquín presenta deterioro, daño o no se encuentra en condiciones adecuadas.",
        materialNoCaducado: "Se ha detectado material caducado o con fecha no conforme en el botiquín.",
        comunicacionDeficiencias: "Las deficiencias detectadas en el botiquín no han sido comunicadas para su subsanación."
    };

    Object.keys(controlesGenerales).forEach(n => {
        if (!b.controles[n]) {
            b.controles[n] = { resultado: "CORRECTO", descripcion: "", medida: "", observaciones: "", foto: null, incidenciaId: null };
        }
        const c = b.controles[n];
        if (!c.resultado) c.resultado = "CORRECTO";
        if (typeof c.descripcion !== "string") c.descripcion = "";
        if (typeof c.medida !== "string") c.medida = "";
        if (typeof c.observaciones !== "string") c.observaciones = "";
        if (!Object.prototype.hasOwnProperty.call(c, "incidenciaId")) c.incidenciaId = null;
        if (!Object.prototype.hasOwnProperty.call(c, "foto")) c.foto = null;
    });

    if (!b.elementos || typeof b.elementos !== "object") b.elementos = {};

    obtenerElementosBotiquin().forEach(item => {
        if (!b.elementos[item.id]) b.elementos[item.id] = crearControlElementoBotiquin();
        const c = b.elementos[item.id];
        if (typeof c.fecha !== "string") c.fecha = "";
        if (!c.resultado) c.resultado = "CORRECTO";
        if (typeof c.descripcion !== "string") c.descripcion = "";
        if (typeof c.medida !== "string") c.medida = "";
        if (typeof c.observaciones !== "string") c.observaciones = "";
        if (!Object.prototype.hasOwnProperty.call(c, "incidenciaId")) c.incidenciaId = null;
        if (!Object.prototype.hasOwnProperty.call(c, "foto")) c.foto = null;
        actualizarResultadoFechaBotiquin(item.id, false);
    });
}

function actualizarResultadoFechaBotiquin(idElemento, renderizar = true) {
    const b = auditoria.modulos.botiquin;
    const c = b.elementos && b.elementos[idElemento];
    if (!c) return;

    const fechaAuditoria = auditoria.datosGenerales.fecha || "";
    const fechaCaducidad = c.fecha || "";
    const vencido = !!fechaCaducidad && !!fechaAuditoria && fechaCaducidad <= fechaAuditoria;
    const resultadoAnterior = c.resultado;

    c.resultado = vencido ? "INCORRECTO" : "CORRECTO";

    if (vencido) {
        if (!c.descripcion) {
            c.descripcion = `El elemento "${obtenerElementosBotiquin().find(x => x.id === idElemento)?.nombre || idElemento}" presenta una fecha indicada (${fechaCaducidad}) igual o anterior a la fecha de auditoría (${fechaAuditoria}).`;
        }
        if (!c.medida) c.medida = "Retirar y sustituir el material caducado antes de su utilización y reponer el botiquín.";
        sincronizarIncidenciaElementoBotiquin(idElemento);
    } else if (resultadoAnterior === "INCORRECTO") {
        c.descripcion = "";
        c.medida = "";
        c.observaciones = "";
        c.foto = null;
        sincronizarIncidenciaElementoBotiquin(idElemento);
    }

    if (renderizar) {
        b.estado = "EN_CURSO";
        renderizarModuloBotiquin();
        actualizarDashboard();
    }
}

function renderizarModuloBotiquin() {
    inicializarBotiquin();
    const b = auditoria.modulos.botiquin;
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;

    if (b.estado === "NO_APLICA") {
        contenido.innerHTML = `<div class="card vehicle-not-applicable module-not-applicable"><h3>BOTIQUÍN — NO APLICA</h3><p>El botiquín no es exigible en este supuesto de trabajo.</p><div class="vehicle-actions"><button type="button" class="primary-button" onclick="reactivarModuloBotiquin()">Reactivar módulo Botiquín</button><button type="button" class="secondary-button" onclick="volverDashboard()">Volver al Dashboard</button></div></div>`;
        actualizarDashboard();
        return;
    }

    let html = `<div class="module-intro"><h3>Comprobación del botiquín</h3><p>La documentación de referencia establece que cada vehículo llevará un botiquín, con material en buen estado y sin caducar.</p><div class="vehicle-actions" style="margin:8px 0;"><button type="button" class="secondary-button" onclick="marcarModuloBotiquinNoAplica()">NO APLICA — el botiquín no es exigible en este supuesto</button></div></div><div class="card"><h3>1. Disponibilidad</h3><div class="form-group"><label>¿Se dispone de botiquín en el vehículo?</label><div class="radio-group"><label><input type="radio" name="disponeBotiquin" value="SI" ${b.dispone === true ? "checked" : ""} onchange="cambiarDisponibilidadBotiquin('SI')"> Sí</label><label><input type="radio" name="disponeBotiquin" value="NO" ${b.dispone === false ? "checked" : ""} onchange="cambiarDisponibilidadBotiquin('NO')"> No</label></div></div></div>`;

    if (b.dispone === null) { contenido.innerHTML = html; return; }

    if (b.dispone === false) {
        b.controles.disponibilidad = b.controles.disponibilidad || { resultado: "INCORRECTO", descripcion: "", medida: "", observaciones: "", foto: null };
        b.controles.disponibilidad.resultado = "INCORRECTO";
        html += `<div class="card"><h3>Deficiencia detectada</h3><p>La ausencia del botiquín requerido se registra como incidencia.</p>${crearControlBotiquin("disponibilidad", "El vehículo dispone del botiquín requerido.")}</div><div class="vehicle-actions"><button type="button" class="btn-primary" onclick="guardarBotiquin()">Guardar módulo</button></div>`;
        contenido.innerHTML = html; return;
    }

    html += `<div class="card"><h3>2. Identificación</h3><div class="form-grid"><div class="field"><label>Ubicación</label><input type="text" value="${escapeHtml(b.datos.ubicacion)}" oninput="actualizarDatoBotiquin('ubicacion', this.value)" placeholder="Ubicación del botiquín"></div><div class="field"><label>Identificación / nº de equipo</label><input type="text" value="${escapeHtml(b.datos.identificacion)}" oninput="actualizarDatoBotiquin('identificacion', this.value)" placeholder="Si existe identificación"></div></div><div class="field"><label>Observaciones generales</label><textarea rows="3" oninput="actualizarDatoBotiquin('observaciones', this.value)">${escapeHtml(b.datos.observaciones)}</textarea></div></div>`;

    html += `<div class="card"><h3>3. Inventario y fecha indicada de los elementos</h3><p class="vehicle-help">La fecha es opcional. Si se introduce una fecha igual o anterior a la fecha de auditoría, el elemento se considera INCORRECTO y se genera una no conformidad/incidencia. Si no se introduce fecha, no se genera una incidencia por este criterio.</p><div class="botiquin-elementos">`;

    obtenerElementosBotiquin().forEach(item => {
        const c = b.elementos[item.id];
        const incorrecto = c.resultado === "INCORRECTO";
        html += `<div class="vehicle-control botiquin-elemento"><div class="vehicle-control-main"><div class="vehicle-control-text"><strong>${escapeHtml(item.nombre)}</strong></div><div class="form-group"><label>Fecha</label><input type="date" value="${escapeHtml(c.fecha)}" max="" onchange="actualizarFechaElementoBotiquin('${item.id}', this.value)"><small>Opcional</small></div><div class="vehicle-result-group"><span class="result-badge ${incorrecto ? "result-incorrect" : "result-correct"}">${incorrecto ? "INCORRECTO" : "CORRECTO"}</span></div></div>${incorrecto ? `<div class="vehicle-incident-detail"><div class="vehicle-incident-title">NO CONFORMIDAD / INCIDENCIA</div><div class="vehicle-incident-inner"><label>Descripción de la incidencia *</label><textarea rows="2" onchange="actualizarDatoIncidenciaElementoBotiquin('${item.id}', 'descripcion', this.value)">${escapeHtml(c.descripcion)}</textarea><label>Medida correctiva propuesta *</label><textarea rows="2" onchange="actualizarDatoIncidenciaElementoBotiquin('${item.id}', 'medida', this.value)">${escapeHtml(c.medida)}</textarea><label>Observaciones</label><textarea rows="2" onchange="actualizarDatoIncidenciaElementoBotiquin('${item.id}', 'observaciones', this.value)">${escapeHtml(c.observaciones)}</textarea><button type="button" class="btn-secondary" onclick="registrarFotoElementoBotiquin('${item.id}')">📷 Añadir fotografía</button><small>${c.foto ? "Fotografía registrada" : "La fotografía es opcional."}</small></div></div>` : ""}</div>`;
    });

    html += `</div></div><div class="card"><h3>4. Comprobaciones generales</h3><p class="vehicle-help">Estas comprobaciones se mantienen como controles independientes.</p>${crearControlBotiquin("materialBuenEstado", "El material del botiquín se encuentra en buen estado.")}${crearControlBotiquin("materialNoCaducado", "El material del botiquín se encuentra sin caducar.")}${crearControlBotiquin("comunicacionDeficiencias", "Las deficiencias por material caducado, deteriorado o consumido han sido comunicadas para su subsanación.")}</div><div class="vehicle-actions"><button type="button" class="btn-primary" onclick="guardarBotiquin()">Guardar botiquín y completar módulo</button><button type="button" class="secondary-button" onclick="marcarModuloBotiquinNoAplica()">NO APLICA — el botiquín no es exigible en este supuesto</button></div>`;

    contenido.innerHTML = html;
}

function actualizarFechaElementoBotiquin(idElemento, fecha) {
    const b = auditoria.modulos.botiquin;
    if (!b.elementos || !b.elementos[idElemento]) return;
    b.elementos[idElemento].fecha = fecha || "";
    b.estado = "EN_CURSO";
    actualizarResultadoFechaBotiquin(idElemento, true);
}

function actualizarDatoBotiquin(campo, valor) { const b = auditoria.modulos.botiquin; if (Object.prototype.hasOwnProperty.call(b.datos, campo)) { b.datos[campo] = valor; b.estado = "EN_CURSO"; actualizarDashboard(); } }
function cambiarDisponibilidadBotiquin(valor) {
    const b = auditoria.modulos.botiquin;
    const antes = b.dispone;
    b.dispone = valor === "SI";
    b.estado = "EN_CURSO";

    if (b.dispone) {
        // Si antes se había marcado que no había botiquín, retirar su incidencia.
        const cAnterior = b.controles.disponibilidad;
        if (cAnterior) {
            eliminarIncidenciaBotiquinControl(cAnterior);
            delete b.controles.disponibilidad;
        }
    } else {
        b.controles.disponibilidad = b.controles.disponibilidad || { resultado: "INCORRECTO", descripcion: "", medida: "", observaciones: "", foto: null, incidenciaId: null };
        const c = b.controles.disponibilidad;
        c.resultado = "INCORRECTO";
        if (!c.descripcion) c.descripcion = "No se dispone del botiquín requerido en el vehículo.";
        if (!c.medida) c.medida = "Dotar el vehículo del botiquín requerido y mantener su contenido en buen estado y sin caducar.";
        sincronizarIncidenciaBotiquin("disponibilidad");
    }

    renderizarModuloBotiquin();
    actualizarDashboard();
}
function crearControlBotiquin(nombre, texto) { const c = auditoria.modulos.botiquin.controles[nombre]; if (!c) return ""; const incorrecto = c.resultado === "INCORRECTO"; return `<div class="vehicle-control botiquin-control"><div class="vehicle-control-main"><div class="vehicle-control-text">${escapeHtml(texto)}</div><div class="vehicle-result-group"><select onchange="cambiarResultadoBotiquin('${nombre}', this.value)"><option value="CORRECTO" ${c.resultado === "CORRECTO" ? "selected" : ""}>CORRECTO</option><option value="INCORRECTO" ${c.resultado === "INCORRECTO" ? "selected" : ""}>INCORRECTO</option><option value="NO_PROCEDE" ${c.resultado === "NO_PROCEDE" ? "selected" : ""}>NO PROCEDE</option></select></div></div>${incorrecto ? `<div class="vehicle-incident-detail"><div class="vehicle-incident-title">INCIDENCIA DETECTADA</div><div class="vehicle-incident-inner"><label>Descripción de la incidencia *</label><textarea rows="2" onchange="actualizarDatoIncidenciaBotiquin('${nombre}', 'descripcion', this.value)">${escapeHtml(c.descripcion)}</textarea><label>Medida correctiva propuesta *</label><textarea rows="2" onchange="actualizarDatoIncidenciaBotiquin('${nombre}', 'medida', this.value)">${escapeHtml(c.medida)}</textarea><label>Observaciones</label><textarea rows="2" onchange="actualizarDatoIncidenciaBotiquin('${nombre}', 'observaciones', this.value)">${escapeHtml(c.observaciones)}</textarea><button type="button" class="btn-secondary" onclick="registrarFotoBotiquin('${nombre}')">📷 Añadir fotografía</button><small>${c.foto ? "Fotografía registrada" : "La fotografía es opcional."}</small></div></div>` : ""}</div>`; }
function cambiarResultadoBotiquin(nombre, resultado) {
    const b = auditoria.modulos.botiquin;
    const c = b.controles[nombre];
    if (!c) return;

    c.resultado = resultado;
    b.estado = "EN_CURSO";

    if (resultado === "INCORRECTO") {
        const textos = {
            materialBuenEstado: [
                "Se ha detectado material del botiquín deteriorado o en condiciones no adecuadas.",
                "Retirar y sustituir el material deteriorado y reponer el botiquín."
            ],
            materialNoCaducado: [
                "Se ha detectado material del botiquín caducado o con fecha no conforme.",
                "Retirar y sustituir el material caducado y reponer el botiquín."
            ],
            comunicacionDeficiencias: [
                "Se ha detectado una deficiencia del botiquín que no ha sido comunicada para su subsanación.",
                "Comunicar la deficiencia y realizar la reposición o sustitución necesaria."
            ]
        };
        const defecto = textos[nombre];
        if (defecto) {
            if (!c.descripcion) c.descripcion = defecto[0];
            if (!c.medida) c.medida = defecto[1];
        }
        sincronizarIncidenciaBotiquin(nombre);
    } else {
        c.descripcion = "";
        c.medida = "";
        c.observaciones = "";
        c.foto = null;
        sincronizarIncidenciaBotiquin(nombre);
    }

    renderizarModuloBotiquin();
    actualizarDashboard();
}
function seleccionarFotografiaEnMemoria(callback) {
    /*
       Selector común de fotografías.
       - "Hacer foto": intenta abrir directamente la cámara trasera en móviles
         mediante capture="environment".
       - "Elegir archivo/foto": permite seleccionar una imagen existente desde
         galería, fotos, archivos, etc.
       Se mantiene un único flujo de lectura/validación para todas las partes
       de la aplicación que utilizan fotografías.
    */
    const overlay = document.createElement("div");
    overlay.id = "selector-fotografia-overlay";
    overlay.style.cssText = [
        "position:fixed",
        "inset:0",
        "z-index:99999",
        "background:rgba(0,0,0,.55)",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "padding:20px",
        "box-sizing:border-box"
    ].join(";");

    const panel = document.createElement("div");
    panel.style.cssText = [
        "background:#fff",
        "border-radius:14px",
        "padding:22px",
        "width:min(420px,100%)",
        "box-shadow:0 10px 35px rgba(0,0,0,.30)",
        "text-align:center",
        "box-sizing:border-box"
    ].join(";");

    const titulo = document.createElement("h3");
    titulo.textContent = "Añadir fotografía";
    titulo.style.margin = "0 0 10px";

    const ayuda = document.createElement("p");
    ayuda.textContent = "Puede hacer una fotografía nueva o seleccionar una imagen existente.";
    ayuda.style.cssText = "margin:0 0 18px;color:#555;line-height:1.4;";

    const zona = document.createElement("div");
    zona.style.cssText = "display:flex;flex-direction:column;gap:10px;";

    const btnCamara = document.createElement("button");
    btnCamara.type = "button";
    btnCamara.textContent = "📷 Hacer fotografía";
    btnCamara.style.cssText = "width:100%;padding:13px 16px;border:0;border-radius:9px;cursor:pointer;font-size:16px;font-weight:600;";

    const btnArchivo = document.createElement("button");
    btnArchivo.type = "button";
    btnArchivo.textContent = "🖼️ Elegir fotografía / archivo";
    btnArchivo.style.cssText = "width:100%;padding:13px 16px;border:1px solid #bbb;border-radius:9px;background:#fff;cursor:pointer;font-size:16px;font-weight:600;";

    const btnCancelar = document.createElement("button");
    btnCancelar.type = "button";
    btnCancelar.textContent = "Cancelar";
    btnCancelar.style.cssText = "width:100%;padding:10px 16px;border:0;background:transparent;cursor:pointer;font-size:14px;color:#666;";

    zona.appendChild(btnCamara);
    zona.appendChild(btnArchivo);
    zona.appendChild(btnCancelar);
    panel.appendChild(titulo);
    panel.appendChild(ayuda);
    panel.appendChild(zona);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);

    let cerrado = false;
    function cerrarSelector() {
        if (cerrado) return;
        cerrado = true;
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }

    function abrirInput(opcionCamara) {
        cerrarSelector();

        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        if (opcionCamara) {
            // En Android/iOS los navegadores compatibles ofrecen la cámara
            // trasera directamente. En otros dispositivos se mantiene el
            // comportamiento disponible del navegador.
            input.setAttribute("capture", "environment");
        }
        input.style.display = "none";

        input.addEventListener("change", function () {
            const archivo = input.files && input.files[0];
            if (!archivo) {
                input.remove();
                return;
            }

            const maxBytes = 8 * 1024 * 1024;
            if (archivo.size > maxBytes) {
                alert("La fotografía supera el límite de 8 MB. Seleccione una imagen de menor tamaño.");
                input.remove();
                return;
            }

            if (!archivo.type || !archivo.type.startsWith("image/")) {
                alert("El archivo seleccionado no es una imagen válida.");
                input.remove();
                return;
            }

            const lector = new FileReader();
            lector.onload = function () {
                callback({
                    id: "FOTO-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 7).toUpperCase(),
                    nombreArchivo: archivo.name,
                    tipo: archivo.type,
                    tamano: archivo.size,
                    dataUrl: lector.result,
                    fecha: new Date().toISOString(),
                    pendienteSubida: true
                });
                input.remove();
            };
            lector.onerror = function () {
                alert("No se ha podido leer la fotografía seleccionada.");
                input.remove();
            };
            lector.readAsDataURL(archivo);
        });

        document.body.appendChild(input);
        input.click();
    }

    btnCamara.addEventListener("click", function () {
        abrirInput(true);
    });

    btnArchivo.addEventListener("click", function () {
        abrirInput(false);
    });

    btnCancelar.addEventListener("click", cerrarSelector);
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) cerrarSelector();
    });
}

function obtenerFotografiasIncidencia(incidencia) {
    if (!incidencia) return [];

    // Formato actual: colección de fotografías.
    if (Array.isArray(incidencia.fotografias)) {
        return incidencia.fotografias.filter(Boolean);
    }

    // Compatibilidad con incidencias antiguas que almacenaban una sola foto.
    if (incidencia.foto) return [incidencia.foto];
    if (incidencia.fotografia) return [incidencia.fotografia];

    return [];
}

function eliminarFotografiaIncidenciaCentral(idIncidencia, idFoto) {
    const incidencia = auditoria.incidencias.find(i => i.id === idIncidencia);
    if (!incidencia) return;
    const fotos = obtenerFotografiasIncidencia(incidencia).filter(f => f.id !== idFoto);
    incidencia.fotografias = fotos;
    incidencia.foto = fotos.length ? fotos[0] : null;
    sincronizarIncidenciaConOrigen(incidencia);
    renderizarIncidencias();
}

function registrarFotoIncidenciaCentral(idIncidencia) {
    const incidencia = auditoria.incidencias.find(i => i.id === idIncidencia);
    if (!incidencia) return;

    seleccionarFotografiaEnMemoria(function (foto) {
        const fotos = obtenerFotografiasIncidencia(incidencia);
        fotos.push(foto);
        incidencia.fotografias = fotos;
        incidencia.foto = fotos[0] || null;
        sincronizarIncidenciaConOrigen(incidencia);
        renderizarIncidencias();
        actualizarDashboard();
    });
}

function sincronizarIncidenciaConOrigen(incidencia) {
    if (!incidencia) return;

    if (incidencia.origen === "VEHICULO" && incidencia.controlClave) {
        const c = auditoria.modulos.vehiculo.controles[incidencia.controlClave];
        if (c) {
            c.descripcion = incidencia.descripcion || "";
            c.medida = incidencia.medida || "";
            c.observaciones = incidencia.observaciones || "";
            c.fotografias = incidencia.fotografias || [];
        }
        return;
    }

    if (incidencia.modulo === "EXTINTOR" && incidencia.controlClave) {
        const c = auditoria.modulos.extintor.controles[incidencia.controlClave];
        if (c) {
            c.descripcion = incidencia.descripcion || "";
            c.medida = incidencia.medida || "";
            c.observaciones = incidencia.observaciones || "";
            c.foto = incidencia.foto || (incidencia.fotografias && incidencia.fotografias[0]) || null;
        }
        return;
    }

    if (incidencia.origen === "ESCALERAS" && incidencia.unidadEscaleraId && incidencia.controlClave) {
        const unidad = obtenerUnidadEscalera(incidencia.unidadEscaleraId);
        const c = unidad && unidad.controles[incidencia.controlClave];
        if (c) {
            c.descripcion = incidencia.descripcion || "";
            c.medida = incidencia.medida || "";
            c.observaciones = incidencia.observaciones || "";
            c.fotografias = incidencia.fotografias || [];
        }
        return;
    }

    if (incidencia.origen === "RADIO_EPIS" && incidencia.unidadId && incidencia.subcontrolClave) {
        const unidad = auditoria.modulos.radio.unidades[incidencia.unidadId];
        const sub = unidad && unidad.subcontroles && unidad.subcontroles[incidencia.subcontrolClave];
        if (sub) {
            sub.descripcion = incidencia.descripcion || "";
            sub.medida = incidencia.medida || "";
            sub.observaciones = incidencia.observaciones || "";
            sub.fotografias = incidencia.fotografias || [];
        }
        return;
    }

    if (incidencia.origen === "EPIS" && incidencia.controlClave) {
        const control = auditoria.modulos.epis.controles[incidencia.controlClave];
        if (!control) return;
        if (incidencia.unidadId && control.unidades && control.unidades[incidencia.unidadId]) {
            const sub = control.unidades[incidencia.unidadId].subcontroles[incidencia.subcontrolClave];
            if (sub) {
                sub.descripcion = incidencia.descripcion || "";
                sub.medida = incidencia.medida || "";
                sub.observaciones = incidencia.observaciones || "";
                sub.fotografias = incidencia.fotografias || [];
            }
        } else if (incidencia.subcontrolClave && control.subcontroles) {
            const sub = control.subcontroles[incidencia.subcontrolClave];
            if (sub) {
                sub.descripcion = incidencia.descripcion || "";
                sub.medida = incidencia.medida || "";
                sub.observaciones = incidencia.observaciones || "";
                sub.fotografias = incidencia.fotografias || [];
            }
        }
        return;
    }

    if (incidencia.modulo === "BOTIQUÍN" && incidencia.controlClave) {
        if (incidencia.controlClave.indexOf("ELEMENTO_") === 0) {
            const idElemento = incidencia.controlClave.substring("ELEMENTO_".length);
            const c = auditoria.modulos.botiquin.elementos[idElemento];
            if (c) {
                c.descripcion = incidencia.descripcion || "";
                c.medida = incidencia.medida || "";
                c.observaciones = incidencia.observaciones || "";
                c.fotografias = Array.isArray(incidencia.fotografias) ? incidencia.fotografias : (incidencia.foto ? [incidencia.foto] : []);
                c.foto = incidencia.foto || c.fotografias[0] || null;
            }
        } else {
            const c = auditoria.modulos.botiquin.controles[incidencia.controlClave];
            if (c) {
                c.descripcion = incidencia.descripcion || "";
                c.medida = incidencia.medida || "";
                c.observaciones = incidencia.observaciones || "";
                c.fotografias = Array.isArray(incidencia.fotografias) ? incidencia.fotografias : (incidencia.foto ? [incidencia.foto] : []);
                c.foto = incidencia.foto || c.fotografias[0] || null;
            }
        }
    }
}

function generarIdIncidencia() {
    return "INC-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function eliminarIncidenciaBotiquinControl(c) {
    if (!c || !Array.isArray(auditoria.incidencias)) return;
    if (c.incidenciaId) {
        const idx = auditoria.incidencias.findIndex(i => i.id === c.incidenciaId);
        if (idx >= 0) auditoria.incidencias.splice(idx, 1);
    }
    c.incidenciaId = null;
}

function actualizarDatoIncidenciaBotiquin(nombre, campo, valor) {
    const c = auditoria.modulos.botiquin.controles[nombre];
    if (!c) return;
    c[campo] = valor;
    sincronizarIncidenciaBotiquin(nombre);
}

function sincronizarIncidenciaBotiquin(nombre) {
    const c = auditoria.modulos.botiquin.controles[nombre];
    if (!c) return;
    if (!Array.isArray(auditoria.incidencias)) auditoria.incidencias = [];

    const idx = c.incidenciaId ? auditoria.incidencias.findIndex(i => i.id === c.incidenciaId) : -1;

    if (c.resultado === "INCORRECTO") {
        const inc = {
            id: c.incidenciaId || generarIdIncidencia(),
            origen: "BOTIQUIN",
            modulo: "BOTIQUÍN",
            controlClave: nombre,
            control: nombre,
            descripcion: c.descripcion || "",
            medida: c.medida || "",
            observaciones: c.observaciones || "",
            foto: c.foto || (Array.isArray(c.fotografias) ? c.fotografias[0] : null) || null,
            fotografias: Array.isArray(c.fotografias) ? c.fotografias : (c.foto ? [c.foto] : [])
        };
        c.incidenciaId = inc.id;
        if (idx >= 0) auditoria.incidencias[idx] = inc;
        else auditoria.incidencias.push(inc);
    } else {
        if (idx >= 0) auditoria.incidencias.splice(idx, 1);
        c.incidenciaId = null;
    }
}

function sincronizarIncidenciaElementoBotiquin(idElemento) {
    const c = auditoria.modulos.botiquin.elementos[idElemento];
    if (!c) return;
    if (!Array.isArray(auditoria.incidencias)) auditoria.incidencias = [];
    const item = obtenerElementosBotiquin().find(x => x.id === idElemento);
    const idx = c.incidenciaId ? auditoria.incidencias.findIndex(i => i.id === c.incidenciaId) : -1;

    if (c.resultado === "INCORRECTO") {
        const inc = {
            id: c.incidenciaId || generarIdIncidencia(),
            origen: "BOTIQUIN",
            modulo: "BOTIQUÍN",
            controlClave: `ELEMENTO_${idElemento}`,
            control: `ELEMENTO_${idElemento}`,
            descripcion: c.descripcion || `El elemento ${item ? item.nombre : idElemento} presenta una fecha no conforme.`,
            medida: c.medida || "Retirar y sustituir el material caducado antes de su utilización y reponer el botiquín.",
            observaciones: c.observaciones || "",
            foto: c.foto || (Array.isArray(c.fotografias) ? c.fotografias[0] : null) || null,
            fotografias: Array.isArray(c.fotografias) ? c.fotografias : (c.foto ? [c.foto] : [])
        };
        c.incidenciaId = inc.id;
        if (idx >= 0) auditoria.incidencias[idx] = inc;
        else auditoria.incidencias.push(inc);
    } else {
        if (idx >= 0) auditoria.incidencias.splice(idx, 1);
        c.incidenciaId = null;
    }
}
function actualizarDatoIncidenciaElementoBotiquin(idElemento, campo, valor) { const c = auditoria.modulos.botiquin.elementos[idElemento]; if (!c) return; c[campo] = valor; sincronizarIncidenciaElementoBotiquin(idElemento); }
function registrarFotoBotiquin(nombre) {
    const c = auditoria.modulos.botiquin.controles[nombre];
    if (!c) return;
    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        if (!Array.isArray(c.fotografias)) c.fotografias = c.foto ? [c.foto] : [];
        c.fotografias.push(foto);
        c.foto = c.fotografias[0] || null;
        sincronizarIncidenciaBotiquin(nombre);
        renderizarModuloBotiquin();
        actualizarDashboard();
    });
}
function registrarFotoElementoBotiquin(idElemento) {
    const c = auditoria.modulos.botiquin.elementos[idElemento];
    if (!c) return;
    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        if (!Array.isArray(c.fotografias)) c.fotografias = c.foto ? [c.foto] : [];
        c.fotografias.push(foto);
        c.foto = c.fotografias[0] || null;
        sincronizarIncidenciaElementoBotiquin(idElemento);
        renderizarModuloBotiquin();
        actualizarDashboard();
    });
}
function marcarModuloBotiquinNoAplica() {
    const b = auditoria.modulos.botiquin;
    if (!confirm("¿Marcar el módulo BOTIQUÍN como NO APLICA? Se conservarán los datos introducidos.")) return;
    b.estado = "NO_APLICA";
    actualizarEstadoModulo("botiquin", "NO_APLICA");
    actualizarDashboard();
    volverDashboard();
}

function reactivarModuloBotiquin() {
    const b = auditoria.modulos.botiquin;
    b.estado = "EN_CURSO";
    actualizarEstadoModulo("botiquin", "EN_CURSO");
    renderizarModuloBotiquin();
    actualizarDashboard();
}

function guardarBotiquin() { const b = auditoria.modulos.botiquin; if (b.dispone === null) { alert("Debe indicar si dispone de botiquín en el vehículo."); return; } if (b.dispone === false) { const c = b.controles.disponibilidad; if (!c || !c.descripcion.trim() || !c.medida.trim()) { alert("Al indicar que no se dispone de botiquín debe describir la deficiencia y la medida correctiva."); return; } sincronizarIncidenciaBotiquin("disponibilidad"); b.estado = "COMPLETADO"; actualizarDashboard(); alert("Módulo Botiquín completado con una incidencia."); volverDashboard(); return; } for (const item of obtenerElementosBotiquin()) { const c = b.elementos[item.id]; actualizarResultadoFechaBotiquin(item.id, false); if (c.resultado === "INCORRECTO" && (!c.descripcion.trim() || !c.medida.trim())) { alert(`Complete la descripción y la medida correctiva de la incidencia del elemento: ${item.nombre}.`); return; } if (c.resultado === "INCORRECTO") sincronizarIncidenciaElementoBotiquin(item.id); } for (const nombre of ["materialBuenEstado", "materialNoCaducado", "comunicacionDeficiencias"]) { const c = b.controles[nombre]; if (!c || !c.resultado) { alert("Debe completar todas las comprobaciones del botiquín."); return; } if (c.resultado === "INCORRECTO" && (!c.descripcion.trim() || !c.medida.trim())) { alert("Complete la descripción y la medida correctiva de las incidencias del botiquín."); return; } sincronizarIncidenciaBotiquin(nombre); } b.estado = "COMPLETADO"; actualizarDashboard(); alert("Módulo Botiquín completado correctamente."); volverDashboard(); }

/* =========================================================
   MÓDULO ESCALERAS
   ========================================================= */

function crearUnidadEscaleraVacia(tipo = "") {

    return {
        id: "ESC-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
        tipo: tipo || "",
        datos: {
            fabricante: "",
            modelo: "",
            identificacion: "",
            observaciones: ""
        },
        controles: {},
        fotografiasIdentificacion: {
            pegatinaRevision1: null,
            pegatinaRevision2: null,
            placaIdentificativa1: null,
            placaIdentificativa2: null
        },
        estado: "EN_CURSO"
    };
}


function obtenerUnidadEscalera(idUnidad) {

    const escaleras = auditoria.modulos.escaleras;

    if (!Array.isArray(escaleras.unidades)) {
        return null;
    }

    return escaleras.unidades.find(unidad => unidad.id === idUnidad) || null;
}


function inicializarControlesUnidadEscalera(unidad) {

    if (!unidad.controles || typeof unidad.controles !== "object") {
        unidad.controles = {};
    }

    const controles = [
        "estadoGeneral",
        "peldaños",
        "largueros",
        "unionesFijaciones",
        "ausenciaDanios",
        "estabilidad",
        "apoyos",
        "superficieAntideslizante",
        "sujecionFijacion",
        "protecciones",
        "accesoDescenso",
        "ausenciaObstaculos"
    ];

    controles.forEach(nombre => {
        if (!unidad.controles[nombre]) {
            unidad.controles[nombre] = {
                resultado: "CORRECTO",
                descripcion: "",
                medida: "",
                observaciones: "",
                fotografias: []
            };
        }

        const control = unidad.controles[nombre];
        if (!Array.isArray(control.fotografias)) control.fotografias = [];
        if (!control.resultado) control.resultado = "CORRECTO";
        if (typeof control.descripcion !== "string") control.descripcion = "";
        if (typeof control.medida !== "string") control.medida = "";
        if (typeof control.observaciones !== "string") control.observaciones = "";
    });
}


function inicializarFotografiasIdentificacionEscalera(unidad) {
    if (!unidad.fotografiasIdentificacion || typeof unidad.fotografiasIdentificacion !== "object") {
        unidad.fotografiasIdentificacion = {};
    }
    const claves = ["pegatinaRevision1", "pegatinaRevision2", "placaIdentificativa1", "placaIdentificativa2"];
    claves.forEach(clave => {
        if (!unidad.fotografiasIdentificacion[clave] || typeof unidad.fotografiasIdentificacion[clave] !== "object") {
            unidad.fotografiasIdentificacion[clave] = null;
        }
    });
}

function obtenerEtiquetaFotografiaEscalera(clave) {
    const etiquetas = {
        pegatinaRevision1: "Fotografía pegatina revisión 1",
        pegatinaRevision2: "Fotografía pegatina revisión 2",
        placaIdentificativa1: "Fotografía placa identificativa 1",
        placaIdentificativa2: "Fotografía placa identificativa 2"
    };
    return etiquetas[clave] || clave;
}

function renderizarFotografiasIdentificacionEscalera(unidad) {
    inicializarFotografiasIdentificacionEscalera(unidad);
    const claves = ["pegatinaRevision1", "pegatinaRevision2", "placaIdentificativa1", "placaIdentificativa2"];
    return `
        <div class="card escalera-fotografias-card">
            <h4>Fotografías de identificación — Escalera</h4>
            <p class="vehicle-help">Puede añadir hasta 4 fotografías asociadas exclusivamente a esta escalera.</p>
            <div class="form-grid">
                ${claves.map(clave => {
                    const foto = unidad.fotografiasIdentificacion[clave];
                    const etiqueta = obtenerEtiquetaFotografiaEscalera(clave);
                    return `
                        <div class="field">
                            <label>${escapeHtml(etiqueta)}</label>
                            ${foto && foto.dataUrl ? `
                                <div class="photo-preview" style="margin:6px 0;">
                                    <img src="${foto.dataUrl}" alt="${escapeHtml(etiqueta)}" style="max-width:220px;max-height:160px;display:block;border-radius:6px;object-fit:contain;">
                                    <small>${escapeHtml(foto.nombreArchivo || etiqueta)}</small>
                                    <br><button type="button" class="secondary-button" onclick="eliminarFotoIdentificacionEscalera('${unidad.id}','${clave}')">Eliminar fotografía</button>
                                </div>` : `
                                <button type="button" class="secondary-button" onclick="registrarFotoIdentificacionEscalera('${unidad.id}','${clave}')">📷 Añadir fotografía</button>
                                <small>Opcional. Se recomienda fotografiar claramente la identificación correspondiente.</small>`}
                        </div>`;
                }).join("")}
            </div>
        </div>
    `;
}

function registrarFotoIdentificacionEscalera(idUnidad, clave) {
    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad) return;
    inicializarFotografiasIdentificacionEscalera(unidad);
    const etiqueta = obtenerEtiquetaFotografiaEscalera(clave);
    seleccionarFotografiaEnMemoria(function (foto) {
        foto.descripcion = etiqueta;
        unidad.fotografiasIdentificacion[clave] = foto;
        renderizarModuloEscaleras();
        actualizarDashboard();
    });
}

function eliminarFotoIdentificacionEscalera(idUnidad, clave) {
    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad) return;
    inicializarFotografiasIdentificacionEscalera(unidad);
    unidad.fotografiasIdentificacion[clave] = null;
    renderizarModuloEscaleras();
    actualizarDashboard();
}

function inicializarEscaleras() {

    const escaleras = auditoria.modulos.escaleras;

    if (!Array.isArray(escaleras.unidades)) {

        const unidad = crearUnidadEscaleraVacia(escaleras.tipo || "");

        if (escaleras.datos) {
            unidad.datos = {
                fabricante: escaleras.datos.fabricante || "",
                modelo: escaleras.datos.modelo || "",
                identificacion: escaleras.datos.identificacion || "",
                observaciones: escaleras.datos.observaciones || ""
            };
        }

        if (escaleras.controles && typeof escaleras.controles === "object") {
            unidad.controles = escaleras.controles;
        }

        escaleras.unidades = [unidad];
    }

    if (typeof escaleras.dispone === "undefined") {
        escaleras.dispone = null;
    }

    escaleras.unidades.forEach(unidad => {
        if (!unidad.id) unidad.id = "ESC-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8);
        if (!unidad.datos) {
            unidad.datos = { fabricante: "", modelo: "", identificacion: "", observaciones: "" };
        }
        inicializarControlesUnidadEscalera(unidad);
        inicializarFotografiasIdentificacionEscalera(unidad);
    });
}


function renderizarModuloEscaleras() {

    inicializarEscaleras();

    const contenido = document.getElementById("contenidoModulo");
    const escaleras = auditoria.modulos.escaleras;

    if (!contenido) return;

    let html = `
        <div class="card">
            <h3>¿Se dispone de escalera?</h3>
            <p class="vehicle-help">
                Indique si durante la actividad auditada se dispone de una o varias escaleras que deban ser comprobadas.
            </p>
            <div class="radio-group">
                <label class="radio-option">
                    <input type="radio" name="escaleraDispone" value="SI"
                        ${escaleras.dispone === true ? "checked" : ""}
                        onchange="cambiarDisponibilidadEscalera('SI')">
                    <span>Sí</span>
                </label>
                <label class="radio-option">
                    <input type="radio" name="escaleraDispone" value="NO"
                        ${escaleras.dispone === false ? "checked" : ""}
                        onchange="cambiarDisponibilidadEscalera('NO')">
                    <span>No</span>
                </label>
            </div>
        </div>
    `;

    if (escaleras.dispone === null || typeof escaleras.dispone === "undefined") {
        html += `<div class="card"><p>Seleccione <strong>Sí</strong> o <strong>No</strong> para continuar.</p></div>`;
        contenido.innerHTML = html;
        return;
    }

    if (escaleras.dispone === false) {
        escaleras.estado = "NO_APLICA";
        html += `
            <div class="card vehicle-not-applicable">
                <h3>ESCALERAS — NO APLICA</h3>
                <p>Se ha indicado que no se dispone de escalera que deba ser comprobada en esta auditoría.</p>
            </div>
            <div class="vehicle-actions">
                <button type="button" class="btn-primary" onclick="guardarEscaleras()">Guardar módulo</button>
                <button type="button" class="btn-secondary" onclick="volverDashboard()">Volver al dashboard</button>
            </div>
        `;
        contenido.innerHTML = html;
        actualizarDashboard();
        return;
    }

    escaleras.estado = "EN_CURSO";

    html += `
        <div class="card">
            <h3>Escaleras a comprobar</h3>
            <p class="vehicle-help">
                Puede añadir todas las unidades que existan en la actividad. Cada escalera se identifica y comprueba de forma independiente.
            </p>
            <button type="button" class="btn-primary" onclick="agregarUnidadEscalera()">+ Añadir escalera</button>
        </div>
    `;

    escaleras.unidades.forEach((unidad, indice) => {
        html += renderizarUnidadEscalera(unidad, indice);
    });

    html += `
        <div class="vehicle-actions">
            <button type="button" class="btn-primary" onclick="guardarEscaleras()">Guardar módulo</button>
            <button type="button" class="btn-secondary" onclick="volverDashboard()">Volver al dashboard</button>
        </div>
    `;

    contenido.innerHTML = html;
    actualizarDashboard();
}


function renderizarUnidadEscalera(unidad, indice) {

    inicializarControlesUnidadEscalera(unidad);

    let html = `
        <div class="card escalera-unidad-card">
            <h3>Escalera ${indice + 1}</h3>
            <div class="field">
                <label>Tipo de escalera *</label>
                <select onchange="cambiarTipoUnidadEscalera('${unidad.id}', this.value)">
                    <option value="">Seleccionar...</option>
                    <option value="INTERIOR" ${unidad.tipo === "INTERIOR" ? "selected" : ""}>Interior</option>
                    <option value="EXTERIOR" ${unidad.tipo === "EXTERIOR" ? "selected" : ""}>Exterior</option>
                    <option value="FARONE" ${unidad.tipo === "FARONE" ? "selected" : ""}>Tipo Farone</option>
                    <option value="OTRAS" ${unidad.tipo === "OTRAS" ? "selected" : ""}>Otras</option>
                </select>
            </div>
    `;

    if (indice > 0) {
        html += `
            <button type="button" class="btn-secondary" onclick="eliminarUnidadEscalera('${unidad.id}')">
                Eliminar esta escalera
            </button>
        `;
    }

    if (!unidad.tipo) {
        html += `<p>Seleccione el tipo de esta escalera para continuar con su identificación y comprobaciones.</p></div>`;
        return html;
    }

    html += renderizarDatosUnidadEscalera(unidad);
    html += renderizarFotografiasIdentificacionEscalera(unidad);
    html += `<h4>Comprobaciones — Escalera ${indice + 1}</h4><p class="vehicle-help">Seleccione CORRECTO, INCORRECTO o NO PROCEDE.</p>`;

    obtenerControlesEscalera(unidad.tipo).forEach(nombre => {
        html += crearControlUnidadEscalera(unidad, nombre);
    });

    html += `</div>`;
    return html;
}


function renderizarDatosUnidadEscalera(unidad) {

    const datos = unidad.datos || {};

    return `
        <div class="card">
            <h4>Identificación de la escalera</h4>
            <div class="form-grid">
                <div class="field">
                    <label>Fabricante</label>
                    <input type="text" value="${escapeHtml(datos.fabricante || "")}"
                        oninput="actualizarDatoUnidadEscalera('${unidad.id}', 'fabricante', this.value)">
                </div>
                <div class="field">
                    <label>Modelo / referencia</label>
                    <input type="text" value="${escapeHtml(datos.modelo || "")}"
                        oninput="actualizarDatoUnidadEscalera('${unidad.id}', 'modelo', this.value)">
                </div>
                <div class="field">
                    <label>Identificación / inventario</label>
                    <input type="text" value="${escapeHtml(datos.identificacion || "")}"
                        oninput="actualizarDatoUnidadEscalera('${unidad.id}', 'identificacion', this.value)">
                </div>
            </div>
            <div class="field">
                <label>Observaciones generales</label>
                <textarea rows="3" oninput="actualizarDatoUnidadEscalera('${unidad.id}', 'observaciones', this.value)">${escapeHtml(datos.observaciones || "")}</textarea>
            </div>
        </div>
    `;
}


function agregarUnidadEscalera() {

    const escaleras = auditoria.modulos.escaleras;
    inicializarEscaleras();

    escaleras.dispone = true;
    escaleras.estado = "EN_CURSO";
    escaleras.unidades.push(crearUnidadEscaleraVacia());

    renderizarModuloEscaleras();
    actualizarDashboard();
}


function eliminarUnidadEscalera(idUnidad) {

    const escaleras = auditoria.modulos.escaleras;
    if (!Array.isArray(escaleras.unidades) || escaleras.unidades.length <= 1) {
        alert("Debe existir al menos una escalera.");
        return;
    }

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad) return;

    Object.keys(unidad.controles || {}).forEach(nombre => {
        eliminarIncidenciaUnidadEscalera(idUnidad, nombre);
    });

    escaleras.unidades = escaleras.unidades.filter(item => item.id !== idUnidad);
    escaleras.estado = "EN_CURSO";
    renderizarModuloEscaleras();
    actualizarDashboard();
}


function cambiarDisponibilidadEscalera(valor) {

    const escaleras = auditoria.modulos.escaleras;

    if (valor === "SI") {
        escaleras.dispone = true;
        escaleras.estado = "EN_CURSO";
        inicializarEscaleras();
        if (!escaleras.unidades.length) escaleras.unidades.push(crearUnidadEscaleraVacia());
    } else if (valor === "NO") {
        escaleras.dispone = false;
        escaleras.estado = "NO_APLICA";
    }

    renderizarModuloEscaleras();
    actualizarDashboard();
}


function obtenerControlesEscalera(tipo) {

    const generales = [
        "estadoGeneral", "peldaños", "largueros", "unionesFijaciones", "ausenciaDanios", "estabilidad"
    ];
    const usoSeguro = [
        "apoyos", "superficieAntideslizante", "sujecionFijacion", "protecciones", "accesoDescenso", "ausenciaObstaculos"
    ];

    if (["INTERIOR", "EXTERIOR", "FARONE", "OTRAS"].includes(tipo)) return generales.concat(usoSeguro);
    return [];
}


function cambiarTipoUnidadEscalera(idUnidad, tipo) {

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad) return;

    unidad.tipo = tipo || "";
    auditoria.modulos.escaleras.estado = "EN_CURSO";
    inicializarControlesUnidadEscalera(unidad);
    renderizarModuloEscaleras();
    actualizarDashboard();
}


function actualizarDatoUnidadEscalera(idUnidad, campo, valor) {

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad || !unidad.datos) return;

    if (Object.prototype.hasOwnProperty.call(unidad.datos, campo)) {
        unidad.datos[campo] = valor;
    }
    auditoria.modulos.escaleras.estado = "EN_CURSO";
}


function crearControlUnidadEscalera(unidad, nombre) {

    const control = unidad.controles[nombre];
    if (!control) return "";

    const incorrecto = control.resultado === "INCORRECTO";
    const id = unidad.id + "_" + nombre;

    return `
        <div class="vehicle-control">
            <div class="vehicle-control-main">
                <div class="vehicle-control-text">${escapeHtml(obtenerNombreControlEscalera(nombre))}</div>
                <div class="vehicle-result-group">
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" name="escalera_${id}" value="CORRECTO"
                                ${control.resultado === "CORRECTO" ? "checked" : ""}
                                onchange="cambiarResultadoUnidadEscalera('${unidad.id}', '${nombre}', 'CORRECTO')">
                            <span>CORRECTO</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="escalera_${id}" value="INCORRECTO"
                                ${incorrecto ? "checked" : ""}
                                onchange="cambiarResultadoUnidadEscalera('${unidad.id}', '${nombre}', 'INCORRECTO')">
                            <span>INCORRECTO</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" name="escalera_${id}" value="NO_PROCEDE"
                                ${control.resultado === "NO_PROCEDE" ? "checked" : ""}
                                onchange="cambiarResultadoUnidadEscalera('${unidad.id}', '${nombre}', 'NO_PROCEDE')">
                            <span>NO PROCEDE</span>
                        </label>
                    </div>
                </div>
            </div>
            ${incorrecto ? `
                <div class="vehicle-incident-detail">
                    <div class="vehicle-incident-inner">
                        <div class="vehicle-incident-title">INCIDENCIA DETECTADA</div>
                        <div class="field">
                            <label>Descripción de la incidencia</label>
                            <textarea rows="3" oninput="actualizarDatoIncidenciaUnidadEscalera('${unidad.id}', '${nombre}', 'descripcion', this.value)">${escapeHtml(control.descripcion)}</textarea>
                        </div>
                        <div class="field">
                            <label>Medida correctiva</label>
                            <textarea rows="3" oninput="actualizarDatoIncidenciaUnidadEscalera('${unidad.id}', '${nombre}', 'medida', this.value)">${escapeHtml(control.medida)}</textarea>
                        </div>
                        <div class="field">
                            <label>Observaciones</label>
                            <textarea rows="3" oninput="actualizarDatoIncidenciaUnidadEscalera('${unidad.id}', '${nombre}', 'observaciones', this.value)">${escapeHtml(control.observaciones)}</textarea>
                        </div>
                        <button type="button" class="secondary-button" onclick="registrarFotoUnidadEscalera('${unidad.id}', '${nombre}')">Añadir fotografía</button>
                        <small>La fotografía es opcional.</small>
                    </div>
                </div>
            ` : ""}
        </div>
    `;
}


function cambiarResultadoUnidadEscalera(idUnidad, nombre, resultado) {

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad || !unidad.controles[nombre]) return;

    const control = unidad.controles[nombre];
    control.resultado = resultado;
    auditoria.modulos.escaleras.estado = "EN_CURSO";

    if (resultado === "INCORRECTO") {
        crearIncidenciaUnidadEscalera(idUnidad, nombre);
    } else {
        eliminarIncidenciaUnidadEscalera(idUnidad, nombre);
        control.descripcion = "";
        control.medida = "";
        control.observaciones = "";
        control.fotografias = [];
    }

    renderizarModuloEscaleras();
    actualizarDashboard();
}


function actualizarDatoIncidenciaUnidadEscalera(idUnidad, nombre, campo, valor) {

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad || !unidad.controles[nombre]) return;

    const control = unidad.controles[nombre];
    if (["descripcion", "medida", "observaciones"].includes(campo)) control[campo] = valor;
    actualizarIncidenciaUnidadEscalera(idUnidad, nombre);
}


function crearIncidenciaUnidadEscalera(idUnidad, nombre) {

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad || !unidad.controles[nombre]) return null;

    const control = unidad.controles[nombre];
    const id = "ESCALERAS_" + idUnidad + "_" + nombre;
    let incidencia = auditoria.incidencias.find(item => item.id === id);

    if (!incidencia) {
        incidencia = {
            id,
            origen: "ESCALERAS",
            modulo: "ESCALERAS",
            unidadEscaleraId: idUnidad,
            controlClave: nombre,
            control: obtenerNombreControlEscalera(nombre),
            resultado: "INCORRECTO",
            descripcion: control.descripcion || "",
            medida: control.medida || "",
            observaciones: control.observaciones || "",
            fotografias: control.fotografias || [],
            estado: "ABIERTA"
        };
        auditoria.incidencias.push(incidencia);
    } else {
        incidencia.descripcion = control.descripcion || "";
        incidencia.medida = control.medida || "";
        incidencia.observaciones = control.observaciones || "";
        incidencia.fotografias = control.fotografias || [];
        incidencia.estado = "ABIERTA";
    }

    control.incidenciaId = id;
    return incidencia;
}


function actualizarIncidenciaUnidadEscalera(idUnidad, nombre) {
    const incidencia = crearIncidenciaUnidadEscalera(idUnidad, nombre);
    if (incidencia) actualizarDashboard();
}


function eliminarIncidenciaUnidadEscalera(idUnidad, nombre) {

    const id = "ESCALERAS_" + idUnidad + "_" + nombre;
    auditoria.incidencias = auditoria.incidencias.filter(item => item.id !== id);

    const unidad = obtenerUnidadEscalera(idUnidad);
    if (unidad && unidad.controles[nombre]) unidad.controles[nombre].incidenciaId = null;
}


function registrarFotoUnidadEscalera(idUnidad, nombre) {
    const unidad = obtenerUnidadEscalera(idUnidad);
    if (!unidad || !unidad.controles[nombre]) return;
    const control = unidad.controles[nombre];
    if (!Array.isArray(control.fotografias)) control.fotografias = [];

    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        control.fotografias.push(foto);
        actualizarIncidenciaUnidadEscalera(idUnidad, nombre);
        renderizarModuloEscaleras();
        actualizarDashboard();
    });
}


function obtenerNombreControlEscalera(nombre) {

    const nombres = {
        estadoGeneral: "Estado general de la escalera",
        peldaños: "Peldaños en buen estado",
        largueros: "Largueros o perfiles en buen estado",
        unionesFijaciones: "Uniones, elementos de unión y fijaciones en buen estado",
        ausenciaDanios: "Ausencia de deformaciones, fisuras o daños relevantes",
        estabilidad: "Estabilidad adecuada",
        apoyos: "Apoyos adecuados",
        superficieAntideslizante: "Superficie antideslizante cuando corresponde",
        sujecionFijacion: "Sistema de sujeción o fijación adecuado cuando es necesario",
        protecciones: "Barandillas y protecciones adecuadas cuando corresponden",
        accesoDescenso: "Acceso y descenso seguros",
        ausenciaObstaculos: "Ausencia de obstáculos o condiciones que dificulten la utilización"
    };

    return nombres[nombre] || nombre;
}


function guardarEscaleras() {

    const escaleras = auditoria.modulos.escaleras;

    if (escaleras.dispone === false) {
        escaleras.estado = "NO_APLICA";
        actualizarDashboard();
        alert("Módulo ESCALERAS marcado como NO APLICA.");
        volverDashboard();
        return;
    }

    if (escaleras.dispone !== true) {
        alert("Debe indicar primero si se dispone de escalera: Sí o No.");
        return;
    }

    if (!Array.isArray(escaleras.unidades) || !escaleras.unidades.length) {
        alert("Debe añadir al menos una escalera para poder completar el módulo.");
        return;
    }

    for (let i = 0; i < escaleras.unidades.length; i++) {

        const unidad = escaleras.unidades[i];
        inicializarControlesUnidadEscalera(unidad);

        if (!unidad.tipo) {
            alert("Debe seleccionar el tipo de la escalera " + (i + 1) + ".");
            return;
        }

        const controles = obtenerControlesEscalera(unidad.tipo);
        for (const nombre of controles) {
            const control = unidad.controles[nombre];

            if (!control || !control.resultado) {
                alert("Debe completar todas las comprobaciones de la escalera " + (i + 1) + ".");
                return;
            }

            if (control.resultado === "INCORRECTO" && !control.descripcion.trim()) {
                alert("Debe describir la deficiencia de la escalera " + (i + 1) + ": " + obtenerNombreControlEscalera(nombre));
                return;
            }

            if (control.resultado === "INCORRECTO" && !control.medida.trim()) {
                alert("Debe indicar la medida correctiva de la escalera " + (i + 1) + ": " + obtenerNombreControlEscalera(nombre));
                return;
            }
        }

        unidad.estado = "COMPLETADO";
    }

    escaleras.estado = "COMPLETADO";
    actualizarDashboard();
    alert("Módulo ESCALERAS completado correctamente.");
    volverDashboard();
}


/* =========================================================
   RADIO — EPIs ESPECÍFICOS
   Los EPIs generales se comprueban en el módulo EPIs.
   Este módulo contiene únicamente los EPIs adicionales de RADIO.
   ========================================================= */

function obtenerEstructuraRadio() {
    return {
        dobleCaboAbsorbedor: {
            nombre: "Doble Cabo con absorbedor",
            multiple: false,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca / fabricante",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad de cintas, costuras y elementos textiles",
                conectores: "Conectores, mosquetones y elementos de unión en buen estado",
                absorbedor: "Absorbedor de energía en buen estado y sin activación",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apto y operativo para el uso previsto"
            }
        },
        tripodeRescate: {
            nombre: "Equipo de Rescate para trabajos en altura",
            multiple: false,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                estructura: "Estructura, patas y elementos telescópicos en buen estado",
                cabezal: "Cabezal y puntos de conexión en buen estado",
                fijaciones: "Pasadores, fijaciones y elementos de bloqueo en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apto y operativo para el uso previsto"
            }
        },
        cuerdaPosicionamiento: {
            nombre: "Cuerda de posicionamiento",
            multiple: false,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad de la cuerda y ausencia de desgaste, cortes o deterioro",
                costuras: "Costuras y terminaciones en buen estado",
                conectores: "Conectores y elementos de unión en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apta y operativa para el uso previsto"
            }
        },
        cintaExpress: {
            nombre: "Cinta Express",
            multiple: true,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                cinta: "Cinta, costuras y elementos textiles en buen estado",
                mosquetones: "Mosquetones y sistemas de cierre en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apta y operativa para el uso previsto"
            }
        },
        antitrauma: {
            nombre: "Antitrauma",
            multiple: true,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad y ausencia de daños o deterioro",
                cintasSujecion: "Cintas y elementos de sujeción en buen estado",
                ajuste: "Sistema de ajuste y regulación en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apto y operativo para el uso previsto"
            }
        },
        pertiga: {
            nombre: "Pértiga",
            multiple: false,
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad y ausencia de grietas, roturas o deterioro",
                aislamiento: "Estado del material aislante y sus elementos de protección",
                accesorios: "Accesorios y terminales en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apta y operativa para el uso previsto"
            }
        },

    };
}


function obtenerConfiguracionPlantillaRadio(unidad) {
    if (!unidad) return null;
    const fabricante = normalizarFabricante(unidad.campos ? unidad.campos.marca : "");
    if (fabricante === "MIGUEL_MIRANDA") {
        if (unidad.tipo === "dobleCaboAbsorbedor") return {
            tipoOficial: "ABSORBEDOR / CABO CON DOBLE ANCLAJE",
            documentoOficial: "INSPECCIÓN VISUAL E.P.I. ABSORBEDOR",
            norma: "EN 355",
            plantillaClave: "MIGUEL_MIRANDA_ABSORBEDOR",
            resultadoControlDefault: "OK",
            opcionesControl: ["OK", "NO_OK", "NP"],
            controles: [
                ["A1", "Absorbedor: cinta"], ["A2", "Absorbedor: gazas"], ["A3", "Absorbedor: retráctil"],
                ["B1", "Mosquetón: cuerpo"], ["B2", "Mosquetón: cierre"], ["B3", "Mosquetón: seguro"], ["B4", "Mosquetón: muelle"],
                ["C1", "Elemento de amarre: gazas"], ["C2", "Elemento de amarre: cuerda"],
                ["D1", "Etiquetado: absorbedor"], ["D2", "Etiquetado: mosquetón"],
                ["E1", "F. informativo: absorbedor"], ["E2", "F. informativo: mosquetón"]
            ]
        };
    }
    if (fabricante === "IRUDEK") {
        const mapa = {
            dobleCaboAbsorbedor: "absorbedor",
            tripodeRescate: "lazoSalvamento",
            cuerdaPosicionamiento: "cuerda"
        };
        const clave = mapa[unidad.tipo];
        if (clave && CATALOGO_PLANTILLAS_FABRICANTES.IRUDEK[clave]) {
            const plantilla = CATALOGO_PLANTILLAS_FABRICANTES.IRUDEK[clave];
            return {
                resultadoControlDefault: CATALOGO_PLANTILLAS_FABRICANTES.IRUDEK.resultadoControlDefault,
                opcionesControl: CATALOGO_PLANTILLAS_FABRICANTES.IRUDEK.opcionesControl,
                ...plantilla
            };
        }
    }
    return null;
}

function obtenerTiposRadio() {
    return Object.keys(obtenerEstructuraRadio());
}

function crearUnidadRadio(tipo, numero) {
    const definicion = obtenerEstructuraRadio()[tipo];
    const unidad = {
        id: "RADIO_" + tipo + "_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
        tipo: tipo,
        numero: numero || 1,
        campos: {},
        subcontroles: {},
        revisionFabricante: crearRevisionFabricanteVacia(),
        estadoElemento: "ACTIVO"
    };

    Object.keys(definicion.campos || {}).forEach(campo => {
        unidad.campos[campo] = "";
    });

    Object.keys(definicion.controles || {}).forEach(clave => {
        unidad.subcontroles[clave] = {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            incidenciaId: null,
            fotografias: []
        };
    });

    return unidad;
}

function inicializarRadio() {
    const radio = auditoria.modulos.radio;
    const estructura = obtenerEstructuraRadio();

    if (!radio.unidades || typeof radio.unidades !== "object") {
        radio.unidades = {};
    }

    Object.keys(estructura).forEach(tipo => {
        if (!estructura[tipo].multiple) {
            const existente = Object.values(radio.unidades).find(u => u.tipo === tipo);
            if (!existente) {
                const unidad = crearUnidadRadio(tipo, 1);
                radio.unidades[unidad.id] = unidad;
            }
        }
    });

    Object.values(radio.unidades).forEach(unidad => {
        const definicion = estructura[unidad.tipo];
        if (!definicion) return;

        if (!unidad.campos || typeof unidad.campos !== "object") unidad.campos = {};
        unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
        inicializarRevisionFabricante(unidad, obtenerConfiguracionPlantillaRadio(unidad));
        Object.keys(definicion.campos || {}).forEach(campo => {
            if (typeof unidad.campos[campo] !== "string") unidad.campos[campo] = "";
        });

        if (!unidad.subcontroles || typeof unidad.subcontroles !== "object") unidad.subcontroles = {};
        Object.keys(definicion.controles || {}).forEach(clave => {
            if (!unidad.subcontroles[clave]) {
                unidad.subcontroles[clave] = {
                    resultado: "CORRECTO",
                    descripcion: "",
                    medida: "",
                    observaciones: "",
                    incidenciaId: null,
                    fotografias: []
                };
            }
            const sub = unidad.subcontroles[clave];
            if (!sub.resultado) sub.resultado = "CORRECTO";
            if (typeof sub.descripcion !== "string") sub.descripcion = "";
            if (typeof sub.medida !== "string") sub.medida = "";
            if (typeof sub.observaciones !== "string") sub.observaciones = "";
            if (!Array.isArray(sub.fotografias)) sub.fotografias = [];
        });
    });
}

function obtenerUnidadesRadioPorTipo(tipo) {
    inicializarRadio();
    return Object.values(auditoria.modulos.radio.unidades).filter(u => u.tipo === tipo);
}

function agregarUnidadRadio(tipo) {
    const definicion = obtenerEstructuraRadio()[tipo];
    if (!definicion || !definicion.multiple) return;

    const existentes = obtenerUnidadesRadioPorTipo(tipo);
    const unidad = crearUnidadRadio(tipo, existentes.length + 1);
    auditoria.modulos.radio.unidades[unidad.id] = unidad;
    auditoria.modulos.radio.estado = "EN_CURSO";
    renderizarModuloRadio();
    actualizarDashboard();
}

function eliminarUnidadRadio(id) {
    const radio = auditoria.modulos.radio;
    const unidad = radio.unidades[id];
    if (!unidad) return;

    const definicion = obtenerEstructuraRadio()[unidad.tipo];
    if (!definicion.multiple) return;

    Object.keys(unidad.subcontroles || {}).forEach(clave => {
        eliminarIncidenciaRadio(id, clave);
    });

    delete radio.unidades[id];
    obtenerUnidadesRadioPorTipo(unidad.tipo).forEach((item, index) => item.numero = index + 1);
    radio.estado = "EN_CURSO";
    renderizarModuloRadio();
    actualizarDashboard();
}

function actualizarCampoRadio(id, campo, valor) {
    const unidad = auditoria.modulos.radio.unidades[id];
    const definicion = unidad ? obtenerEstructuraRadio()[unidad.tipo] : null;
    if (!unidad || !definicion || !Object.prototype.hasOwnProperty.call(definicion.campos || {}, campo)) return;
    unidad.campos[campo] = valor;
    if (campo === "marca") {
        const configuracion = obtenerConfiguracionPlantillaRadio(unidad);
        const fabricante = normalizarFabricante(valor);
        const plantillaNueva = configuracion ? configuracion.plantillaClave : "";
        const revisionAnterior = unidad.revisionFabricante || {};
        if (normalizarFabricante(revisionAnterior.fabricante || "") !== fabricante || (revisionAnterior.plantillaClave || "") !== plantillaNueva) {
            unidad.revisionFabricante = crearRevisionFabricanteVacia();
        }
        if (configuracion && !String(unidad.campos.norma || "").trim()) unidad.campos.norma = configuracion.norma;
        if (configuracion) {
            inicializarRevisionFabricante(unidad, configuracion);
            unidad.revisionFabricante.fabricante = fabricante;
            unidad.revisionFabricante.plantillaClave = configuracion.plantillaClave;
        }
    }
    auditoria.modulos.radio.estado = "EN_CURSO";
}

function cambiarResultadoRadio(id, claveSub, resultado) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;

    const sub = unidad.subcontroles[claveSub];
    sub.resultado = resultado;
    auditoria.modulos.radio.estado = "EN_CURSO";

    if (resultado === "INCORRECTO") {
        crearIncidenciaRadio(id, claveSub);
    } else {
        eliminarIncidenciaRadio(id, claveSub);
        sub.descripcion = "";
        sub.medida = "";
        sub.observaciones = "";
        sub.fotografias = [];
    }

    renderizarModuloRadio();
    actualizarDashboard();
}

function crearIncidenciaRadio(id, claveSub) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return null;

    const definicion = obtenerEstructuraRadio()[unidad.tipo];
    const sub = unidad.subcontroles[claveSub];
    const nombreEpi = definicion.nombre + (definicion.multiple ? " #" + unidad.numero : "");
    const idIncidencia = "RADIO_" + id + "_" + claveSub;
    let incidencia = auditoria.incidencias.find(item => item.id === idIncidencia);

    if (!incidencia) {
        incidencia = {
            id: idIncidencia,
            origen: "RADIO_EPIS",
            modulo: "RADIO — EPIs específicos",
            controlClave: unidad.tipo,
            unidadId: id,
            subcontrolClave: claveSub,
            control: nombreEpi,
            subcontrol: definicion.controles[claveSub],
            resultado: "INCORRECTO",
            descripcion: sub.descripcion || "",
            medida: sub.medida || "",
            observaciones: sub.observaciones || "",
            fotografias: sub.fotografias || [],
            estado: "ABIERTA"
        };
        auditoria.incidencias.push(incidencia);
    } else {
        incidencia.descripcion = sub.descripcion || "";
        incidencia.medida = sub.medida || "";
        incidencia.observaciones = sub.observaciones || "";
        incidencia.fotografias = sub.fotografias || [];
        incidencia.estado = "ABIERTA";
    }

    sub.incidenciaId = idIncidencia;
    return incidencia;
}

function eliminarIncidenciaRadio(id, claveSub) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;

    const sub = unidad.subcontroles[claveSub];
    const idIncidencia = "RADIO_" + id + "_" + claveSub;
    auditoria.incidencias = auditoria.incidencias.filter(item => item.id !== idIncidencia);
    sub.incidenciaId = null;
}

function actualizarIncidenciaRadio(id, claveSub) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const sub = unidad.subcontroles[claveSub];
    if (sub.resultado !== "INCORRECTO") return;
    const incidencia = crearIncidenciaRadio(id, claveSub);
    if (!incidencia) return;
    incidencia.descripcion = sub.descripcion || "";
    incidencia.medida = sub.medida || "";
    incidencia.observaciones = sub.observaciones || "";
    incidencia.fotografias = sub.fotografias || [];
    actualizarDashboard();
}

function actualizarDatoIncidenciaRadio(id, claveSub, campo, valor) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    if (["descripcion", "medida", "observaciones"].includes(campo)) {
        unidad.subcontroles[claveSub][campo] = valor;
        actualizarIncidenciaRadio(id, claveSub);
    }
}

function registrarFotoRadio(id, claveSub) {
    const unidad = auditoria.modulos.radio.unidades[id];
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const sub = unidad.subcontroles[claveSub];
    if (!Array.isArray(sub.fotografias)) sub.fotografias = [];

    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        sub.fotografias.push(foto);
        actualizarIncidenciaRadio(id, claveSub);
        renderizarModuloRadio();
        actualizarDashboard();
    });
}

function renderizarControlRadio(id, claveSub, definicion, sub) {
    const incorrecto = sub.resultado === "INCORRECTO";
    return `
        <div class="vehicle-control radio-epi-control">
            <div class="vehicle-control-main">
                <div class="vehicle-control-text"><strong>${escapeHtml(definicion)}</strong></div>
                <div class="vehicle-result-group">
                    <div class="radio-group">
                        <label class="radio-option"><input type="radio" name="radio_${id}_${claveSub}" value="CORRECTO" ${sub.resultado === "CORRECTO" ? "checked" : ""} onchange="cambiarResultadoRadio('${id}', '${claveSub}', 'CORRECTO')"><span>CORRECTO</span></label>
                        <label class="radio-option"><input type="radio" name="radio_${id}_${claveSub}" value="INCORRECTO" ${incorrecto ? "checked" : ""} onchange="cambiarResultadoRadio('${id}', '${claveSub}', 'INCORRECTO')"><span>INCORRECTO</span></label>
                        <label class="radio-option"><input type="radio" name="radio_${id}_${claveSub}" value="NO_PROCEDE" ${sub.resultado === "NO_PROCEDE" ? "checked" : ""} onchange="cambiarResultadoRadio('${id}', '${claveSub}', 'NO_PROCEDE')"><span>NO PROCEDE</span></label>
                    </div>
                </div>
            </div>
            ${incorrecto ? `
                <div class="vehicle-incident-detail">
                    <div class="vehicle-incident-inner">
                        <div class="vehicle-incident-title">INCIDENCIA DETECTADA</div>
                        <div class="field"><label>Descripción de la incidencia *</label><textarea rows="3" oninput="actualizarDatoIncidenciaRadio('${id}', '${claveSub}', 'descripcion', this.value)">${escapeHtml(sub.descripcion)}</textarea></div>
                        <div class="field"><label>Medida correctiva *</label><textarea rows="3" oninput="actualizarDatoIncidenciaRadio('${id}', '${claveSub}', 'medida', this.value)">${escapeHtml(sub.medida)}</textarea></div>
                        <div class="field"><label>Observaciones</label><textarea rows="3" oninput="actualizarDatoIncidenciaRadio('${id}', '${claveSub}', 'observaciones', this.value)">${escapeHtml(sub.observaciones)}</textarea></div>
                        <button type="button" class="secondary-button" onclick="registrarFotoRadio('${id}', '${claveSub}')">Añadir fotografía</button>
                        <small>La fotografía es opcional.</small>
                    </div>
                </div>` : ""}
        </div>`;
}

function renderizarUnidadRadio(unidad) {
    const definicion = obtenerEstructuraRadio()[unidad.tipo];
    unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
    const nombreElemento = (definicion.nombre || unidad.tipo) + (definicion.multiple ? " #" + unidad.numero : "");
    let html = `<div class="card epi-card radio-epi-card"><h3>${escapeHtml(nombreElemento)}</h3>`;
    html += renderizarSelectorEstadoElemento(unidad.estadoElemento, `cambiarEstadoElementoRadio('${unidad.id}', `, nombreElemento);

    if (definicion.multiple && unidad.tipo === "otros") {
        html += `<p class="vehicle-help">Describa el elemento adicional de Radio.</p>`;
    }

    if (Object.keys(definicion.campos || {}).length) {
        html += `<div class="card epi-identificacion"><h4>Datos del elemento</h4><div class="form-grid">`;
        Object.keys(definicion.campos).forEach(campo => {
            const esFecha = ["fechaFabricacion", "fechaCompra", "fechaPrimerUso"].includes(campo);
            const eventoCampo = campo === "marca"
                ? `onchange="actualizarCampoRadio('${unidad.id}', '${campo}', this.value); renderizarModuloRadio();"`
                : `oninput="actualizarCampoRadio('${unidad.id}', '${campo}', this.value)"`;
            html += `<div class="field"><label>${escapeHtml(definicion.campos[campo])}${campo === "descripcionElemento" ? " *" : ""}</label><input type="${esFecha ? "date" : "text"}" value="${escapeHtml(unidad.campos[campo] || "")}" ${eventoCampo}></div>`;
        });
        html += `</div></div>`;
    }

    if (unidad.estadoElemento === "ACTIVO") {
        Object.keys(definicion.controles).forEach(claveSub => {
            html += renderizarControlRadio(unidad.id, claveSub, definicion.controles[claveSub], unidad.subcontroles[claveSub]);
        });
        const configRadioFabricante = obtenerConfiguracionPlantillaRadio(unidad);
        if (configRadioFabricante) {
            inicializarRevisionFabricante(unidad);
            html += renderizarRevisionFabricante(unidad, unidad.tipo, unidad.id, configRadioFabricante);
        }
    } else {
        html += `<div class="vehicle-help" style="margin-top:8px;"><strong>${textoEstadoElemento(unidad.estadoElemento)}</strong>${unidad.estadoElemento === "NO_DISPONIBLE" ? " — se ha generado automáticamente una inconformidad." : " — no se realizan los controles de este elemento."}</div>`;
    }

    if (definicion.multiple) {
        html += `<div class="vehicle-actions"><button type="button" class="btn-secondary" onclick="eliminarUnidadRadio('${unidad.id}')">Eliminar este elemento</button></div>`;
    }

    html += `</div>`;
    return html;
}

function renderizarModuloRadio() {
    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;

    const actividad = auditoria.datosGenerales.actividad || "";
    if (actividad !== "RADIO") {
        auditoria.modulos.radio.estado = "NO_APLICA";
        contenido.innerHTML = `<div class="card vehicle-not-applicable"><h3>RADIO — NO APLICA</h3><p>Este apartado es específico de la actividad RADIO.</p></div>`;
        return;
    }

    inicializarRadio();
    if (auditoria.modulos.radio.estado === "NO_APLICA") {
        contenido.innerHTML = `
            <div class="card vehicle-not-applicable">
                <h3>RADIO — NO APLICA</h3>
                <p>Se ha indicado que esta auditoría no requiere la revisión de los EPIs específicos de RADIO.</p>
                <div class="vehicle-actions">
                    <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
                    <button type="button" class="secondary-button" onclick="reactivarModuloRadio()">Reactivar módulo RADIO</button>
                </div>
            </div>
            <div class="module-nav-bottom">
                <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
            </div>`;
        return;
    }

    const estructura = obtenerEstructuraRadio();
    let html = `
        <div class="module-intro">
            <h3>EPIs específicos de RADIO</h3>
            <p>Este apartado contiene únicamente los EPIs adicionales de los trabajos de Radio. Los EPIs generales se comprueban en el módulo EPIs y no se repiten aquí.</p>
        </div>`;

    Object.keys(estructura).forEach(tipo => {
        const definicion = estructura[tipo];
        const unidades = obtenerUnidadesRadioPorTipo(tipo);
        unidades.forEach(unidad => { html += renderizarUnidadRadio(unidad); });
        if (definicion.multiple) {
            html += `<div class="card"><button type="button" class="primary-button" onclick="agregarUnidadRadio('${tipo}')">+ Añadir ${escapeHtml(definicion.nombre)}</button></div>`;
        }
    });

    html += `<div class="card">
        <div class="vehicle-actions">
            <button type="button" class="secondary-button" onclick="marcarModuloRadioNoAplica()">Marcar RADIO como NO APLICA</button>
            <button type="button" class="primary-button" onclick="guardarRadio()">Guardar EPIs específicos de RADIO y completar módulo</button>
            <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
        </div>
    </div>`;
    contenido.innerHTML = html;
    marcarResultadosPositivosFabricanteEnDOM(contenido);
}

function marcarModuloRadioNoAplica() {
    if (auditoria.datosGenerales.actividad !== "RADIO") {
        auditoria.modulos.radio.estado = "NO_APLICA";
        actualizarDashboard();
        volverDashboard();
        return;
    }
    if (!confirm("¿Marcar el módulo RADIO como NO APLICA? No se realizará la revisión de sus EPIs específicos.")) return;
    auditoria.modulos.radio.estado = "NO_APLICA";
    actualizarDashboard();
    volverDashboard();
}

function reactivarModuloRadio() {
    auditoria.modulos.radio.estado = "NO_INICIADO";
    actualizarDashboard();
    renderizarModuloRadio();
}

function guardarRadio() {
    const radio = auditoria.modulos.radio;
    if (auditoria.datosGenerales.actividad !== "RADIO") return;
    inicializarRadio();

    for (const unidad of Object.values(radio.unidades)) {
        const definicion = obtenerEstructuraRadio()[unidad.tipo];
        if (!definicion) continue;
        unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
        if (unidad.estadoElemento !== "ACTIVO") {
            if (unidad.estadoElemento === "NO_DISPONIBLE") crearIncidenciaNoDisponibleRadio(unidad.id);
            else eliminarIncidenciaNoDisponibleRadio(unidad.id);
            continue;
        }

        if (unidad.tipo === "otros" && !String(unidad.campos.descripcionElemento || "").trim()) {
            alert("Debe indicar la descripción del elemento en el apartado OTROS.");
            return;
        }

        for (const claveSub of Object.keys(definicion.controles)) {
            const sub = unidad.subcontroles[claveSub];
            if (!sub || !sub.resultado) {
                alert("Debe completar todas las comprobaciones de RADIO: " + definicion.nombre + " — " + definicion.controles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO" && !String(sub.descripcion || "").trim()) {
                alert("Debe describir la deficiencia: " + definicion.nombre + " — " + definicion.controles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO" && !String(sub.medida || "").trim()) {
                alert("Debe indicar la medida correctiva: " + definicion.nombre + " — " + definicion.controles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO") actualizarIncidenciaRadio(unidad.id, claveSub);
            else eliminarIncidenciaRadio(unidad.id, claveSub);
        }
        const configRadio = obtenerConfiguracionPlantillaRadio(unidad);
        if (configRadio) {
            inicializarRevisionFabricante(unidad, configRadio);
            const selectVeredicto = document.getElementById("veredicto_mfr_" + String(unidad.tipo || "").replace(/[^A-Za-z0-9_-]/g, "_") + "_" + String(unidad.id || "").replace(/[^A-Za-z0-9_-]/g, "_"));
            if (selectVeredicto && selectVeredicto.value) {
                unidad.revisionFabricante.resultado = selectVeredicto.value;
            }
            if (!unidad.revisionFabricante.resultado) {
                alert("Debe indicar el veredicto de la revisión del fabricante de " + definicion.nombre + (definicion.multiple ? " #" + unidad.numero : "") + ".");
                return;
            }
        }
    }

    radio.estado = "COMPLETADO";
    actualizarDashboard();
    alert("Módulo RADIO — EPIs específicos completado correctamente.");
    volverDashboard();
}


/* =========================================================
   EPIs — TELECOMUNICACIONES / ALARMAS
   ========================================================= */

function episEsAplicable() {

    const actividad =
        auditoria.datosGenerales.actividad || "";

    return actividad === "TELECOMUNICACIONES" ||
           actividad === "ALARMA" ||
           actividad === "RADIO";
}


/* =========================================================
   EPIs — TELECOMUNICACIONES / ALARMAS
   Cada EPI tiene comprobaciones independientes.
   ========================================================= */

function obtenerEstructuraEpis() {

    return {
        casco: {
            nombre: "Casco de seguridad",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general del casco",
                fechaVidaUtil: "Fecha de fabricación / vida útil identificable",
                integridad: "Integridad del casco y ausencia de daños",
                barbuquejo: "Barbuquejo, cuando sea necesario"
            }
        },
        guantes: {
            nombre: "Guantes de protección",
            campos: {},
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Ausencia de cortes, desgarros o deterioro",
                adecuacion: "Adecuación al riesgo y al trabajo realizado",
                tallaAjuste: "Talla y ajuste adecuados"
            }
        },
        guantesDielectricos: {
            nombre: "Guantes dieléctricos",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general de los guantes",
                integridad: "Integridad y ausencia de cortes, perforaciones, grietas o deterioro",
                marcadoIdentificacion: "Marcado, identificación y talla legibles",
                adecuacionElectrica: "Adecuación para el riesgo eléctrico y clase/categoría correspondiente"
            }
        },
        gafas: {
            nombre: "Gafas de protección",
            campos: {},
            controles: {
                estadoGeneral: "Estado general",
                lentes: "Pantallas/lentes sin daños que comprometan la protección",
                montura: "Montura y patillas en buen estado",
                adecuacion: "Adecuación al riesgo"
            }
        },
        calzado: {
            nombre: "Calzado de seguridad",
            campos: {},
            controles: {
                estadoGeneral: "Estado general",
                suela: "Suela y dibujo en buen estado",
                integridad: "Ausencia de roturas o deterioro",
                cierreAjuste: "Cierre y ajuste adecuados"
            }
        },
        chaleco: {
            nombre: "Chaleco de alta visibilidad",
            campos: {},
            controles: {
                estadoGeneral: "Estado general",
                bandas: "Bandas de alta visibilidad en buen estado",
                integridad: "Ausencia de roturas o deterioro relevante",
                cierreAjuste: "Cierre y ajuste adecuados"
            }
        },
        portaherramientas: {
            nombre: "Portaherramientas",
            campos: {},
            controles: {
                estadoGeneral: "Estado general",
                sujeciones: "Elementos de sujeción y bolsillos en buen estado",
                herramientasSujetas: "Capacidad de mantener las herramientas sujetas",
                usoAdecuado: "Uso adecuado, sin sustituirlo por mochila/bandolera cuando sea exigible"
            }
        },
        arnes: {
            nombre: "Arnés de seguridad",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca / fabricante",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                tejidoCorreas: "Tejido / correas",
                etiquetas: "Etiquetas y marcados identificativos",
                costuras: "Costuras",
                hebillas: "Hebillas",
                piezasMecanicas: "Piezas mecánicas",
                argollasD: "Argollas D / anillos de anclaje",
                proteccionesConfort: "Protecciones / elementos de confort",
                funcionamiento: "Funcionamiento",
                operativo: "Operativo"
            }
        },
        lineaVida: {
            nombre: "Línea de vida",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca / fabricante",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad del sistema y ausencia de daños",
                anclajes: "Puntos de anclaje y elementos de conexión en buen estado",
                componentes: "Componentes y elementos de unión en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apta y operativa para el uso previsto"
            }
        },
        amarre: {
            nombre: "Elemento de amarre / cabo de anclaje",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca / fabricante",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad del elemento y ausencia de daños",
                tejidoCorrea: "Tejido / correa",
                etiquetas: "Etiquetas y marcados identificativos",
                costuras: "Costuras",
                anillasAnclaje: "Anillas / conectores de anclaje",
                operativo: "Apto y operativo para el uso previsto"
            }
        },
        dispositivoAnticaidasDeslizante: {
            nombre: "Dispositivo anticaídas deslizante",
            campos: {
                fechaFabricacion: "Fecha de fabricación",
                fechaCompra: "Fecha de compra",
                fechaPrimerUso: "Fecha de primer uso",
                marca: "Marca / fabricante",
                modelo: "Modelo",
                numeroSerie: "Nº de serie",
                numeroLote: "Nº de lote",
                numeroEpi: "Nº de EPI",
                norma: "Norma"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad y ausencia de daños o deformaciones",
                mecanismo: "Mecanismo de bloqueo y desplazamiento en buen estado",
                conectores: "Conectores y elementos de unión en buen estado",
                identificacion: "Marcado e identificación legibles",
                operativo: "Apto y operativo para el uso previsto"
            }
        },
        absorbedor: {
            nombre: "Absorbedor de energía",
            multiple: true,
            campos: { fechaFabricacion: "Fecha de fabricación", fechaCompra: "Fecha de compra", fechaPrimerUso: "Fecha de primer uso", marca: "Marca / fabricante", modelo: "Modelo", numeroSerie: "Nº de serie", numeroLote: "Nº de lote", numeroEpi: "Nº de EPI", norma: "Norma" },
            controles: { estadoGeneral: "Estado general", integridad: "Integridad del absorbedor y elementos textiles", conectores: "Conectores y elementos metálicos", identificacion: "Marcado e identificación legibles", operativo: "Apto y operativo para el uso previsto" }
        },
        cintaAnclaje: {
            nombre: "Cinta de anclaje",
            multiple: true,
            campos: { fechaFabricacion: "Fecha de fabricación", fechaCompra: "Fecha de compra", fechaPrimerUso: "Fecha de primer uso", marca: "Marca / fabricante", modelo: "Modelo", numeroSerie: "Nº de serie", numeroLote: "Nº de lote", numeroEpi: "Nº de EPI", norma: "Norma" },
            controles: { estadoGeneral: "Estado general", cinta: "Cinta y elementos textiles", costuras: "Costuras", anillas: "Anillas de anclaje", protecciones: "Protecciones" }
        },
        conector: {
            nombre: "Conector",
            multiple: true,
            campos: { fechaFabricacion: "Fecha de fabricación", fechaCompra: "Fecha de compra", fechaPrimerUso: "Fecha de primer uso", marca: "Marca / fabricante", modelo: "Modelo", numeroSerie: "Nº de serie", numeroLote: "Nº de lote", numeroEpi: "Nº de EPI", norma: "Norma" },
            controles: { cuerpo: "Cuerpo", cierre: "Puerta, cierre y virola", funcionamientoVirola: "Funcionamiento de la virola", muelle: "Muelle de retorno de la puerta o cierre" }
        },
        cuerda: {
            nombre: "Cuerda",
            multiple: true,
            campos: { fechaFabricacion: "Fecha de fabricación", fechaCompra: "Fecha de compra", fechaPrimerUso: "Fecha de primer uso", marca: "Marca / fabricante", modelo: "Modelo", numeroSerie: "Nº de serie", numeroLote: "Nº de lote", numeroEpi: "Nº de EPI", norma: "Norma" },
            controles: { etiqueta: "Etiqueta identificativa", funda: "Funda", costuras: "Costuras de seguridad", alma: "Alma", nudos: "Nudos de tope", protecciones: "Protecciones", hebillas: "Hebillas", posicionador: "Aparato posicionador", conectores: "Conectores" }
        },
        lazoSalvamento: {
            nombre: "Lazo de salvamento",
            multiple: true,
            campos: { fechaFabricacion: "Fecha de fabricación", fechaCompra: "Fecha de compra", fechaPrimerUso: "Fecha de primer uso", marca: "Marca / fabricante", modelo: "Modelo", numeroSerie: "Nº de serie", numeroLote: "Nº de lote", numeroEpi: "Nº de EPI", norma: "Norma" },
            controles: { etiqueta: "Etiqueta identificativa", cintas: "Cintas", costuras: "Costuras de seguridad", anillas: "Anillas de anclaje", telaAltaResistencia: "Tela de alta resistencia" }
        },
        otros: {
            nombre: "Otros EPIs",
            multiple: true,
            campos: {
                descripcionElemento: "Descripción del elemento",
                marca: "Marca",
                modelo: "Modelo",
                numeroSerie: "Nº de serie"
            },
            controles: {
                estadoGeneral: "Estado general",
                integridad: "Integridad y ausencia de daños o deterioro",
                identificacion: "Identificación del elemento legible, cuando proceda",
                funcionamiento: "Funcionamiento correcto, cuando proceda",
                adecuacion: "Adecuación al uso previsto"
            }
        }
    };
}


/* =========================================================
   CATÁLOGO DOCUMENTAL DE FABRICANTES
   Fase 2 — Miguel Miranda + IRUDEK + PATAchO
   La configuración es extensible a otros fabricantes.
   No genera PDFs todavía: únicamente identifica la plantilla
   y los controles oficiales que deberán alimentarla.
   ========================================================= */

const CATALOGO_PLANTILLAS_FABRICANTES = {
    MIGUEL_MIRANDA: {
        fabricanteNombre: "MIGUEL MIRANDA",
        resultadoControlDefault: "OK",
        opcionesControl: ["OK", "NO_OK", "NP"],
        arnes: {
            tipoOficial: "ARNES ANTICAÍDAS",
            documentoOficial: "INSPECCIÓN VISUAL E.P.I. ARNÉS ANTICAÍDAS",
            norma: "EN 361",
            plantillaClave: "MIGUEL_MIRANDA_ARNES",
            controles: [
                ["A", "Costuras"],
                ["B", "Cinta principal"],
                ["C1", "P. enganches: dorsal"],
                ["C2", "P. enganches: abdominal"],
                ["D", "Cintas secundarias"],
                ["E", "Sistema abroche"],
                ["F", "Etiquetado"],
                ["G", "F. informativo"],
                ["H1", "Accesorios: broche"],
                ["H2", "Accesorios: pasador"]
            ]
        },
        amarre: {
            tipoOficial: "ELEMENTO DE AMARRE ANTICAÍDAS",
            documentoOficial: "INSPECCIÓN VISUAL E.P.I. ELEMENTO AMARRE ANTICAÍDAS",
            norma: "EN 354",
            plantillaClave: "MIGUEL_MIRANDA_ELEMENTO_AMARRE",
            controles: [
                ["A", "Cuerda"],
                ["B", "Protector tubular"],
                ["C", "Gazas"],
                ["D", "Regulador"],
                ["E", "Etiquetado"],
                ["F", "F. informativo"]
            ]
        },
        dispositivoAnticaidasDeslizante: {
            tipoOficial: "DISPOSITIVO ANTICAÍDAS DESLIZANTE",
            documentoOficial: "INSPECCIÓN VISUAL E.P.I. DISPOSITIVOS ANTICAÍDAS",
            norma: "EN 353-2",
            plantillaClave: "MIGUEL_MIRANDA_ANTICAIDAS_DESLIZANTE",
            controles: [
                ["1", "Número de serie y marcado"],
                ["2", "Vida útil"],
                ["3", "Cuerpo"],
                ["4", "Bordes del orificio de conexión"],
                ["5", "Rueda bloqueadora"],
                ["6", "Rueda bloqueadora"],
                ["7", "Brazo"],
                ["8", "Botón, muelle y tornillo del sistema de bloqueo"],
                ["9", "Deslizamiento correcto por cuerda compatible"],
                ["10", "Bloqueo correcto"]
            ]
        },
        lineaVida: {
            tipoOficial: "LÍNEA DE VIDA TEMPORAL DE ANCLAJE",
            documentoOficial: "INSPECCIÓN VISUAL E.P.I. LÍNEA DE VIDA TRANSPORTABLE",
            norma: "EN 795",
            plantillaClave: "MIGUEL_MIRANDA_LINEA_VIDA",
            controles: [
                ["A1", "Tensor: tornillería"],
                ["A2", "Tensor: pasadores"],
                ["A3", "Tensor: mando"],
                ["A4", "Tensor: bloqueo"],
                ["B1", "Línea anclaje: costuras"],
                ["B2", "Línea anclaje: cinta tramo corto"],
                ["B3", "Línea anclaje: cinta tramo largo"],
                ["B4", "Línea anclaje: gazas"],
                ["C", "Etiquetado"],
                ["D", "F. informativo"],
                ["E1", "Accesorios: bolsa"]
            ]
        }
    },
    PATACHO: {
        fabricanteNombre: "PATAchO",
        arnes: {
            tipoOficial: "ARNÉS ANTICAÍDAS PATACHO EPI-301/4",
            documentoOficial: "CHECKLIST DE REVISIÓN SEGÚN MANUAL PATACHO EPI-301/4",
            norma: "EN 361:2002",
            plantillaClave: "PATACHO_ARNES_EPI301_4",
            resultadoControlDefault: "CORRECTO",
            opcionesControl: ["CORRECTO", "INCORRECTO", "NO_PROCEDE"],
            tipoRevision: "CHECKLIST_MANUAL",
            controles: [
                ["A1", "Cintas: sin cortes, deshilachaduras, quemaduras, abrasión u otros daños"],
                ["A2", "Costuras: sin cortes ni deshilachaduras"],
                ["A3", "Partes metálicas: sin corrosión ni deformación"],
                ["A4", "Partes plásticas: sin daños visibles"],
                ["A5", "Conexiones a los puntos de enganche en buen estado"],
                ["A6", "Hebillas y elementos de ajuste/cierre correctamente ajustados y cerrados"],
                ["A7", "Enganche dorsal y puntos de enganche correctamente posicionados"],
                ["A8", "Identificación, fecha de fabricación y vida útil dentro del periodo establecido"],
                ["A9", "Revisión anual obligatoria realizada cuando corresponda"]
            ]
        },
        amarre: {
            tipoOficial: "ELEMENTO DE AMARRE PATACHO",
            documentoOficial: "CHECKLIST DE REVISIÓN SEGÚN MANUAL PATACHO EPI-301/4",
            norma: "EN 354:2010",
            plantillaClave: "PATACHO_AMARRE_EN354",
            resultadoControlDefault: "CORRECTO",
            opcionesControl: ["CORRECTO", "INCORRECTO", "NO_PROCEDE"],
            tipoRevision: "CHECKLIST_MANUAL",
            controles: [
                ["A1", "Elemento de amarre: sin cortes, quemaduras, abrasión, deshilachados u otros daños"],
                ["A2", "Costuras y terminaciones en buen estado"],
                ["A3", "Partes metálicas y conectores sin corrosión ni deformación"],
                ["A4", "Conexiones y puntos de unión en buen estado"],
                ["A5", "Compatibilidad con el arnés, absorbedor y conectores"],
                ["A6", "Longitud y configuración del conjunto conforme a las instrucciones del fabricante"],
                ["A7", "Identificación y vida útil dentro del periodo establecido"]
            ]
        },
        conector: {
            tipoOficial: "CONECTOR / MOSQUETÓN PATACHO",
            documentoOficial: "CHECKLIST DE REVISIÓN SEGÚN MANUAL PATACHO EPI-301/4",
            norma: "EN 362:2005",
            plantillaClave: "PATACHO_CONECTOR_EN362",
            resultadoControlDefault: "CORRECTO",
            opcionesControl: ["CORRECTO", "INCORRECTO", "NO_PROCEDE"],
            tipoRevision: "CHECKLIST_MANUAL",
            controles: [
                ["A1", "Cuerpo y elementos metálicos sin corrosión ni deformación"],
                ["A2", "Cierre correctamente cerrado y bloqueado"],
                ["A3", "Conector correctamente posicionado en el punto de enganche"],
                ["A4", "Compatibilidad con las argollas y lazos de conexión"],
                ["A5", "Sin tendencia a permanecer en una posición incorrecta"],
                ["A6", "Funcionamiento correcto del sistema de apertura/cierre"],
                ["A7", "Identificación y estado general adecuados"]
            ]
        }
    },
    IRUDEK: {
        fabricanteNombre: "IRUDEK",
        resultadoControlDefault: "B",
        opcionesControl: ["B", "AV", "R", "M", "NP"],
        arnes: {
            tipoOficial: "ARNÉS", documentoOficial: "FICHA DE VERIFICACIÓN EPI — ARNÉS", norma: "EN 361", plantillaClave: "IRUDEK_ARNES",
            controles: [
                ["SEG1", "Estado etiqueta identificativa"],
                ["SEG2", "Estado de las cintas (cortes, perforaciones, marcas de productos químicos, pintura)"],
                ["SEG3", "Estado de las costuras de seguridad (hilos cortados, levantados, invisibles)"],
                ["SEG4", "Estado de las anillas de anclaje (deformación, marca, corrosión)"],
                ["SEG5", "Estado de las hebillas de cierre (deformación, marca, corrosión)"],
                ["SEG6", "Estado de las protecciones"],
                ["SEG7", "Estado placa dorsal (cortes, perforaciones)"],
                ["SEG8", "Compatibilidad y estado del conector (ver ficha conector)"],
                ["CONF1", "Estado del acolchado posterior de la cintura, perneras, chaleco, placa dorsal, separador, porta material, pasadores"],
                ["CONF2", "Estado de las costuras de sujeción"],
                ["CONF3", "Estado cinta de extensión (cosidos, cortes, perforaciones, marcas de productos químicos, pintura)"],
                ["CONF4", "Cinta para bloqueador ventral"],
                ["CONF5", "Estado cosidos de confort"],
                ["FUNC1", "La cinta está pasada correctamente por las hebillas de cierre"],
                ["FUNC2", "Funcionamiento de los elementos de regulación"],
                ["FUNC3", "Funcionamiento del muelle de retorno de las hebillas automáticas"]
            ]
        },
        absorbedor: {
            tipoOficial: "ABSORBEDOR DE ENERGÍA", documentoOficial: "FICHA DE VERIFICACIÓN EPI — ABSORBEDOR DE ENERGÍA", norma: "EN 355", plantillaClave: "IRUDEK_ABSORBEDOR",
            controles: [
                ["TXT1", "Estado etiqueta identificativa"], ["TXT2", "Estado embutido: cortes, perforaciones, desgaste, productos químicos…"], ["TXT3", "Estado cinta: cortes, perforaciones, pintura…"], ["TXT4", "Estado guardacabos textiles"], ["TXT5", "Estado de la funda: cortes, perforaciones, quemaduras, desgastes…"], ["TXT6", "Estado de las costuras de seguridad (cosido horizontal)"], ["TXT7", "Estado del alma: puntos duros, puntos blandos…"], ["TXT8", "Estado de los nudos: forma, estado, protección…"], ["TXT9", "Estado de las protecciones plásticas"], ["TXT10", "Estado cinta elástica: cortes, perforaciones, pintura, elasticidad…"],
                ["MET1", "Estado hebillas: corrosión, deformación…"], ["MET2", "Estado aparato posicionador: muelle, muelas, correcto bloqueo…"], ["MET3", "Estados conectores: muelle, virolas, cierre…"]
            ]
        },
        dispositivoAnticaidasDeslizante: {
            tipoOficial: "ANTICAÍDAS DESLIZANTES", documentoOficial: "FICHA DE VERIFICACIÓN EPI — ANTICAÍDAS DESLIZANTES", norma: "EN 353", plantillaClave: "IRUDEK_ANTICAIDAS_DESLIZANTE",
            controles: [
                ["SEG1", "Estado impresión de la información del equipo"], ["SEG2", "Estado cuerpo: corrosión, desgaste, fisuras…"], ["SEG3", "Estado bloqueador (muelas): corrosión, desgaste, fisuras"], ["SEG4", "Estado pines de sujeción"], ["SEG5", "Estado absorbedor de energía"], ["SEG6", "Estado muelles"],
                ["FUNC1", "Estado puerta de apertura para cuerda/cable: giro, cierre…"], ["FUNC2", "Estado pieza posicionadora"], ["FUNC3", "Deslizamiento y bloqueos correctos del aparato"]
            ]
        },
        casco: {
            tipoOficial: "CASCO", documentoOficial: "FICHA DE VERIFICACIÓN EPI — CASCO", norma: "EN 397", plantillaClave: "IRUDEK_CASCO",
            controles: [
                ["SEG1", "Estado de la carcasa: deformación, desgaste, grietas, marcas, quemaduras, huellas de productos químicos"],
                ["SEG2", "Estado atalaje: atalaje circular, cintas, costuras, pasador, hebillas de cierre"],
                ["SEG3", "Estado de los elementos de fijación del atalaje: clips, remaches, patillas triangulares de fijación de la carcasa"],
                ["CONF1", "Estado del acolchado interior"], ["CONF2", "Estado de los ganchos para linterna frontal"],
                ["FUNC1", "Funcionamiento de la regulación del atalaje"], ["FUNC2", "Funcionamiento de la regulación de la nuca"], ["FUNC3", "Funcionamiento de la apertura, del cierre y de la regulación del barboquejo"]
            ]
        },
        cintaAnclaje: {
            tipoOficial: "CINTA DE ANCLAJE", documentoOficial: "FICHA DE VERIFICACIÓN EPI — CINTA DE ANCLAJE", norma: "EN 795 B", plantillaClave: "IRUDEK_CINTA_ANCLAJE",
            controles: [["SEG1", "Estado etiqueta identificativa"], ["SEG2", "Estado de las cintas (cortes, perforaciones, marcas de productos químicos, pintura)"], ["SEG3", "Estado de las costuras de seguridad (hilos cortados, levantados, invisibles)"], ["SEG4", "Estado de las anillas de anclaje (deformación, marca, corrosión)"], ["SEG5", "Estado de las protecciones de la cinta"]]
        },
        conector: {
            tipoOficial: "CONECTOR", documentoOficial: "FICHA DE VERIFICACIÓN EPI — CONECTOR", norma: "EN 362", plantillaClave: "IRUDEK_CONECTOR",
            controles: [["SEG1", "Estado del cuerpo (C): oxidación, deformación, desgaste, corrosión, fisuras"], ["SEG2", "Estado puerta o cierre y virola: oxidación, deformación, desgaste, corrosión, fisuras"], ["FUNC1", "Verificación funcionamiento de la virola (rosca, ¼ vuelta o triple acción)"], ["FUNC2", "Funcionamiento muelle de retorno de la puerta o cierre"]]
        },
        cuerda: {
            tipoOficial: "CUERDA", documentoOficial: "FICHA DE VERIFICACIÓN EPI — CUERDA", norma: "EN 354", plantillaClave: "IRUDEK_CUERDA",
            controles: [["TXT1", "Estado etiqueta identificativa"], ["TXT2", "Estado de la funda: cortes, perforaciones, quemaduras, desgastes…"], ["TXT3", "Estado de las costuras de seguridad (cosido horizontal)"], ["TXT4", "Estado del alma: puntos duros, puntos blandos…"], ["TXT5", "Estado de los nudos de tope: forma, estado, protección…"], ["TXT6", "Estado de las protecciones"], ["MET1", "Estado hebillas: corrosión, deformación…"], ["MET2", "Estado aparato posicionador: muelle, muelas, correcto bloqueo…"], ["MET3", "Estado conectores: muelle, virolas, cierre…"]]
        },
        lineaVida: {
            tipoOficial: "LÍNEA DE VIDA PORTÁTIL", documentoOficial: "FICHA DE VERIFICACIÓN EPI — LÍNEA DE VIDA PORTÁTIL", norma: "EN 795 B", plantillaClave: "IRUDEK_LINEA_VIDA_PORTATIL",
            controles: [["TXT1", "Estado etiqueta identificativa"], ["TXT2", "Estado de las costuras de seguridad"], ["TXT3", "Estado de la bolsa"], ["TXT4", "Estado de la cinta: cortes, perforaciones, pintura…"], ["MET1", "Estado conectores: corrosión, deformación…"], ["MET2", "Estado ratchet/carraca: corrosiones, muelas, palanca, muelles…"], ["FUNC1", "Funcionamiento ratchet/carraca: recogida de cinta y extensión de cinta"]]
        },
        lazoSalvamento: {
            tipoOficial: "LAZO DE SALVAMENTO", documentoOficial: "FICHA DE VERIFICACIÓN EPI — LAZO DE SALVAMENTO", norma: "EN 1498 B", plantillaClave: "IRUDEK_LAZO_SALVAMENTO",
            controles: [["SEG1", "Estado etiqueta identificativa"], ["SEG2", "Estado de las cintas (cortes, perforaciones, marcas de productos químicos, pintura)"], ["SEG3", "Estado de las costuras de seguridad (hilos cortados, levantados, invisibles)"], ["SEG4", "Estado de las anillas de anclaje (deformación, marca, corrosión)"], ["SEG5", "Estado de la tela de alta resistencia"]]
        }
    }
};



/* =========================================================
   REGISTRO EXTENSIBLE DE REVISIONES — FASE 3
   Se mantiene separado del catálogo histórico para no alterar
   las plantillas ya comprobadas. Los nuevos fabricantes y las
   plantillas genéricas se incorporan aquí y se consultan desde
   la misma capa documental.
   ========================================================= */

const REGISTRO_REVISIONES_FASE3 = {
    CLIMAX: {
        fabricanteNombre: "CLIMAX",
        resultadoControlDefault: "NO",
        opcionesControl: ["NO", "SI", "NP"],
        tipoResultado: "PREGUNTA_DEFECTO",
        arnes: {
            tipoOficial: "ARNÉS CLIMAX",
            documentoOficial: "CERTIFICADO DE REVISIÓN — ARNÉS CLIMAX",
            norma: "EN 365",
            plantillaClave: "CLIMAX_ARNES",
            controles: [
                ["SEG1", "Condición del tejido/correa: ¿presenta daños, cortes, desgaste o deterioro?"],
                ["SEG2", "Piezas mecánicas y remaches: ¿presentan defectos, daños o deformaciones?"],
                ["SEG3", "Argollas D/anillas: ¿presentan daños, deformaciones o corrosión?"],
                ["SEG4", "Mosquetones: ¿presentan daños o funcionamiento anómalo?"],
                ["SEG5", "Hebillas/presillas: ¿presentan daños o funcionamiento anómalo?"],
                ["SEG6", "Partes plásticas: ¿presentan daños o deterioro?"]
            ]
        },
        absorbedor: {
            tipoOficial: "ABSORBEDOR DE ENERGÍA CLIMAX",
            documentoOficial: "CERTIFICADO DE REVISIÓN — ABSORBEDORES DE ENERGÍA CLIMAX",
            norma: "EN 355",
            plantillaClave: "CLIMAX_ABSORBEDOR",
            controles: [
                ["TXT1", "Cintas: ¿presentan fibras deshilachadas, cortes, quemaduras o deterioro?"],
                ["TXT2", "Cuerdas: ¿presentan cortes, desgaste o deterioro?"],
                ["TXT3", "Costuras: ¿presentan hilos cortados, levantados o defectos?"],
                ["TXT4", "Plásticos: ¿presentan grietas, roturas o deterioro?"],
                ["MET1", "Hebillas y conectores: ¿presentan deformaciones, corrosión o daños?"],
                ["ABS1", "Paquete absorbedor: ¿presenta activación, daños o anomalías?"]
            ]
        },
        conector: {
            tipoOficial: "CONECTOR CLIMAX",
            documentoOficial: "CERTIFICADO DE REVISIÓN — CONECTORES CLIMAX",
            norma: "EN 362",
            plantillaClave: "CLIMAX_CONECTOR",
            controles: [
                ["SEG1", "Marcado/identificación y número de serie: ¿son legibles?"],
                ["SEG2", "¿Existen defectos visibles?"],
                ["SEG3", "¿Existen ranuras, rebabas o incisiones?"],
                ["SEG4", "¿Existen deformaciones o grietas?"],
                ["SEG5", "¿Existe corrosión o desgaste?"],
                ["FUNC1", "¿La apertura y cierre funcionan suavemente y correctamente?"]
            ]
        },
        amarre: {
            tipoOficial: "ELEMENTO DE AMARRE CLIMAX",
            documentoOficial: "CERTIFICADO DE REVISIÓN — ELEMENTOS DE AMARRE CLIMAX",
            norma: "EN 354",
            plantillaClave: "CLIMAX_AMARRE",
            controles: [
                ["TXT1", "Cintas: ¿presentan fibras deshilachadas, cortes, quemaduras o deterioro?"],
                ["TXT2", "Cuerdas: ¿presentan cortes, desgaste o deterioro?"],
                ["TXT3", "Costuras: ¿presentan hilos cortados, levantados o defectos?"],
                ["TXT4", "Plásticos: ¿presentan grietas, roturas o deterioro?"],
                ["MET1", "Hebillas y conectores: ¿presentan deformaciones, corrosión o daños?"]
            ]
        }
    },
    GENERICO: {
        fabricanteNombre: "GENÉRICO",
        resultadoControlDefault: "SI",
        opcionesControl: ["SI", "NO", "NP"],
        tipoResultado: "PREGUNTA_CONFORMIDAD",
        /* Estas claves son documentales. Se irán vinculando a los tipos
           de EPI existentes sin modificar todavía su estructura funcional. */
        alfombrillaAislante: {
            tipoOficial: "ALFOMBRILLA AISLANTE",
            documentoOficial: "CERTIFICADO REVISIÓN ALFOMBRILLA AISLANTE SOFAMEL",
            norma: "CLASE 2",
            plantillaClave: "GEN_ALFOMBRILLA_AISLANTE",
            resultadoControlDefault: "NO",
            opcionesControl: ["NO", "SI", "NP"],
            tipoResultado: "PREGUNTA_DEFECTO",
            controles: [
                ["SEG1", "¿Presenta desgaste, fisuras o grietas?"],
                ["SEG2", "¿Está identificada la fecha de fabricación?"],
                ["SEG3", "¿Dispone de simbología de triángulo?"],
                ["SEG4", "¿Dispone de marcado CE?"]
            ]
        },
        arnes: {
            tipoOficial: "ARNÉS GENÉRICO",
            documentoOficial: "CERTIFICADO DE REVISIÓN SEGÚN EN 365 — ARNÉS",
            norma: "EN 365",
            plantillaClave: "GEN_ARNES_EN365",
            resultadoControlDefault: "SI",
            opcionesControl: ["SI", "NO", "NP"],
            controles: [
                ["SEG1", "Condiciones previas e historial de revisiones"],
                ["SEG2", "Seguridad visual del conjunto"],
                ["SEG3", "Etiqueta identificativa"],
                ["SEG4", "Tejido/correa"],
                ["SEG5", "Hebillas"],
                ["SEG6", "Piezas mecánicas"],
                ["SEG7", "Argollas D/anillos"],
                ["SEG8", "Protecciones y confort"],
                ["FUNC1", "Funcionamiento correcto"]
            ]
        },
        botas: {
            tipoOficial: "BOTAS DE PROTECCIÓN RIESGO ELÉCTRICO",
            documentoOficial: "REVISIÓN BOTAS PANTER 2091 ELECTRICISTA",
            norma: "CLASE 00",
            plantillaClave: "GEN_BOTAS_DIELECTRICAS",
            resultadoControlDefault: "NO",
            opcionesControl: ["NO", "SI", "NP"],
            tipoResultado: "PREGUNTA_DEFECTO",
            controles: [
                ["SEG1", "¿Presenta defectos en el material de la cubierta?"],
                ["SEG2", "¿Presenta defectos en la suela?"],
                ["SEG3", "¿Es legible el marcado CE?"],
                ["SEG4", "¿Dispone del triángulo identificativo?"],
                ["SEG5", "¿Es correcta la clase/tensión indicada?"]
            ]
        },
        casco: {
            tipoOficial: "CASCO DE SEGURIDAD CON BARBUQUEJO",
            documentoOficial: "REVISIÓN CASCO DE SEGURIDAD CON BARBUQUEJO",
            norma: "PROTECCIÓN ELÉCTRICA",
            plantillaClave: "GEN_CASCO_DIELECTRICO",
            resultadoControlDefault: "NO",
            opcionesControl: ["NO", "SI", "NP"],
            tipoResultado: "PREGUNTA_DEFECTO",
            controles: [
                ["SEG1", "¿Presenta desgaste, golpes o fisuras?"],
                ["SEG2", "¿Es correcta la fecha de fabricación?"],
                ["SEG3", "¿Presenta daños la espuma interior?"],
                ["SEG4", "¿Dispone de triángulo identificativo?"],
                ["ACC1", "Barbuquejo en buen estado"],
                ["ACC2", "Correa en buen estado"],
                ["ACC3", "Hamaca/atalaje en buen estado"]
            ]
        },
        amarre: {
            tipoOficial: "ELEMENTO DE AMARRE SIN ABSORBEDOR",
            documentoOficial: "CERTIFICADO DE REVISIÓN SEGÚN EN 365 — ELEMENTO DE AMARRE",
            norma: "EN 365",
            plantillaClave: "GEN_AMARRE_SIN_ABSORBEDOR",
            resultadoControlDefault: "SI",
            opcionesControl: ["SI", "NO", "NP"],
            controles: [
                ["SEG1", "Etiqueta identificativa"],
                ["SEG2", "Cintas"],
                ["SEG3", "Costuras"],
                ["SEG4", "Anillas"],
                ["SEG5", "Protecciones"]
            ]
        },
        dobleCaboAbsorbedor: {
            tipoOficial: "DOBLE CABO CON ABSORBEDOR",
            documentoOficial: "REVISIÓN DOBLE CABO CON ABSORBEDOR PATAchO",
            norma: "EN 365",
            plantillaClave: "GEN_DOBLE_CABO_ABSORBEDOR",
            resultadoControlDefault: "SI",
            opcionesControl: ["SI", "NO", "NP"],
            controles: [
                ["TXT1", "Etiqueta textil"], ["TXT2", "Embutido"], ["TXT3", "Cinta"], ["TXT4", "Guardacabos"], ["TXT5", "Funda"],
                ["TXT6", "Costuras"], ["TXT7", "Alma"], ["TXT8", "Nudos"], ["TXT9", "Protecciones plásticas"], ["TXT10", "Cinta elástica"],
                ["MET1", "Hebillas"], ["MET2", "Aparato posicionador"], ["MET3", "Conectores"]
            ]
        },
        frenoLineaCinta: {
            tipoOficial: "FRENO PARA LÍNEA DE VIDA DE CINTA",
            documentoOficial: "REVISIÓN BLASCAT BLS01010",
            norma: "LÍNEA DE VIDA DE CINTA",
            plantillaClave: "GEN_FRENO_LINEA_CINTA",
            resultadoControlDefault: "SI",
            opcionesControl: ["SI", "NO", "NP"],
            controles: [
                ["MET1", "Cuerpo metálico sin corrosión, desgaste o deformación"],
                ["FUNC1", "Apertura y cierre correctos"],
                ["FUNC2", "Frenado correcto"]
            ]
        },
        guantesDielectricos: {
            tipoOficial: "GUANTES DE PROTECCIÓN ELÉCTRICA",
            documentoOficial: "REVISIÓN GUANTES TYRON 2.5 07603N",
            norma: "PROTECCIÓN ELÉCTRICA",
            plantillaClave: "GEN_GUANTES_DIELECTRICOS",
            resultadoControlDefault: "NO",
            opcionesControl: ["NO", "SI", "NP"],
            tipoResultado: "PREGUNTA_DEFECTO",
            controles: [
                ["SEG1", "¿Presentan defectos los puños o entre los dedos?"],
                ["SEG2", "¿Presentan defectos en la manga?"],
                ["SEG3", "¿Presentan porosidad?"],
                ["SEG4", "¿Es correcto el triángulo identificativo?"],
                ["FUNC1", "Prueba de estanqueidad/aire satisfactoria"]
            ]
        },
        lineaVida: {
            tipoOficial: "LÍNEA DE VIDA DE CINTA",
            documentoOficial: "REVISIÓN LÍNEA DE VIDA DE CINTA LBHT30",
            norma: "LÍNEA DE VIDA",
            plantillaClave: "GEN_LINEA_VIDA_CINTA",
            resultadoControlDefault: "BIEN",
            opcionesControl: ["BIEN", "MAL", "CR"],
            controles: [
                ["TXT1", "Etiqueta"], ["TXT2", "Costuras"], ["TXT3", "Bolsa"], ["TXT4", "Estado de la cinta"],
                ["MET1", "Conectores"], ["MET2", "Ratchet/carraca"], ["FUNC1", "Funcionamiento del ratchet/carraca"]
            ]
        },
        posicionador: {
            tipoOficial: "CINTA DE AMARRE CON REGULADOR DE POSICIONAMIENTO",
            documentoOficial: "REVISIÓN CINTA DE AMARRE CON REGULADOR DE POSICIONAMIENTO",
            norma: "EN 365",
            plantillaClave: "GEN_POSICIONADOR",
            resultadoControlDefault: "SI",
            opcionesControl: ["SI", "NO", "NP"],
            controles: [
                ["SEG1", "Etiqueta identificativa"], ["SEG2", "Cinta"], ["SEG3", "Costuras"],
                ["SEG4", "Anillas de anclaje"], ["SEG5", "Protecciones de la cinta"], ["MET1", "Regulador"]
            ]
        },
        lineaVidaPortatil: {
            tipoOficial: "LÍNEA DE VIDA PORTÁTIL",
            documentoOficial: "CERTIFICADO DE REVISIÓN — LÍNEA DE VIDA PORTÁTIL",
            norma: "EN 795 B",
            plantillaClave: "GEN_LINEA_VIDA_PORTATIL",
            resultadoControlDefault: "B",
            opcionesControl: ["B", "AV", "R", "M", "NP"],
            controles: [
                ["TXT1", "Estado etiqueta identificativa"], ["TXT2", "Estado de las costuras de seguridad"], ["TXT3", "Estado de la bolsa"],
                ["TXT4", "Estado de la cinta"], ["MET1", "Estado de conectores"], ["MET2", "Estado de ratchet/carraca"], ["FUNC1", "Funcionamiento de ratchet/carraca"]
            ]
        },
        pantallaDielectrica: {
            tipoOficial: "PANTALLA DIELÉCTRICA",
            documentoOficial: "REVISIÓN PANTALLA DIELÉCTRICA — DOCUMENTO FUENTE JSP KM 579403",
            norma: "CLASE 0",
            plantillaClave: "GEN_PANTALLA_DIELECTRICA",
            resultadoControlDefault: "NO",
            opcionesControl: ["NO", "SI", "NP"],
            tipoResultado: "PREGUNTA_DEFECTO",
            controles: [
                ["SEG1", "¿Presenta daños, desgaste, golpes o fisuras en la estructura?"],
                ["SEG2", "¿Es correcta la identificación/fecha?"],
                ["SEG3", "¿Presenta daños el conjunto interior?"],
                ["SEG4", "¿Dispone de la simbología eléctrica correspondiente?"],
                ["ACC1", "Accesorios en buen estado"]
            ]
        }
    }
};


function normalizarFabricante(valor) {
    const normalizado = String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .replace(/[^A-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");

    // Alias admitidos para Miguel Miranda y para Irudek.
    if (["MIRANDA", "MIGUEL_MIRANDA", "MIGUELMIRANDA", "MIGUEL_MIRANDA_S_L", "MIGUEL_MIRANDA_SL"].includes(normalizado)) return "MIGUEL_MIRANDA";
    if (["PATACHO", "PATACHO_S_L", "PATACHO_SL", "PATACHO_EUROINDUSTRIAL", "EUROINDUSTRIAL_PATACHO"].includes(normalizado)) return "PATACHO";
    if (["IRUDEK", "IRUDEK_S_L", "IRUDEK_SL"].includes(normalizado)) return "IRUDEK";
    if (["CLIMAX", "PRODUCTOS_CLIMAX", "CLIMAX_S_L", "CLIMAX_SL"].includes(normalizado)) return "CLIMAX";
    return normalizado;
}

function cambiarFabricanteRevision(elemento, valor, claveEpi, configOverride) {
    if (!elemento) return null;
    const fabricante = normalizarFabricante(valor);
    const config = configOverride || obtenerConfiguracionPlantillaFabricante(valor, claveEpi);
    const revisionAnterior = elemento.revisionFabricante || {};
    const fabricanteAnterior = normalizarFabricante(revisionAnterior.fabricante || "");
    const plantillaAnterior = revisionAnterior.plantillaClave || "";
    const plantillaNueva = config ? config.plantillaClave : "";

    // Al cambiar de fabricante o de plantilla, se reinicia SOLO la revisión
    // específica del fabricante. Los datos generales, controles de auditoría,
    // incidencias y fotografías del EPI se conservan.
    if (fabricanteAnterior !== fabricante || plantillaAnterior !== plantillaNueva) {
        elemento.revisionFabricante = crearRevisionFabricanteVacia();
    }

    if (config) {
        inicializarRevisionFabricante(elemento, config);
        elemento.revisionFabricante.fabricante = fabricante;
        elemento.revisionFabricante.plantillaClave = config.plantillaClave;
    }
    return config;
}

function obtenerConfiguracionPlantillaFabricante(marca, claveEpi) {
    const fabricante = normalizarFabricante(marca);
    const catalogo = CATALOGO_PLANTILLAS_FABRICANTES[fabricante] || REGISTRO_REVISIONES_FASE3[fabricante];
    let config = catalogo && catalogo[claveEpi];

    // Si el fabricante no tiene plantilla propia, se puede consultar la
    // plantilla genérica correspondiente al tipo de EPI. No se aplica
    // automáticamente si no existe una coincidencia exacta.
    let fabricanteResultado = fabricante;
    if (fabricante && !config && REGISTRO_REVISIONES_FASE3.GENERICO) {
        config = REGISTRO_REVISIONES_FASE3.GENERICO[claveEpi];
        if (config) fabricanteResultado = "GENERICO";
    }

    if (!config || typeof config !== "object") return null;

    // Las plantillas de cada EPI pueden estar definidas como subplantillas
    // dentro del catálogo del fabricante. En ese caso heredan la escala y el
    // resultado positivo definidos a nivel de fabricante. Esto es esencial
    // para IRUDEK y MIGUEL MIRANDA, cuyos subtipos no repiten esos campos.
    const metadatosFabricante = (fabricanteResultado !== "GENERICO" && catalogo && typeof catalogo === "object") ? catalogo : null;
    const configuracionFinal = {
        ...(metadatosFabricante ? {
            resultadoControlDefault: metadatosFabricante.resultadoControlDefault,
            opcionesControl: metadatosFabricante.opcionesControl
        } : {}),
        ...config
    };

    return { ...configuracionFinal, fabricanteNombre: config.fabricanteNombre || (catalogo && catalogo.fabricanteNombre) || (fabricanteResultado === "MIGUEL_MIRANDA" ? "MIGUEL MIRANDA" : fabricanteResultado), fabricanteConfigurado: fabricanteResultado, fabricanteOriginal: fabricante };
}

function obtenerEstadoDocumentalEpi(marca, claveEpi) {
    const configuracion = obtenerConfiguracionPlantillaFabricante(marca, claveEpi);
    if (configuracion) {
        return {
            estado: "PLANTILLA_IDENTIFICADA",
            fabricante: normalizarFabricante(marca),
            tipoOficial: configuracion.tipoOficial,
            documentoOficial: configuracion.documentoOficial,
            norma: configuracion.norma,
            plantillaClave: configuracion.plantillaClave,
            controlesOficiales: configuracion.controles
        };
    }
    return {
        estado: marca ? "SIN_PLANTILLA_CONFIGURADA" : "FABRICANTE_PENDIENTE",
        fabricante: normalizarFabricante(marca),
        tipoOficial: "",
        documentoOficial: "",
        norma: "",
        plantillaClave: "",
        controlesOficiales: []
    };
}

function aplicarNormaFabricanteSiProcede(campos, configuracion) {
    if (!campos || !configuracion || !configuracion.norma) return;
    if (!String(campos.norma || "").trim()) campos.norma = configuracion.norma;
}

function crearRevisionFabricanteVacia() {
    return {
        fabricante: "",
        plantillaClave: "",
        resultado: "",
        comentarios: "",
        fechaRevision: "",
        fechaProximaRevision: "",
        verificadoPor: "",
        controles: {}
    };
}

function inicializarRevisionFabricante(elemento, configOverride) {
    if (!elemento) return;
    if (!elemento.revisionFabricante || typeof elemento.revisionFabricante !== "object") {
        elemento.revisionFabricante = crearRevisionFabricanteVacia();
    }
    const revision = elemento.revisionFabricante;
    if (!revision.fabricante) revision.fabricante = normalizarFabricante(elemento.campos && elemento.campos.marca);
    const config = configOverride || obtenerConfiguracionPlantillaFabricante(elemento.campos && elemento.campos.marca, elemento.tipo || elemento.claveEpi);
    if (config) {
        revision.fabricante = normalizarFabricante(elemento.campos && elemento.campos.marca);
        revision.plantillaClave = config.plantillaClave;
        if (!revision.fechaRevision) revision.fechaRevision = obtenerFechaActual();
        const opcionesValidas = config.opcionesControl || [];
        config.controles.forEach(item => {
            const clave = item[0];
            // Todas las revisiones de fabricante parten del resultado positivo
            // correspondiente a su plantilla. El auditor solo debe modificar
            // las comprobaciones que detecte como incorrectas.
            const resultadoPositivo = obtenerResultadoPositivoFabricante(config);
            if (!revision.controles[clave]) revision.controles[clave] = { resultado: resultadoPositivo, observaciones: "" };
            // Si no hay resultado, recuperamos el positivo de la plantilla.
            // Si ya existe una selección válida del auditor, se conserva.
            if (!revision.controles[clave].resultado) {
                revision.controles[clave].resultado = resultadoPositivo;
            }
            if (revision.controles[clave].resultado &&
                opcionesValidas.length && !opcionesValidas.includes(revision.controles[clave].resultado)) {
                revision.controles[clave].resultado = resultadoPositivo;
            }
            if (typeof revision.controles[clave].observaciones !== "string") revision.controles[clave].observaciones = "";
        });
    }
}

function obtenerConfiguracionRevisionFabricante(marca, claveEpi) {
    return obtenerConfiguracionPlantillaFabricante(marca, claveEpi);
}

function obtenerResultadoPositivoFabricante(config) {
    if (!config) return "CORRECTO";
    if (config.resultadoControlDefault) return config.resultadoControlDefault;
    const opciones = config.opcionesControl || [];
    if (opciones.includes("OK")) return "OK";
    if (opciones.includes("B")) return "B";
    if (opciones.includes("CORRECTO")) return "CORRECTO";
    return opciones[0] || "CORRECTO";
}

function asegurarResultadosPositivosFabricante(revision, config) {
    // Todas las revisiones de fabricante deben comenzar con el resultado
    // positivo de su plantilla seleccionado por defecto.
    if (!revision || !config || !Array.isArray(config.controles)) return;
    if (!revision.controles) revision.controles = {};
    const resultadoPositivo = obtenerResultadoPositivoFabricante(config);
    const opciones = config.opcionesControl || [];
    config.controles.forEach(item => {
        const clave = item[0];
        if (!revision.controles[clave]) {
            revision.controles[clave] = { resultado: resultadoPositivo, observaciones: "" };
        } else if (!revision.controles[clave].resultado || (opciones.length && !opciones.includes(revision.controles[clave].resultado))) {
            revision.controles[clave].resultado = resultadoPositivo;
        }
        if (typeof revision.controles[clave].observaciones !== "string") {
            revision.controles[clave].observaciones = "";
        }
    });
}


function marcarResultadosPositivosFabricanteEnDOM(contenedor) {
    if (!contenedor) return;

    // La selección visible se sincroniza SIEMPRE con el resultado que ya tiene
    // guardado la revisión. Esto evita que el navegador restaure un estado
    // anterior del formulario y deje las casillas aparentemente sin marcar.
    const aplicar = () => {
        const filas = contenedor.querySelectorAll('.manufacturer-review-row');
        filas.forEach(fila => {
            const radios = Array.from(fila.querySelectorAll('input[type="radio"]'));
            if (!radios.length) return;

            // Cada radio lleva el resultado que corresponde al estado guardado
            // de la revisión. Buscamos exactamente ese valor.
            const radioEstado = radios.find(r =>
                r.getAttribute('data-mfr-result') !== null &&
                r.value === r.getAttribute('data-mfr-result')
            );

            // Si no existe el marcador de estado (compatibilidad), usamos el
            // positivo definido por la plantilla.
            const radioPositivo = radios.find(r => r.getAttribute('data-mfr-positive') === 'true');
            const objetivo = radioEstado || radioPositivo;
            if (!objetivo) return;

            // Desmarcar explícitamente el resto del grupo dentro de la fila.
            radios.forEach(r => {
                r.checked = (r === objetivo);
            });
            objetivo.defaultChecked = true;
            objetivo.setAttribute('checked', 'checked');
        });
    };

    aplicar();
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(aplicar);
    setTimeout(aplicar, 0);
}

function actualizarRevisionFabricanteGeneral(claveEpi, claveSub, resultado) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    if (!control) return;
    const config = obtenerConfiguracionRevisionFabricante(control.campos && control.campos.marca, claveEpi);
    inicializarRevisionFabricante(control, config);
    if (!control.revisionFabricante.controles[claveSub]) control.revisionFabricante.controles[claveSub] = { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
    control.revisionFabricante.controles[claveSub].resultado = resultado;
    auditoria.modulos.epis.estado = "EN_CURSO";
    renderizarModuloEpis();
    actualizarDashboard();
}

function actualizarCampoRevisionFabricanteGeneral(claveEpi, campo, valor) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    if (!control) return;
    inicializarRevisionFabricante(control);
    if (Object.prototype.hasOwnProperty.call(control.revisionFabricante, campo)) {
        control.revisionFabricante[campo] = String(valor == null ? "" : valor);
    }
    auditoria.modulos.epis.estado = "EN_CURSO";
}

function obtenerEstadoAutomaticoEpi(claveEpi, unidad) {
    const def = obtenerEstructuraEpis()[claveEpi];
    if (!def || !unidad) return "";
    const estado = normalizarEstadoElemento(unidad.estadoElemento);
    if (estado === "NO_APLICA") return "NO_APLICA";
    if (estado === "NO_DISPONIBLE") return "NO_DISPONIBLE";
    if (estado !== "ACTIVO") return "";

    // Primero deben estar resueltas TODAS las comprobaciones generales del EPI.
    const subs = Object.values(unidad.subcontroles || {});
    if (subs.length) {
        for (const sub of subs) {
            if (!sub || !sub.resultado) return "";
            if (!["CORRECTO", "NO_PROCEDE"].includes(sub.resultado)) return "";
        }
    }

    // Si existe una plantilla específica de fabricante, también deben estar
    // resueltos todos sus controles con el resultado positivo de esa plantilla.
    const config = obtenerConfiguracionRevisionFabricante(unidad.campos && unidad.campos.marca, claveEpi);
    if (config) {
        const rev = unidad.revisionFabricante;
        if (!rev || !rev.controles) return "";
        const positivo = obtenerResultadoPositivoFabricante(config);
        const opciones = config.opcionesControl || [];
        const controles = config.controles || [];
        if (!controles.length) return "";
        for (const item of controles) {
            const c = rev.controles[item[0]];
            if (!c || !c.resultado) return "";
            if (c.resultado !== positivo) return "";
            if (opciones.length && !opciones.includes(c.resultado)) return "";
        }
    }
    return "APTO";
}

function idIncidenciaVeredictoNoAptoEpi(claveEpi, unidad) {
    return "EPIS_VEREDICTO_NO_APTO_" + claveEpi + (unidad && unidad.id ? "_" + unidad.id : "");
}

function sincronizarVeredictoEpi(claveEpi, unidad, permitirAutoApto=true) {
    if (!unidad) return;
    if (!unidad.revisionFabricante || typeof unidad.revisionFabricante !== "object") inicializarRevisionFabricante(unidad);
    const auto = obtenerEstadoAutomaticoEpi(claveEpi, unidad);
    const incidenciaId = idIncidenciaVeredictoNoAptoEpi(claveEpi, unidad);
    const existente = auditoria.incidencias.find(i => i.id === incidenciaId);

    if (permitirAutoApto && auto === "APTO" && (!unidad.revisionFabricante.resultado || unidad.revisionFabricante.resultado === "APTO")) {
        unidad.revisionFabricante.resultado = "APTO";
        auditoria.incidencias = auditoria.incidencias.filter(i => i.id !== incidenciaId);
        return;
    }
    if (auto !== "APTO" && unidad.revisionFabricante.resultado === "APTO") {
        unidad.revisionFabricante.resultado = "";
    }
    if (unidad.revisionFabricante.resultado === "NO_APTO") {
        const def = obtenerEstructuraEpis()[claveEpi];
        const nombre = def ? def.nombre + (def.multiple ? " #" + (unidad.numero || "") : "") : claveEpi;
        const incidencia = existente || {
            id: incidenciaId,
            origen: "EPIS_VEREDICTO",
            modulo: "EPIs",
            controlClave: claveEpi,
            unidadId: unidad.id || null,
            control: nombre,
            resultado: "NO_APTO",
            descripcion: "El EPI ha sido calificado manualmente como NO APTO.",
            medida: "Retirar el EPI del servicio y sustituirlo o subsanar la deficiencia antes de realizar los trabajos.",
            observaciones: "Inconformidad generada automáticamente por el veredicto NO APTO.",
            fotografias: [],
            estado: "ABIERTA"
        };
        incidencia.resultado = "NO_APTO";
        incidencia.estado = "ABIERTA";
        if (!existente) auditoria.incidencias.push(incidencia);
    } else if (unidad.revisionFabricante.resultado === "APTO" && auto === "APTO") {
        auditoria.incidencias = auditoria.incidencias.filter(i => i.id !== incidenciaId);
    }
}

function actualizarVeredictoRevisionFabricanteGeneral(claveEpi, valor) {
    actualizarCampoRevisionFabricanteGeneral(claveEpi, "resultado", valor);
    const control = auditoria.modulos.epis.controles[claveEpi];
    if (control) {
        sincronizarVeredictoEpi(claveEpi, control, false);
        renderizarModuloEpis();
        actualizarDashboard();
    }
}

function actualizarRevisionFabricanteRadio(idUnidad, claveSub, resultado) {
    const unidad = auditoria.modulos.radio.unidades[idUnidad];
    if (!unidad) return;
    const config = obtenerConfiguracionPlantillaRadio(unidad);
    inicializarRevisionFabricante(unidad, config);
    if (!unidad.revisionFabricante.controles[claveSub]) unidad.revisionFabricante.controles[claveSub] = { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
    unidad.revisionFabricante.controles[claveSub].resultado = resultado;
    auditoria.modulos.radio.estado = "EN_CURSO";
    renderizarModuloRadio();
    actualizarDashboard();
}

function actualizarCampoRevisionFabricanteRadio(idUnidad, campo, valor) {
    const unidad = auditoria.modulos.radio.unidades[idUnidad];
    if (!unidad) return;
    const config = obtenerConfiguracionPlantillaRadio(unidad);
    inicializarRevisionFabricante(unidad, config);
    if (Object.prototype.hasOwnProperty.call(unidad.revisionFabricante, campo)) {
        unidad.revisionFabricante[campo] = String(valor == null ? "" : valor);
    }
    auditoria.modulos.radio.estado = "EN_CURSO";
}

function actualizarVeredictoRevisionFabricanteRadio(idUnidad, valor) {
    actualizarCampoRevisionFabricanteRadio(idUnidad, "resultado", valor);
}

function actualizarRevisionFabricanteMultiple(claveEpi, idUnidad, claveSub, resultado) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad) return;
    const config = obtenerConfiguracionRevisionFabricante(unidad.campos && unidad.campos.marca, claveEpi);
    inicializarRevisionFabricante(unidad, config);
    if (!unidad.revisionFabricante.controles[claveSub]) unidad.revisionFabricante.controles[claveSub] = { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
    unidad.revisionFabricante.controles[claveSub].resultado = resultado;
    auditoria.modulos.epis.estado = "EN_CURSO";
    renderizarModuloEpis();
    actualizarDashboard();
}

function actualizarCampoRevisionFabricanteMultiple(claveEpi, idUnidad, campo, valor) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad) return;
    inicializarRevisionFabricante(unidad);
    if (Object.prototype.hasOwnProperty.call(unidad.revisionFabricante, campo)) {
        unidad.revisionFabricante[campo] = String(valor == null ? "" : valor);
    }
    auditoria.modulos.epis.estado = "EN_CURSO";
}

function actualizarVeredictoRevisionFabricanteMultiple(claveEpi, idUnidad, valor) {
    actualizarCampoRevisionFabricanteMultiple(claveEpi, idUnidad, "resultado", valor);
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (unidad) {
        sincronizarVeredictoEpi(claveEpi, unidad, false);
        renderizarModuloEpis();
        actualizarDashboard();
    }
}

function renderizarRevisionFabricante(elemento, claveEpi, idUnidad, configOverride) {
    if (!elemento) return "";

    const marca = elemento.campos ? elemento.campos.marca : "";
    const config = configOverride || obtenerConfiguracionRevisionFabricante(marca, claveEpi);
    if (!config) return "";

    const fabricanteActual = normalizarFabricante(marca);

    // La plantilla SIEMPRE se determina a partir del fabricante actual.
    // Nunca reutilizamos una configuración anterior de otro fabricante.
    if (!elemento.revisionFabricante || typeof elemento.revisionFabricante !== "object") {
        elemento.revisionFabricante = crearRevisionFabricanteVacia();
    }
    const revisionExistente = elemento.revisionFabricante;
    if ((revisionExistente.fabricante || "") !== fabricanteActual ||
        (revisionExistente.plantillaClave || "") !== (config.plantillaClave || "")) {
        elemento.revisionFabricante = crearRevisionFabricanteVacia();
    }

    inicializarRevisionFabricante(elemento, config);
    elemento.revisionFabricante.fabricante = fabricanteActual;
    elemento.revisionFabricante.plantillaClave = config.plantillaClave || "";
    const revision = elemento.revisionFabricante;
    asegurarResultadosPositivosFabricante(revision, config);
    if (!configOverride) sincronizarVeredictoEpi(claveEpi, elemento, true);
    const esRevisionRadio = !!configOverride;
    const esMiguelMiranda = fabricanteActual === "MIGUEL_MIRANDA";
    const fabricanteConfigurado = config.fabricanteConfigurado || fabricanteActual;
    const esRevisionClimax = fabricanteConfigurado === "CLIMAX";
    const esRevisionGenerica = fabricanteConfigurado === "GENERICO";

    const llamadaControl = (clave, valor) => {
        if (esRevisionRadio) {
            return `actualizarRevisionFabricanteRadio(${JSON.stringify(String(idUnidad))},${JSON.stringify(String(clave))},${JSON.stringify(String(valor))})`;
        }
        if (idUnidad) {
            return `actualizarRevisionFabricanteMultiple(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(idUnidad))},${JSON.stringify(String(clave))},${JSON.stringify(String(valor))})`;
        }
        return `actualizarRevisionFabricanteGeneral(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(clave))},${JSON.stringify(String(valor))})`;
    };

    const llamadaCampo = (campo) => {
        if (esRevisionRadio) {
            return `actualizarCampoRevisionFabricanteRadio(${JSON.stringify(String(idUnidad))},${JSON.stringify(String(campo))},this.value)`;
        }
        if (idUnidad) {
            return `actualizarCampoRevisionFabricanteMultiple(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(idUnidad))},${JSON.stringify(String(campo))},this.value)`;
        }
        return `actualizarCampoRevisionFabricanteGeneral(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(campo))},this.value)`;
    };

    const idBase = String(claveEpi || "epi").replace(/[^A-Za-z0-9_-]/g, "_") + "_" + String(idUnidad || "single").replace(/[^A-Za-z0-9_-]/g, "_");
    const idVeredicto = "veredicto_mfr_" + idBase;

    let eventoVeredicto;
    if (esRevisionRadio) {
        eventoVeredicto = `actualizarVeredictoRevisionFabricanteRadio(${JSON.stringify(String(idUnidad))},this.value)`;
    } else if (idUnidad) {
        eventoVeredicto = `actualizarVeredictoRevisionFabricanteMultiple(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(idUnidad))},this.value)`;
    } else {
        eventoVeredicto = `actualizarVeredictoRevisionFabricanteGeneral(${JSON.stringify(String(claveEpi))},this.value)`;
    }

    let html = `<div class="card manufacturer-review ${esMiguelMiranda ? "manufacturer-review-miguel-miranda" : "manufacturer-review-irudek"}">
        <h4>Revisión específica ${escapeHtml(config.fabricanteNombre || fabricanteActual)}</h4>
        <p class="vehicle-help"><strong>${escapeHtml(config.documentoOficial)}</strong> · ${escapeHtml(config.norma)}</p>`;

    if (esMiguelMiranda) {
        // Miguel Miranda utiliza sus propias hojas oficiales: no mostramos la
        // matriz B/AV/R/M/NP de IRUDEK. La hoja oficial contiene una decisión
        // global EPI ACEPTADO / EPI RECHAZADO y los puntos de inspección A...H.
        const mmControles = config.controles || [];
        const opcionesControl = config.opcionesControl || ["OK", "NO_OK", "NP"];

        html += `<div class="manufacturer-review-official-header">
            <div class="form-grid">
                <div class="field"><label>Modelo</label><input type="text" value="${escapeHtml(elemento.campos && elemento.campos.modelo || "")}" oninput="actualizarCampoRevisionFabricanteGeneral('${escapeHtml(claveEpi)}','modelo',this.value)" disabled></div>
                <div class="field"><label>Norma</label><input type="text" value="${escapeHtml(config.norma || "")}" disabled></div>
                <div class="field"><label>Nº lote</label><input type="text" value="${escapeHtml(elemento.campos && elemento.campos.numeroLote || "")}" disabled></div>
                <div class="field"><label>Nº EPI</label><input type="text" value="${escapeHtml(elemento.campos && elemento.campos.numeroEpi || "")}" disabled></div>
                <div class="field"><label>Fecha fabricación</label><input type="text" value="${escapeHtml(elemento.campos && elemento.campos.fechaFabricacion || "")}" disabled></div>
            </div>
        </div>`;

        html += `<div class="manufacturer-review-table manufacturer-review-table-mm">
            <div class="manufacturer-review-head"><span>Control oficial MIGUEL MIRANDA</span><span>OK</span><span>NO OK</span><span>NP</span></div>`;
        mmControles.forEach(item => {
            const clave = item[0];
            const nombre = item[1];
            if (!revision.controles[clave]) revision.controles[clave] = { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
            if (!revision.controles[clave].resultado || !opcionesControl.includes(revision.controles[clave].resultado)) revision.controles[clave].resultado = obtenerResultadoPositivoFabricante(config);
            const sub = revision.controles[clave];
            html += `<div class="manufacturer-review-row"><div><strong>${escapeHtml(clave)}</strong> — ${escapeHtml(nombre)}</div>`;
            opcionesControl.forEach(valor => {
                const evento = llamadaControl(clave, valor);
                html += `<label><input type="radio" name="mm_${escapeHtml(claveEpi)}_${escapeHtml(idUnidad || 'single')}_${escapeHtml(clave)}" value="${valor}" ${sub.resultado === valor ? "checked=\"checked\"" : ""} data-mfr-result="${escapeHtml(String(sub.resultado || ""))}" ${valor === obtenerResultadoPositivoFabricante(config) ? 'data-mfr-positive="true"' : ''} autocomplete="off" onchange="${evento}"><span>${valor === "NO_OK" ? "NO OK" : valor}</span></label>`;
            });
            html += `</div>`;
        });
        html += `</div>`;

        html += `<div class="manufacturer-review-meta">
            <div class="field"><label>Motivos / observaciones</label><textarea rows="3" oninput="${llamadaCampo("comentarios")}">${escapeHtml(revision.comentarios || "")}</textarea></div>
            <div class="form-grid">
                <div class="field"><label>Revisado por</label><input type="text" value="${escapeHtml(revision.verificadoPor || "")}" oninput="${llamadaCampo("verificadoPor")}"></div>
                <div class="field"><label>Fecha de revisión</label><input type="date" value="${escapeHtml(revision.fechaRevision || "")}" oninput="${llamadaCampo("fechaRevision")}"></div>
            </div>
            <div class="field"><label><strong>VEREDICTO DE LA REVISIÓN DEL FABRICANTE *</strong></label>
                <select id="${idVeredicto}" onchange="${eventoVeredicto}">
                    <option value="">Pendiente de comprobación</option>
                    <option value="APTO" ${revision.resultado === "APTO" ? "selected" : ""}>E.P.I. ACEPTADO / APTO</option>
                    <option value="NO_APTO" ${revision.resultado === "NO_APTO" ? "selected" : ""}>E.P.I. RECHAZADO / NO APTO</option>
                </select>
            </div>
        </div></div>`;
        return html;
    }

    const esPatacho = fabricanteActual === "PATACHO";
    if (esPatacho) {
        // PATAchO no aporta en este documento una hoja independiente de
        // inspección con casillas APTO/NO APTO. Por ello mostramos un
        // checklist específico basado exclusivamente en su manual EPI-301/4,
        // manteniendo el veredicto de la aplicación separado de la documentación
        // oficial del fabricante. Los elementos del kit se revisan por separado:
        // arnés, elemento de amarre y conector/mosquetón.
        const opcionesPatacho = config.opcionesControl || ["CORRECTO", "INCORRECTO", "NO_PROCEDE"];
        const etiquetaResultado = valor => valor === "INCORRECTO" ? "INCORRECTO" : (valor === "NO_PROCEDE" ? "NO PROCEDE" : "CORRECTO");

        html += `<div class="manufacturer-review-notice"><strong>Revisión específica PATAchO</strong><br><small>Checklist basado en el manual de uso y mantenimiento del equipo ${escapeHtml(config.tipoOficial)}. No sustituye una plantilla oficial de inspección del fabricante.</small></div>`;
        html += `<div class="manufacturer-review-table manufacturer-review-table-patacho">
            <div class="manufacturer-review-head"><span>Controles según manual PATAchO · seleccione un resultado por cada punto</span><span>CORRECTO</span><span>INCORRECTO</span><span>NP</span></div>`;
        (config.controles || []).forEach(item => {
            const clave = item[0];
            const nombre = item[1];
            if (!revision.controles[clave]) revision.controles[clave] = { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
            if (!revision.controles[clave].resultado || !opcionesPatacho.includes(revision.controles[clave].resultado)) revision.controles[clave].resultado = obtenerResultadoPositivoFabricante(config);
            const sub = revision.controles[clave];
            html += `<div class="manufacturer-review-row"><div><strong>${escapeHtml(clave)}</strong> — ${escapeHtml(nombre)}</div>`;
            opcionesPatacho.forEach(valor => {
                const evento = llamadaControl(clave, valor);
                html += `<label><input type="radio" name="patacho_${escapeHtml(claveEpi)}_${escapeHtml(idUnidad || 'single')}_${escapeHtml(clave)}" value="${escapeHtml(valor)}" ${sub.resultado === valor ? "checked" : ""} data-mfr-result="${escapeHtml(String(sub.resultado || ""))}" ${valor === obtenerResultadoPositivoFabricante(config) ? 'data-mfr-positive="true"' : ''} onchange="${evento}"><span>${escapeHtml(etiquetaResultado(valor))}</span></label>`;
            });
            html += `</div>`;
        });
        html += `</div>`;

        html += `<div class="form-grid manufacturer-review-meta">
            <div class="field"><label>Comentarios / observaciones</label><textarea rows="3" oninput="${llamadaCampo("comentarios")}">${escapeHtml(revision.comentarios || "")}</textarea></div>
            <div class="field"><label>Fecha de revisión</label><input type="date" value="${escapeHtml(revision.fechaRevision || "")}" oninput="${llamadaCampo("fechaRevision")}"></div>
            <div class="field"><label>Verificado por</label><input type="text" value="${escapeHtml(revision.verificadoPor || "")}" oninput="${llamadaCampo("verificadoPor")}"></div>
            <div class="field"><label><strong>VEREDICTO DE LA REVISIÓN *</strong></label>
                <select id="${idVeredicto}" onchange="${eventoVeredicto}">
                    <option value="">Pendiente de comprobación</option>
                    <option value="APTO" ${revision.resultado === "APTO" ? "selected" : ""}>APTO</option>
                    <option value="NO_APTO" ${revision.resultado === "NO_APTO" ? "selected" : ""}>NO APTO</option>
                </select>
            </div>
        </div></div>`;
        return html;
    }

    if (esRevisionClimax || esRevisionGenerica) {
        const opcionesEspeciales = config.opcionesControl || ["SI", "NO", "NP"];
        const positivoEspecial = obtenerResultadoPositivoFabricante(config);
        const tituloEspecial = esRevisionClimax ? "Control específico CLIMAX" : "Plantilla genérica de revisión";

        html += `<div class="manufacturer-review-notice"><strong>${escapeHtml(tituloEspecial)}</strong><br><small>${esRevisionClimax ? "Checklist basado en la documentación de revisión CLIMAX." : "Checklist genérico aplicable cuando no existe una plantilla específica del fabricante."}</small></div>`;
        html += `<div class="manufacturer-review-table manufacturer-review-table-mm">
            <div class="manufacturer-review-head"><span>Control de revisión</span>${opcionesEspeciales.map(v => `<span>${escapeHtml(v)}</span>`).join("")}</div>`;

        (config.controles || []).forEach(item => {
            const clave = item[0];
            const nombre = item[1];
            if (!revision.controles[clave]) revision.controles[clave] = { resultado: positivoEspecial, observaciones: "" };
            if (!revision.controles[clave].resultado || !opcionesEspeciales.includes(revision.controles[clave].resultado)) {
                revision.controles[clave].resultado = positivoEspecial;
            }
            const sub = revision.controles[clave];
            html += `<div class="manufacturer-review-row"><div><strong>${escapeHtml(clave)}</strong> — ${escapeHtml(nombre)}</div>`;
            opcionesEspeciales.forEach(valor => {
                const evento = llamadaControl(clave, valor);
                html += `<label><input type="radio" name="esp_${escapeHtml(claveEpi)}_${escapeHtml(idUnidad || 'single')}_${escapeHtml(clave)}" value="${escapeHtml(valor)}" ${sub.resultado === valor ? "checked=\"checked\"" : ""} data-mfr-result="${escapeHtml(String(sub.resultado || ""))}" ${valor === positivoEspecial ? 'data-mfr-positive="true"' : ''} autocomplete="off" onchange="${evento}"><span>${escapeHtml(valor)}</span></label>`;
            });
            html += `</div>`;
        });
        html += `</div>`;
        html += `<div class="form-grid manufacturer-review-meta">
            <div class="field"><label>Comentarios / observaciones</label><textarea rows="3" oninput="${llamadaCampo("comentarios")}">${escapeHtml(revision.comentarios || "")}</textarea></div>
            <div class="field"><label>Fecha de revisión</label><input type="date" value="${escapeHtml(revision.fechaRevision || "")}" oninput="${llamadaCampo("fechaRevision")}"></div>
            <div class="field"><label>Verificado por</label><input type="text" value="${escapeHtml(revision.verificadoPor || "")}" oninput="${llamadaCampo("verificadoPor")}"></div>
            <div class="field"><label><strong>VEREDICTO DE LA REVISIÓN *</strong></label>
                <select id="${idVeredicto}" onchange="${eventoVeredicto}">
                    <option value="">Pendiente de comprobación</option>
                    <option value="APTO" ${revision.resultado === "APTO" ? "selected" : ""}>APTO</option>
                    <option value="NO_APTO" ${revision.resultado === "NO_APTO" ? "selected" : ""}>NO APTO</option>
                </select>
            </div>
        </div></div>`;
        return html;
    }

    // IRUDEK conserva su matriz específica B/AV/R/M/NP.
    html += `<div class="manufacturer-review-table"><div class="manufacturer-review-head"><span>Control oficial</span><span>B</span><span>AV</span><span>R</span><span>M</span><span>NP</span></div>`;
    config.controles.forEach(item => {
        const clave = item[0];
        const nombre = item[1];
        const sub = revision.controles[clave] || { resultado: obtenerResultadoPositivoFabricante(config), observaciones: "" };
        if (!sub.resultado || !["B", "AV", "R", "M", "NP"].includes(sub.resultado)) sub.resultado = obtenerResultadoPositivoFabricante(config);
        html += `<div class="manufacturer-review-row"><div><strong>${escapeHtml(clave)}</strong> — ${escapeHtml(nombre)}</div>`;
        ["B", "AV", "R", "M", "NP"].forEach(valor => {
            const evento = llamadaControl(clave, valor);
            html += `<label><input type="radio" name="mfr_${escapeHtml(claveEpi)}_${escapeHtml(idUnidad || 'single')}_${escapeHtml(clave)}" value="${valor}" ${sub.resultado === valor ? 'checked=\"checked\"' : ''} data-mfr-result="${escapeHtml(String(sub.resultado || ""))}" ${valor === obtenerResultadoPositivoFabricante(config) ? 'data-mfr-positive="true"' : ''} autocomplete="off" onchange="${evento}"><span>${valor}</span></label>`;
        });
        html += `</div>`;
    });
    html += `</div>`;
    html += `<div class="form-grid manufacturer-review-meta">
        <div class="field"><label>Comentarios</label><textarea rows="3" oninput="${llamadaCampo("comentarios")}">${escapeHtml(revision.comentarios || "")}</textarea></div>
        <div class="field"><label>Fecha revisión</label><input type="date" value="${escapeHtml(revision.fechaRevision || "")}" oninput="${llamadaCampo("fechaRevision")}"></div>
        <div class="field"><label>Fecha próxima revisión</label><input type="date" value="${escapeHtml(revision.fechaProximaRevision || "")}" oninput="${llamadaCampo("fechaProximaRevision")}"></div>
        <div class="field"><label>Verificado por</label><input type="text" value="${escapeHtml(revision.verificadoPor || "")}" oninput="${llamadaCampo("verificadoPor")}"></div>
        <div class="field"><label><strong>VEREDICTO DE LA REVISIÓN DEL FABRICANTE *</strong></label>
            <select id="${idVeredicto}" onchange="${eventoVeredicto}">
                <option value="">Seleccionar veredicto</option>
                <option value="APTO" ${revision.resultado === "APTO" ? "selected" : ""}>APTO</option>
                <option value="NO_APTO" ${revision.resultado === "NO_APTO" ? "selected" : ""}>NO APTO</option>
            </select>
        </div>
    </div></div>`;
    return html;
}

function renderizarEstadoDocumentalEpi(marca, claveEpi) {
    const estado = obtenerEstadoDocumentalEpi(marca, claveEpi);
    if (estado.estado === "FABRICANTE_PENDIENTE") {
        return `<div class="manufacturer-documentation pending"><strong>Documentación de fabricante:</strong> pendiente de indicar marca/fabricante.</div>`;
    }
    if (estado.estado === "SIN_PLANTILLA_CONFIGURADA") {
        return `<div class="manufacturer-documentation pending"><strong>Documentación de fabricante:</strong> no hay todavía una plantilla oficial configurada para <strong>${escapeHtml(marca)}</strong> en este tipo de EPI. Se mantienen los controles generales y no se genera ningún documento oficial automáticamente.</div>`;
    }
    return `<div class="manufacturer-documentation"><strong>Plantilla oficial identificada:</strong> ${escapeHtml(estado.documentoOficial)} · <strong>Norma:</strong> ${escapeHtml(estado.norma)}<br><small>Clave documental: ${escapeHtml(estado.plantillaClave)}. Los controles oficiales se utilizarán posteriormente para generar el documento; esta fase no genera PDF.</small></div>`;
}

function obtenerControlesEpis() {
    return Object.keys(obtenerEstructuraEpis());
}


function obtenerNombreControlEpis(clave) {
    const estructura = obtenerEstructuraEpis();
    return estructura[clave] ? estructura[clave].nombre : clave;
}


function obtenerDetallesControlEpis(clave) {
    const estructura = obtenerEstructuraEpis();
    return estructura[clave] ? Object.values(estructura[clave].controles) : [];
}


function obtenerSubcontrolesEpi(clave) {
    const estructura = obtenerEstructuraEpis();
    return estructura[clave] ? estructura[clave].controles : {};
}


function crearUnidadEpiMultiple(claveEpi, numero) {
    const definicion = obtenerEstructuraEpis()[claveEpi];
    const unidad = {
        id: "EPIS_" + claveEpi + "_" + Date.now() + "_" + Math.floor(Math.random() * 100000),
        numero: numero || 1,
        campos: {},
        subcontroles: {},
        revisionFabricante: crearRevisionFabricanteVacia(),
        estadoElemento: "ACTIVO"
    };

    Object.keys(definicion.campos || {}).forEach(campo => {
        unidad.campos[campo] = "";
    });

    Object.keys(definicion.controles || {}).forEach(claveSub => {
        unidad.subcontroles[claveSub] = {
            resultado: "CORRECTO",
            descripcion: "",
            medida: "",
            observaciones: "",
            incidenciaId: null,
            fotografias: []
        };
    });

    return unidad;
}

function inicializarEpis() {

    const epis = auditoria.modulos.epis;
    const estructura = obtenerEstructuraEpis();

    if (!epis.controles) {
        epis.controles = {};
    }

    Object.keys(estructura).forEach(claveEpi => {

        const definicion = estructura[claveEpi];
        const esMultiple = !!definicion.multiple;
        let control = epis.controles[claveEpi];

        if (esMultiple) {
            if (!control || typeof control !== "object") {
                control = { unidades: {} };
                epis.controles[claveEpi] = control;
            }

            if (!control.unidades || typeof control.unidades !== "object") {
                control.unidades = {};
            }

            // Migración de una versión anterior en la que "otros" era un único EPI.
            if (Object.keys(control.unidades).length === 0 && control.subcontroles) {
                const unidad = crearUnidadEpiMultiple(claveEpi, 1);
                unidad.campos = Object.assign(unidad.campos, control.campos || {});
                Object.keys(unidad.subcontroles).forEach(claveSub => {
                    if (control.subcontroles[claveSub]) {
                        unidad.subcontroles[claveSub] = control.subcontroles[claveSub];
                    }
                });
                control.unidades[unidad.id] = unidad;
                delete control.subcontroles;
                delete control.campos;
                delete control.resultado;
                delete control.descripcion;
                delete control.medida;
                delete control.observaciones;
                delete control.incidenciaId;
                delete control.fotografias;
            }

            Object.values(control.unidades).forEach(unidad => {
                if (!unidad.campos || typeof unidad.campos !== "object") unidad.campos = {};
                unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
                Object.keys(definicion.campos || {}).forEach(campo => {
                    if (typeof unidad.campos[campo] !== "string") unidad.campos[campo] = "";
                });
                inicializarRevisionFabricante(unidad);
                if (!unidad.subcontroles || typeof unidad.subcontroles !== "object") unidad.subcontroles = {};
                Object.keys(definicion.controles).forEach(claveSub => {
                    if (!unidad.subcontroles[claveSub]) {
                        unidad.subcontroles[claveSub] = {
                            resultado: "CORRECTO",
                            descripcion: "",
                            medida: "",
                            observaciones: "",
                            incidenciaId: null,
                            fotografias: []
                        };
                    }
                    const sub = unidad.subcontroles[claveSub];
                    if (!sub.resultado) sub.resultado = "CORRECTO";
                    if (typeof sub.descripcion !== "string") sub.descripcion = "";
                    if (typeof sub.medida !== "string") sub.medida = "";
                    if (typeof sub.observaciones !== "string") sub.observaciones = "";
                    if (!Array.isArray(sub.fotografias)) sub.fotografias = [];
                });
            });
            Object.values(control.unidades).forEach((unidad, index) => unidad.numero = index + 1);
            return;
        }

        if (!control) {
            control = {
                resultado: "CORRECTO",
                subcontroles: {},
                descripcion: "",
                medida: "",
                observaciones: "",
                incidenciaId: null,
                fotografias: []
            };
            epis.controles[claveEpi] = control;
        }

        inicializarRevisionFabricante(control);

        if (!control.subcontroles || typeof control.subcontroles !== "object") {
            control.subcontroles = {};
        }

        if (!control.campos || typeof control.campos !== "object") {
            control.campos = {};
        }
        control.estadoElemento = normalizarEstadoElemento(control.estadoElemento);

        Object.keys(definicion.campos || {}).forEach(campo => {
            if (typeof control.campos[campo] !== "string") {
                control.campos[campo] = "";
            }
        });

        Object.keys(definicion.controles).forEach(claveSub => {

            if (!control.subcontroles[claveSub]) {
                const resultadoAnterior =
                    control.resultado === "INCORRECTO" ||
                    control.resultado === "NO_PROCEDE"
                        ? control.resultado
                        : "CORRECTO";

                control.subcontroles[claveSub] = {
                    resultado: resultadoAnterior,
                    descripcion: resultadoAnterior === "INCORRECTO" ? (control.descripcion || "") : "",
                    medida: resultadoAnterior === "INCORRECTO" ? (control.medida || "") : "",
                    observaciones: resultadoAnterior === "INCORRECTO" ? (control.observaciones || "") : "",
                    incidenciaId: null,
                    fotografias: []
                };
            }

            const sub = control.subcontroles[claveSub];

            if (!sub.resultado) sub.resultado = "CORRECTO";
            if (!Array.isArray(sub.fotografias)) sub.fotografias = [];
            if (typeof sub.descripcion !== "string") sub.descripcion = "";
            if (typeof sub.medida !== "string") sub.medida = "";
            if (typeof sub.observaciones !== "string") sub.observaciones = "";
        });

        sincronizarResultadoEpi(claveEpi);
    });
}

function sincronizarResultadoEpi(claveEpi) {

    const control = auditoria.modulos.epis.controles[claveEpi];

    if (!control || !control.subcontroles) {
        return;
    }

    const resultados = Object.values(control.subcontroles).map(item => item.resultado);

    if (resultados.includes("INCORRECTO")) {
        control.resultado = "INCORRECTO";
    } else if (resultados.length && resultados.every(item => item === "NO_PROCEDE")) {
        control.resultado = "NO_PROCEDE";
    } else {
        control.resultado = "CORRECTO";
    }
}


function renderizarVeredictoEpiSinPlantilla(elemento, claveEpi, idUnidad) {
    if (!elemento) return "";
    const estado = normalizarEstadoElemento(elemento.estadoElemento);
    if (estado !== "ACTIVO") return "";
    sincronizarVeredictoEpi(claveEpi, elemento, true);
    const idBase = String(claveEpi || "epi").replace(/[^A-Za-z0-9_-]/g, "_") + "_" + String(idUnidad || "single").replace(/[^A-Za-z0-9_-]/g, "_");
    const evento = idUnidad
        ? `actualizarVeredictoRevisionFabricanteMultiple(${JSON.stringify(String(claveEpi))},${JSON.stringify(String(idUnidad))},this.value)`
        : `actualizarVeredictoRevisionFabricanteGeneral(${JSON.stringify(String(claveEpi))},this.value)`;
    const resultado = elemento.revisionFabricante && elemento.revisionFabricante.resultado || "";
    return `<div class="card manufacturer-review"><h4>Veredicto del EPI</h4>
        <p class="vehicle-help">Se marca automáticamente <strong>APTO</strong> cuando todas las comprobaciones aplicables son correctas. El auditor puede cambiarlo a <strong>NO APTO</strong> si considera que el equipo no debe aceptarse.</p>
        <div class="form-grid manufacturer-review-meta">
            <div class="field"><label><strong>VEREDICTO DEL EPI</strong></label>
                <select id="veredicto_mfr_${idBase}" onchange="${evento}">
                    <option value="">Pendiente</option>
                    <option value="APTO" ${resultado === "APTO" ? "selected" : ""}>APTO</option>
                    <option value="NO_APTO" ${resultado === "NO_APTO" ? "selected" : ""}>NO APTO</option>
                </select>
            </div>
        </div></div>`;
}

function renderizarModuloEpis() {

    inicializarEpis();

    const contenido = document.getElementById("contenidoModulo");
    if (!contenido) return;

    const epis = auditoria.modulos.epis;

    if (!episEsAplicable()) {
        contenido.innerHTML = `
            <div class="card vehicle-not-applicable">
                <h3>EPIs — NO APLICA</h3>
                <p>Este módulo está destinado a los EPIs generales de la actividad auditada.</p>
                <p>Los trabajos de <strong>Radio</strong> se complementan con el apartado específico <strong>RADIO — EPIs adicionales</strong>, sin repetir los EPIs generales.</p>
            </div>`;
        return;
    }

    if (epis.estado === "NO_APLICA") {
        contenido.innerHTML = `
            <div class="card vehicle-not-applicable">
                <h3>EPIs — NO APLICA</h3>
                <p>Se ha indicado que no procede realizar la auditoría de los EPIs generales en esta revisión.</p>
                <div class="vehicle-actions">
                    <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
                    <button type="button" class="secondary-button" onclick="reactivarModuloEpis()">Reactivar módulo EPIs</button>
                </div>
            </div>
            <div class="module-nav-bottom">
                <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
            </div>`;
        return;
    }

    let html = `
        <div class="module-intro">
            <h3>Equipos de Protección Individual</h3>
            <p>Compruebe individualmente cada aspecto de los EPIs generales correspondientes a la actividad auditada.</p>
            <p>Cada comprobación dispone de <strong>CORRECTO</strong>, <strong>INCORRECTO</strong> y <strong>NO PROCEDE</strong>. Los aspectos marcados como INCORRECTO requieren descripción de la deficiencia y medida correctiva.</p>
            <div class="vehicle-actions">
                <button type="button" class="btn-secondary" onclick="marcarModuloEpisNoAplica()">Marcar EPIs como NO APLICA</button>
                <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
            </div>
        </div>`;

    obtenerControlesEpis().forEach(claveEpi => {
        const definicionEpi = obtenerEstructuraEpis()[claveEpi];

        if (definicionEpi.multiple) {
            const controlMultiple = epis.controles[claveEpi];
            const unidades = Object.values(controlMultiple.unidades || {});

            html += `<div class="card epi-card"><h3>${escapeHtml(definicionEpi.nombre)}</h3><p class="vehicle-help">Puede añadir tantos elementos como necesite. La descripción del elemento es obligatoria.</p>`;
            unidades.forEach(unidad => {
                html += renderizarUnidadEpiMultiple(claveEpi, unidad);
            });
            html += `<div class="vehicle-actions"><button type="button" class="primary-button" onclick="agregarUnidadEpi('${claveEpi}')">+ Añadir ${escapeHtml(definicionEpi.nombre)}</button></div></div>`;
            return;
        }

        const controlEpi = epis.controles[claveEpi];
        const nombre = definicionEpi.nombre;
        const subcontroles = definicionEpi.controles;

        controlEpi.estadoElemento = normalizarEstadoElemento(controlEpi.estadoElemento);
        html += `<div class="card epi-card"><h3>${escapeHtml(nombre)}</h3>`;
        html += renderizarSelectorEstadoElemento(controlEpi.estadoElemento, `cambiarEstadoElementoEpi('${claveEpi}', `, nombre);

        const camposEpi = definicionEpi.campos || {};
        const configFabricante = obtenerConfiguracionPlantillaFabricante(controlEpi.campos ? controlEpi.campos.marca : "", claveEpi);
        if (configFabricante) aplicarNormaFabricanteSiProcede(controlEpi.campos, configFabricante);
        if (Object.keys(camposEpi).length) {
            html += `<div class="card epi-identificacion"><h4>Datos identificativos</h4><div class="form-grid">`;
            Object.keys(camposEpi).forEach(campo => {
                const esFecha = ["fechaFabricacion", "fechaCompra", "fechaPrimerUso"].includes(campo);
                const eventoCampo = campo === "marca"
                    ? `onchange="actualizarCampoEpi('${claveEpi}', '${campo}', this.value); renderizarModuloEpis();"`
                    : `oninput="actualizarCampoEpi('${claveEpi}', '${campo}', this.value)"`;
                html += `<div class="field"><label>${escapeHtml(camposEpi[campo])}</label><input type="${esFecha ? "date" : "text"}" value="${escapeHtml(controlEpi.campos[campo] || "")}" ${eventoCampo}></div>`;
            });
            html += `</div></div>`;
        }

        html += renderizarEstadoDocumentalEpi(controlEpi.campos ? controlEpi.campos.marca : "", claveEpi);

        if (controlEpi.estadoElemento === "ACTIVO") {
            // El veredicto del EPI se calcula antes de pintar la interfaz.
            // Si todos los controles aplicables son positivos, queda APTO
            // automáticamente; si el auditor ha elegido NO APTO, se conserva.
            sincronizarVeredictoEpi(claveEpi, controlEpi, true);
            Object.keys(subcontroles).forEach(claveSub => {
                html += renderizarControlEpi(claveEpi, claveSub, subcontroles[claveSub], controlEpi.subcontroles[claveSub]);
            });
            if (configFabricante) html += renderizarRevisionFabricante(controlEpi, claveEpi);
            else html += renderizarVeredictoEpiSinPlantilla(controlEpi, claveEpi);
        } else {
            html += `<div class="vehicle-help" style="margin-top:8px;"><strong>${textoEstadoElemento(controlEpi.estadoElemento)}</strong>${controlEpi.estadoElemento === "NO_DISPONIBLE" ? " — se ha generado automáticamente una inconformidad." : " — no se realizan los controles de este elemento."}</div>`;
        }
        html += `</div>`;
    });

    html += `<div class="card">
        <div class="vehicle-actions">
            <button type="button" class="secondary-button" onclick="marcarModuloEpisNoAplica()">Marcar EPIs como NO APLICA</button>
            <button type="button" class="primary-button" onclick="guardarEpis()">Guardar EPIs y completar módulo</button>
            <button type="button" class="btn-secondary" onclick="volverDashboard()">← Volver al Dashboard</button>
        </div>
    </div>`;
    contenido.innerHTML = html;
    marcarResultadosPositivosFabricanteEnDOM(contenido);
}

function renderizarControlEpi(claveEpi, claveSub, definicion, sub) {
    const incorrecto = sub.resultado === "INCORRECTO";
    const id = claveEpi + "_" + claveSub;
    return `
        <div class="vehicle-control epi-subcontrol">
            <div class="vehicle-control-main">
                <div class="vehicle-control-text"><strong>${escapeHtml(definicion)}</strong></div>
                <div class="vehicle-result-group"><div class="radio-group">
                    <label class="radio-option"><input type="radio" name="epi_${id}" value="CORRECTO" ${sub.resultado === "CORRECTO" ? "checked" : ""} onchange="cambiarResultadoSubcontrolEpi('${claveEpi}', '${claveSub}', 'CORRECTO')"><span>CORRECTO</span></label>
                    <label class="radio-option"><input type="radio" name="epi_${id}" value="INCORRECTO" ${incorrecto ? "checked" : ""} onchange="cambiarResultadoSubcontrolEpi('${claveEpi}', '${claveSub}', 'INCORRECTO')"><span>INCORRECTO</span></label>
                    <label class="radio-option"><input type="radio" name="epi_${id}" value="NO_PROCEDE" ${sub.resultado === "NO_PROCEDE" ? "checked" : ""} onchange="cambiarResultadoSubcontrolEpi('${claveEpi}', '${claveSub}', 'NO_PROCEDE')"><span>NO PROCEDE</span></label>
                </div></div>
            </div>
            ${incorrecto ? `<div class="vehicle-incident-detail"><div class="vehicle-incident-inner"><div class="vehicle-incident-title">INCIDENCIA DETECTADA</div>
                <div class="field"><label>Descripción de la incidencia *</label><textarea rows="3" oninput="actualizarDatoIncidenciaSubEpi('${claveEpi}', '${claveSub}', 'descripcion', this.value)">${escapeHtml(sub.descripcion)}</textarea></div>
                <div class="field"><label>Medida correctiva *</label><textarea rows="3" oninput="actualizarDatoIncidenciaSubEpi('${claveEpi}', '${claveSub}', 'medida', this.value)">${escapeHtml(sub.medida)}</textarea></div>
                <div class="field"><label>Observaciones</label><textarea rows="3" oninput="actualizarDatoIncidenciaSubEpi('${claveEpi}', '${claveSub}', 'observaciones', this.value)">${escapeHtml(sub.observaciones)}</textarea></div>
                <button type="button" class="secondary-button" onclick="registrarFotoSubcontrolEpi('${claveEpi}', '${claveSub}')">Añadir fotografía</button><small>La fotografía es opcional.</small>
                ${sub.fotografias.length ? `<div class="photo-list">${sub.fotografias.map(foto => `<div class="photo-item">${escapeHtml(foto.descripcion || "Fotografía")}</div>`).join("")}</div>` : ""}
            </div></div>` : ""}
        </div>`;
}

function renderizarUnidadEpiMultiple(claveEpi, unidad) {
    const definicion = obtenerEstructuraEpis()[claveEpi];
    unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
    const nombreElemento = definicion.nombre + " #" + unidad.numero;
    let html = `<div class="card epi-card"><h4>${escapeHtml(nombreElemento)}</h4>`;
    html += renderizarSelectorEstadoElemento(unidad.estadoElemento, `cambiarEstadoElementoEpi('${claveEpi}', `, nombreElemento);
    html += `<div class="card epi-identificacion"><h4>Datos del elemento</h4><div class="form-grid">`;
    Object.keys(definicion.campos || {}).forEach(campo => {
        const esFecha = ["fechaFabricacion", "fechaCompra", "fechaPrimerUso"].includes(campo);
        const eventoCampo = campo === "marca"
            ? `onchange="actualizarCampoEpiMultiple('${claveEpi}', '${unidad.id}', '${campo}', this.value); renderizarModuloEpis();"`
            : `oninput="actualizarCampoEpiMultiple('${claveEpi}', '${unidad.id}', '${campo}', this.value)"`;
        html += `<div class="field"><label>${escapeHtml(definicion.campos[campo])}${campo === "descripcionElemento" ? " *" : ""}</label><input type="${esFecha ? "date" : "text"}" value="${escapeHtml(unidad.campos[campo] || "")}" ${eventoCampo}></div>`;
    });
    html += `</div></div>`;
    if (unidad.estadoElemento === "ACTIVO") {
        // Igual que en los EPI únicos, el veredicto se sincroniza antes del
        // render para que APTO aparezca realmente seleccionado en pantalla.
        sincronizarVeredictoEpi(claveEpi, unidad, true);
        Object.keys(definicion.controles).forEach(claveSub => {
            html += renderizarControlEpiMultiple(claveEpi, unidad.id, claveSub, definicion.controles[claveSub], unidad.subcontroles[claveSub]);
        });
        const configUnidad = obtenerConfiguracionRevisionFabricante(unidad.campos ? unidad.campos.marca : "", claveEpi);
        if (configUnidad) html += renderizarRevisionFabricante(unidad, claveEpi, unidad.id);
        else html += renderizarVeredictoEpiSinPlantilla(unidad, claveEpi, unidad.id);
    } else {
        html += `<div class="vehicle-help" style="margin-top:8px;"><strong>${textoEstadoElemento(unidad.estadoElemento)}</strong>${unidad.estadoElemento === "NO_DISPONIBLE" ? " — se ha generado automáticamente una inconformidad." : " — no se realizan los controles de este elemento."}</div>`;
    }
    html += `<div class="vehicle-actions"><button type="button" class="btn-secondary" onclick="eliminarUnidadEpi('${claveEpi}', '${unidad.id}')">Eliminar este elemento</button></div></div>`;
    return html;
}

function renderizarControlEpiMultiple(claveEpi, idUnidad, claveSub, definicion, sub) {
    const incorrecto = sub.resultado === "INCORRECTO";
    const radioName = "epi_" + idUnidad + "_" + claveSub;
    return `<div class="vehicle-control epi-subcontrol"><div class="vehicle-control-main"><div class="vehicle-control-text"><strong>${escapeHtml(definicion)}</strong></div><div class="vehicle-result-group"><div class="radio-group">
        <label class="radio-option"><input type="radio" name="${radioName}" ${sub.resultado === "CORRECTO" ? "checked" : ""} onchange="cambiarResultadoEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'CORRECTO')"><span>CORRECTO</span></label>
        <label class="radio-option"><input type="radio" name="${radioName}" ${incorrecto ? "checked" : ""} onchange="cambiarResultadoEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'INCORRECTO')"><span>INCORRECTO</span></label>
        <label class="radio-option"><input type="radio" name="${radioName}" ${sub.resultado === "NO_PROCEDE" ? "checked" : ""} onchange="cambiarResultadoEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'NO_PROCEDE')"><span>NO PROCEDE</span></label>
    </div></div></div>
    ${incorrecto ? `<div class="vehicle-incident-detail"><div class="vehicle-incident-inner"><div class="vehicle-incident-title">INCIDENCIA DETECTADA</div>
        <div class="field"><label>Descripción de la incidencia *</label><textarea rows="3" oninput="actualizarDatoIncidenciaEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'descripcion', this.value)">${escapeHtml(sub.descripcion)}</textarea></div>
        <div class="field"><label>Medida correctiva *</label><textarea rows="3" oninput="actualizarDatoIncidenciaEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'medida', this.value)">${escapeHtml(sub.medida)}</textarea></div>
        <div class="field"><label>Observaciones</label><textarea rows="3" oninput="actualizarDatoIncidenciaEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}', 'observaciones', this.value)">${escapeHtml(sub.observaciones)}</textarea></div>
        <button type="button" class="secondary-button" onclick="registrarFotoEpiMultiple('${claveEpi}', '${idUnidad}', '${claveSub}')">Añadir fotografía</button><small>La fotografía es opcional.</small>
        ${sub.fotografias.length ? `<div class="photo-list">${sub.fotografias.map(foto => `<div class="photo-item">${escapeHtml(foto.descripcion || "Fotografía")}</div>`).join("")}</div>` : ""}
    </div></div>` : ""}
    </div>`;
}


function obtenerUnidadesEpiMultiple(claveEpi) {
    inicializarEpis();
    const control = auditoria.modulos.epis.controles[claveEpi];
    return control && control.unidades ? Object.values(control.unidades) : [];
}

function agregarUnidadEpi(claveEpi) {
    const definicion = obtenerEstructuraEpis()[claveEpi];
    if (!definicion || !definicion.multiple) return;
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = crearUnidadEpiMultiple(claveEpi, Object.keys(control.unidades || {}).length + 1);
    control.unidades[unidad.id] = unidad;
    auditoria.modulos.epis.estado = "EN_CURSO";
    renderizarModuloEpis();
    actualizarDashboard();
}

function eliminarUnidadEpi(claveEpi, idUnidad) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad) return;
    Object.keys(unidad.subcontroles || {}).forEach(claveSub => eliminarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub));
    delete control.unidades[idUnidad];
    Object.values(control.unidades).forEach((item, index) => item.numero = index + 1);

    // Actualizar las referencias visibles de las incidencias después de renumerar unidades.
    const definicion = obtenerEstructuraEpis()[claveEpi];
    Object.values(control.unidades).forEach(item => {
        Object.keys(item.subcontroles || {}).forEach(claveSub => {
            const incidencia = auditoria.incidencias.find(i =>
                i.id === "EPIS_" + claveEpi + "_" + item.id + "_" + claveSub
            );
            if (incidencia) {
                incidencia.control = definicion.nombre + " #" + item.numero;
                incidencia.subcontrol = definicion.controles[claveSub];
            }
        });
    });

    auditoria.modulos.epis.estado = "EN_CURSO";
    renderizarModuloEpis();
    actualizarDashboard();
}

function actualizarCampoEpiMultiple(claveEpi, idUnidad, campo, valor) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    const definicion = obtenerEstructuraEpis()[claveEpi];
    if (!unidad || !definicion || !Object.prototype.hasOwnProperty.call(definicion.campos || {}, campo)) return;
    unidad.campos[campo] = valor;
    if (campo === "marca") {
        const configuracion = cambiarFabricanteRevision(unidad, valor, claveEpi);
        aplicarNormaFabricanteSiProcede(unidad.campos, configuracion);
    }
    auditoria.modulos.epis.estado = "EN_CURSO";
}

function cambiarResultadoEpiMultiple(claveEpi, idUnidad, claveSub, resultado) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const sub = unidad.subcontroles[claveSub];
    sub.resultado = resultado;
    auditoria.modulos.epis.estado = "EN_CURSO";
    if (resultado === "INCORRECTO") crearIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub);
    else {
        eliminarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub);
        sub.descripcion = "";
        sub.medida = "";
        sub.observaciones = "";
        sub.fotografias = [];
    }
    renderizarModuloEpis();
    actualizarDashboard();
}

function crearIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return null;
    const definicion = obtenerEstructuraEpis()[claveEpi];
    const sub = unidad.subcontroles[claveSub];
    const idIncidencia = "EPIS_" + claveEpi + "_" + idUnidad + "_" + claveSub;
    let incidencia = auditoria.incidencias.find(item => item.id === idIncidencia);
    if (!incidencia) {
        incidencia = {
            id: idIncidencia,
            origen: "EPIS",
            modulo: "EPIs",
            controlClave: claveEpi,
            unidadId: idUnidad,
            subcontrolClave: claveSub,
            control: definicion.nombre + " #" + unidad.numero,
            subcontrol: definicion.controles[claveSub],
            resultado: "INCORRECTO",
            descripcion: sub.descripcion || "",
            medida: sub.medida || "",
            observaciones: sub.observaciones || "",
            fotografias: sub.fotografias || [],
            estado: "ABIERTA"
        };
        auditoria.incidencias.push(incidencia);
    } else {
        incidencia.control = definicion.nombre + " #" + unidad.numero;
        incidencia.descripcion = sub.descripcion || "";
        incidencia.medida = sub.medida || "";
        incidencia.observaciones = sub.observaciones || "";
        incidencia.fotografias = sub.fotografias || [];
        incidencia.estado = "ABIERTA";
    }
    sub.incidenciaId = idIncidencia;
    return incidencia;
}

function actualizarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const sub = unidad.subcontroles[claveSub];
    if (sub.resultado !== "INCORRECTO") return;
    crearIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub);
    actualizarDashboard();
}

function eliminarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const idIncidencia = "EPIS_" + claveEpi + "_" + idUnidad + "_" + claveSub;
    auditoria.incidencias = auditoria.incidencias.filter(item => item.id !== idIncidencia);
    unidad.subcontroles[claveSub].incidenciaId = null;
}

function actualizarDatoIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub, campo, valor) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    if (["descripcion", "medida", "observaciones"].includes(campo)) {
        unidad.subcontroles[claveSub][campo] = valor;
        actualizarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub);
    }
}

function registrarFotoEpiMultiple(claveEpi, idUnidad, claveSub) {
    const control = auditoria.modulos.epis.controles[claveEpi];
    const unidad = control && control.unidades ? control.unidades[idUnidad] : null;
    if (!unidad || !unidad.subcontroles || !unidad.subcontroles[claveSub]) return;
    const sub = unidad.subcontroles[claveSub];
    if (!Array.isArray(sub.fotografias)) sub.fotografias = [];

    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        sub.fotografias.push(foto);
        actualizarIncidenciaEpiMultiple(claveEpi, idUnidad, claveSub);
        renderizarModuloEpis();
        actualizarDashboard();
    });
}

function actualizarCampoEpi(claveEpi, campo, valor) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];
    const estructura = obtenerEstructuraEpis()[claveEpi];

    if (!controlEpi || !estructura) {
        return;
    }

    if (!controlEpi.campos || typeof controlEpi.campos !== "object") {
        controlEpi.campos = {};
    }

    if (Object.prototype.hasOwnProperty.call(estructura.campos || {}, campo)) {
        controlEpi.campos[campo] = valor;
        if (campo === "marca") {
            const configuracion = cambiarFabricanteRevision(controlEpi, valor, claveEpi);
            aplicarNormaFabricanteSiProcede(controlEpi.campos, configuracion);
        }
    }

    auditoria.modulos.epis.estado = "EN_CURSO";
}


function cambiarResultadoSubcontrolEpi(claveEpi, claveSub, resultado) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];

    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) {
        return;
    }

    const sub = controlEpi.subcontroles[claveSub];
    sub.resultado = resultado;
    auditoria.modulos.epis.estado = "EN_CURSO";

    if (resultado === "INCORRECTO") {
        crearIncidenciaSubcontrolEpi(claveEpi, claveSub);
    } else {
        eliminarIncidenciaSubcontrolEpi(claveEpi, claveSub);
        sub.descripcion = "";
        sub.medida = "";
        sub.observaciones = "";
        sub.fotografias = [];
    }

    sincronizarResultadoEpi(claveEpi);
    sincronizarVeredictoEpi(claveEpi, controlEpi, true);
    renderizarModuloEpis();
    actualizarDashboard();
}


function actualizarDatoIncidenciaSubEpi(claveEpi, claveSub, campo, valor) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];

    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) {
        return;
    }

    const sub = controlEpi.subcontroles[claveSub];

    if (campo === "descripcion" || campo === "medida" || campo === "observaciones") {
        sub[campo] = valor;
    }

    actualizarIncidenciaSubcontrolEpi(claveEpi, claveSub);
}


function crearIncidenciaSubcontrolEpi(claveEpi, claveSub) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];

    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) {
        return null;
    }

    const sub = controlEpi.subcontroles[claveSub];
    const id = "EPIS_" + claveEpi + "_" + claveSub;
    let incidencia = auditoria.incidencias.find(item => item.id === id);

    if (!incidencia) {
        incidencia = {
            id: id,
            origen: "EPIS",
            modulo: "EPIs",
            controlClave: claveEpi,
            subcontrolClave: claveSub,
            control: obtenerNombreControlEpis(claveEpi),
            subcontrol: obtenerSubcontrolesEpi(claveEpi)[claveSub],
            resultado: "INCORRECTO",
            descripcion: sub.descripcion || "",
            medida: sub.medida || "",
            observaciones: sub.observaciones || "",
            fotografias: sub.fotografias || [],
            estado: "ABIERTA"
        };
        auditoria.incidencias.push(incidencia);
    } else {
        incidencia.resultado = "INCORRECTO";
        incidencia.descripcion = sub.descripcion || "";
        incidencia.medida = sub.medida || "";
        incidencia.observaciones = sub.observaciones || "";
        incidencia.fotografias = sub.fotografias || [];
        incidencia.estado = "ABIERTA";
    }

    sub.incidenciaId = id;
    return incidencia;
}


function actualizarIncidenciaSubcontrolEpi(claveEpi, claveSub) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];

    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) {
        return;
    }

    const sub = controlEpi.subcontroles[claveSub];

    if (sub.resultado !== "INCORRECTO") {
        return;
    }

    const incidencia = crearIncidenciaSubcontrolEpi(claveEpi, claveSub);

    if (!incidencia) {
        return;
    }

    incidencia.descripcion = sub.descripcion || "";
    incidencia.medida = sub.medida || "";
    incidencia.observaciones = sub.observaciones || "";
    incidencia.fotografias = sub.fotografias || [];

    actualizarDashboard();
}


function eliminarIncidenciaSubcontrolEpi(claveEpi, claveSub) {

    const controlEpi = auditoria.modulos.epis.controles[claveEpi];

    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) {
        return;
    }

    const sub = controlEpi.subcontroles[claveSub];
    const id = "EPIS_" + claveEpi + "_" + claveSub;

    auditoria.incidencias = auditoria.incidencias.filter(
        item => item.id !== id
    );

    sub.incidenciaId = null;
}


function registrarFotoSubcontrolEpi(claveEpi, claveSub) {
    const controlEpi = auditoria.modulos.epis.controles[claveEpi];
    if (!controlEpi || !controlEpi.subcontroles || !controlEpi.subcontroles[claveSub]) return;
    const sub = controlEpi.subcontroles[claveSub];
    if (!Array.isArray(sub.fotografias)) sub.fotografias = [];

    seleccionarFotografiaEnMemoria(function (foto) {
        const descripcion = prompt("Descripción de la fotografía (opcional):", "");
        if (descripcion === null) return;
        foto.descripcion = descripcion.trim();
        sub.fotografias.push(foto);
        actualizarIncidenciaSubcontrolEpi(claveEpi, claveSub);
        renderizarModuloEpis();
        actualizarDashboard();
    });
}


function marcarModuloEpisNoAplica() {
    if (!episEsAplicable()) {
        auditoria.modulos.epis.estado = "NO_APLICA";
        actualizarDashboard();
        volverDashboard();
        return;
    }
    if (!confirm("¿Marcar el módulo EPIs como NO APLICA? No se realizará la revisión de los EPIs generales.")) return;
    auditoria.modulos.epis.estado = "NO_APLICA";
    actualizarDashboard();
    volverDashboard();
}

function reactivarModuloEpis() {
    auditoria.modulos.epis.estado = "NO_INICIADO";
    actualizarDashboard();
    renderizarModuloEpis();
}

function guardarEpis() {

    const epis = auditoria.modulos.epis;
    if (!episEsAplicable()) return;
    inicializarEpis();

    for (const claveEpi of obtenerControlesEpis()) {
        const definicion = obtenerEstructuraEpis()[claveEpi];

        if (definicion.multiple) {
            const controlMultiple = epis.controles[claveEpi];
            for (const unidad of Object.values(controlMultiple.unidades || {})) {
                unidad.estadoElemento = normalizarEstadoElemento(unidad.estadoElemento);
                if (unidad.estadoElemento !== "ACTIVO") {
                    if (unidad.estadoElemento === "NO_DISPONIBLE") crearIncidenciaNoDisponibleEpi(claveEpi, unidad);
                    else eliminarIncidenciaNoDisponibleEpi(claveEpi, unidad);
                    continue;
                }
                if (!String(unidad.campos.descripcionElemento || "").trim()) {
                    alert("Debe indicar la descripción del elemento en " + definicion.nombre + ".");
                    return;
                }
                for (const claveSub of Object.keys(definicion.controles)) {
                    const sub = unidad.subcontroles[claveSub];
                    if (!sub || !sub.resultado) {
                        alert("Todas las comprobaciones de EPIs deben tener resultado: " + definicion.nombre + " #" + unidad.numero + " — " + definicion.controles[claveSub]);
                        return;
                    }
                    if (sub.resultado === "INCORRECTO" && !String(sub.descripcion || "").trim()) {
                        alert("Debe describir la deficiencia del EPI marcado como INCORRECTO: " + definicion.nombre + " #" + unidad.numero + " — " + definicion.controles[claveSub]);
                        return;
                    }
                    if (sub.resultado === "INCORRECTO" && !String(sub.medida || "").trim()) {
                        alert("Debe indicar la medida correctiva del EPI marcado como INCORRECTO: " + definicion.nombre + " #" + unidad.numero + " — " + definicion.controles[claveSub]);
                        return;
                    }
                    if (sub.resultado === "INCORRECTO") actualizarIncidenciaEpiMultiple(claveEpi, unidad.id, claveSub);
                    else eliminarIncidenciaEpiMultiple(claveEpi, unidad.id, claveSub);
                }
                const configFabricanteUnidad = obtenerConfiguracionRevisionFabricante(unidad.campos ? unidad.campos.marca : "", claveEpi);
                if (configFabricanteUnidad) {
                    inicializarRevisionFabricante(unidad, configFabricanteUnidad);
                    const selectVeredicto = document.getElementById("veredicto_mfr_" + String(claveEpi || "").replace(/[^A-Za-z0-9_-]/g, "_") + "_" + String(unidad.id || "").replace(/[^A-Za-z0-9_-]/g, "_"));
                    if (selectVeredicto && selectVeredicto.value) {
                        unidad.revisionFabricante.resultado = selectVeredicto.value;
                    }
                    sincronizarVeredictoEpi(claveEpi, unidad, true);
                    if (!unidad.revisionFabricante.resultado) {
                        alert("Debe indicar el veredicto del EPI " + definicion.nombre + " #" + unidad.numero + ".");
                        return;
                    }
                }
            }
            continue;
        }

        const controlEpi = epis.controles[claveEpi];
        controlEpi.estadoElemento = normalizarEstadoElemento(controlEpi.estadoElemento);
        if (controlEpi.estadoElemento !== "ACTIVO") {
            if (controlEpi.estadoElemento === "NO_DISPONIBLE") crearIncidenciaNoDisponibleEpi(claveEpi, controlEpi);
            else eliminarIncidenciaNoDisponibleEpi(claveEpi, controlEpi);
            continue;
        }
        const subcontroles = definicion.controles;
        for (const claveSub of Object.keys(subcontroles)) {
            const sub = controlEpi.subcontroles[claveSub];
            if (!sub || !sub.resultado) {
                alert("Todas las comprobaciones de EPIs deben tener resultado: " + definicion.nombre + " — " + subcontroles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO" && !String(sub.descripcion || "").trim()) {
                alert("Debe describir la deficiencia del EPI marcado como INCORRECTO: " + definicion.nombre + " — " + subcontroles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO" && !String(sub.medida || "").trim()) {
                alert("Debe indicar la medida correctiva del EPI marcado como INCORRECTO: " + definicion.nombre + " — " + subcontroles[claveSub]);
                return;
            }
            if (sub.resultado === "INCORRECTO") actualizarIncidenciaSubcontrolEpi(claveEpi, claveSub);
            else eliminarIncidenciaSubcontrolEpi(claveEpi, claveSub);
        }
        const configFabricanteControl = obtenerConfiguracionRevisionFabricante(controlEpi.campos ? controlEpi.campos.marca : "", claveEpi);
        if (configFabricanteControl) {
            inicializarRevisionFabricante(controlEpi, configFabricanteControl);
            const selectVeredicto = document.getElementById("veredicto_mfr_" + String(claveEpi || "").replace(/[^A-Za-z0-9_-]/g, "_") + "_single");
            if (selectVeredicto && selectVeredicto.value) {
                controlEpi.revisionFabricante.resultado = selectVeredicto.value;
            }
            sincronizarVeredictoEpi(claveEpi, controlEpi, true);
            if (!controlEpi.revisionFabricante.resultado) {
                alert("Debe indicar el veredicto del EPI " + definicion.nombre + ".");
                return;
            }
        }
        sincronizarResultadoEpi(claveEpi);
    }

    epis.estado = "COMPLETADO";
    actualizarDashboard();
    alert("Módulo EPIs completado correctamente.");
    volverDashboard();
}

function escapeHtml(
    valor
) {

    if (
        valor === null ||
        valor === undefined
    ) {

        return "";
    }


    return String(valor)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
}