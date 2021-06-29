const passwordInput = document.getElementById("password-input");
console.log(passwordInput);
const progressBar = document.getElementById("progress-bar");
let complexity = document.getElementById("complexity");



//random value for progress bar
// document.addEventListener('input', function() {
//     let randomValue = Math.floor(Math.random() * 100);
//     console.log(randomValue);
//     progressBar.value = randomValue;
// });

//length
passwordInput.addEventListener('input', function(event) {
    console.log(event.target.value);
    let lengthValue = 0;
    let userInputLength = event.target.value.length;

    if (userInputLength> 4 && userInputLength <= 8) {
        lengthValue = 20;
    } else if(userInputLength > 8 && userInputLength <= 12) {
        lengthValue = 40;
    } else if(userInputLength > 12 && userInputLength <= 16) {
        lengthValue = 60;
    } else if(userInputLength > 16) {
        lengthValue = 80;
    }

    //add 5 % value for uppercase, lowercase, number, other
    

    progressBar.value = lengthValue;
});

passwordInput.addEventListener('input', function(event) {
    let complexWord = 'blorp';
    let userInputLength = event.target.value.length;

    if (userInputLength> 4 && userInputLength <= 8) {
        complexWord = 'weak';
    } else if(userInputLength > 8 && userInputLength <= 12) {
        complexWord = 'ok';
    } else if(userInputLength > 12 && userInputLength <= 16) {
        complexWord = 'good';
    } else if(userInputLength > 16) {
        complexWord = 'very good';
    }

    complexity.innerHTML = complexWord;
});

//regex help https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/