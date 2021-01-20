var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");

var index = 0;

//this is where the questions are stored
var questions = [
  ["question1", "answer 1", "answer 2", "answer 3", "answer 4", "answer 2"],
  ["question2", "answer 1", "answer 2", "answer 3", "answer 4", "answer 3"],
  ["question3", "answer 1", "answer 2", "answer 3", "answer 4", "answer 4"],
  ["question4", "answer 1", "answer 2", "answer 3", "answer 4", "answer 1"],
];

function displayQuestion() {
  document.getElementById("generate").style.display = "none";
  document.getElementById("rules").style.display = "none";
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
  questions[index][5] === questions[index][0];
  index++;
  displayQuestion();
}

document.getElementById("generate").addEventListener("click", displayQuestion);

ans1.addEventListener("click", clickHandler);
ans2.addEventListener("click", clickHandler);
ans3.addEventListener("click", clickHandler);
ans4.addEventListener("click", clickHandler);
