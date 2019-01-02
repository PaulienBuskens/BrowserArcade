var ball;

function openWin() {
    ball = window.open("", "ball", "width=120, height=125");
    ball.document.write('<img src="img/Soccer_ball.png", "width=120, height=120">');
}

var bottom = 0;
var left = 0;

var steps = 10;
var interval = 20;

var maxBottom = $(window).height();
var maxLeft = $(window).width();
maxLeft -= 50;
maxBottom -= 50;

function moveDiv(){
    if(bottom < maxBottom){
        ball.moveTo(ball.screenX, (ball.screenX, ball.screenY + steps));
    } 
    if(left < maxLeft){
        ball.moveTo(ball.screenX + steps, ball.screenY);
    }
    ball.resizeTo(120,200);
}

setInterval(moveDiv,interval);