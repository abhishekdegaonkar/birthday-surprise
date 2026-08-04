// ===========================
// LOVE LETTER V4
// ===========================

const letter = `

Dear Rasika ❤️,

Happy Birthday to the most beautiful soul.

Today is not just another day...
It is the day when someone truly special came into this world.

I hope your life is always filled with happiness,
beautiful memories,
endless smiles,
and countless blessings.

May every dream you see become reality.

May every step you take lead you toward success.

Whenever life becomes difficult,
always remember that you are stronger than every challenge.

Keep smiling...
because your smile has the power to make everything beautiful.

Thank you for being the wonderful person you are.

May this birthday be the beginning of the happiest chapter of your life.

Once again...

🎂 Happy Birthday Rasika ❤️

Wishing you endless happiness,
good health,
success,
peace,
and lots of love.

Never stop smiling.

✨❤️✨

`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < letter.length){

        typing.innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

typeWriter();

/* --------------------------
Floating Hearts
---------------------------*/

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-40px";

    heart.style.fontSize=(18+Math.random()*20)+"px";

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

},600);

/* --------------------------
Button
---------------------------*/

document.getElementById("finalBtn").addEventListener("click",()=>{

    document.body.style.transition="1s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="finale.html";

    },1000);

});