const fechaCorrecta = "2025-11-17"; // CAMBIA LA FECHA REAL

function verificarFecha() {
    const fechaIngresada = document.getElementById("fecha").value;
    const musica = document.getElementById("musicaFondo");

    if (fechaIngresada === fechaCorrecta) {
        document.getElementById("formulario").style.display = "none";
        document.getElementById("tarjeta").classList.remove("hidden");

        // Reproducir música (permitido porque viene de un click)
        musica.volume = 0.5; // volumen inicial (0.0 a 1.0)
        musica.play();
    } else {
        alert("Esa fecha no es la correcta 💔");
    }
}
function toggleMusica() {
    const musica = document.getElementById("musicaFondo");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}
