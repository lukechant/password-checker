const passwordInput = document.getElementById("password-input");
const progressBar = document.getElementById("progress-bar");
let strength = document.getElementById("strength");

export const passwordLengthCheck = function(inputLength) {
    let lengthValue = 0;
    let describeStrength = 'Pretty bad';

    if (inputLength> 4 && inputLength <= 8) {
        lengthValue = 20;
        describeStrength = 'Weak';
    } else if(inputLength > 8 && inputLength <= 12) {
        lengthValue = 40;
        describeStrength = 'OK';
    } else if(inputLength > 12 && inputLength <= 16) {
        lengthValue = 60;
        describeStrength = 'Good';
    } else if(inputLength > 16 &&inputLength <=20) {
        lengthValue = 80;
        describeStrength = 'Very good';
    } else if(inputLength > 20) {
        lengthValue = 100;
        describeStrength = 'Excellent';
    }
    return [lengthValue, describeStrength];
}

const updateDOM = function(newValue) {
    progressBar.value = passwordLengthCheck(newValue)[0];
    strength.innerHTML =  passwordLengthCheck(newValue)[1];
}

document.addEventListener("DOMContentLoaded", () => {
    passwordInput.addEventListener('input', () => updateDOM(passwordInput.value.length));
});