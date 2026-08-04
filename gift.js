const gift = document.getElementById("giftBox");
const tapText = document.getElementById("tapText");

let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Open Animation
    gift.classList.add("open");

    tapText.innerHTML = "✨ Opening Your Surprise...";

    // Confetti
    createConfetti();

    // Glow Effect
    gift.style.filter = "drop-shadow(0 0 40px gold)";

    // Birthday Message
    setTimeout(() => {

        tapText.innerHTML = "🎉 Happy Birthday Rasika ❤️";

    },1200);

    // Go to Celebration
    setTimeout(() => {

        window.location.href="celebration.html";

    },4500);

});


function createConfetti(){

    const colors=[
        "#ff4f9d",
        "#ffd700",
        "#ffffff",
        "#8a5cff",
        "#4fc3ff",
        "#7CFC00"
    ];

    for(let i=0;i<180;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
        (2+Math.random()*3)+"s";

        confetti.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },5000);

    }

}

// Floating Hearts

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (18+Math.random()*25)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

},500);