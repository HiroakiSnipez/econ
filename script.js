function toggleAnswer(answerId) {
    const answerBox = document.getElementById(answerId);
    if (answerBox.style.display === "block") {
        answerBox.style.display = "none";
    } else {
        answerBox.style.display = "block";
    }
}