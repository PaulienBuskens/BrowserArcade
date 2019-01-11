var ball;
var peddle;
var field;


function openbackground() {
    field = window.open("", "field", "width=1250, height=1000");
    field.document.write('<img src="img/Field.jpg", "width=1000, height=800">');
    field.moveTo(0,0);
    field.focus();
  
  }

function openWin() {
  ball = window.open("", "ball", "width=150, height=150");
  ball.document.write('<img src="img/Soccer_ball.png", "width=120, height=120">');
  ball.moveTo(600,300);
  ball.focus();

}

function openWin2(){
    peddle = window.open("", "peddle", "width=30, height=150");
    peddle.document.write('<img src="img/balk.jpg", "width=120, height=120">');
    peddle.moveTo(0,0);
    peddle.focus();
}

function openField(){
    openbackground();
    openWin();
    openWin2();
}