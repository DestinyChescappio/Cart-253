/**
p1: Catch the UFOs!
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Image display of galaxy
*/

function preload() {
  galaxyImage = loadImage('assets/images/galaxy.jpeg');
}

let blackhole = {
  x: 450,
  y: 450,
  size: 100,
  fill:0
}

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
background(157); //for now bg

  move();
  display(ufo1);

//Ufo1 movement setup
  ufo1.x = ufo1.x + ufo1.speed;
  ufo1window.x = ufo1window.x + ufo1window.speed;

//if the ufo1.x exceeds the width of canvas and return to the left side
function move(){
if(ufo1.x > width) {
    ufo1.speed = -ufo1.speed;
  }
if(ufo1window.x > width) {
    ufo1window.speed = -ufo1window.speed;
  }
}

//ufo1 drawing using the green structure & ufo window
function display() {
  //displaying ufo1 green structure
  push();
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(3);
  fill(ufo1.fill.r,ufo1.fill.g,ufo1.fill.b);
  ellipse(ufo1.x,ufo1.y,ufo1.w,ufo1.h);
  //display the ufo1 flashing window
  ufo1window.fill = random(0,255);
  fill(ufo1window.fill);
  ellipse(ufo1window.x,ufo1window.y,ufo1window.w,ufo1window.h);
  pop();
}







//displaying blackhole
fill(blackhole.fill);
ellipse(blackhole.x,blackhole.y,blackhole.size);









}
