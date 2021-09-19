"use strict";

/**************************************************
Variables 1.0
Destiny Chescappio

Intro to variables: creating & changing
**************************************************/
let backgroundShade = 0;
let circleX = 0;
let circleY = -1;
let circleSize = 200
// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(windowWidth,windowHeight);
circleSize=200;
}

// draw()
//
// Description of draw() goes here.
function draw() {
background(0);
backgroundShade = backgroundShade + 1;
backgroundShade;
circleSize = circleSize * 1.01;
ellipse(circleX,circleY,circleSize);

}
