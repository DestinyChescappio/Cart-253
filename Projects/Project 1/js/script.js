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
  x: 500,
  y: 500,
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
let ufo2 = {
x: 600,
y: 200,
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
let ufo2window = {
  x: 600,
  y: 195,
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

imageMode(CENTER);
image(galaxyImage,width / 2, height /2);

display(ufo1);
display(ufo1window);
display(ufo2);
display(ufo2window);

  //move();
  //display(ufo1);
  //display(ufo2);

//Ufo1 movement setup
  ufo1.x = ufo1.x + ufo1.speed;
  ufo1window.x = ufo1window.x + ufo1window.speed;

//if the ufo1.x exceeds the width of canvas and return to the left side
//ufo1 going back and forth (starting LEFT side)
if(ufo1.x > width) {
    ufo1.speed = -ufo1.speed;
  }
if(ufo1window.x > width) {
    ufo1window.speed = -ufo1window.speed;
  }

//ufo2 movement setup
ufo2.x = ufo2.x + ufo2.speed;
ufo2window.x = ufo2window.x + ufo2window.speed;
//ufo2 going back and forth (starting RIGHT side)
if(ufo2.x > width) {
    ufo2.speed = -ufo2.speed;
  }
if(ufo2window.x > width) {
    ufo2window.speed = -ufo2window.speed;
}


//ufo1 drawing using the green structure & ufo window
function display(ufo) {
  //displaying ufo1 green structure
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(3);
  fill(ufo.fill.r,ufo.fill.g,ufo.fill.b);
  ellipse(ufo.x,ufo.y,ufo.w,ufo.h);
}
  //display the ufo1 flashing window
function display(ufowindow){
  ufowindow.fill = random(0,255);
  fill(ufowindow.fill);
  ellipse(ufowindow.x,ufowindow.y,ufowindow.w,ufowindow.h);


}
//ufo2 display








//displaying blackhole
fill(blackhole.fill);
ellipse(blackhole.x,blackhole.y,blackhole.size);









}
