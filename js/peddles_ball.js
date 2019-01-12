var ball;
var peddleLeft;
var peddleRight;

function openBall() {
    ball = window.open("", "ball", "width=150, height=150");
    ball.document.write(
        '<img src="img/Soccer_ball.png", "width=120, height=120">'
    );
    ball.moveTo(600, 300);
    ball.focus();
}


var bottom = 0;
var left = 0;

var steps = 20;
var intervalPlayer1 = 20;
var intervalBall = 50;

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

setInterval(move, intervalBall);

function openRightPeddle() {
    peddleRight = window.open("", "peddleRight", "width=50, height=150");
    peddleRight.document.write('<img src="img/balk.jpg", "width=20, height=120">');
    peddleRight.moveTo(900, 0);
    peddleRight.focus();
}

var interval = 20;

function moveWinRight() {
   
    peddleRight.moveTo(peddleRight.screenX,ball.screenY);
}


setInterval(moveWinRight, intervalPlayer1);


function openLeftPeddle() {
    peddleLeft = window.open("", "peddleLeft", "width=50, height=150");
    peddleLeft.document.write('<img src="img/balk.jpg", "width=20, height=120">');
    peddleLeft.moveTo(0, 0);
    peddleLeft.focus();
}


var interval = 20;

function moveWinLeft() {
    Mousetrap.bind('up', function () {
        peddleLeft.moveTo(peddleLeft.screenX, (peddleLeft.screenX, peddleLeft.screenY - 100));
    });
    Mousetrap.bind('down', function () {
        peddleLeft.moveTo(peddleLeft.screenX, (peddleLeft.screenX, peddleLeft.screenY + 100));
    });

}


setInterval(moveWinLeft, intervalPlayer1);


function openWindows() {
    openBall();
    openRightPeddle();
    openLeftPeddle();
}