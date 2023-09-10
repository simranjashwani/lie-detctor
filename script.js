let currentQuestion = 0;
let truthCount = 0;
let lieCount = 0;

const questions = [
    "Did you eat the last piece of cake?",
    "Have you ever been to the moon?",
    "Do you like spinach?",
    "Have you won a Nobel Prize?",
    "Did you go to the beach last weekend?",
    "Is your favorite color green?",
    "Have you met a celebrity?",
    "Did you eat pizza for breakfast?",
    "Do you have a pet elephant?",
    "Is your hair naturally pink?"
];

function startTest() {
    currentQuestion = 0;
    truthCount = 0;
    lieCount = 0;
    document.querySelector('.instructions').style.display = 'none';
    document.querySelector('.question').style.display = 'block';
    document.querySelector('.progress').style.display = 'block';
    document.querySelector('.result').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';
    askQuestion();
}

function askQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById('questionText').textContent = questions[currentQuestion];
        document.getElementById('progressBar').style.width = ((currentQuestion / questions.length) * 100) + '%';
        currentQuestion++;
    } else {
        // All questions asked, show the result
        document.querySelector('.question').style.display = 'none';
        document.querySelector('.progress').style.display = 'none';
        calculatePercentage();
    }
}

function answerQuestion(answer) {
    if (answer) {
        truthCount++;
    } else {
        lieCount++;
    }
    askQuestion();
}

function calculatePercentage() {
    const totalQuestions = questions.length;
    const truthPercentage = (truthCount / totalQuestions) * 100;
    const liePercentage = (lieCount / totalQuestions) * 100;

    const resultText = document.getElementById('resultText');
    resultText.textContent = `Lie Detector Result: Truth - ${truthPercentage.toFixed(2)}%, Lie - ${liePercentage.toFixed(2)}%`;

    // Show the result
    document.querySelector('.result').style.display = 'block';
}
