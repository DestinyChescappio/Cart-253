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
  x: 0,
  y:350,
  size:100,
  vx: 0,
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
  // if mouseX is less than the circle X position, mouse positioned to left side
  if (mouseX < circle.x){
    circle.vx = -1;
  }
  //otherwise, the mouse x position goes to right side 
  else {
    circle.vx = 1;
  }
  //velocity used to make circle go to right side horizontally
  circle.x = circle.x + circle.vx;
  circle.y + circle.y + circle.vy;



  //draw circle
ellipse(circle.x,circle.y,circle.size);
noStroke();

}
