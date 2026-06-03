# MVP Portal Unidad de Innovación y Desarrollo - Hospital Dr. Gustavo Fricke

Este paquete contiene una propuesta MVP profesional, modular y lista para pruebas locales de la página de la Unidad de Innovación y Desarrollo.

## Objetivo del MVP

Crear una base funcional para validar arquitectura de información, narrativa institucional, experiencia de usuario, portafolio de proyectos, desafíos clínicos y flujo preliminar de recepción de propuestas antes de entregar a TIC para integración al sitio institucional.

## Estructura de carpetas

```text
Pagina_ID_MVP/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── img/
│       └── README.md
└── docs/
    ├── CHECKLIST_VALIDACION.md
    └── BACKLOG_TIC.md
```

## Cómo abrirlo localmente

1. Copiar la carpeta `Pagina_ID_MVP` al escritorio.
2. Abrir Antigravity.
3. Seleccionar **Open Folder** y elegir la carpeta `Pagina_ID_MVP`.
4. Abrir `index.html`.
5. Ejecutar la vista local con la opción de previsualización disponible o abrir el archivo directamente en Chrome/Edge.

## Decisiones de diseño

- HTML, CSS y JavaScript separados para facilitar revisión por TIC.
- Bootstrap 5 como base responsiva para acelerar validación.
- Paleta institucional simulada basada en azul, rojo, fondos claros y alto contraste.
- Sin almacenamiento de datos personales ni envío a servidor en esta versión.
- Formulario demostrativo que genera un resumen copiable y descargable.
- Fotografías institucionales marcadas como pendientes para evitar uso de imágenes externas no validadas.
- Lenguaje institucional, directo y centrado en pacientes, investigación clínica, salud digital e innovación abierta.

## Pendientes antes de producción

- Validar textos con Dirección, Comunicaciones, Jurídica, TIC y referentes clínicos.
- Reemplazar indicadores referenciales por datos oficiales.
- Incorporar logo oficial autorizado y fotografías institucionales.
- Definir correo institucional o endpoint seguro para formularios.
- Evaluar integración con CMS o estructura actual del sitio hospitalario.
- Revisar accesibilidad, seguridad, trazabilidad y política de privacidad.
- Descargar dependencias externas y servirlas localmente si TIC lo exige.

## Nota de seguridad

El formulario del MVP no debe usarse para ingresar antecedentes clínicos identificables ni datos sensibles. Para producción se requiere backend seguro, validación institucional, trazabilidad, control de acceso y lineamientos de protección de datos.


## Versión 1.1 - Corrección de visualización local

Esta versión agrega un fallback local de grilla, navegación, botones, acordeones y formulario. La página mantiene su estructura sin depender de Bootstrap, Bootstrap Icons ni CDN externos.
