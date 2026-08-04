const btn=document.getElementById("blowBtn");

btn.onclick=()=>{

const flames=document.querySelectorAll(".flame");

flames.forEach(flame=>{

flame.style.display="none";

});

document.getElementById("message").innerHTML="🎉 Happy Birthday Rashika ❤️";

btn.innerHTML="Next Surprise 💌";

btn.onclick=()=>{

window.location.href="letter.html";

};

}
