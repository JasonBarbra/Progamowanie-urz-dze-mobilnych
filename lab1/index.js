var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
let style = "#00FF00";

setInterval(() => {
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
