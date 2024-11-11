

// JavaScript para alternar el modo oscuro
const cambio = document.getElementById('cambio-oscuro');
const body = document.body;

cambio.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); // Alternar la clase 'dark-mode'
  // Cambiar el texto del botón
  cambio.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});

// JavaScript para mostrar/ocultar párrafo
document.getElementById('toggle-btn').addEventListener('click', function () {
  var description = document.getElementById('description-text');
  if (description.style.display === 'none') {
    description.style.display = 'block';
  } else {
    description.style.display = 'none';
  }
});




