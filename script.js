// ===============================
// Birthday Website Login
// ===============================

const dobInput = document.getElementById("dob");
const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlock");
const message = document.getElementById("message");

// Correct Details
const correctDOB = "2005-08-14";
const correctPassword = "14082005";

// Unlock Button
unlockBtn.addEventListener("click", () => {

    const dob = dobInput.value;
    const password = passwordInput.value;

    // Empty Fields
    if (dob === "" || password === "") {

        message.style.color = "#FFD700";
        message.innerHTML = "⚠️ Please enter your birth date and password.";

        shakeCard();

        return;
    }

    // Correct Details
    if (dob === correctDOB && password === correctPassword) {

        message.style.color = "#7CFC00";
        message.innerHTML = "✨ Identity Verified...";

        unlockBtn.innerHTML = "Loading Surprise... 💖";

        unlockBtn.disabled = true;

        setTimeout(() => {

            window.location.href = "gift.html";

        }, 2500);

    }

    // Wrong Details
    else {

        message.style.color = "#ff4b5c";
        message.innerHTML = "❌ Wrong Birth Date or Password";

        shakeCard();

    }

});

// Shake Animation
function shakeCard() {

    const card = document.querySelector(".login-card");

    card.style.animation = "none";

    setTimeout(() => {

        card.style.animation = "shake .4s";

    }, 10);

}
