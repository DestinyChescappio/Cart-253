/**
p1: Catch the UFOs!
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Description of preload
*/
let ufo1 = {
x: 0,
y: 300,
w: 60,
h: 15,
speed: 1,
stroke: 'rgba(100%,0%,100%,0.5)',
strokeWeight: 3,
fill: {
  r: 0,
  g: 255,
  b: 0
  }
}
let ufo1window = {
  x: 0,
  y: 295,
  w: 20,
  h: 13,
speed: 1,
  fill: 0
}



//function preload() {

//}


/**
Description of setup
*/
function setup() {
  createCanvas(600,600);


}


/**
Description of draw()
*/
function draw() {
  background(0);
  ufo1.x = ufo1.x + ufo1.speed;
  ufo1window.x = ufo1window.x + ufo1window.speed;
////Displaying ufo1
//displaying ufo1 green structure
stroke('rgba(100%,0%,100%,0.5)');
strokeWeight(3);
fill(ufo1.fill.r,ufo1.fill.g,ufo1.fill.b);
ellipse(ufo1.x,ufo1.y,ufo1.w,ufo1.h);
//display the ufo1 flashing window
ufo1window.fill = random(0,255);
fill(ufo1window.fill);
ellipse(ufo1window.x,ufo1window.y,ufo1window.w,ufo1window.h);


}
