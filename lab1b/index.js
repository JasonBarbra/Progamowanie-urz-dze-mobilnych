var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");

let style = "#00FF00";
let j = 0;

const ball = {
  x: 400,
  y: 0,
};
const velocity = 3;

let moveY = 5;

setInterval(() => {
  for (let i = j; i < 255; i++) {
    ctx.beginPath();
    ctx.fillStyle = `(0,${i},${255 - i})`;
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
  ctx.arc(100, 400, 60, 0, 4 * Math.PI);
  ctx.fill();
}, [1000]);

const drawMe = () => {
  ctx.clearRect(350, 0, 300, 600);
  if (ball.y >= 0) {
    ball.y += 5;
  } else {
    ball.y -= 5;
  }
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.arc(ball.x, ball.y, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};

setInterval(() => {
  drawMe();
}, 10);
