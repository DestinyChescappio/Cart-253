/**
age-of-aquariums
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let flyGang = [];
let flyGangSize = 10;

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
  let wings
  };
}

function draw() {
  background(150);
//using arrays to move and display flies
for (let i = 0; i < flyGang.length; i++){
  moveFlies(flyGang[i]);
  //making fish display & move
  displayFlies(flyGang[i]);
}
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

  // Move the fish
flies.x = flies.x + flies.vx;
flies.y = flies.y + flies.vy;

  // Constrain the fish to the canvas
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

//now we have arrays, we can add fish by using an action like mouse pressed
function mousePressed(){
  let fish = createFish(mouseX,mouseY);
  flyGang.push(fish);
}
