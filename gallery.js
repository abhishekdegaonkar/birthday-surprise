const photos=[

"assets/images/rashika1.jpg",
"assets/images/rashika2.jpg",
"assets/images/rashika3.jpg",
"assets/images/rashika4.jpg",
"assets/images/rashika6.jpg",
"assets/images/rashika7.jpg",
"assets/images/rashika8.jpg",
"assets/images/rashika9.jpg",
"assets/images/rashika10.jpg",
"assets/images/rashika11.jpg",
"assets/images/rashika12.jpg"

];

const captions=[

"Every smile of yours is precious ❤️",

"You make everyone feel like family 💖",

"Kindness is your biggest beauty 🌸",

"Your innocent smile is unforgettable ✨",

"Every journey with you becomes beautiful 🚗",

"Keep smiling forever 😊",

"A heart full of love ❤️",

"You make memories special 📸",

"Always shine like a star ⭐",

"Stay the amazing person you are 🌹",

"Happy 21st Birthday Rasika 🎂❤️"

];

let current=0;

const image=document.getElementById("storyImage");
const caption=document.getElementById("caption");
const progress=document.querySelector(".progress-bar");

function loadStory(){

image.style.opacity=0;

setTimeout(()=>{

image.src=photos[current];
caption.innerHTML=captions[current];

image.style.opacity=1;

progress.style.width=((current+1)/photos.length)*100+"%";

},300);

}

document.getElementById("right").onclick=()=>{

current++;

if(current>=photos.length){

window.location.href="cake.html";
return;

}

loadStory();

}

document.getElementById("left").onclick=()=>{

if(current>0){

current--;

loadStory();

}

}

setInterval(()=>{

current++;

if(current>=photos.length){

window.location.href="cake.html";

}else{

loadStory();

}

},5000);