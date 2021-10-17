/**
fortune teller
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//arrays of fortunes
let fortunes = [
  `it's not looking so good.`,
  `you will trip over Bradd Pitt today.`,
  `you are going to enjoy gum.`,
  `happiness is yours for the taking.`,
  `you will meet David Lynch.`
];

let chosenFortune = `click to see your future!`;
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
  text(chosenFortune,width/2,height/2);
}

function mousePressed(){
  chosenFortune = random(fortunes); //<-- going to choose a random fortune from the arrays

}
