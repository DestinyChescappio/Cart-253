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
//synthax error: if we are missing both parenthesis '()' it will not work
//in javaScript developer, it will show "unexpected identifier" because it always expects to see and opening parenthesis
//the next thing the js developer it sees here is actually mouseX (that's unexpected) and an error.

//we might also forget to close the parenthesis around our conditional so it will say: unexpected toke '{'
//when we forget to open the curly brackets, it will say: unexpected token 'else'
//this means the line our 'else' is on, which is not the problem, so we would need to move upward to see the problem

//another error we can accidently write a condition that is always true (when we don't want that)
//take this for example (our circle is always red because we wrote a condition that CAN'T be false)
  if (mouseX >= 0){  //we CANNOT move the mouse so that mouseX is less than 0
                    //and so the 'else' of the 'if' statement can NEVER happen
    fill(255,0,0);
  }
  else {
    fill(0,255,0);
  }
  ellipse(circle.x,circle.y,circle.size);

}
