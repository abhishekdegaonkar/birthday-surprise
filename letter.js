const message=`Dear Rasika ❤️,

Happy Birthday!

Today is one of the most special days because it celebrates someone truly wonderful.

May this birthday bring you endless happiness, beautiful memories, good health, success, peace and lots of smiles.

Keep believing in yourself because you are capable of achieving every dream you have.

Whenever life becomes difficult, remember that every challenge makes you stronger.

Always keep your beautiful smile because it has the power to brighten someone's entire day.

May God always protect you, guide you and bless you with unlimited happiness.

Thank you for being such an amazing person.

Enjoy every moment of today.

Once again,

Happy Birthday Rasika ❤️🎂✨`;

const typing=document.getElementById("typing");
const btn=document.getElementById("nextBtn");

let i=0;

function typeLetter(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

setTimeout(typeLetter,28);

}

else{

btn.style.display="block";

}

}

typeLetter();

btn.onclick=function(){

window.location.href="finale.html";

};
