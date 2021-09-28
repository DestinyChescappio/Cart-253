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
  x: 730,
  y:350,
  size:100,
  vx: 1,
  vy: 0
};


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

}


/**
Description of draw()
*/
function draw() {
  background('#fae');

  //velocity used to make circle go to right side horizontally
  circle.x = circle.x + circle.vx;
  circle.y + circle.y + circle.vy;



  //draw circle
ellipse(circle.x,circle.y,circle.size);
noStroke();

}
