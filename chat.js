// Obtener los elementos del DOM
const abrirModalBtn = document.getElementById('abrirModal');
const modal = document.getElementById('miModal');
const cerrarModalBtn = document.getElementById('cerrarModal');
const chatbox = document.getElementById('chatbox');
const mensajeInput = document.getElementById('mensajeInput');
const enviarMensajeBtn = document.getElementById('enviarMensaje');
const borrarConversacionBtn = document.getElementById('borrarConversacion');
const acercaDeSection = document.getElementById('acercaDe');

// Función para mostrar la sección "Acerca de"
function mostrarAcercaDe() {
  acercaDeSection.style.display = 'block';
  acercaDeSection.scrollIntoView({ behavior: 'smooth' });
}

// Función para ocultar la sección "Acerca de"
function ocultarAcercaDe() {
  acercaDeSection.style.display = 'none';
}

// Escuchar el evento de clic en el botón "Acerca de" en el menú de navegación
document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  mostrarAcercaDe(); // Mostrar la sección "Acerca de"
});

// Escuchar el evento de scroll para mostrar u ocultar la sección "Acerca de"
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY; // Obtener la posición actual de desplazamiento vertical
  const acercaDePosition = acercaDeSection.offsetTop; // Obtener la posición de la sección "Acerca de" en relación con la parte superior del documento

  // Si el usuario ha desplazado lo suficiente para mostrar u ocultar la sección "Acerca de", entonces llamar a la función correspondiente
  if (scrollPosition >= acercaDePosition - window.innerHeight / 2) {
    mostrarAcercaDe();
  } else if (scrollPosition === 0) {
    ocultarAcercaDe();
  }
});

