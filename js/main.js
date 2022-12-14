const question = document.querySelector(".question");
const check = document.querySelector(".btn-check");
const startGuess = document.querySelector(".start");
const field = document.querySelector(".field");
const score = document.querySelector(".spn-score");
const highScore = document.querySelector(".spn-high");
const again = document.querySelector(".btn-head");
const finalScore = document.querySelector(".final-score");
const spnFinalScore = document.querySelector(".final-score span");
const pFinalScore = document.querySelector(".final");
let random = Math.trunc(Math.random() * 20 + 1);
let finalHighScore = 0;
let scoreSpn = 5;

function scoreText(txt) {
  // function for text content in start guess for all except no number text
  startGuess.textContent = txt;
  // function for text content in score
  if (scoreSpn > 0) {
    scoreSpn--;
    score.textContent = scoreSpn;
  }
}

// function for text content in start guess just for no number text
function startText(txt) {
  startGuess.textContent = txt;
}

// function for win and lost game
function lostAndWin(color) {
  question.textContent = random;
  document.body.style.backgroundColor = color;
  finalScore.style.display = "flex";
  check.style.display = "none";
}

// function for correct number
function correct() {
  startText("π Correct number!");
  lostAndWin("rgb(71, 228, 51)");
  finalHighScore += Number(score.textContent);
  highScore.textContent = finalHighScore;
  pFinalScore.textContent = `You win the gameππ, final score is ${highScore.textContent} π`;
}

check.addEventListener("click", function (e) {
  Number(field.value) === 0
    ? startText("β No number!")
    : Number(field.value) > Number(random)
    ? scoreText("π Too high!")
    : Number(field.value) < Number(random)
    ? scoreText("π Too low!")
    : correct();
  if (scoreSpn === 0) {
    startText("π₯ You lost the game!");
    lostAndWin("rgb(154, 0, 0)");
    finalHighScore = 0;
    pFinalScore.textContent = `You lost the gameβπ, final score is ${highScore.textContent} π`;
    highScore.textContent = finalHighScore;
  }
});

again.addEventListener("click", function () {
  scoreSpn = 5;
  random = Math.trunc(Math.random() * 20 + 1);
  question.textContent = "?";
  startText("Start guessing...");
  score.textContent = scoreSpn;
  field.value = "";
  document.body.style.backgroundColor = "#222";
  check.style.display = "block";
});

spnFinalScore.addEventListener("click", function () {
  finalScore.style.display = "none";
});
