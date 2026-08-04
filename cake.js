const button = document.getElementById("blowBtn");
const flames = document.querySelectorAll(".flame");
const message = document.getElementById("message");

button.addEventListener("click", () => {

    // Blow out candles
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.transition = "0.5s";
            flame.style.transform = "scale(0)";
            flame.style.opacity = "0";
        }, index * 250);
    });

    button.disabled = true;
    button.innerHTML = "🎉 Wish Made";

    // Show Birthday Message
    setTimeout(() => {
        message.innerHTML = `
        🎂 Happy Birthday Rasika ❤️<br>
        May your smile always shine brighter than the stars ✨<br><br>
        💖 Wishing you endless happiness, love and success 💖
        `;
        createHearts();
    }, 1700);

    // Go to Letter Page
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 7000);

});

// Floating Hearts
function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (18 + Math.random() * 25) + "px";
        heart.style.opacity = Math.random();
        heart.style.pointerEvents = "none";
        heart.style.animation = `floatHeart ${4 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}

// Heart Animation
const style = document.createElement("style");

style.innerHTML = `
@keyframes floatHeart{
0%{
transform:translateY(0) scale(.5);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translateY(-110vh) scale(1.5) rotate(360deg);
opacity:0;
}
}
`;

document.head.appendChild(style);