/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let oscillator;
/**
Description of setup
*/
function setup() {
createCanvas(600,600);
userStartAudio();

oscillator = new p5.Oscillator(220,`sine`);
}

/**
Description of draw()
*/
function draw() {
background(0);
//when my mouse is at the bottom, the sound is at 0 hertz; top is at 880 hertz
let newFreq = map(mouseY,height,0,0,880);
oscillator.freq(newFreq);

let newAmp = map(mouseX,0,width,0,1);
oscillator.amp(newAmp);
}

function mousePressed() {
oscillator.start();
}

function mouseReleased() {
  oscillator.stop();
}
