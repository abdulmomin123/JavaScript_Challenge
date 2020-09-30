const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX;
let lastY;
let stroke = 0;
let lineWidth = 100;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${stroke}, 100%, 50%)`;
  ctx.lineWidth = lineWidth;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;

  stroke++;

  if (lineWidth >= 100 || lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    lineWidth++;
  } else {
    lineWidth--;
  }
};

canvas.onmousemove = (e) => {
  draw(e);
};

canvas.onmousedown = (e) => {
  isDrawing = true;

  lastX = e.offsetX;
  lastY = e.offsetY;

  initialX = e.offsetX;
  initialY = e.offsetY;
};
canvas.onmouseup = () => {
  isDrawing = false;
  movement = 0;
};
canvas.onmouseout = () => (isDrawing = false);
