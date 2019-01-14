var mario;
var marioBig;
var box;
var enemy;
var pipe;
var alert;
var interval = 20;
var intervalBox = 10;
var steps = 7;
var hitground = false;
var smaller;
var endgame;
var won;

function openMario() {
  mario = window.open("", "mario", "width=80, height=250");
  mario.document.write('<img src="img/mario.png", "width=60, height=240">');
  mario.moveTo(0, 800);
  mario.focus();
}

function openBox() {
  box = window.open("", "box", "width=160, height=160");
  box.document.write('<img src="img/mario_box.jpg", "width=120, height=120">');
  box.moveTo(600, 400);
  box.focus();
}

function openEnemy() {
  enemy = window.open("", "enemy", "width=160, height=160");
  enemy.document.write('<img src="img/mario_enemy.png", "width=120, height=120">');
  enemy.moveTo(1400, 570);
  enemy.focus();
}

function moveMario() {

  if (mario.screenY >= 570) {
    hitground = true;
    console.log("bottom");
  } else {
    mario.moveTo(mario.screenX, (mario.screenX, mario.screenY + steps));
    mario.resizeTo(80, 250);
    hitground = false;
    console.log('fall');

  }

  if (hitground) {
    Mousetrap.bind("up", function () {
      mario.moveTo(mario.screenX, (mario.screenX, mario.screenY - 100));
    });
    Mousetrap.bind('right', function () {
      mario.moveTo(mario.screenX + 100, mario.screenY);
    });
    Mousetrap.bind('left', function () {
      mario.moveTo(mario.screenX - 100, mario.screenY);
    });
  }
}

function smaller() {
  smaller = setTimeout(smallFunc, 5000);
}

function smallFunc() {
  mario.close();
  mario = window.open("", "mario", "width=80, height=250");
  mario.document.write('<img src="img/mario.png", "width=60, height=240">');
  mario.moveTo(600, 400);
}

function hitBox() {

  if ((mario.screenX, mario.screenY) == (box.screenX, box.screenY)) {
    mario.close();
    box.close();
    mario = window.open("", "mario", "width=80, height=400");
    mario.document.write('<img src="img/mario.png", "width=80, height=300">');
    mario.moveTo(600, 400);
    console.log("box");
    smaller();

  }

}

function hitEnemy() {
  if ((mario.screenX, mario.screenY) == (enemy.screenX, enemy.screenY)) {
    mario.close();
    enemy.close();
    box.close();
    endgame = window.open("", "endgame", "width=80, height=50");
    endgame.document.write('<h2>Your Dead</h2>');
    endgame.moveTo(600, 300);
    endgame.focus();
  }
}

function wingame(){
  if((mario.screenX) == (1300)){
    won = window.open("", "won", "width=80, height=50");
    won.document.write('<h2>Your won</h2>');
    won.moveTo(600, 300);
    won.focus();
    mario.close();
    box.close();
    enemy.close();
  }
}

function moveEnemy() {
  enemy.moveTo(enemy.screenX - 2, enemy.screenY);
  enemy.resizeTo(160, 160);
}

setInterval(hitEnemy, interval);
setInterval(hitBox, intervalBox);
setInterval(moveMario, interval);
setInterval(moveEnemy, interval);
setInterval(wingame,interval);

function openGame() {
  openBox();
  openEnemy();
  openMario();

}