const moles = document.querySelectorAll(".mole-img");
const startBtn = document.querySelector("button");
const scoreDisplay = document.querySelector("span");

let intervalId;
let score = 0;

function startGame() {

  score = 0;
  scoreDisplay.textContent = score;

  clearInterval(intervalId);

  const startTime = new Date().getTime();
  intervalId = setInterval(function () {
    if (new Date().getTime() - startTime > 10000) {
      clearInterval(intervalId);
      startBtn.textContent = "New Game";
      return;
    }

    const randomNum = Math.ceil(Math.random() * 5);
    const mole = document.getElementById(randomNum);
    mole.classList.add("game-on");

  }, 600);
}

startBtn.addEventListener("click", startGame);

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
  });
  mole.addEventListener("transitionend", () => {
    mole.classList.remove("game-on");
  });
});
