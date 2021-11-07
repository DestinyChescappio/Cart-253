/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//the balls
let balls = [];


/**
creates canvas
*/
function setup() {
 createCanvas(600,600);
}


/**
Description of draw()
*/
function draw() {
background(0);

for (let i = 0; i < balls.length; i++){
  let ball = ball[];
  ball.move();
  ball.bounce();
  ball.display();
}

}
