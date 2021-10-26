/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let state =  `title`;

let gravityForce = 0.0025;

let paddle;

let chainsaws = [];
let numChainsaw = 5;

let numBounces = 0;


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
noCursor();

//title = new TitlePage();

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
background(0);

//title.DrawTitleText();

paddle.move();
paddle.display();

//forloop counting up to length of array
for (let i = 0; i < chainsaws.length; i++) {
  let chainsaw = chainsaws[i];
  if (chainsaw.active) { //chainsaw is active, if dropped,they are not 'active'
    chainsaw.gravity(gravityForce);
    chainsaw.move();
    let bounced = chainsaw.bounce(paddle);
    if (bounced) {
      numBounces++;
    }
    chainsaw.display();
    chainsaw.checkOffScreen();
    }
  }
  //console.log(numBounces);
  //forloop foe ending
  for (let i = 0; i < chainsaws.length; i++) {
    let chainsaw = chainsaws[i];
    //if chainsaw is active, loop will stop (breaks)
    if (chainsaw.active) {
      console.log(`break`);
      break;
    }
    //state = `ending`;
    console.log(`endingstate`);
  }
}
