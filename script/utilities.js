function addClass(id, value) {
  document.getElementById(id).classList.add(value);
}
function removeClass(id, value) {
  document.getElementById(id).classList.remove(value);
}
function getRandomLetter() {
  return "abcdefghijklmnopqrstuvwxyz/".split("")[parseInt(Math.random() * 26)];
}

function setScore(id) {
  let element = document.getElementById(id);
  element.innerText = parseInt(element.innerText) + 1;
}

function showScore(alphabet) {
  removeClass(alphabet, "bg-red-500");
  addClass("playground", "hidden");
  removeClass("score", "hidden");
  let currentScore = document.getElementById("current-score");
  document.getElementById("final-score").innerText = currentScore.innerText;
}
