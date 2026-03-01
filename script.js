/* 1. PARTICLES JS */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60 },
        "color": { "value": "#00f3ff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#00f3ff", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" } }
    }
});

/* 2. TYPING EFFECT */
const texts = ["Electrical Engineering Student", "IoT Enthusiast", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++; index = 0; setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

/* 3. LOADER */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.style.display = 'none';
    }, 1000);
});
