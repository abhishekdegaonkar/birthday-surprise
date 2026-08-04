const gift = document.getElementById("giftBox");
const tapText = document.getElementById("tapText");

let opened = false;

gift.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    gift.classList.add("open");

    tapText.innerHTML="✨ Opening Magic...";

    screenFlash();

    createConfetti();

    createHearts();

    createSparkles();

    setTimeout(()=>{

        tapText.innerHTML="🎉 Happy Birthday Rasika ❤️";

    },1800);

    setTimeout(()=>{

        document.body.style.transition="1s";
        document.body.style.opacity="0";

    },4000);

    setTimeout(()=>{

        window.location.href="celebration.html";

    },5000);

});

/* ---------- Screen Flash ---------- */

function screenFlash(){

    const flash=document.createElement("div");

    flash.style.position="fixed";
    flash.style.top=0;
    flash.style.left=0;
    flash.style.width="100%";
    flash.style.height="100%";
    flash.style.background="white";
    flash.style.opacity=".9";
    flash.style.zIndex="9999";
    flash.style.transition=".6s";

    document.body.appendChild(flash);

    setTimeout(()=>{

        flash.style.opacity="0";

    },100);

    setTimeout(()=>{

        flash.remove();

    },800);

}

/* ---------- Confetti ---------- */

function createConfetti(){

    const colors=[
        "#ff4d94",
        "#FFD700",
        "#8b5cf6",
        "#00e5ff",
        "#ffffff",
        "#ff9800"
    ];

    for(let i=0;i<220;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.top="-20px";

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=
        (2+Math.random()*3)+"s";

        c.style.transform=
        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },6000);

    }

}

/* ---------- Hearts ---------- */

function createHearts(){

    for(let i=0;i<50;i++){

        const h=document.createElement("div");

        h.className="heart";

        h.innerHTML="❤️";

        h.style.left=Math.random()*100+"vw";

        h.style.fontSize=
        (18+Math.random()*25)+"px";

        document.body.appendChild(h);

        setTimeout(()=>{

            h.remove();

        },7000);

    }

}

/* ---------- Sparkles ---------- */

function createSparkles(){

    for(let i=0;i<120;i++){

        const s=document.createElement("div");

        s.innerHTML="✨";

        s.style.position="fixed";

        s.style.left=Math.random()*100+"vw";

        s.style.top=Math.random()*100+"vh";

        s.style.fontSize=(10+Math.random()*20)+"px";

        s.style.opacity="0";

        s.style.transition="1.5s";

        document.body.appendChild(s);

        setTimeout(()=>{

            s.style.opacity="1";

            s.style.transform="scale(2)";

        },50);

        setTimeout(()=>{

            s.remove();

        },2000);

    }

}