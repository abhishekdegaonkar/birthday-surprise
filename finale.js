const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function firework(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

for(let i=0;i<120;i++){

particles.push({

x:x,

y:y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

function animate(){

ctx.fillStyle="rgba(5,0,24,.2)";

ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

setInterval(firework,900);