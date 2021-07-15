const passwordInput = document.getElementById("password-input");
console.log(passwordInput);
const progressBar = document.getElementById("progress-bar");
let strength = document.getElementById("strength");

export const passwordLengthCheck = function() {
    console.log(passwordInput.value);
    let lengthValue = 0;
    let userInputLength = passwordInput.value.length;

    if (userInputLength> 4 && userInputLength <= 8) {
        lengthValue = 20;
    } else if(userInputLength > 8 && userInputLength <= 12) {
        lengthValue = 40;
    } else if(userInputLength > 12 && userInputLength <= 16) {
        lengthValue = 60;
    } else if(userInputLength > 16 &&userInputLength <=20) {
        lengthValue = 80;
    } else if(userInputLength > 20) {
        lengthValue = 1000;
    }
    
    progressBar.value = lengthValue;
}

passwordInput.addEventListener('input', passwordLengthCheck);

export const strengthAssessor = function() {
    let describeStrength = 'Pretty bad';
    let userInputLength = passwordInput.value.length;

    if (userInputLength> 4 && userInputLength <= 8) {
        describeStrength = 'Weak';
    } else if(userInputLength > 8 && userInputLength <= 12) {
        describeStrength = 'OK';
    } else if(userInputLength > 12 && userInputLength <= 16) {
        describeStrength = 'Good';
    } else if(userInputLength > 16 &&userInputLength <=20) {
        describeStrength = 'Very good';
    } else if(userInputLength > 20) {
        describeStrength = 'Excellent';
    }

    strength.innerHTML = describeStrength;
}

passwordInput.addEventListener('input', strengthAssessor);