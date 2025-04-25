document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el envío del formulario
  
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
  
    // Puedes hacer validaciones o enviar los datos a un servidor aquí
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
  
    document.getElementById('mensaje').textContent = `¡Gracias por registrarte, ${nombre}!`;
  });
  