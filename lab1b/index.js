var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");

let style = "#00FF00";
let j = 0;

const ball = {
  x: 400,
  y: 20,
};

let up = false;
let i = 0;
let toGreen = true;

const drawCircle = () => {
  ctx.beginPath();
  ctx.fillStyle = `rgb(0,${i},${255 - i})`;
  ctx.arc(100, 200, 60, 0, 2 * Math.PI);
  ctx.fill();
  if (toGreen) {
    i++;
    if (i === 255) {
      toGreen = false;
    }
  } else {
    i--;
    if (i === 0) {
      toGreen = true;
    }
  }
};

setInterval(() => {
  drawCircle();
}, 20);

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
  if (up) {
    ball.y -= 5;
    if (ball.y === 20) {
      up = false;
    }
  } else {
    ball.y += 5;
    if (ball.y === 400) {
      up = true;
    }
  }
  ctx.beginPath();
  ctx.fillStyle = `rgb(0,${i},${255 - i})`;
  ctx.arc(ball.x, ball.y, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
};

setInterval(() => {
  drawMe();
}, 10);
