var bottom = 0;
var left = 0;

var steps = 10;
var interval = 20;

var el = $('.box');

var maxBottom = $(window).height();
var maxLeft = $(window).width();
maxLeft -= 50;
maxBottom -= 50;

function moveDiv(){
    if(bottom < maxBottom){
        el.css('bottom', bottom+=steps);
    } 
}

setInterval(moveDiv,interval);
