let desplegar = document.getElementById('contactos');
let info = document.getElementById('redes');

function activar () {
    info.classList.add('vercontactos')
};


desplegar.addEventListener("click", activar);
