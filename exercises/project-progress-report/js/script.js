/**
Keep Mr. Snowman Alive!
Destiny Chescappio

Move the snowman with keys and collect snowballs! snowman shrinks if snowballs
are not collected and when it moves. Snowman dies and melts away if it touches a fireball
*/

"use strict";
//fire image (used for the fireballs)
let fireBallImage = undefined;

//sound is used when the snowball and snowman touches
let tingSFX = undefined;

//the user's object
let snowMan;

//the array of snowballs are collected
let snowBalls = [];
//how many snowballs
let numSnowBall = 10;
//how many snowballs are collected; (text will be shown on the top right corner of the game online)
let numSnowballCollected = 0;

//the array of fireballs falling
let fireBalls = [];
//how many fireballs
let numFireBall = 10;

//Loading:
//the fire.png image to use for the fireballs
//the sound used when a snowball is collected
function preload() {
  //fireball image
  fireBallImage = loadImage(`assets/images/fire.png`);
  //ting! sound when snowman touches snowball
  tingSFX = loadSound(`assets/sounds/ting.wav`);
}

//canvas & loops/calling snowman & fireballs,snowballs
function setup() {
  createCanvas(windowWidth, windowHeight);

  //calling the snowman
  snowMan = new Snowman();

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
    let fireBall = new FireBall(x, y, fireBallImage);
    fireBalls.push(fireBall);
  }
}

/**
Drawing:
- the functions of the text "number of snowballs collected"
- snowman inheritance object
- forloop and array of snowballs & fireballs
- the functions of growing the snowMan and collecting the snowballs
*/
function draw() {
  background(155);

  //displaying how many snowballs are collected
  numberOfSnowballCollected();

  //drawing the Snowman inheritance object from snowman.js file
  snowMan.move();
  snowMan.display();
  snowMan.sizingMovement();

  //drawing the array of snowballs
  for (let i = 0; i < snowBalls.length; i++) {
    let snowBall = snowBalls[i];
    //calling methods- move,wrap,display
    snowBall.move();
    snowBall.wrap();
    snowBall.display();

    //calling the function 'growSnowman' - snowman grows when snowball touches him
    growSnowman(snowBall, snowMan);

    //calling the function 'snowballCollection'- collecting the snowballs
    snowballCollection(snowBall, snowMan);
  }

  //drawing the array of fire balls using a forloop
  for (let i = 0; i < fireBalls.length; i++) {
    let fireBall = fireBalls[i];
    // calling methods- move, wrap, display
    fireBall.move();
    fireBall.wrap();
    fireBall.display();

    //calling the function 'meltSnowman' - snowman shrinks when fireball touches him
    meltSnowman(fireBall, snowMan);
  }
}

//drawing a text that notifies the user how many snowballs are collected
//text located at top right corner of canvas
function numberOfSnowballCollected() {
  push();
  fill(0);
  textSize(15);
  text(`Snowballs collected: ${numSnowballCollected}`, 1250, 60);
  pop();
}

//snowman grows when he touches snowball
function growSnowman(snowBall, snowMan) {
  //if both snowball and snowman touches
  let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
  //snowman size grows
  if (!snowBall.collected && d < snowMan.size / 2 + snowBall.size / 2) {
    snowMan.size += 20;
    //constraining snowman size when it grows and stops at 500 px
    snowMan.size = constrain(snowMan.size, 0, 500);
  }
}

//snowball gets collected by snowman
function snowballCollection(snowBall, snowMan) {
  //check to overlapp if snowball hasn't been collected yet
  if (!snowBall.collected) {
    let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
    //snowball collects snowball & snowball disappears
    if (d < snowMan.size / 2 + snowBall.size / 2) {
      snowBall.collected = true;
      //keeping track of how many snowballs were collected
      numSnowballCollected += 1;

      //when snowball touches snowman, the 'ting!' sound triggers with its random rates
      let currentRate = random(0.3, 0.5);
      tingSFX.rate(currentRate);
      tingSFX.play();
    }
  }
}

//snowman size shrinks (melts) when it touches a fireball
function meltSnowman(fireBall, snowMan) {
  //check to overlap if fireball hasn't melted snowman
  let d = dist(snowMan.x, snowMan.y, fireBall.x, fireBall.y);
  //fireball melts snowman and snowman size shrinks
  if (d < snowMan.size / 2 + fireBall.width / 2) {
    //snowman shrinks every 2 frames
    snowMan.size -= 3;

    //snowman size is constrained from getting any larger/smaller stopping at 500 px
    snowMan.size = constrain(snowMan.size, 0, 500);
  }
}
