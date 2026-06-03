# Checklist de Validación del Portal MVP de Innovación y Desarrollo

Este checklist sirve para realizar un control de calidad cruzado entre la **Unidad de Innovación y Desarrollo** y las áreas revisoras del hospital antes de la entrega final a TIC y su publicación definitiva.

---

## 1. Validación Estratégica e Institucional
- [ ] **Propuesta de Valor**: El portal comunica con total claridad el rol y funciones de la Unidad de I+D.
- [ ] **Segmentación de Áreas**: Se diferencian correctamente los tres pilares: Investigación Clínica, Salud Digital e Innovación.
- [ ] **Enfoque Centrado en el Paciente**: El lenguaje e hitos destacan cómo la tecnología beneficia el bienestar de la ciudadanía.
- [ ] **Aprobación de Dirección**: La Dirección del Hospital Dr. Gustavo Fricke valida los lineamientos del sitio.

## 2. Validación de Contenido y Comunicaciones
- [ ] **Claridad del Lenguaje**: Títulos y explicaciones son legibles tanto para funcionarios como para investigadores y startups externas.
- [ ] **Glosario y Acrónimos**: No se utilizan siglas médicas complejas o técnicas sin su debida explicación.
- [ ] **Métricas y Cifras**: Los indicadores numéricos del portal (proyectos activos, investigadores, etc.) se marcan como referenciales hasta que se validen los datos reales oficiales de la Unidad.
- [ ] **Identidad Visual**: El departamento de Comunicaciones valida el uso del logo institucional y paleta de colores corporativos del hospital.

## 3. Validación UX/UI e Interactividad (Frontend)
- [ ] **Responsividad Total**: La página se visualiza y adapta correctamente en pantallas de escritorio, notebooks, tablets y dispositivos móviles.
- [ ] **Menú de Navegación**: El menú tipo hamburguesa en móviles se despliega y oculta de forma fluida.
- [ ] **Filtro de Portafolio**: El filtro interactivo de la vitrina de proyectos responde con exactitud al hacer clic en las categorías (Clínica, Procesos, Experiencia, Todos).
- [ ] **Buscador de FAQs**: El buscador de Preguntas Frecuentes filtra y muestra dinámicamente las preguntas relevantes en tiempo real a medida que se escribe.
- [ ] **Biblioteca de Descargas**: Las tarjetas de recursos muestran las plantillas correctas y descargan archivos simulados apropiados.
- [ ] **Formulario Dinámico**: El formulario de postulación de propuestas valida campos vacíos, genera el resumen con formato correcto en pantalla y permite la descarga del archivo `.txt` local.

## 4. Validación Técnica y de Integración (TIC)
- [ ] **Entrega del Dossier**: Se entrega formalmente el [DOSSIER_TECNICO_TIC.md](file:///c:/Users/usuariohgf/Desktop/Pagina_ID_MVP_v1_1/docs/DOSSIER_TECNICO_TIC.md) al equipo de TIC dentro de la carpeta.
- [ ] **Revisión de Seguridad y Ley 19.628**: Se verifica que el formulario cliente en el MVP local no guarde datos clínicos, sensible o personales en nubes externas y se define el backend seguro.
- [ ] **Compatibilidad de Bootstrap 5**: Se evalúa si para la versión productiva se usará la hoja de estilos estática local (`css/styles.css`) o la CDN oficial de Bootstrap institucional.
- [ ] **Accesibilidad (WCAG 2.1)**: Se valida el funcionamiento del enlace de salto inicial, navegación por pestañas y que el indicador de enfoque (`focus-visible`) sea visible en rojo para cumplir pautas gubernamentales.
- [ ] **Dominio y Hosting**: TIC define el servidor físico o máquina virtual institucional (ej. servidor IIS) y el subdominio/directorio oficial de la unidad.
