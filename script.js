const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i< 100; i++){
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: Math.random() * 1,
        radius: 0,
        angle: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.5 + 0.1,
        speedx: (Math.random() * 0.1) * plusOrMinus,
        speedy: (Math.random() * 0.1) * plusOrMinus
 });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle  = "white";

    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speedy;
        star.x += star.speedx;
        star.angle += star.pulseSpeed;
        star.radius = Math.max(0,star.baseRadius + Math.sin(star.angle) );



        if (star.y > canvas.height || star.y < 0) {
            star.speedy = -star.speedy;
        }
        if (star.x > canvas.width || star.x < 0) {
            star.speedx = -star.speedx;
        }   
    }
    requestAnimationFrame(drawStars);

}

drawStars();