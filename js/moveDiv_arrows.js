var bottom = 0;
var left = 0;

// Settings
var steps = 10;
var interval = 20;
var debug = true;

// Elements
var el = $('.box');

var maxBottom = $(window).height();
var maxLeft = $(window).width();
maxLeft -= 50;
maxBottom -= 50;

function moveDiv() {
  if (debug) {
    el.html('L: ' + left + 'px<br>B: ' + bottom + 'px');
    
  } else if ($('#debug').not(':checked')) {
    el.html('');
    
  }
  Mousetrap.bind('up', function() {    
    if (bottom < maxBottom) {el.css('bottom', bottom+=steps);}
  });
  Mousetrap.bind('down', function() {
    if (bottom > 0) {el.css('bottom', bottom-=steps);}
  });
  Mousetrap.bind('left', function() {
    if (left > 0) {el.css('left', left-=steps);}
  });
  Mousetrap.bind('right', function() {
    if (left < maxLeft) {el.css('left', left+=steps);}
  });
  Mousetrap.bind('shift', function() {
    $('.help').fadeOut('slow');
    if (debug)
      debug = false;
    else
      debug = true;
  });
}

setInterval(moveDiv, interval);