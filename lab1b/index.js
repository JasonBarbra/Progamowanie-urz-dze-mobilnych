var c = document.getElementById("firstCanvas");
var ctx = c.getContext("2d");

let style = "#00FF00";

//Gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "blue");
ctx.arc(100, 200, 60, 0, 2 * Math.PI);
//

ctx.fillStyle = grd;
ctx.beginPath();
ctx.arc(100, 200, 60, 0, 2 * Math.PI);

ctx.fill();

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
  ctx.endPath();
}, [1000]);
