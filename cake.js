const btn=document.getElementById("blowBtn");

const flames=document.querySelectorAll(".flame");

const msg=document.getElementById("message");

btn.onclick=()=>{

flames.forEach(f=>{

f.style.opacity="0";

});

btn.style.display="none";

msg.innerHTML="🎉 Happy 21st Birthday Rasika ❤️<br><br>May all your dreams come true! ✨";

createConfetti();

setTimeout(()=>{

window.location.href="letter.html";

},5000);

};

function createConfetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="8px";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.borderRadius="50%";

c.style.zIndex="999";

document.body.appendChild(c);

let speed=3+Math.random()*5;

let rotate=Math.random()*360;

let y=-20;

const fall=setInterval(()=>{

y+=speed;

c.style.top=y+"px";

c.style.transform=`rotate(${rotate+=5}deg)`;

if(y>window.innerHeight){

clearInterval(fall);

c.remove();

}

},20);

}

}