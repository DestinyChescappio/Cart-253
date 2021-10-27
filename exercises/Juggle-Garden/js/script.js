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
let numChainsaw = 3;

let numBounces = 0;


/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
noCursor();

//calling the class Paddle
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
//displaying what happens from the title, to simulation,losing and winning page
if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `losing`) {
    lost();
  } else if (state === `winner`) {
    winning();
  }
  if (state === `title`) {
    title();
  }
}
//setup of title page
function title() {
  fill(255,0,0);
  textFont(`krungthep`);
  textStyle(BOLD);
  textSize(100);
  textAlign(CENTER,CENTER);
  text(`Juggle the chainsaws!`, width/2,height/2);

  //simulation mission description for user
  fill(255);
  textFont(`arial`);
  textStyle(NORMAL);
  textSize(50);
  textAlign(CENTER,CENTER);
  text(`You must bounce five chainsaw with your paddle, any less, you're finished`,width/2,height/2+100);

  //Instructions to start simulation
  fill(255);
  textFont(`arial`);
  textStyle(NORMAL);
  textSize(50);
  textAlign(CENTER,CENTER);
  text(`Use LEFT & RIGHT ARROW KEYS to move your paddle`,width/2,height/2+200);
}

//what happens in the simulation
function simulation() {

  //paddle movement & display calls
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
  //displaying chainsaw. Checking if chainsaw is off the screen;
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
        break;
    }
  }
}


function lost() {
  fill(255,0,0);
  textFont(`krungthep`);
  textSize(100);
  text(`Ouch! That's gotta hurt😣`)
}

//setup for winning page
function winning() {
  fill(0,255,0);
  textFont(`krungthep`);
  textSize(100);
  text(`You didn't saw your fingers off! Great job😁`,width/2,height/2);
}
