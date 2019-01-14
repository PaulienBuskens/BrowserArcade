var ball;
var peddle;
var interval = 20;
var collides = false;

function openWin() {
  ball = window.open("", "ball", "width=150, height=150");
  ball.document.write(
    '<img src="img/Soccer_ball.png", "width=120, height=120">'
  );
  ball.moveTo(600, 300);
  ball.focus();
}

function openWin2() {
  peddle = window.open("", "peddle", "width=30, height=150");
  peddle.document.write('<img src="img/balk.jpg", "width=120, height=120">');
  peddle.moveTo(600, 300);
  peddle.focus();
}

function collide() {
  if ((peddle.screenX, peddle.screenY) == (ball.screenX, ball.screenY)) {
    collides = true;
  } else {
    collides = false;
  }

  if (collides) {
    console.log("collide");
  }
}

function openWindows() {
  openWin();
  openWin2();
}

setInterval(collide, interval);
