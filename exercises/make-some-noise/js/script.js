/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let level;

let mic;

let tingSFX = undefined;

let fireBalls = [];
let numFireBall = 5;

let snowBalls = [];
let numSnowBall = 5;

let snowMan;

function preload() {
  tingSFX = loadSound(`assets/sounds/ting.wav`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create our AudioIn object
   mic = new p5.AudioIn();
   // Try to connect to the user's microphone
   mic.start();

  //making forloop of cars
  for (let i = 0; i < numSnowBall; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let snowBall = new SnowBall(x, y);
    snowBalls.push(snowBall);
  }

  //making forloop of fire balls
  for (let i = 0; i < numFireBall; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fireBall = new FireBall(x, y);
    fireBalls.push(fireBall);
  }

  //calling the snowman
  snowMan = new Snowman();
}

/**
Description of draw()
*/
function draw() {
  background(155);

  level = mic.getLevel();

  //let currentRate = map(mouseY, 0.1, height, 2, 0);
  //currentRate = constrain(currentRate, 0.01, 4);
  //tingSFX.rate(currentRate);

  //drawing the Snowman
  snowMan.move(level);
  snowMan.display();

  //drawing the array of cars
  for (let i = 0; i < snowBalls.length; i++) {
    let snowBall = snowBalls[i];
    snowBall.move();
    snowBall.wrap();
    snowBall.display();

    //collecting the snowballs
    checkSnowball(snowBall, snowMan);
  }
  //drawing the array of fire balls
  for (let i = 0; i < fireBalls.length; i++) {
    let fireBall = fireBalls[i];
    fireBall.move();
    fireBall.wrap();
    fireBall.display();
  }
}

//check if the snowman overlaps the snowball object
function checkSnowball(snowBall, snowMan) {
  //check to overlapp if snowball hasn't been collected yet
  if (!snowBall.collected) {
    let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
    //if the snowballs overlap snowman it is collected
    if (d < snowMan.size / 2 + snowBall.size / 2) {
      snowBall.collected = true;
      console.log(`snowball collected`);
      //once it's collected
      //if (!tingSFX.isPlaying()) {

      let currentRate = random(0.3,0.5);
      //currentRate = constrain(currentRate, 0.01, 4);
      tingSFX.rate(currentRate);

        tingSFX.play();
        console.log(`sounds is playing`);
      //}
    }
  }
}
