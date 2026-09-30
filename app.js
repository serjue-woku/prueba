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
            const marca = unidad.campos && unidad.campos.marca || "";
            const modelo = unidad.campos && unidad.campos.modelo || "";
            const identificacion = unidad.campos && (unidad.campos.numeroEpi || unidad.campos.identificacion || unidad.campos.numeroSerie || unidad.campos.descripcionElemento) || "";
            const config = obtenerConfiguracionRevisionFabricante(marca, claveEpi);
            const revision = unidad.revisionFabricante;
            const controles = revision && revision.controles ? Object.values(revision.controles) : [];
            const incorrectos = controles.filter(c => c && c.resultado && ["INCORRECTO", "NO_OK", "M", "R", "MALO", "NO_APTO"].includes(c.resultado)).length;
            resultado.push({
                nombre: def.nombre + (def.multiple ? " #" + (unidad.numero || indice + 1) : ""),
                estadoElemento: normalizarEstadoElemento(unidad.estadoElemento),
                marca, modelo, identificacion,
                fabricante: revision && revision.fabricante ? revision.fabricante : "",
                resultado: revision && revision.resultado ? revision.resultado : "",
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
            resultado: unidad.revisionFabricante && unidad.revisionFabricante.resultado || "",
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

function crearPdfAuditoriaLocal() {
    return cargarJsPdfLocal().then(jsPDF => {
        const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
        const margen = 14;
        const ancho = 210;
        const alto = 297;
        const anchoTexto = ancho - margen * 2;
        // Zona segura de contenido: deja espacio suficiente para el pie de página y evita que
        // las últimas líneas de un apartado queden montadas/cortadas.
        const limiteContenido = alto - 24;
        let y = 18;
        let pagina = 1;

        const fechaHora = () => {
            const fecha = auditoria.fechaFinalizacion || auditoria.datosGenerales.fecha || "";
            const hora = auditoria.horaFinalizacion || auditoria.datosGenerales.horaInicio || "";
            return [fecha, hora].filter(Boolean).join(" ");
        };

        function encabezado() {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(9);
            doc.text("AUDITORÍA DE VEHÍCULOS", margen, 9);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.text("ID: " + normalizarTextoPdf(auditoria.id), ancho - margen, 9, { align: "right" });
            doc.setDrawColor(180);
            doc.line(margen, 11, ancho - margen, 11);
        }

        function pie() {
            doc.setDrawColor(200);
            doc.line(margen, alto - 11, ancho - margen, alto - 11);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7);
            doc.text("Resumen generado localmente en la aplicación", margen, alto - 6);
            doc.text("Página " + pagina, ancho - margen, alto - 6, { align: "right" });
        }

        function nuevaPagina() {
            pie();
            doc.addPage();
            pagina += 1;
            encabezado();
            y = 18;
        }

        function asegurar(altura) {
            if (y + altura > limiteContenido) nuevaPagina();
        }

        function titulo(texto) {
            asegurar(12);
            doc.setFillColor(235, 235, 235);
            doc.rect(margen, y - 5, anchoTexto, 8, "F");
            doc.setFont("helvetica", "bold");
            doc.setFontSize(11);
            doc.text(normalizarTextoPdf(texto), margen + 2, y);
            y += 8;
        }

        function linea(label, valor) {
            const texto = normalizarTextoPdf(label + ": " + (valor || "-"));
            const lineas = doc.splitTextToSize(texto, anchoTexto);
            asegurar(lineas.length * 4.5 + 2);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.5);
            doc.text(lineas, margen, y);
            y += lineas.length * 4.5;
        }

        function parrafo(texto) {
            const lineas = doc.splitTextToSize(normalizarTextoPdf(texto || ""), anchoTexto);
            asegurar(Math.max(1, lineas.length) * 4.2 + 2);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8.2);
            doc.text(lineas, margen, y);
            y += Math.max(1, lineas.length) * 4.2 + 1;
        }

        function tabla(filas, anchos, encabezados) {
            const altoFila = 6; const xs=[margen]; anchos.forEach(w=>xs.push(xs[xs.length-1]+w));
            const calc=celdas=>{const lineas=celdas.map((c,i)=>doc.splitTextToSize(normalizarTextoPdf(c),anchos[i]-2));const n=Math.max(1,...lineas.map(a=>a.length));return {lineas,h:Math.max(altoFila,n*3.7+2.3)};};
            const cab=calc(encabezados), datos=filas.map(calc), total=cab.h+datos.reduce((a,r)=>a+r.h,0)+3;
            if(total <= (limiteContenido-18) && y+total > limiteContenido) nuevaPagina();
            function dibujar(celdas,cabecera,info){const d=info||calc(celdas);if(y+d.h>limiteContenido){nuevaPagina();if(!cabecera)dibujar(encabezados,true,cab);}if(cabecera){doc.setFillColor(225,225,225);doc.rect(margen,y-4.2,anchoTexto,d.h,"F");}doc.setDrawColor(190);doc.rect(margen,y-4.2,anchoTexto,d.h);for(let i=0;i<celdas.length;i++){if(i>0)doc.line(xs[i],y-4.2,xs[i],y-4.2+d.h);doc.setFont("helvetica",cabecera?"bold":"normal");doc.setFontSize(cabecera?7.2:6.9);doc.text(d.lineas[i],xs[i]+1,y);}y+=d.h;}
            dibujar(encabezados,true,cab);filas.forEach((f,i)=>dibujar(f,false,datos[i]));y+=3;
        }

        function imagen(dataUrl, x, yy, maxW, maxH) {
            try {
                const props = doc.getImageProperties(dataUrl);
                const ratio = props.width / props.height;
                let w = maxW;
                let h = w / ratio;
                if (h > maxH) { h = maxH; w = h * ratio; }
                asegurar(h + 6);
                const yImagen = y;
                doc.addImage(dataUrl, "JPEG", x, yImagen, w, h, undefined, "FAST");
                y = yImagen + h + 4;
                return { ok: true, width: w, height: h, y: yImagen };
            } catch (e) {
                try {
                    const props = doc.getImageProperties(dataUrl);
                    const ratio = props.width / props.height;
                    let w = maxW;
                    let h = w / ratio;
                    if (h > maxH) { h = maxH; w = h * ratio; }
                    asegurar(h + 6);
                    const yImagen = y;
                    doc.addImage(dataUrl, undefined, x, yImagen, w, h, undefined, "FAST");
                    y = yImagen + h + 4;
                    return { ok: true, width: w, height: h, y: yImagen };
                } catch (e2) { return { ok: false }; }
            }
        }

        function moduloEstaNoAplica(clave) {
            const m = auditoria.modulos && auditoria.modulos[clave];
            return !!(m && m.estado === "NO_APLICA");
        }

        function mostrarModuloNoAplica(nombre) {
            parrafo(nombre + ": NO APLICA. No se muestran los elementos ni controles de este módulo porque el módulo completo fue declarado no aplicable.");
        }

        encabezado();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("RESUMEN DE AUDITORÍA", margen, y);
        y += 8;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.text("Estado: " + normalizarTextoPdf(auditoria.estado || "BORRADOR"), margen, y);
        y += 7;

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
        tabla(mods.map(m => [m.nombre, textoEstadoResumen(m.estado)]), [125, 47], ["Módulo", "Estado"]);

        const basico = obtenerResumenBasicoPdf();
        titulo("3. Vehículo");
        if (moduloEstaNoAplica("vehiculo")) mostrarModuloNoAplica("Vehículo");
        else {
            linea("Estado", textoEstadoResumen(basico.vehiculo.estado));
            linea("Matrícula", basico.vehiculo.matricula);
            linea("Marca / modelo", [basico.vehiculo.marca, basico.vehiculo.modelo].filter(Boolean).join(" "));
            linea("Tipo", basico.vehiculo.tipo);
            linea("ITV", basico.vehiculo.itv);
            linea("Seguro", basico.vehiculo.seguro);
        }

        titulo("4. Extintor");
        if (moduloEstaNoAplica("extintor")) mostrarModuloNoAplica("Extintor");
        else {
            linea("Estado", textoEstadoResumen(basico.extintor.estado));
            linea("Dispone", basico.extintor.dispone);
            linea("Tipo / agente", [basico.extintor.tipo, basico.extintor.agente].filter(Boolean).join(" / "));
            linea("Capacidad", basico.extintor.capacidad);
            linea("Ubicación", basico.extintor.ubicacion);
            linea("Identificación", basico.extintor.identificacion);
        }

        const epis = obtenerResumenEpis();
        titulo("5. EPIs y revisiones específicas");
        if (moduloEstaNoAplica("epis")) mostrarModuloNoAplica("EPIs");
        else if (epis.length) {
            tabla(epis.map(e => [e.nombre, textoEstadoElemento(e.estadoElemento), e.marca, e.modelo, e.identificacion, e.estadoElemento === "ACTIVO" ? String(e.controles) : "—", e.estadoElemento === "ACTIVO" ? (e.resultado || "Pendiente") : "—"]), [30,26,22,22,27,15,40], ["EPI","Estado","Marca","Modelo","Identificación","Controles","Veredicto"]);
        } else parrafo("No hay elementos de EPIs registrados.");

        const radio = obtenerResumenRadio();
        titulo("6. RADIO - EPIs específicos");
        if (moduloEstaNoAplica("radio")) mostrarModuloNoAplica("RADIO");
        else if ((datos.actividad || "") === "RADIO" && radio.length) {
            tabla(radio.map(e => [e.nombre, textoEstadoElemento(e.estadoElemento), e.marca, e.modelo, e.identificacion, e.estadoElemento === "ACTIVO" ? (e.resultado || "Pendiente") : "—"]), [32,26,22,25,38,39], ["Equipo","Estado","Marca","Modelo","Identificación","Veredicto"]);
        } else parrafo((datos.actividad || "") === "RADIO" ? "No hay elementos específicos de RADIO registrados." : "RADIO: NO APLICA por actividad.");

        const escaleras = obtenerResumenEscaleras();
        titulo("7. Escaleras");
        if (moduloEstaNoAplica("escaleras")) mostrarModuloNoAplica("Escaleras");
        else if (escaleras.length) {
            tabla(escaleras.map(e => [e.nombre, e.tipo, e.fabricante, e.modelo, e.identificacion, textoEstadoResumen(e.estado)]), [27, 23, 32, 29, 31, 28], ["Escalera", "Tipo", "Fabricante", "Modelo", "Identificación", "Estado"]);

            // Fotografías de identificación asociadas a cada escalera, máximo 4 por unidad.
            auditoria.modulos.escaleras.unidades.forEach((unidad, idx) => {
                inicializarFotografiasIdentificacionEscalera(unidad);
                const fotosEscalera = [
                    ["pegatinaRevision1", "Fotografía pegatina revisión 1"],
                    ["pegatinaRevision2", "Fotografía pegatina revisión 2"],
                    ["placaIdentificativa1", "Fotografía placa identificativa 1"],
                    ["placaIdentificativa2", "Fotografía placa identificativa 2"]
                ].filter(([clave]) => unidad.fotografiasIdentificacion[clave] && unidad.fotografiasIdentificacion[clave].dataUrl);
                if (!fotosEscalera.length) return;
                asegurar(28);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
                doc.text("Fotografías de identificación — Escalera " + (idx + 1), margen, y);
                y += 6;
                fotosEscalera.forEach(([clave, etiqueta]) => {
                    const foto = unidad.fotografiasIdentificacion[clave];
                    asegurar(62);
                    doc.setFont("helvetica", "bold");
                    doc.setFontSize(8);
                    doc.text(etiqueta, margen, y);
                    y += 4;
                    const yFoto = y;
                    const imgInfo = imagen(foto.dataUrl, margen, yFoto, 80, 52);
                    if (foto.descripcion) {
                        doc.setFont("helvetica", "normal");
                        doc.setFontSize(7);
                        doc.text(normalizarTextoPdf(foto.descripcion), 105, yFoto + 5, { maxWidth: 85 });
                    }
                    y = Math.max(y, yFoto + 56);
                });
            });
        } else parrafo("No hay escaleras registradas.");

        const botiquin = obtenerResumenBotiquinPdf();
        titulo("8. Botiquín");
        if (moduloEstaNoAplica("botiquin")) mostrarModuloNoAplica("Botiquín");
        else if (botiquin.length) tabla(botiquin.map(e => [e.nombre, e.resultado, e.detalle]), [75, 35, 60], ["Comprobación", "Resultado", "Detalle"]);
        else parrafo("No hay datos de botiquín registrados.");

        const incidencias = obtenerResumenIncidencias();
        titulo("9. Incidencias");
        if (incidencias.length) {
            tabla(incidencias.map(i => [i.id || "", i.control || i.subcontrol || i.modulo || "", i.descripcion || "", i.medida || "", i.observaciones || "", (Array.isArray(i.fotografias) ? i.fotografias.length : (i.fotografia ? 1 : 0)).toString()]), [18, 32, 45, 45, 32, 12], ["ID", "Elemento", "Descripción", "Medida correctora", "Observaciones", "Fotos"]);
        } else parrafo("No hay incidencias registradas.");

        const fotos = recopilarFotografiasAuditoriaPdf();
        titulo("10. Fotografías");
        if (fotos.length) {
            fotos.forEach((f, i) => {
                // Reservar el bloque completo para que no quede el título de una fotografía
                // al final de una página y la imagen en la siguiente.
                asegurar(72);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(8);
                doc.text("Fotografía " + (i + 1) + " - " + (f.contexto || f.nombre), margen, y);
                y += 4;
                if (f.descripcion) { parrafo(f.descripcion); }
                imagen(f.dataUrl, margen, y, 80, 58);
            });
        } else parrafo("No hay fotografías registradas.");

        titulo("11. Firmas digitales");
        asegurar(62);
        const xFirmaIzq = margen;
        const xFirmaDer = margen + anchoTexto / 2 + 5;
        const anchoFirma = (anchoTexto - 5) / 2;
        const yFirmaTitulo = y;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.text("Firma del auditor", xFirmaIzq, yFirmaTitulo);
        doc.text("Firma del trabajador/auditado", xFirmaDer, yFirmaTitulo);
        const yFirma = yFirmaTitulo + 4;
        const altoFirma = 38;
        const dibujarFirma = (dataUrl, x, yy, wMax, hMax, textoVacio) => {
            try {
                if (!dataUrl) throw new Error("sin firma");
                const props = doc.getImageProperties(dataUrl);
                const ratio = props.width / props.height;
                let w = wMax, h = w / ratio;
                if (h > hMax) { h = hMax; w = h * ratio; }
                doc.addImage(dataUrl, undefined, x, yy, w, h, undefined, "FAST");
            } catch (e) {
                doc.setFont("helvetica", "normal");
                doc.setFontSize(7.5);
                doc.text(textoVacio, x, yy + 6);
            }
        };
        // Ambas firmas parten exactamente de la misma coordenada Y.
        dibujarFirma(auditoria.firmas && auditoria.firmas.auditor, xFirmaIzq, yFirma, anchoFirma, altoFirma, "Firma del auditor no disponible.");
        dibujarFirma(auditoria.firmas && auditoria.firmas.trabajador, xFirmaDer, yFirma, anchoFirma, altoFirma, "Firma del trabajador no disponible.");
        // Líneas de firma alineadas.
        doc.setDrawColor(150);
        doc.line(xFirmaIzq, yFirma + altoFirma + 2, xFirmaIzq + anchoFirma, yFirma + altoFirma + 2);
        doc.line(xFirmaDer, yFirma + altoFirma + 2, xFirmaDer + anchoFirma, yFirma + altoFirma + 2);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.text(normalizarTextoPdf(datos.auditor || "Auditor"), xFirmaIzq, yFirma + altoFirma + 7);
        doc.text(normalizarTextoPdf(datos.trabajador || "Trabajador/auditado"), xFirmaDer, yFirma + altoFirma + 7);
        y = yFirma + altoFirma + 13;
        linea("Fecha de finalización", [auditoria.fechaFinalizacion, auditoria.horaFinalizacion].filter(Boolean).join(" "));

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

function actualizarVeredictoRevisionFabricanteGeneral(claveEpi, valor) {
    actualizarCampoRevisionFabricanteGeneral(claveEpi, "resultado", valor);
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
                    <option value="">Seleccionar veredicto</option>
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
                    <option value="">Seleccionar veredicto</option>
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
                    <option value="">Seleccionar veredicto</option>
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
            Object.keys(subcontroles).forEach(claveSub => {
                html += renderizarControlEpi(claveEpi, claveSub, subcontroles[claveSub], controlEpi.subcontroles[claveSub]);
            });
            html += renderizarRevisionFabricante(controlEpi, claveEpi);
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
        Object.keys(definicion.controles).forEach(claveSub => {
            html += renderizarControlEpiMultiple(claveEpi, unidad.id, claveSub, definicion.controles[claveSub], unidad.subcontroles[claveSub]);
        });
        html += renderizarRevisionFabricante(unidad, claveEpi, unidad.id);
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
                    if (!unidad.revisionFabricante.resultado) {
                        alert("Debe indicar el veredicto de la revisión del fabricante de " + definicion.nombre + " #" + unidad.numero + ".");
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
            if (!controlEpi.revisionFabricante.resultado) {
                alert("Debe indicar el veredicto de la revisión del fabricante de " + definicion.nombre + ".");
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