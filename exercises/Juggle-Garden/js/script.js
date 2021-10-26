/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let paddle;

let chainsaws = [];
let numChainsaw = 10;


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
noCursor();

paddle = new Paddle(300,20);

//making a forloop that counts the numChainsaw
for (let i = 0; i < numChainsaw; i++) {
  let x = random(0,width);
  let y = random(-400,-100);
  let chainsaw = new Chainsaw(x,y);
  chainsaws.push(chainsaw);
}
}


/**
Description of draw()
*/
function draw() {

}
