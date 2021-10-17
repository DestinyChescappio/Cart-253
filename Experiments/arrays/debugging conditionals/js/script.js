/**
Debug conditionals exercise
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//program that changes a circle's color based on the mouse position
let circle = {
  x: 250,
  y: 250,
  size: 100,
};
/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

}

/**
Description of draw()
*/
function draw() {
  background(0);

  if (mouseX < width/2){
    fill(0,255,0);
  }
  ellipse(circle.x,circle.y,circle.size);

}
