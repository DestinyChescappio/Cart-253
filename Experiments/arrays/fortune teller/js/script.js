/**
fortune teller
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//arrays of soliloquy --> the order of speech
let soliloquy = [
`to be or not to be`,
`that is the question`,
`whether 'tis nobler in the mind`,
`to suffer the slings and arrows`,
`of outrageous fortune`,
`or to take arms`,
`against a sea of sorrows`,
`and by opposing end them`
];
//keeping track of which we want to do something with--> what we wanna display first (starting at 0)
let currentIndex = 0;

/**
Description of setup
*/
function setup() {
createCanvas(600,600);
textAlign(CENTER,CENTER);
textSize(32);
fill(255);
}


/**
Description of draw()
*/
function draw() {
  background(0);
  text(soliloquy[currentIndex],width/2,height/2);
}

function mousePressed(){
currentIndex = currentIndex + 1;

//when to know we reach the end
if (currentIndex === soliloquy.length){
  currentIndex = soliloquy.length - 1;
}
}
