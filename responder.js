// Función para manejar las respuestas del chatbot
export default function responder(input) {
    switch (input.toLowerCase()) {
      case 'hola':
        return '¡Hola! ¿En qué puedo ayudarte?';
      case 'adios':
        return '¡Hasta luego!';
      default:
        return 'Lo siento, no entendí eso.';
    }
}
