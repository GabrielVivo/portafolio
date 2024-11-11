


// // JavaScript para alternar el modo oscuro
// const cambio = document.getElementById('cambio-oscuro');
// const body = document.body;

// cambio.addEventListener('click', () => {
//   body.classList.toggle('dark-mode'); // Alternar la clase 'dark-mode'
//   // Cambiar el texto del botón
//   toggleButton.textContent = body.classList.contains('dark-mode') ? ' Modo claro' : ' Modo Oscuro';
// });



// //javascript muestra parrafo

// document.getElementById('toggle-btn').addEventListener('click', function () {
//   var description = document.getElementById('description-text');
//   if (description.style.display === 'none') {
//     description.style.display = 'block';
//   } else {
//     description.style.display = 'none';
//   }
// });


// document.addEventListener('DOMContentLoaded', function() {
//   const contactForm = document.getElementById('contactForm');

//   if (contactForm) {
//       contactForm.addEventListener('submit', function(event) {
//           event.preventDefault();
  
//           const nombre = document.getElementById('nombre').value;
//           const email = document.getElementById('email').value;
//           const mensaje = document.getElementById('mensaje').value;
  
//           if (nombre && email && mensaje) {
//               Swal.fire({
//                   icon: 'success',
//                   title: '¡Mensaje enviado!',
//                   text: 'Tu mensaje ha sido enviado con éxito.',
//               });
//               contactForm.reset();
//           } else {
//               Swal.fire({
//                   icon: 'error',
//                   title: 'Error',
//                   text: 'Por favor, completa todos los campos.',
//               });
//           }
//       });
//   }
// });


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

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
  
          const nombre = document.getElementById('nombre').value;
          const email = document.getElementById('email').value;
          const mensaje = document.getElementById('mensaje').value;
  
          if (nombre && email && mensaje) {
              Swal.fire({
                  icon: 'success',
                  title: '¡Mensaje enviado!',
                  text: 'Tu mensaje ha sido enviado con éxito.',
              });
              contactForm.reset();
          } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Por favor, completa todos los campos.',
              });
          }
      });
  }
});

