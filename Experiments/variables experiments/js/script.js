"use strict";

/**************************************************
Variables 1.0
Destiny Chescappio

Intro to variables: creating & changing
**************************************************/
let backgroundShade = 0;


let circle = {
  x: 250,
  y: 0,
  size: 100,
  speed: 1,
  fill: 0

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
circle.speed = random(-5,5);
circle.fill = random(0,255);
ellipse(circle.x, circle.y, circle.size);
fill(circle.fill);



}
