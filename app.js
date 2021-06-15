document.addEventListener('keydown', function() {
    let randomValue = Math.floor(Math.random() * 100);
    console.log(randomValue);
    document.getElementById("progress-bar").value = randomValue;
});