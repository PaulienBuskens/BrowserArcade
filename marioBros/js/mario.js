var mario;
var box;
var enemy;
var pipe;
var alert;
var interval = 20;
var steps = 7;


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

function moveMario() {
  var hitground = false;
  if (mario.screenY >= 570) {
    hitground = true;
    console.log("bottom");
  } else {
    mario.moveTo(mario.screenX, (mario.screenX, mario.screenY + steps));
    mario.resizeTo(80, 250);
    hitground = false;
    console.log('fall');
    while ((mario.screenX, mario.screenY) == (box.screenY, box.screenY)) {
      hitground = true;
    }
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

setInterval(moveMario, interval);

function openGame() {
  openMario();
  openBox();
}