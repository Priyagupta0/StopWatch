let running = false;
let seconds = 0,
  minutes = 0,
  hours = 0;
let timerInterval;

function start() {
  if (!running) {
    running = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function stop() {
  running = false;
  clearInterval(timerInterval);
}

function reset() {
  running = false;
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = `${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}
