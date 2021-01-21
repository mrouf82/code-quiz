var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");

var index = 0;
var score = 0;

var list = document.querySelector("#list");
var highscoreButton = document.getElementById("highscore-btn");
var initialBtn = document.getElementById("initialBtn");
var input = document.getElementById("initialInput");

var timer = document.getElementById("timer");
var time = 30;

var response = document.getElementById("response");

//this is where the questions are stored
var questions = [
  ["question1", "answer 1", "answer 2", "answer 3", "answer 4", "answer 2"],
  ["question2", "answer 1B", "answer 2", "answer 3", "answer 4", "answer 3"],
  ["question3", "answer 1C", "answer 2", "answer 3", "answer 4", "answer 4"],
  ["question4", "answer 1D", "answer 2", "answer 3", "answer 4", "answer 1"],
];

function displayQuestion() {
  startTimer();
  document.getElementById("generate").style.display = "none";
  document.getElementById("rules").style.display = "none";
  document.querySelector("#list").style.display = "none";
  document.getElementById("question").textContent = questions[index][0];
  ans1.textContent = questions[index][1];
  ans2.textContent = questions[index][2];
  ans3.textContent = questions[index][3];
  ans4.textContent = questions[index][4];
  ans1.style.display = "block";
  ans2.style.display = "block";
  ans3.style.display = "block";
  ans4.style.display = "block";
}

function clickHandler() {
  console.log(this.textContent);
  if (this.textContent === questions[index][5]) {
    response.textContent = "Correct";
    score = score + 10;
  } else {
    response.textContent = "Incorrect";
  }
  index++;
  displayQuestion();
}

document.getElementById("generate").addEventListener("click", displayQuestion);

ans1.addEventListener("click", clickHandler);
ans2.addEventListener("click", clickHandler);
ans3.addEventListener("click", clickHandler);
ans4.addEventListener("click", clickHandler);

function startTimer() {
  var timerInterval = setInterval(function () {
    time--;
    timer.textContent = time;
    // stops timer at 0
    if (time === 0 || time <= 0 || index >= 4) {
      clearInterval(timerInterval);
      end();
      timer.textContent = "Game Over!";
      document.getElementById(
        "question"
      ).textContent = `Your score is ${score}.`;
    }
  }, 1000);
}

function end() {
  response.textContent = "Input and view highscores!";
  ans1.style.display = "none";
  ans2.style.display = "none";
  ans3.style.display = "none";
  ans4.style.display = "none";
  displayHighScore();
  document.querySelector("#form").style.display = "block";
  initialBtn.addEventListener("click", store);
}

function store() {
  var info = input.stringify;
  document.querySelector("#name").textContent = `${info} ${score}`;
}

highscoreButton.addEventListener("click", displayHighScore);

function displayHighScore() {
  document.querySelector("#list").style.display = "block";
}
