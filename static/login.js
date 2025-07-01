const form = document.getElementById('loginForm');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const usuarioValido = validarUsuario();
  const passwordValido = validarPassword();

  if (usuarioValido && passwordValido) 
  {
    alert(' Bievenido'+ document.getElementById('username').value);
    form.submit();
  }
  else
  {
    return false;
  }
});

function validarUsuario() 
{

  const username = document.getElementById('username').value.trim();
  const errorUsername = document.getElementById('error-username');

  if (username === '') {
    errorUsername.textContent = 'Debes ingresar un nombre de usuario.';
    errorUsername.style.display = 'block';
    return false;
  }

  if (username.length < 5) {
    errorUsername.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
    errorUsername.style.display = 'block';
    return false;
  }

  if (username.length > 20) {
    errorUsername.textContent = 'El nombre de usuario no puede tener más de 20 caracteres.';
    errorUsername.style.display = 'block';
    return false;
  }

  const Caracteres = /[-_]/.test(username);
  const Letras = /[a-zA-Z]/.test(username);
  const Numeros = /\d/.test(username);

  if (!Caracteres || !Letras || !Numeros) 
  {
    errorUsername.innerHTML = 
    'El nombre de usuario debe contener:<br>'+
      '- letras (mayúsculas o minúsculas)<br>'+
      '- números<br>'+
      '- guiones bajos o guiones medios<br>';
      errorUsername.style.color = 'black';
      errorUsername.style.display = 'block';
    return false;
  }


  errorUsername.textContent = '';
  errorUsername.style.display = 'none';
  return true;
}

function validarPassword() 
{
  const password = document.getElementById('password').value;
  const errorPassword = document.getElementById('error-password');

  // BARRA PROGRESIVA
  const passwordInput = document.getElementById('password');
  const progressBar = document.getElementById('password-progress');

  passwordInput.addEventListener('input', () => 
  {
      const valor = passwordInput.value;

      const tieneMayuscula = /[A-Z]/.test(valor);
      const tieneNumero = /[0-9]/.test(valor);
      const tieneGuion = /[-_]/.test(valor);

      let progreso = 0;
      if (tieneMayuscula) progreso += 1;
      if (tieneNumero) progreso += 1;
      if (tieneGuion) progreso += 1;

      progressBar.value = progreso;
      
  });

// FIN BARRA PROGRESIVA

  if (password === '') 
  {
    errorPassword.textContent = 'Debes ingresar una contraseña.';
    errorPassword.style.display = 'block';
    return false;
  }

  if (password.length < 7) 
  {
    errorPassword.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    errorPassword.style.display = 'block';
    return false;
  }

  if (password.includes(' ')) 
  {
    errorPassword.textContent = 'La contraseña no puede contener espacios. (Recomendación: usar guiones o guiones bajos)';
    errorPassword.style.display = 'block';
    return false;
  }

  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /\d/.test(password);
  const tieneGuion = /[-_]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);

  if (!tieneMayuscula || !tieneNumero || !tieneGuion) 
  {
    errorPassword.innerHTML =
      'La contraseña debe contener:<br>' +
      '- una letra mayuscula<br>' +
      '- un número<br>' +
      '- un guion o guion bajo';
    errorPassword.style.color = 'black';
    errorPassword.style.display = 'block';
    return false;
  }

  errorPassword.textContent = '';
  errorPassword.style.display = 'none';
  return true;
}

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

  usernameInput.addEventListener('blur', validarUsuario);
  usernameInput.addEventListener('input', validarUsuario);
  passwordInput.addEventListener('blur', validarPassword);
  passwordInput.addEventListener('input', validarPassword);
