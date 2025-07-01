const form = document.getElementById('contacto-formulario');

const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const mensajeInput = document.getElementById('mensaje');

function validarNombre() 
{
    if (nombreInput.value.trim().length < 4) 
    {
        return false;
    }
    return true;
}

function validarCorreo() 
{
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!correoRegex.test(correoInput.value.trim())) 
    {
        return false;
    }
    return true;
}

function validarMensaje() 
{
    if (mensajeInput.value.trim().length < 20) 
    {
        return false;
    }
    return true;
}

nombreInput.addEventListener('blur', validarNombre);
correoInput.addEventListener('blur', validarCorreo);
mensajeInput.addEventListener('blur', validarMensaje);

nombreInput.addEventListener('Input', validarNombre);
correoInput.addEventListener('Input', validarCorreo);
mensajeInput.addEventListener('Input', validarMensaje);

form.addEventListener('submit', async function(event) 
{
    event.preventDefault();

    if (!validarNombre() || !validarCorreo() || !validarMensaje()) 
    {
        return;
    }

    const formData = new FormData(this);
    const response = await fetch(this.action, 
    {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) 
    {
        alert('Envio exitoso ✅ Nos comunicaremos pronto con usted.');
        this.reset();
    } 
    else 
    {
        alert('sin poder enviarse, Vuelve a intentanlo.');
    }
});