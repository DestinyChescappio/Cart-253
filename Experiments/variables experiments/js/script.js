"use strict";

/**************************************************
Variables 1.0
Destiny Chescappio

Intro to variables: creating & changing
**************************************************/
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2;

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
circleX += circleSpeed;
ellipse(circleX, circleY, circleSize);

}
