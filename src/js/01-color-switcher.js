const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body')

let timerId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor()
  }, 1000)
  startBtn.disabled = true;
  stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
  clearInterval(timerId)
  startBtn.disabled = false;
  stopBtn.disabled = true;
})