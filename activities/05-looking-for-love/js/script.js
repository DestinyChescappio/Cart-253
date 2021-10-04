/**
A5: Looking for Love
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
function preload() {

}
let circle1 {
  x: undefined,
  y: 167,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
}
let circle2 = {
  x: undefined,
  y: 334,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5
}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  setupCircles();
}
function setupCircle() {
  //position circles separated from one another
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

//start moving circles in random direction
circle1.vx = random(-circle1.speed,circle1.speed);
circle1.vy = random(-circle1.speed,circle1.speed);
circle2.vx = random(-circle2.speed,circle2.speed);
circle2.vy = random(-circle2.speed,circle2.speed);
}



}
