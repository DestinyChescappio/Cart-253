/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let barkSFX;

/**
Description of preload
*/
function preload() {
barkSFX = loadSound(`assets/sounds/bark.wav`);
}


/**
Description of setup
*/
function setup() {
createCanvas(600,600);
userStartAudio();
}


/**
Description of draw()
*/
function draw() {
background(0);

let newRate = map(mouseX,0,width,-3,3); //makes the dog bark at low or high voice when clicked but also continue barking as the mouse moves
barkSFX.rate(newRate);
}

function mousePressed() {
  barkSFX.play();
}
