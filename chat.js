// Obtener los elementos del DOM
const abrirModalBtn = document.getElementById('abrirModal');
const modal = document.getElementById('miModal');
const cerrarModalBtn = document.getElementById('cerrarModal');
const chatbox = document.getElementById('chatbox');
const mensajeInput = document.getElementById('mensajeInput');
const enviarMensajeBtn = document.getElementById('enviarMensaje');

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

// Función para manejar las respuestas del chatbot
function responder(input) {
  switch (input.toLowerCase()) {
    case 'hola':
      return '¡Hola! ¿En qué puedo ayudarte?';
    case "finanzas":
      return "Finanzas 101";
    case "":
      return;
    case "":
      return;          ;
    case 'adios':
      return '¡Hasta luego!';
    default:
      return 'Lo siento, no entendí eso.';
  }
}

// Escuchar el evento de clic en el botón de enviar mensaje
enviarMensajeBtn.addEventListener('click', enviarMensaje);

// Escuchar el evento de presionar la tecla "Enter" en el campo de entrada
mensajeInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    enviarMensaje();
  }
});
