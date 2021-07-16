const passwordInput = document.getElementById("password-input");
const progressBar = document.getElementById("progress-bar");
let strength = document.getElementById("strength");



export const passwordLengthCheck = function(inputLength) {
    // console.log(passwordInput.value);
    let lengthValue = 0;

    if (inputLength> 4 && inputLength <= 8) {
        lengthValue = 20;
    } else if(inputLength > 8 && inputLength <= 12) {
        lengthValue = 40;
    } else if(inputLength > 12 && inputLength <= 16) {
        lengthValue = 60;
    } else if(inputLength > 16 &&inputLength <=20) {
        lengthValue = 80;
    } else if(inputLength > 20) {
        lengthValue = 100;
    }
    // console.log(inputLength);
    // // console.log(lengthValue);
    // progressBar.value = lengthValue;
    return lengthValue;
}


export const strengthAssessor = function(inputLength) {
    let describeStrength = 'Pretty bad';

    if (inputLength> 4 && inputLength <= 8) {
        describeStrength = 'Weak';
    } else if(inputLength > 8 && inputLength <= 12) {
        describeStrength = 'OK';
    } else if(inputLength > 12 && inputLength <= 16) {
        describeStrength = 'Good';
    } else if(inputLength > 16 &&inputLength <=20) {
        describeStrength = 'Very good';
    } else if(inputLength > 20) {
        describeStrength = 'Excellent';
    }

    strength.innerHTML = describeStrength;
}

const updateDOM = function(newValue) {
    progressBar.value = passwordLengthCheck(newValue);
    
    // strength.innerHTML =  strengthAssessor(newValue);
    
}

document.addEventListener("DOMContentLoaded", () => {
    passwordInput.addEventListener('input', () => updateDOM(passwordInput.value.length));
    // passwordInput.addEventListener('input', () => strengthAssessor(passwordInput.value.length));
});