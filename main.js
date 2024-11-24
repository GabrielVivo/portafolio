

// // JavaScript para alternar el modo oscuro
// const cambio = document.getElementById('cambio-oscuro');
// const body = document.body;

// cambio.addEventListener('click', () => {
//   body.classList.toggle('dark-mode'); // Alternar la clase 'dark-mode'
//   // Cambiar el texto del botón
//   cambio.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
// });




const cambio = document.getElementById('cambio-oscuro');
const body = document.body;

// Al cargar la página, verificar el localStorage
if (localStorage.getItem('modoOscuro') === 'true') {
  body.classList.add('dark-mode');
  cambio.textContent = 'Modo Claro';
} else {
  body.classList.remove('dark-mode');
  cambio.textContent = 'Modo Oscuro';
}

cambio.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Guardar la preferencia del usuario en localStorage
  const modoOscuroActivo = body.classList.contains('dark-mode');
  localStorage.setItem('modoOscuro', modoOscuroActivo);

  // Cambiar el texto del botón
  cambio.textContent = modoOscuroActivo ? 'Modo Claro' : 'Modo Oscuro';
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




