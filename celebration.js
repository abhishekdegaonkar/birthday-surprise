// ===============================
// PREMIUM CELEBRATION V3
// ===============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

// ---------------- Fireworks ----------------

function launchFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    const colors = [
        "#ff4d94",
        "#FFD700",
        "#00E5FF",
        "#7CFC00",
        "#ffffff",
        "#8b5cf6",
        "#ff9800"
    ];

    for (let i = 0; i < 120; i++) {

        particles.push({

            x,
            y,

            dx: (Math.random() - .5) * 10,
            dy: (Math.random() - .5) * 10,

            size: Math.random() * 4 + 2,

            life: 100,

            color: colors[Math.floor(Math.random() * colors.length)]

        });

    }

}

function animate() {

    ctx.fillStyle = "rgba(0,0,0,.18)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.shadowBlur=15;
        ctx.shadowColor=p.color;

        ctx.fill();

        p.x+=p.dx;

        p.y+=p.dy;

        p.dy+=0.03;

        p.life--;

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

setInterval(launchFirework,900);

// ---------------- Floating Hearts ----------------

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.pointerEvents="none";

    heart.style.transition="8s linear";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh) rotate(360deg)";
        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8000);

},450);

// ---------------- Sparkles ----------------

setInterval(()=>{

    const star=document.createElement("div");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(12+Math.random()*18)+"px";

    star.style.opacity="0";

    star.style.transition="2s";

    star.style.pointerEvents="none";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.style.opacity="1";
        star.style.transform="scale(2)";

    },50);

    setTimeout(()=>{

        star.remove();

    },2000);

},300);

// ---------------- Next Button ----------------

const btn=document.getElementById("galleryBtn");

btn.addEventListener("click",()=>{

    btn.innerHTML="📸 Opening Memories...";

    btn.disabled=true;

    document.body.style.transition="1s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="gallery.html";

    },1200);

});