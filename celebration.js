const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);

    for (let i = 0; i < 80; i++) {

        particles.push({

            x: x,
            y: y,

            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,

            size: Math.random() * 3 + 2,

            life: 100,

            color: `hsl(${Math.random()*360},100%,60%)`

        });

    }

}

function animate() {

    ctx.fillStyle = "rgba(0,0,0,.15)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

        ctx.fillStyle=p.color;

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

setInterval(createFirework,800);

/* Floating Hearts */

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="7s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120vh) rotate(360deg)";
        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,500);

/* Next Button */

document.getElementById("nextBtn").addEventListener("click",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="gallery.html";

    },700);

});