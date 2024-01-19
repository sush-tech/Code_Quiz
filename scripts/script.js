// Global variables, questions are stored in questions.js
var beginQuiz = document.querySelector("#beginBtn");
var leaderBtn = document.querySelector("#leaderBtn");
var timerDisplay = document.querySelector(".timer");
var gameCard = document.querySelector("#gameCard");
var question = document.querySelector("#question");
var mcA = document.querySelector("#mcA");
var mcB = document.querySelector("#mcB");
var mcC = document.querySelector("#mcC");
var mcD = document.querySelector("#mcD");
var answer = document.querySelector("#answer");
var feedback = document.querySelector("#feedback1");
var card = document.querySelector("#multipleChoice");
var inputForm = document.querySelector("#inputForm");
var scoreCard = document.querySelector("#scoreCard");
var scoreBtn = document.querySelector("#scoreBtn");
var initialsBox = document.querySelector("#initialsBox");
var submitBtn = document.querySelector("#submitBtn");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");
var start = document.querySelector(".start");

var timeLeft = questionBank.length * 15;
var q = 0;
var s = 0;
var score = 0;
var scoreList = [];
var timeInterval;

getScore();

// Running the timer for the quiz
function timer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = "TIMER: " + timeLeft;

    if (timeLeft === 0 || q >= questionBank.length) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

// Displaying questions & answers from questions.js
function displayQA() {
  if (q < questionBank.length) {
    question.textContent = questionBank[q].question;
    mcA.textContent = questionBank[q].selection[0];
    mcB.textContent = questionBank[q].selection[1];
    mcC.textContent = questionBank[q].selection[2];
    mcD.textContent = questionBank[q].selection[3];
  } else {
    gameOver();
  }
}