//generate window

var ball;

function openWin() {
    ball = window.open("", "ball", "width=120, height=125");
    ball.document.write('<img src="img/Soccer_ball.png", "width=120, height=120">');
}

