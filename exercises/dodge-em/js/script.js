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
  fill: {
    r: 200,
    g: 0,
    b: 200
  }
};


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
  // Circle following mouse X- moving from left to right
  if (mouseX < circle.x) {
    circle.vx = -1;
  }
  else {
    circle.vx = 1;
  }
if (mouseY < circle.y){
  circle.vy = -1;
}
else {
  circle.vy = 1;
}
  //velocity used to make circle go to right side horizontally
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;



//display circle
fill(circle.fill.r,circle.fill.g,circle.fill.b);
noStroke();
ellipse(circle.x,circle.y,circle.size);

}
