const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
console.log(colors.length);
const btnStart = document.querySelector(`[data-action="start"]`);
const btnStop = document.querySelector(`[data-action="stop"]`);
const body = document.querySelector(`body`);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const onColoryzerBody = () => {
  const i = randomIntegerFromInterval(0, colors.length);
  body.style.backgroundColor = `${colors[i]}`;
};
btnStart.addEventListener(`click`, onColoryzerBody);
//setInterval();
