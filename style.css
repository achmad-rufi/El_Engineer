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

/* 3. CAROUSEL DATA & LOGIC */
const projects = [
    { title: "Smart Home IoT", desc: "ESP32 based automation with Blynk", tech: "ESP32", img: "images/project1.jpg", link: "#" },
    { title: "Solar Analysis", desc: "Off-grid simulation using ETAP", tech: "MATLAB", img: "images/project2.jpg", link: "#" },
    { title: "pH Sensor", desc: "Auto calibration water monitoring", tech: "Arduino", img: "images/project3.jpg", link: "#" },
    { title: "Portfolio Web", desc: "Futuristic Dark UI Theme", tech: "HTML/CSS", img: "images/project4.jpg", link: "#" },
    { title: "Cyber AI", desc: "Network security prototype", tech: "Python", img: "images/project5.jpg", link: "#" }
];

const carousel = document.getElementById('carousel');
let theta = 0;

function setupCarousel() {
    const numItems = projects.length;
    const angle = 360 / numItems;
    const radius = Math.round((280 / 2) / Math.tan(Math.PI / numItems));

    projects.forEach((proj, i) => {
        const cell = document.createElement('a');
        cell.className = 'project-card';
        cell.href = proj.link;
        cell.style.transform = `rotateY(${i * angle}deg) translateZ(${radius + 50}px)`;
        cell.innerHTML = `
            <img src="${proj.img}" class="project-img" alt="Project">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.desc}</p>
            <div style="margin-top:10px; color:#00f3ff; font-size:10px;">[ ${proj.tech} ]</div>
        `;
        carousel.appendChild(cell);
    });
}

function rotateCarousel() {
    const angle = theta * (360 / projects.length);
    carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;
}

document.getElementById('prevBtn').addEventListener('click', () => { theta--; rotateCarousel(); });
document.getElementById('nextBtn').addEventListener('click', () => { theta++; rotateCarousel(); });

setupCarousel();
rotateCarousel();

/* 4. STATS COUNTER */
const statsSection = document.querySelector('.stats-section');
const statNumbers = document.querySelectorAll('.stat-number');
let started = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            statNumbers.forEach(num => {
                const target = +num.dataset.target;
                const increment = target / 100;
                let c = 0;
                const updateCounter = () => {
                    c += increment;
                    if (c < target) {
                        num.innerText = Math.ceil(c);
                        requestAnimationFrame(updateCounter);
                    } else {
                        num.innerText = target;
                    }
                };
                updateCounter();
            });
            started = true;
        }
    });
});
if(statsSection) observer.observe(statsSection);

/* 5. LOADER */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1000);
});

/* 6. VANILLA TILT INIT */
VanillaTilt.init(document.querySelectorAll(".glass-card"), {
    max: 10, speed: 400, glare: true, "max-glare": 0.2
});
