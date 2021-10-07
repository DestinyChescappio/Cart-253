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
vx: 1,
vy: 0,
stroke: 'rgba(100%,0%,100%,0.5)',
strokeWeight: 3,
fill: {
  r: 0,
  g: 255,
  b: 0
  }
}

let ufo2 = {
x: 600,
y: 200,
w: 60,
h: 15,
vx: -1,
vy: 0,
stroke: 'rgba(100%,0%,100%,0.5)',
strokeWeight: 3,
fill: {
  r: 0,
  g: 255,
  b: 0
  }
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
display(ufo2);

movement(ufo1);
movement(ufo2);

bounce(ufo1);
bounce(ufo2);

//displaying blackhole
fill(blackhole.fill);
ellipse(blackhole.x,blackhole.y,blackhole.size);

}
function movement(ufo){
//Ufo movement setup
ufo.x = ufo.x + ufo.vx;
ufo.y = ufo.y + ufo.vy;
}

//ufo drawing using the green structure & ufo window
function display(ufo) {
  //ufo green structure
stroke('rgba(100%,0%,100%,0.5)');
strokeWeight(3);
fill(ufo.fill.r,ufo.fill.g,ufo.fill.b);
ellipse(ufo.x,ufo.y,ufo.w,ufo.h);
//window
fill(random(0,255));
ellipse(ufo.x,ufo.y - 5, 20, 13);
}

function bounce(ufo) {
//ufo starting at LEFT side going to RIGHT side
if(ufo1.x > width || ufo1.x < 0) {
ufo1.vx = -ufo1.vx;
  }
//ufo starting at RIGHT side going to LEFT side
if(ufo2.x > width || ufo2.x < 0) {
ufo2.vx = -ufo2.vx;
    }
}
