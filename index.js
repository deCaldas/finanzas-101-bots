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
