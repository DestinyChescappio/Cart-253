/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let synth;

let notes = [`F4`,`G4`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F5`]; //making the notes in an F-minor
/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
  userStartAudio();

  synth = new p5.PolySynth();

  userStartAudio();
}


/**
Description of draw()
*/
function draw() {
  background(0);
}

function keyPressed() {
//playing a random note
let randomNote = random(notes);

//playing note(c4),how hard the key is hit (at full velocity)(1),
//no delay(0),how long it's played(1)
  synth.play(randomNote,1,0,0,25);
}
