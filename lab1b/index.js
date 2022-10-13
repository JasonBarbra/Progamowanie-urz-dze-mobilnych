var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");

let style = "#00FF00";
let j = 0;

const ball = {
  x: 25,
  y: 25,
};
const velocity = 3;
const startingAngle = 0;
const rad = 20;

setInterval(() => {
  for (let i = j; i < 255; i++) {
    ctx.beginPath();
    ctx.fillStyle = `rgb(0,${i},${255 - i})`;
    ctx.arc(100, 200, 60, 0, 2 * Math.PI);
    ctx.fill();
  }
}, 200);

setInterval(() => {
  ctx.beginPath();
  if (style === "#00FF00") {
    ctx.fillStyle = "#0000FF";
    style = "#0000FF";
  } else {
    ctx.fillStyle = "#00FF00";
    style = "#00FF00";
  }
  ctx.arc(400, 300, 60, 0, 2 * Math.PI);
  ctx.fill();
}, [1000]);

const drawMe = () => {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.arc(ball.x, ball.y, rad, 0, Math.PI / 2);
  ctx.fill();
  ctx.closePath();
};
