let minutesEle = document.querySelector(".min");
let secondsEle = document.querySelector(".sec");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let id = null;

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", stopTimer);

resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  id = setInterval(foo, 500);
}

function stopTimer() {
  clearInterval(id);
}

function foo() {
  let m = minutesEle.textContent;
  let s = secondsEle.textContent;
  let n = Number(m) * 60 + Number(s);
  n = n - 1;
  m = Math.floor(n / 60);
  s = n % 60;
  secondsEle.textContent = s.toString().padStart(2, "0");
  minutesEle.textContent = m.toString().padStart(2, "0");
}

function resetTimer() {
  clearInterval(id);
  minutesEle.textContent = "25";
  secondsEle.textContent = "00";
}
