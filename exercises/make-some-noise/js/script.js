/**
E6: Sing for snowbells!
by Destiny

control the snowman by singing (or talking loud) and collect the falling snowballs
to keep the christmas spirit music alive! 
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
  userStartAudio();
  createCanvas(windowWidth, windowHeight);

  // Create our AudioIn object
   mic = new p5.AudioIn();
   // Try to connect to the user's microphone
   mic.start();

  //making forloop of snowballs
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

  //drawing the Snowman
  snowMan.move(level);
  snowMan.display();

  //drawing the array of snowballs
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

//when snowball touches snowman, the 'ting!!' sound triggers
let currentRate = random(0.3,0.5);
      //currentRate = constrain(currentRate, 0.01, 4);
      tingSFX.rate(currentRate);
      tingSFX.play();
    }
  }
}
