/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let rectangle = {
  x: 0,
  y: undefined,
  speed: 50,
  size: 50,
  speed: 10,
  yAngle: 0,
};


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
  rectangle.y = height / 2;

//windowWidth,windowheight with variables- set 'let.... y:undefined' then below createcanvas, type 'rectangle.y = height / 2;'
 background(0);


/**
Description of draw()
*/
function draw() {

  norfill();
  stroke(255);
  rectMode(CENTER);
  rect(rectangle.x,rectangle.y,rectangle.size,rectangle.size); //drawing the shape

  rectangle.x,rectangle.y,rectangle.size,rectangle.speed); //x is for 0
  // to make it move up and down, use y
  //to make it move diagonal, use y and x values at the same time

  //to constrain the rectangle to the width of the canvas:
  rectangle.x = constrain(rectangle.x,0,width);

  let ychange = sin(rectangle.yAngle) * 10;
  rectangle.y = rectangle.y + yChange;

  rectangle.yAngle += 0.1;


}
