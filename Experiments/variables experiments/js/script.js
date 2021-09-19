"use strict";

/**************************************************
Variables 1.0
Destiny Chescappio

Intro to variables: creating & changing
**************************************************/
let backgroundShade = 0;
let circleX = 250;
let circleY = 0;
let circleSize = 200;
let circleAcceleration = 0.25;
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
background(backgroundShade);
circleX += circlespeed;
circleSpeed += circleAcceleration;
ellipse(circleX,circleY,circleSize);

}
