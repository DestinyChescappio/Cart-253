/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let gravityForce = 0.0025;

let paddle;

let balls = [];
let numBalls = 3;
/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
noCursor();

paddle = new Paddle(300,20);

//making a forloop that counts up to numBalls
for (let i = 0; i < numBalls; i++) {
  let x = random(0,width);
  let y = random(-400,-100);
  let ball = new Ball(x,y);
  balls.push(ball);
  }
}

/**
Description of draw()
*/
function draw() {
background(0);

paddle.move();
paddle.display();

//forloop counting up to length of array
for (let i = 0; i < balls.length; i++) {
let ball = balls[i];
if (ball.active) {  //if the ball is active, the ball displays; but as soon as it drops, it's false
ball.gravity(gravityForce);
ball.move();
ball.bounce(paddle);
ball.display();
    }
  }
}
