document.addEventListener('DOMContentLoaded', function() {
    const text = " i'm Zubaedi";
    const container = document.getElementById('animated-text');
    let delay = 0;

    text.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${delay}s`;
        span.classList.add('animate-slide-in');
        container.appendChild(span);
        delay += 0.1;
    });

    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const icon = document.getElementById('menu-icon');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        icon.classList.toggle('animate-swip');
    });

    const skillLogos = document.querySelectorAll('.skill-logo');
    skillLogos.forEach(logo => {
        logo.addEventListener('click', () => {
            logo.classList.toggle('grayscale');
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("matrix-canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0f0";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Transparansi lebih tinggi

    });
});
