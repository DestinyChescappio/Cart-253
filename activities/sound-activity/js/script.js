/**
Musical Toy
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//the balls
let balls = [];

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

for (let i = 0; i < balls.length; i++){
  let ball = balls[i];
  ball.move();
  ball.bounce();
  ball.display();
}
}
//ball is created when mouse is pressed
function mousePressed(){
  createBall(mouseX,mouseY);
}

//everytime the new ball is called, the ball is put in the array
function createBall(x,y){
//ea. time a ball is created at a random x & y, it plays a note from the array
  let note = random(notes);
  let ball = new Ball(x,y,note);
  balls.push(ball);
}
