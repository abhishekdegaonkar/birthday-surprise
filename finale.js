// ===============================
// GRAND FINALE V5
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

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.6);

    const colors = [
        "#ff4d94",
        "#FFD700",
        "#00E5FF",
        "#7CFC00",
        "#ffffff",
        "#8b5cf6",
        "#ff9800"
    ];

    for(let i=0;i<140;i++){

        particles.push({

            x,
            y,

            dx:(Math.random()-0.5)*12,
            dy:(Math.random()-0.5)*12,

            radius:Math.random()*3+2,

            color:colors[Math.floor(Math.random()*colors.length)],

            life:120

        });

    }

}

function animate(){

    ctx.fillStyle="rgba(0,0,0,0.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fillStyle=p.color;
        ctx.shadowBlur=15;
        ctx.shadowColor=p.color;

        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        p.dy+=0.04;

        p.life--;

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

setInterval(createFirework,800);

// ---------------- Floating Hearts ----------------

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.transition="8s linear";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh) rotate(360deg)";
        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },8000);

},500);

// ---------------- Sparkles ----------------

setInterval(()=>{

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.fontSize=(10+Math.random()*20)+"px";

    s.style.pointerEvents="none";

    s.style.transition="2s";

    s.style.opacity="0";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.style.opacity="1";
        s.style.transform="scale(2)";

    },50);

    setTimeout(()=>{

        s.remove();

    },2000);

},250);

// ---------------- Confetti ----------------

const colors=[
"#ff4d94",
"#FFD700",
"#00E5FF",
"#7CFC00",
"#ffffff",
"#8b5cf6",
"#ff9800"
];

setInterval(()=>{

    const conf=document.createElement("div");

    conf.style.position="fixed";

    conf.style.left=Math.random()*100+"vw";

    conf.style.top="-20px";

    conf.style.width="8px";

    conf.style.height="12px";

    conf.style.background=colors[Math.floor(Math.random()*colors.length)];

    conf.style.borderRadius="2px";

    conf.style.pointerEvents="none";

    conf.style.transition="5s linear";

    document.body.appendChild(conf);

    setTimeout(()=>{

        conf.style.transform="translateY(120vh) rotate(720deg)";

    },50);

    setTimeout(()=>{

        conf.remove();

    },5200);

},80);

// ---------------- Restart Button ----------------

document.getElementById("restartBtn").addEventListener("click",()=>{

    document.body.style.transition="1s";
    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="index.html";

    },1000);

});
