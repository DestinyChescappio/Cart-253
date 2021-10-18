/**
age-of-aquariums
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let flyGang = [];
let flyGangSize = 10;

//setup of the swatter
let squasher = {
  x: undefined,
  y: undefined,
  size: 50,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
}

function setup() {
  createCanvas(600, 600);
//creating flies withflyGang arrays
for (let i = 0; i < flyGangSize; i++) {
let fish = createFlies(random(0,width), random(0,height));
flyGang.push(fish);
}
}



// Creates a new JavaScript Object describing a fly and returns it
function createFlies(x, y) {
  let flies = {
    x: x,
    y: y,
    h: 50,
    w: 25,
    size: 50,
    fill: 0,
    vx: 0,
    vy: 0,
    speed: 2
};
return flies;
}

function draw() {
  background(150);
//using arrays to move and display flies
for (let i = 0; i < flyGang.length; i++){
  moveFlies(flyGang[i]);
  //making fish display & move
  displayFlies(flyGang[i]);
}
//drawing and creating movement for squasher
fill(squasher.fill.r,squasher.fill.g,squasher.fill.b);
noStroke();
ellipse(squasher.x,squasher.y,squasher.size);
//swatter movement using mouse position
squasher.x = mouseX;
squasher.y = mouseY;
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFlies(flies) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
flies.vx = random(-flies.speed, flies.speed);
  flies.vy = random(-flies.speed, flies.speed);
  }

// Move the flies
flies.x = flies.x + flies.vx;
flies.y = flies.y + flies.vy;

  // Constrain the flies to the canvas
flies.x = constrain(flies.x, 0, width);
flies.y = constrain(flies.y, 0, height);
}

// Displays flies on the canvas
function displayFlies(flies) {
  push();
  fill(flies.fill);
  noStroke();
  ellipse(flies.x, flies.y, flies.h, flies.w, flies.size);
  pop();
}

function checkFlies() {
  //want to check if squasher overlaps flies
  if (!flies.squshed) {
    push();
    fill(flies.x,flies.y,flies.size);
    pop();
  }
}
