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
    "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } }
});

/* 2. TYPING EFFECT */
const texts = ["Electrical Engineering Student", "IoT Enthusiast", "Web Developer"];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++; index = 0; setTimeout(type, 2000);
    } else { setTimeout(type, 100); }
})();

/* 3. CAROUSEL LOGIC */
const projects = [
    { title: "Smart Home IoT", tech: "ESP32", img: "images/project1.jpg" },
    { title: "pH Sensor", tech: "Arduino", img: "images/project3.jpg" },
    { title: "Portfolio Web", tech: "HTML/CSS", img: "images/project4.jpg" }
];

const carousel = document.getElementById('carousel');
let theta = 0;

function setupCarousel() {
    const numItems = projects.length;
    const angle = 360 / numItems;
    const radius = 400; // Jarak putar

    projects.forEach((proj, i) => {
        const cell = document.createElement('div');
        cell.className = 'project-card';
        cell.style.transform = `rotateY(${i * angle}deg) translateZ(${radius}px)`;
        cell.innerHTML = `
            <h3>${proj.title}</h3>
            <p style="color:#00f3ff; margin-top:10px;">[ ${proj.tech} ]</p>
        `;
        carousel.appendChild(cell);
    });
}

function rotateCarousel() {
    const angle = theta * (360 / projects.length);
    carousel.style.transform = `translateZ(-500px) rotateY(${-angle}deg)`;
}

document.getElementById('prevBtn').onclick = () => { theta--; rotateCarousel(); };
document.getElementById('nextBtn').onclick = () => { theta++; rotateCarousel(); };

setupCarousel();
rotateCarousel();

/* 4. LOADER */
window.onload = () => {
    setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 1000);
};
