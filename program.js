// Asociar cada ícono con un sonido
const sounds = {
    herida: '/audio/tinta90.mp3',
    arriesgarse: '/audio/lluvia.mp3',
    mision: '/audio/pa.mp3',
    tuyyo: '/audio/siren.mp3', 
    autoconocimiento: '/audio/carneyhueso.mp3', 
    busqueda: '/audio/niños.mp3',
    perdido: '/audio/naturaleza.mp3', 
    cumple: '/audio/base.mp3' 
};

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
                icon.classList.remove('blink'); // Elimina los efectos de animación
                return;
            }
        }

        // Crea un nuevo audio y lo reproduce
        currentAudio = new Audio(soundPath);
        currentAudio.play();

        // Agrega la clase de parpadeo y latido
        icon.classList.add('blink');

        // Desactiva el efecto de parpadeo y aumento cuando termine el sonido
        currentAudio.addEventListener('ended', () => {
            icon.classList.remove('blink'); // Elimina los efectos de animación
        });
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

