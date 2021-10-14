/**
The Love triangle
Destiny Chescappio

Your are in a love triangle. catch your lover before the other one does!
*/

"use strict";

/**
Description of preload
*/
function preload() {

}
let circle1 = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2

};

let circle2 = {
  x: undefined,
  y: undefined,
  size: 100,
};

let circle3 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3
}

let state = `title`; //can be: title, simulation, love, sadness


/**
creating the canvas
*/
function setup() {
  createCanvas(500, 500);

}
//drawing what state happens next; the story
function draw() {
  background(0);
  push();
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `The one who got away :(`) {
    single4Life();
  } else if (state === `love at last <3`) {
    foundLove();
  }
  pop();
}

function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`The Love triangle`, width / 2, height / 2);
  pop();
}

function simulation() {
  display(circle1);
  display(circle2);
  display(circle3);
  circleSetup(circle1);
  circleSetup(circle2);
  circleSetup(circle3);
  specialMovement(circle1);
  specialMovement(circle3);
  happyEnding();
  theOtherLover();
}

function single4Life() {
  textSize(25);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`The one who got away :(`, width / 2, height / 2);
}

function foundLove() {
  textSize(30);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`love at last <3`, width / 2, height / 2);
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function circleSetup() {
  //circle1 display movement setup
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  //circle2 following mouse
  circle2.x = mouseX;
  circle2.y = mouseY;

  //circle3 display movement setup
  circle3.x = circle3.x + circle3.vx;
  circle3.y = circle3.y + circle3.vy;
}

function specialMovement() {
  //circle 1 movement at random places
  //start changing circle1 velocity "less often" to make it more stable:
  //telling circle1 to change direction randomly only 1% of the time
  let change = random(); //generating random number between 0 and 1
  if (change < 0.01) {
    //choose random velocities within the "speed limit"
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
  }
  //circle 3 moving at from left
  circle3.x = circle3.x + circle3.speed;
}

function theOtherLover() {
  //check if circles overlap
  let d = dist(circle1.x, circle1.y, circle3.x, circle3.y);
  //if circles are touching, the state 'the one who got away' state occurs
  if (d < circle1.size / 2 + circle3.size / 2) {
    state = `The one who got away :(`;
  }
}

function happyEnding() {
  //check if circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  //if circles are touching
  if (d < circle1.size / 2 + circle2.size / 2) {
    state = `love at last <3`;
  }
}

function display() {
  //displaying ALL circles as ellipses
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
  ellipse(circle3.x, circle3.y, circle3.size);
}
