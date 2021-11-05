/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let mic;
let ghost = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  image: undefined
};

function preload() {
  ghost.image = loadimage(`assets/images/clown.png`);
}
/**
Description of setup
*/
function setup() {
  createCanvas(600,600);

  ghost.x = width/2;
  ghost.y = height/2;

  mic = new p5.AudioIn();
  mic.start();
}

/**
Description of draw()
*/
function draw() {
  background(0);

  let level = mic.getLevel();

  push();
  imageMode(CENTER);
  tint(255,50);
  image(ghost.image,ghost.x,ghost.y);
  pop();
}