// Función para regresar a la página de Inicio al hacer scroll con suavidad
function regresarInicio() {
  // Scroll suave hacia la parte superior de la página
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Escuchar el evento de clic en el botón "Inicio" para regresar y mantener el footer
document.getElementById('footer-inicio').addEventListener('click', regresarInicio);

// Función para mantener el footer omnipresente
function toggleFooter() {
  const footer = document.querySelector('footer');
  // Mostrar el footer
  footer.style.display = 'block';
}

// Escuchar el evento de scroll para mantener el footer omnipresente
window.addEventListener('scroll', toggleFooter);





// Mostrar el modal cuando se haga clic en el botón de abrir modal
abrirModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Cerrar el modal cuando se haga clic en el botón de cerrar o fuera de la ventana modal
cerrarModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Función para enviar un mensaje
function enviarMensaje() {
  const mensaje = mensajeInput.value;
  if (mensaje.trim() !== '') {
    mostrarMensajeUsuario(mensaje);
    const respuesta = responder(mensaje);
    mostrarRespuestaChatbot(respuesta);
    mensajeInput.value = ''; // Limpiar el campo de entrada después de enviar el mensaje
  }
}

// Función para mostrar el mensaje del usuario en el chatbox
function mostrarMensajeUsuario(mensaje) {
  const mensajeUsuario = document.createElement('p');
  mensajeUsuario.textContent = `Tú: ${mensaje}`;
  chatbox.appendChild(mensajeUsuario);
}

// Función para mostrar la respuesta del chatbot en el chatbox
function mostrarRespuestaChatbot(respuesta) {
  const mensajeChatbot = document.createElement('p');
  mensajeChatbot.textContent = `Chatbot: ${respuesta}`;
  chatbox.appendChild(mensajeChatbot);
}

// Función para manejar las respuestas del chatbot con hashtable
function responder(input) {
  const respuestas = {
    /* Saludos */
    "hola": "¡Hola! ¿En qué puedo ayudarte?",
    "adios": "¡Hasta luego!",
    /* Finanzas */
    "presupuesto": "Crear un presupuesto para controlar tus ingresos y gastos.",
    "ahorro": "Ahorrar dinero y alcanzar tus metas financieras.",
    "deudas": "Crear un plan para pagar tus deudas y mejorar tu salud financiera.",
    "inversión": "Conocer los conceptos básicos de la inversión y a encontrar opciones de inversión adecuadas para ti.",
    "créditos": "Sobre obtener un crédito y elegir la mejor opción para ti.",
    "tarjetas de crédito": "Entender usar las tarjetas de crédito de manera responsable y evitar cargos e intereses innecesarios.",
    "jubilación": "Planificar tu jubilación y ahorrar para tu futuro.",
    "impuestos": "Declarar tus impuestos y reducir tu carga fiscal.",
    "seguros": "Encontrar el seguro adecuado para ti y tu familia.",
    "finanzas personales": "Mejorar tu salud financiera y alcanzar tus metas.",
    /* Estados Financieros */
    "balance general": "El balance general muestra la situación financiera de una empresa en un momento determinado. Incluye los activos, pasivos y patrimonio neto de la empresa. Los activos son los recursos económicos que posee la empresa, como el efectivo, las cuentas por cobrar, el inventario y los equipos. Los pasivos son las obligaciones de la empresa, como las cuentas por pagar, los préstamos y los impuestos. El patrimonio neto es la diferencia entre los activos y los pasivos, y representa el valor de la empresa para sus propietarios.",
    "estado de resultados": "El estado de resultados muestra los ingresos y gastos de una empresa durante un período determinado. Los ingresos son las entradas de efectivo que genera la empresa por la venta de sus productos o servicios. Los gastos son los costos en los que incurre la empresa para generar sus ingresos. La utilidad neta es la diferencia entre los ingresos y los gastos, y representa la ganancia o pérdida de la empresa durante el período.",
    "estado de flujos de efectivo": "El estado de flujos de efectivo muestra las entradas y salidas de efectivo de una empresa durante un período determinado. Se divide en tres actividades: actividades operativas, actividades de inversión y actividades de financiación. Las actividades operativas son las actividades principales de la empresa que generan ingresos. Las actividades de inversión son las compras y ventas de activos a largo plazo, como terrenos, edificios y equipos. Las actividades de financiación son las obtenciones y pagos de fondos, como préstamos, emisión de acciones y pago de dividendos.",
    "flujo de caja": "El flujo de caja es la medida de la capacidad de una empresa para generar efectivo. Se calcula como la suma del flujo de efectivo de las actividades operativas, el flujo de efectivo de las actividades de inversión y el flujo de efectivo de las actividades de financiación. Un flujo de caja positivo indica que la empresa está generando más efectivo del que está utilizando, mientras que un flujo de caja negativo indica lo contrario.",
    "rentabilidad": "La rentabilidad es la capacidad de una empresa para generar ganancias. Se mide mediante indicadores como la utilidad neta, el margen de utilidad neta y el ROI (Return on Investment). La utilidad neta es la ganancia o pérdida de la empresa durante un período determinado. El margen de utilidad neta es la utilidad neta expresada como un porcentaje de los ingresos. El ROI es la medida de la eficiencia con la que una empresa utiliza sus inversiones para generar ganancias.",
    "solvencia": "La solvencia es la capacidad de una empresa para cumplir con sus obligaciones a corto plazo. Se mide mediante indicadores como la deuda a corto plazo, el capital de trabajo y la razón deuda-capital. La deuda a corto plazo es la cantidad de dinero que una empresa debe pagar en el plazo de un año. El capital de trabajo es la diferencia entre los activos corrientes y los pasivos corrientes. La razón deuda-capital es la relación entre la deuda a largo plazo y el patrimonio neto.",
    "liquidez": "La liquidez es la capacidad de una empresa para convertir sus activos en efectivo rápidamente. Se mide mediante indicadores como el activo corriente, el pasivo corriente y la razón corriente. El activo corriente es la cantidad de dinero que una empresa puede convertir en efectivo en el plazo de un año. El pasivo corriente es la cantidad de dinero que una empresa debe pagar en el plazo de un año. La razón corriente es la relación entre el activo corriente y el pasivo corriente.",
    /* Crecimiento económico */
    "pib": "Producto Interno Bruto. Es un indicador económico que mide el valor total de los bienes y servicios producidos en un país durante un período determinado.",
    "crecimiento económico": "Aumento del PIB a lo largo del tiempo. Se suele expresar como un porcentaje.",
    "desarrollo económico": "Proceso de mejora del nivel de vida de un país a través del crecimiento económico y la mejora de las condiciones sociales.",
    "inversión": "Gasto en bienes o activos con el objetivo de obtener un beneficio futuro.",
    "productividad": "Eficiencia en la producción de bienes y servicios. Se mide por la cantidad de producción que se obtiene por unidad de trabajo o de otro factor de producción.",
    "empleo": "Ocupación de las personas en una actividad económica productiva.",
    "inflación": "Aumento generalizado de los precios en una economía.",
    "comercio internacional": "Intercambio de bienes y servicios entre países.",
    "globalización": "Proceso de interconexión e interdependencia económica, social y cultural a nivel mundial.",
    "desigualdad": "Diferencia en la distribución de los ingresos, la riqueza o el poder entre diferentes grupos de la población.",
    "¿qué es el pib?": "El PIB es un indicador económico que mide el valor total de los bienes y servicios producidos en un país durante un período determinado. Se calcula sumando el valor de la producción de todos los sectores económicos, como la agricultura, la industria y los servicios.",
    "¿qué significa crecimiento económico?": "El crecimiento económico se refiere al aumento del PIB a lo largo del tiempo. Se suele expresar como un porcentaje. Un mayor crecimiento económico significa que se están produciendo más bienes y servicios, lo que puede conducir a un mayor nivel de vida para la población.",
    "¿cuál es la diferencia entre crecimiento económico y desarrollo económico?": "El crecimiento económico se centra en el aumento de la producción de bienes y servicios, mientras que el desarrollo económico se centra en la mejora del nivel de vida de la población. El desarrollo económico implica no solo un crecimiento económico sostenido, sino también mejoras en la salud, la educación, la infraestructura y otras áreas sociales.",
    "¿cómo se impulsa el crecimiento económico?": "El crecimiento económico puede ser impulsado por una serie de factores, como la inversión, la productividad, el empleo, el comercio internacional y la globalización. Los gobiernos pueden implementar políticas para fomentar estos factores y estimular el crecimiento económico.",
    "¿cuáles son las consecuencias de la inflación?": "La inflación puede tener un impacto negativo en la economía, ya que reduce el poder adquisitivo del dinero y puede generar incertidumbre económica. Los bancos centrales suelen utilizar políticas monetarias para controlar la inflación.",
    "¿cómo afecta la globalización al crecimiento económico?": "La globalización puede tener tanto efectos positivos como negativos en el crecimiento económico. Por un lado, puede aumentar el acceso a nuevos mercados y oportunidades de inversión, lo que puede estimular el crecimiento. Por otro lado, también puede aumentar la competencia y la presión sobre los salarios y las condiciones laborales.",
    "¿cómo se puede reducir la desigualdad?": "La desigualdad puede abordarse mediante una serie de políticas, como la inversión en educación y salud, la creación de empleos decentes, la reforma fiscal y la protección social.",
    /* Análisis de Mercado */
    "¿qué es el análisis de mercado?": "El análisis de mercado es el proceso de recopilar y analizar información sobre un mercado específico para comprender las condiciones actuales, las tendencias y las oportunidades potenciales. El análisis de mercado te ayuda a tomar decisiones informadas sobre tu negocio, como identificar tu público objetivo, desarrollar estrategias de marketing efectivas y evaluar la viabilidad de nuevos productos o servicios.",
    "¿cuáles son los tipos de análisis de mercado?": "Tipos: Existen dos tipos principales de análisis de mercado: 1. Análisis cuantitativo: Se basa en datos numéricos, como ventas, cuotas de mercado y tendencias de precios. 2. Análisis cualitativo: Se centra en información no numérica, como opiniones, percepciones y comportamientos de los consumidores. La combinación de ambos tipos de análisis te proporciona una comprensión completa del mercado.",
    "¿cuáles son los pasos del análisis de mercado?": "Pasos: Los pasos generales del análisis de mercado incluyen: 1. Definir objetivos:** ¿Qué quieres lograr con el análisis de mercado? 2. Identificar información: ¿Qué tipo de información necesitas recopilar? 3. Recopilar datos: Utilizar métodos de investigación como encuestas, entrevistas y análisis de datos secundarios. 4. Analizar datos: Organizar y analizar los datos recopilados para identificar tendencias y patrones. 5. Interpretar resultados: Sacar conclusiones de los datos y traducirlos en recomendaciones para tu negocio. Cada paso del análisis de mercado es crucial para obtener una comprensión precisa de la situación del mercado.",
    "¿cuáles son las herramientas de análisis de mercado?": "Herramientas: Existen diversas herramientas disponibles para realizar análisis de mercado, como: 1. Software de encuestas: Facilita la creación y distribución de encuestas en línea. 2. Herramientas de análisis de redes sociales: Monitorea las conversaciones y el sentimiento en las redes sociales relacionadas con tu mercado. 3. Bases de datos de mercado: Proporcionan información estadística y de investigación sobre industrias y mercados específicos. La elección de las herramientas adecuadas dependerá de tus necesidades y presupuesto específicos.",
    "¿cuáles son los beneficios del análisis de mercado?": "Beneficios: El análisis de mercado ofrece varios beneficios, como: 1. Reducción del riesgo: Te ayuda a identificar y evitar posibles amenazas u obstáculos para tu negocio. 2. Toma de decisiones informadas: Brinda información valiosa para tomar decisiones estratégicas sobre tu negocio. 3. Ventaja competitiva: Te permite comprender mejor a tus competidores y desarrollar estrategias para diferenciarte. 4. Optimización de recursos:** Te ayuda a asignar tus recursos de manera más eficiente y efectiva. Invertir en análisis de mercado puede generar un retorno significativo para tu negocio a largo plazo.",
    "ejemplos de cómo se utiliza el análisis de mercado": "El análisis de mercado se utiliza en diversas situaciones, como: 1. Lanzamiento de un nuevo producto: Para evaluar la demanda potencial y la viabilidad de un nuevo producto o servicio. 2. Expansión a un nuevo mercado: Para comprender las condiciones del mercado, la competencia y las oportunidades en un nuevo territorio. 3. Desarrollo de estrategias de marketing: Para identificar los canales de marketing más efectivos y los mensajes que resuenen con tu público objetivo. 4. Evaluación de la satisfacción del cliente: Para comprender las percepciones y opiniones de los clientes sobre tu negocio y productos. 'El análisis de mercado es una herramienta valiosa para empresas de todos los tamaños e industrias'."

  };

  // Convertir el input a minúsculas para una coincidencia precisa
  const inputMinuscula = input.toLowerCase();

  // Verificar si la entrada existe en el hashtable
  if (respuestas.hasOwnProperty(inputMinuscula)) {
    return respuestas[inputMinuscula];
  } else {
    return "Lo siento, no entendí eso.";
  }
}

// Función para borrar la conversación
function borrarConversacion() {
  chatbox.innerHTML = ''; // Eliminar todo el contenido dentro del chatbox
}

// Escuchar el evento de clic en el botón de enviar mensaje
enviarMensajeBtn.addEventListener('click', enviarMensaje);

// Escuchar el evento de clic en el botón de borrar conversación
borrarConversacionBtn.addEventListener('click', borrarConversacion);

// Escuchar el evento de presionar la tecla "Enter" en el campo de entrada
mensajeInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    enviarMensaje();
  }
});
