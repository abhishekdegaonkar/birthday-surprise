const unlockBtn = document.getElementById("unlock");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const message = document.getElementById("message");

// Correct values
const correctDate = "2005-08-14";
const correctPassword = "14082005";

unlockBtn.addEventListener("click", () => {

    if (dob.value === "") {
        message.innerHTML = "📅 Please select your birth date.";
        message.style.color = "#FFD54F";
        return;
    }

    if (password.value === "") {
        message.innerHTML = "🔒 Please enter the password.";
        message.style.color = "#FFD54F";
        return;
    }

    if (dob.value === correctDate && password.value === correctPassword) {

        message.style.color = "#7CFC00";
        message.innerHTML = "🎉 Welcome Rasika ❤️";

        unlockBtn.innerHTML = "Opening Surprise... 🎁";
        unlockBtn.disabled = true;

        document.querySelector(".glass").style.transform = "scale(1.05)";
        document.querySelector(".glass").style.transition = "0.5s";

        setTimeout(() => {
            window.location.href = "gift.html";
        }, 2500);

    } else {

        message.style.color = "#FF5252";
        message.innerHTML = "❌ Wrong Birth Date or Password";

        document.querySelector(".glass").animate([
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(-10px)" },
            { transform: "translateX(10px)" },
            { transform: "translateX(0)" }
        ], {
            duration: 400
        });

        password.value = "";
    }

});