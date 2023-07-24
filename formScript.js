const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Envío de los datos del formulario al servidor (PHP)
  const xhr = new XMLHttpRequest();
  const url = 'form.php'; // Ruta del archivo PHP que procesará el formulario
  const params = `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;

  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      try {
        if (xhr.status === 200) {
          // Completado el envío del formulario
          console.log('El formulario se ha enviado correctamente.');
          form.reset(); // Restablecer el formulario después del envío exitoso
        } else if (xhr.status === 405) {

          console.log('Error 405: Método no permitido');
        } else {
          console.log('Error en el envío del formulario:', xhr.status);
        }
      } catch (error) {
        // Error general
        console.log('Error en el envío del formulario:', error);
      }
    }
  };

  xhr.send(params);
});
