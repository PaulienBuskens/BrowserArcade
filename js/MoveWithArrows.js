//generate window

var ball;

function openWin() {
    ball = window.open("", "ball", "width=120, height=125");
    ball.document.write('<img src="img/Soccer_ball.png", "width=120, height=120">');
}

//move window

var interval = 20;

function moveWin() {
    Mousetrap.bind('up', function () {
        ball.moveTo(ball.screenX, (ball.screenX, ball.screenY - 100));
    });
    Mousetrap.bind('down', function () {
        ball.moveTo(ball.screenX, (ball.screenX, ball.screenY + 100));
    });
    Mousetrap.bind('left', function () {
        ball.moveTo(ball.screenX - 100, ball.screenY);
    });
    Mousetrap.bind('right', function () {
        ball.moveTo(ball.screenX + 100, ball.screenY);
    });
}


setInterval(moveWin, interval);