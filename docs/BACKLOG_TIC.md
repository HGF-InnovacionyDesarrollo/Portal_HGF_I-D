# Backlog de Integración y Tareas de Desarrollo Sugeridas para TIC

Este backlog detalla las fases y tareas que el departamento de **TIC (Tecnologías de la Información y Comunicación)** del hospital debe realizar para llevar la propuesta estática del portal a un entorno institucional interactivo, seguro y productivo.

Para mayor detalle de implementación, consultar la guía de arquitectura en [DOSSIER_TECNICO_TIC.md](file:///c:/Users/usuariohgf/Desktop/Pagina_ID_MVP_v1_1/docs/DOSSIER_TECNICO_TIC.md).

---

## Fase 1: Publicación Estática y Ajustes de Identidad
- [ ] **Despliegue del MVP Estático**:
  - Servir la estructura de carpetas en el IIS/Apache institucional bajo el subdirectorio `/innovacion` o subdominio `innovacion.hospitalfricke.cl`.
  - Configurar certificado SSL (HTTPS) para el dominio correspondiente.
- [ ] **Ajuste de Identidad Gráfica Oficial**:
  - Reemplazar el bloque tipográfico temporal "HGF" en el navbar y footer por el logo oficial del hospital en formato SVG o PNG de alta definición.
- [ ] **Actualización de Información Oficial**:
  - Sustituir los indicadores estadísticos referenciales del contador del banner por las métricas consolidadas del año en curso.
  - Reemplazar los correos electrónicos genéricos y nombres de los coordinadores por la información del personal oficial asignado por la Unidad.

## Fase 2: Formulario Productivo y Seguridad de Datos (Ley 19.628)
- [ ] **Mapeo de Datos Seguros**:
  - Validar los campos del formulario de postulación y añadir cláusula oficial de consentimiento informado para tratamiento de datos de proyectos.
- [ ] **Implementación de Backend Seguro**:
  - **Opción SMTP**: Conectar el envío del formulario a un script backend (ej. PHP en IIS con PHPMailer) configurado para despachar los datos sanitizados al correo oficial: `innovacion.hgf@redsalud.gob.cl`.
  - **Opción REST API**: Implementar un servicio web sencillo en la intranet que reciba un payload JSON con la propuesta y lo registre en una base de datos segura.
- [ ] **Control de Spam y Seguridad Perimetral**:
  - Integrar captcha invisible (ej. hCaptcha o reCAPTCHA v3) en el formulario para mitigar ataques automatizados.
  - Habilitar cabeceras de seguridad HTTP (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`) en el servidor web que hospeda la página.

## Fase 3: Portafolio de Proyectos Administrable
- [ ] **Migración a Estructura Dinámica**:
  - Migrar la galería estática de proyectos en HTML a una base de datos administrable o a una colección del CMS institucional (ej. Custom Post Type en WordPress).
- [ ] **Panel de Clasificación de Estados**:
  - Implementar etiquetas oficiales de estado de proyectos en base a la gobernanza interna:
    - `Exploración Temprana`
    - `Validación Técnica`
    - `Validación Operativa`
    - `Pilotaje Avanzado`
    - `Escalamiento`
    - `Cerrado / Concluido`
- [ ] **Ficha Individual del Proyecto**:
  - Crear una plantilla de página única para que cada proyecto tenga su ficha descriptiva con detalles metodológicos, investigadores responsables e impacto asistencial medido.

## Fase 4: Integración Avanzada e Intranet
- [ ] **Autenticación Única (SSO / Active Directory)**:
  - Evaluar la integración con la Intranet HGF para que las propuestas de funcionarios clínicos/administrativos ("Idea Interna") requieran inicio de sesión con credenciales institucionales, aumentando la trazabilidad y la calidad de las ideas recibidas.
- [ ] **Tablero de Control de Innovación (Reporting)**:
  - Crear un panel de control reservado para los gestores de la Unidad que permita clasificar, responder, evaluar y generar reportes analíticos de las propuestas recibidas.
