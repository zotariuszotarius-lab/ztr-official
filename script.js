function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === 8) {
        result.innerHTML = "Bonne réponse 🔥";
        result.style.color = "#00aaff";
    } else {
        result.innerHTML = "Mauvaise réponse ❌";
        result.style.color = "red";
    }
}
