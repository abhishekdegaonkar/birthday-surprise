const message=`Dear Rasika ❤️,

Happy Birthday!

Today is one of the most beautiful days because it is the day you came into this world.

You are one of the kindest and most caring people anyone could ever meet.

You treat everyone like your own family, and that is something truly special.

Whenever we travel together, every moment becomes full of laughter, happiness and unforgettable memories.

Your childish smile is one of the cutest things about you.

Never lose that beautiful innocence because it makes you unique.

You always help others without expecting anything in return.

Your heart is beautiful.

I wish that every dream you have comes true.

May your life always be filled with happiness, success, good health and endless smiles.

Keep shining.

Keep smiling.

Keep being YOU.

🎂 Happy 21st Birthday Rasika ❤️

May this year become the most beautiful chapter of your life.

✨ Best Wishes Always ✨`;

let i=0;

const speed=35;

function type(){

if(i<message.length){

document.getElementById("typewriter").innerHTML+=message.charAt(i);

i++;

setTimeout(type,speed);

}

}

type();

document.getElementById("nextBtn").onclick=()=>{

window.location.href="finale.html";

};