var ball;
var peddle;

function openWin() {
  ball = window.open("", "ball", "width=150, height=150");
  ball.document.write(
    '<img src="img/Soccer_ball.png", "width=120, height=120">'
  );
  ball.moveTo(600, 300);
  ball.focus();
}


var bottom = 0;
var left = 0;

var steps = 10;
var interval = 20;

var maxBottom = $(window).height();
var maxLeft = $(window).width();
maxLeft -= 50;
maxBottom -= 50;


function move() {

    var orientation = Math.floor(Math.random() * 4);

    switch (orientation) {
        case 0:
            console.log("left");
            ball.moveTo(ball.screenX - steps, ball.screenY);
            ball.resizeTo(120, 200);
            break;
        case 1:
            console.log("right")
            ball.moveTo(ball.screenX + steps, ball.screenY);
            ball.resizeTo(120, 200);
            break;
        case 2:
            console.log("up")
            ball.moveTo(ball.screenX, (ball.screenX, ball.screenY - steps));
            ball.resizeTo(120, 200);
            break;
        case 3:
            console.log("down")
            ball.moveTo(ball.screenX, (ball.screenX, ball.screenY + steps));
            ball.resizeTo(120, 200);
            break;
        default:
            console.log("test")
    }
}

setInterval(move, interval);

function openWin2() {
  peddle = window.open("", "peddle", "width=50, height=150");
  peddle.document.write('<img src="img/balk.jpg", "width=20, height=120">');
  peddle.moveTo(0, 0);
  peddle.focus();
}


var interval = 20;

function moveWin() {
    Mousetrap.bind('up', function () {
        peddle.moveTo(peddle.screenX, (peddle.screenX, peddle.screenY - 100));
    });
    Mousetrap.bind('down', function () {
        peddle.moveTo(peddle.screenX, (peddle.screenX, peddle.screenY + 100));
    });

}


setInterval(moveWin, interval);


function openWindows() {
  openWin();
  openWin2();
}
