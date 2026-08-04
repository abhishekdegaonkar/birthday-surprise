// ================================
// PREMIUM GALLERY V4
// ================================

const images = [
"assets/images/rasika1.jpg",
"assets/images/rasika2.jpg",
"assets/images/rasika3.jpg",
"assets/images/rasika4.jpg",
"assets/images/rasika6.jpg",
"assets/images/rasika7.jpg",
"assets/images/rasika8.jpg",
"assets/images/rasika9.jpg",
"assets/images/rasika10.jpg",
"assets/images/rasika11.jpg",
"assets/images/rasika12.jpg"
];

const captions = [

"Every smile of yours makes the world brighter ❤️",

"You are the most beautiful gift life has ever created ✨",

"Some memories stay forever... this is one of them 💖",

"Your happiness is the reason behind this surprise 🎉",

"Beautiful outside... even more beautiful inside 🌸",

"Every picture reminds me how special you are ❤️",

"Keep smiling because your smile is magical ✨",

"You deserve all the happiness in the world 🎂",

"May every dream come true for you 💕",

"Happy Birthday to the most precious person ❤️",

"This is only the beginning of your beautiful journey 🎉"

];

let current = 0;

const img = document.getElementById("storyImage");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const heart = document.getElementById("heart");

function showImage(){

img.classList.add("fade");

setTimeout(()=>{

img.src = images[current];

caption.innerHTML = captions[current];

counter.innerHTML = (current+1)+" / "+images.length;

img.classList.remove("fade");

resetProgress();

},250);

}

function nextImage(){

current++;

if(current>=images.length){

window.location.href="cake.html";

return;

}

showImage();

}

function prevImage(){

if(current===0) return;

current--;

showImage();

}

document.getElementById("next").onclick=nextImage;

document.getElementById("prev").onclick=prevImage;

/* Double Tap Heart */

let lastTap=0;

document.body.addEventListener("touchend",function(e){

const now=new Date().getTime();

if(now-lastTap<300){

heart.classList.add("showHeart");

setTimeout(()=>{

heart.classList.remove("showHeart");

},800);

}

lastTap=now;

});

/* Progress Bar */

let width=0;

function resetProgress(){

width=0;

progress.style.width="0%";

}

setInterval(()=>{

width+=2;

progress.style.width=width+"%";

if(width>=100){

nextImage();

}

},100);

/* Swipe Support */

let startX=0;

document.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX;

});

document.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>60){

nextImage();

}

if(endX-startX>60){

prevImage();

}

});

showImage();