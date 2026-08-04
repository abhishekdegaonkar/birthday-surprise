// ================================
// Birthday Surprise Login
// ================================

const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlock");
const message = document.getElementById("message");

// Correct Details
const correctDOB = "2005-08-14";
const correctPassword = "14082005";

// Unlock Button
unlockBtn.addEventListener("click", function () {

    const dob = dobInput.value.trim();
    const password = passwordInput.value.trim();

    // Empty Fields
    if (dob === "" || password === "") {

        message.style.color = "#FFD700";
        message.innerHTML = "⚠️ Please enter your birth date and password.";

        shake();

        return;

    }

    // Correct Details
    if (dob === correctDOB && password === correctPassword) {

        message.style.color = "#7CFC00";
        message.innerHTML = "✨ Welcome Rasika... Your surprise is loading ❤️";

        unlockBtn.disabled = true;
        unlockBtn.innerHTML = "Loading...";

        setTimeout(function(){

            window.location.href = "gift.html";

        },2000);

    }

    // Wrong Details
    else{

        message.style.color = "#ff4d6d";
        message.innerHTML = "❌ Wrong Birth Date or Password";

        shake();

    }

});

// Shake Animation
function shake(){

    const card = document.querySelector(".glass");

    card.style.animation = "none";

    setTimeout(function(){

        card.style.animation = "shake .4s";

    },10);

}
