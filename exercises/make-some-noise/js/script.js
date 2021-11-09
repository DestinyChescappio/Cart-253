/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//the flash balls
let flashBalls = [];

//F-minor;array of notes
let notes = [`F3`,`G3`,`Ab4`,`Bb4`,`C4`,`Db4`,`Eb4`,`F4`];

/**
creates canvas & calls the user audio
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
//forloop for balls
for (let i = 0; i < flashBalls.length; i++){
  let flashBall = flashBalls[i];
  flashBall.move();
  flashBall.bounce();
  flashBall.display();
}
}
//ball is created when mouse is pressed
function mousePressed(){
  createFlashBall(mouseX,mouseY);
}

//everytime the new flash ball is called, the ball is put in the array
function createFlashBall(x,y){
//ea. time a flash ball is created at a random x & y, it plays a note from the array
  let note = random(notes);
  let flashBall = new FlashBall(x,y,note);
  flashBalls.push(flashBall);
}
