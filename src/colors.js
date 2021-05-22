const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const btnStart = document.querySelector(`[data-action="start"]`);
const btnStop = document.querySelector(`[data-action="stop"]`);
const body = document.querySelector(`body`);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;
btnStart.addEventListener(`click`, () => {
  if (btnStart.dataset.action === "start") {
    btnStart.removeAttribute("data-action");
    intervalId = setInterval(() => {
      const i = randomIntegerFromInterval(0, colors.length);
      body.style.backgroundColor = `${colors[i]}`;
    }, 1000);
  }
  return;
});
btnStart.removeAttribute("start");
btnStop.addEventListener(`click`, () => {
  clearTimeout(intervalId);
  btnStart.setAttribute("data-action", "start");
});
