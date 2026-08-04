// =============================
// PREMIUM CAKE V4
// =============================

const blowBtn = document.getElementById("blowBtn");
const cutBtn = document.getElementById("cutBtn");
const message = document.getElementById("message");
const flames = document.querySelectorAll(".flame");

let blown = false;
let cut = false;

/* -------------------------
   Blow Candles
--------------------------*/

blowBtn.addEventListener("click",()=>{

if(blown) return;

blown=true;

flames.forEach(flame=>{

flame.style.transition=".5s";
flame.style.opacity="0";
flame.style.transform="scale(0)";

});

createConfetti();

createHearts();

message.innerHTML="🎉 Happy Birthday Rasika ❤️";

blowBtn.innerHTML="🕯️ Candles Blown";

});

/* -------------------------
   Cut Cake
--------------------------*/

cutBtn.addEventListener("click",()=>{

if(!blown){

message.innerHTML="💨 Blow the candles first!";

return;

}

if(cut) return;

cut=true;

document.querySelector(".cake").style.transform="rotate(-2deg) scale(.96)";

createConfetti();

message.innerHTML="🍰 Cake Cut Successfully ❤️";

cutBtn.innerHTML="🍰 Cake Cut";

setTimeout(()=>{

message.innerHTML="💌 A Special Letter Awaits You...";

},2500);

setTimeout(()=>{

document.body.style.transition="1s";
document.body.style.opacity="0";

},4000);

setTimeout(()=>{

window.location.href="letter.html";

},5200);

});

/* -------------------------
   Confetti
--------------------------*/

function createConfetti(){

const colors=[
"#ff4d94",
"#FFD700",
"#00E5FF",
"#ffffff",
"#7CFC00",
"#ff9800",
"#8b5cf6"
];

for(let i=0;i<250;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.background=
colors[Math.floor(Math.random()*colors.length)];

confetti.style.animationDuration=
(2+Math.random()*3)+"s";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},6000);

}

}

/* -------------------------
   Floating Hearts
--------------------------*/

function createHearts(){

for(let i=0;i<60;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*22)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

}

/* -------------------------
   Sparkles
--------------------------*/

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=
(12+Math.random()*18)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="0";

sparkle.style.transition="1.5s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity="1";

sparkle.style.transform="scale(2)";

},50);

setTimeout(()=>{

sparkle.remove();

},1800);

},350);

/* -------------------------
   Floating Hearts Forever
--------------------------*/

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(18+Math.random()*18)+"px";

heart.style.transition="8s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},8000);

},700);