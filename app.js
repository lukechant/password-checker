const passwordInput = document.getElementById("password-input");
const progressBar = document.getElementById("progress-bar");
let strength = document.getElementById("strength");
let showHideToggle = document.getElementById("showHideToggle");
const passwordCheckbox = document.getElementById("passwordCheckbox");

export const passwordStrengthCheck = function(inputLength) {
    let progressBarValue = 0;
    let describeStrength = 'Pretty bad';

    if (inputLength> 4 && inputLength <= 8) {
        progressBarValue = 20;
        describeStrength = 'Weak';
    } else if(inputLength > 8 && inputLength <= 12) {
        progressBarValue = 40;
        describeStrength = 'OK';
    } else if(inputLength > 12 && inputLength <= 16) {
        progressBarValue = 60;
        describeStrength = 'Good';
    } else if(inputLength > 16 &&inputLength <=20) {
        progressBarValue = 80;
        describeStrength = 'Very good';
    } else if(inputLength > 20) {
        progressBarValue = 100;
        describeStrength = 'Excellent';
    }
    return [progressBarValue, describeStrength];
}

const updateDOM = function(inputLength) {
    const passwordStrengthArray = passwordStrengthCheck(inputLength);
    progressBar.value = passwordStrengthArray[0];
    strength.innerHTML = passwordStrengthArray[1];
}

function passwordVisibility(passwordInput) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showHideToggle.innerText = "Untick to hide password"
    } else {
      passwordInput.type = "password";
      showHideToggle.innerText = "Tick to show password"
    }
  };

document.addEventListener("DOMContentLoaded", () => {
    passwordInput.addEventListener('input', () => updateDOM(passwordInput.value.length));
    passwordCheckbox.addEventListener('click', () => passwordVisibility(passwordInput));
});

