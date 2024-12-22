// Asociar cada ícono con un sonido
const sounds = {
    herida: '/audio/tinta90.mp3',
    arriesgarse: '/audio/arriesgarse.mp3',
    mision: '/audio/pa.mp3',
    tuyyo: '/audio/tuyyo.mp3',
    autoconocimiento: '/audio/autoconocimiento.mp3',
    busqueda: '/audio/busqueda.mp3',
    perdido: '/audio/perdido.mp3',
};

// Objeto para almacenar el estado del audio
let currentAudio = null;

// Añadir eventos de clic a cada ícono
document.querySelectorAll('.icono').forEach(icon => {
    icon.addEventListener('click', () => {
        const soundId = icon.id; // Obtiene el ID del ícono
        const soundPath = sounds[soundId]; // Obtiene la ruta del sonido

        if (!soundPath) return; // Si no hay sonido asociado, no hacer nada

        // Si ya hay un audio reproduciéndose
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause(); // Detiene el audio
            currentAudio.currentTime = 0; // Reinicia al inicio
            // Si el mismo ícono fue clicado, no reproducirlo de nuevo
            if (currentAudio.src.includes(soundPath)) {
                currentAudio = null; // Resetea el estado del audio
                return;
            }
        }

        // Crea un nuevo audio y lo reproduce
        currentAudio = new Audio(soundPath);
        currentAudio.play();
    });
});

// Texto desplazándose (si es necesario para otro efecto)
window.onload = function () {
    const scrollingTextContainer1 = document.getElementById('scrollingText');
    const scrollingTextContainer2 = document.getElementById('scrollingText2');

    const text1 = ' 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 🦋 MARZO 2025 🦋 ';
    const text2 = ' TOCAR LOS ICONOS ... ';

    if (scrollingTextContainer1) {
         scrollingTextContainer1.innerHTML = `<span>${text1.repeat(5)}</span>`;
    } 

    if (scrollingTextContainer2) {
        scrollingTextContainer2.innerHTML = `<span>${text2.repeat(15)}</span>`;
    }
};
