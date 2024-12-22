// Asociar cada ícono con un sonido
const sounds = {
    herida: '/audios/proposito.mp3',
    arriesgarse: '/audios/discernimiento.mp3',
    mision: '/audios/mision.mp3',
    tuyyo: '/audios/libertad.mp3',
    autoconocimiento: '/audios/herida.mp3',
    busqueda: '/audios/autoconocimiento.mp3',
    perdido: '/audios/perdido.mp3',
};

// Añadir eventos de clic a cada ícono
document.querySelectorAll('.icono').forEach(icon => {
    icon.addEventListener('click', () => {
        const soundId = icon.id; // Obtiene el ID del ícono
        const audio = new Audio(sounds[soundId]); // Crea un objeto Audio
        audio.play(); // Reproduce el sonido
    });
});

window.onload = function () {
    const scrollingTextContainer = document.getElementById('scrollingText');
    const text = ' 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 ';
    
    // Duplicamos el texto para hacer que el loop sea continuo
    scrollingTextContainer.innerHTML = `<span>${text.repeat(5)}</span>`; // Repite el texto varias veces para el efecto de loop

    // Asegurarse de reiniciar el audio cuando termine
    var sound = document.getElementById("sound");
    sound.addEventListener("ended", function() {
        sound.currentTime = 0; // Reinicia al inicio del audio
        sound.play(); // Reproduce de nuevo el audio
    });
};