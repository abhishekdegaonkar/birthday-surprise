const photos = [

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

const captions = [

"A smile that lights up every moment ❤️",
"Beautiful inside and out ✨",
"Happiness looks perfect on you 🌸",
"Every journey becomes special with you 💕",
"Your innocence is your biggest strength 🌼",
"The world is brighter because of your smile ☀️",
"A heart full of kindness ❤️",
"Cherishing every memory together 📸",
"Keep smiling forever 🌹",
"Your happiness means everything 🎈",
"Happy Birthday Rasika ❤️🎂"

];

let current = 0;

const img = document.getElementById("storyImage");
const cap = document.getElementById("caption");
const title = document.getElementById("title");

document.getElementById("next").addEventListener("click", () => {

    current++;

    if (current < photos.length) {

        img.style.opacity = "0";

        setTimeout(() => {
            img.src = photos[current];
            cap.innerHTML = captions[current];
            img.style.opacity = "1";
        }, 400);

    } else {

        window.location.href = "cake.html";

    }

}); 