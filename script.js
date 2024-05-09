// script.js
function mostrarImagen(imagen) {
    var imagenGrande = document.getElementById('imagenGrande');
    var imagenMostrada = document.getElementById('imagenMostrada');
    imagenMostrada.src = imagen.src;
    imagenGrande.style.display = 'block';
}

function cerrarImagen() {
    var imagenGrande = document.getElementById('imagenGrande');
    imagenGrande.style.display = 'none';
}
