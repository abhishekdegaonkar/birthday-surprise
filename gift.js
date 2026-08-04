const gift = document.getElementById("giftBox");

gift.addEventListener("click",()=>{

gift.classList.add("open");

setTimeout(()=>{

window.location.href="celebration.html";

},1800);

});
