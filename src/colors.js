const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const btnStart = document.querySelector(`[data-action="start"]`)
const btnStop = document.querySelector(`[data-action="stop"]`)

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };