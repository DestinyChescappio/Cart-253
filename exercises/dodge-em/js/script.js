/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


/**
Description of preload
*/
function preload() {

}
//a circle object
let circle = {
  x: 300,
  y:300,
  size:100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.25,
  maxSpeed: 5,
  fill: {
    r: 150,
    g: 0,
    b: 100
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
  background('#fae');
  // Circle following mouse on both X & Y axis
  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  }
  else {
    circle.ax = circle.acceleration;
  }
if (mouseY < circle.y){
  circle.ay = -circle.acceleration;
}
else {
  circle.ay = circle.acceleration;
}

//setting velocity through acceleration & constraining velocity from reaching max speed
circle.vx = circle.vx + circle.ax;
circle.vx = constrain(circle.vx,-circle.maxSpeed,circle.maxSpeed);

circle.vy = circle.vy + circle.ay;
circle.vy = constrain(circle.vy,-circle.maxSpeed,circle.maxSpeed);



//velocity used to make circle go to right side horizontally
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;




//display circle
fill(circle.fill.r,circle.fill.g,circle.fill.b);
noStroke();
ellipse(circle.x,circle.y,circle.size);

}
