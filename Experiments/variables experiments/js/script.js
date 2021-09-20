"use strict";

/**************************************************
Variables 1.0
Destiny Chescappio

Intro to variables: creating & changing
**************************************************/
let backgroundShade = 0;


let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255

}

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(backgroundShade);

circle.x = circle.x + circle.speed;

fill(circle.fill);
ellipse(circle.x, circle.y, circle.size);




}
