/**
Keep Mr. Snowman Alive!
Destiny Chescappio

Move the snowman with keys and collect snowballs! snowman shrinks if snowballs
are not collected and when it moves. Snowman dies and melts away if it touches a fireball
*/

"use strict";
let state = "title";

//fire image (used for the fireballs)
let fireBallImage = undefined;

//sound is used when the snowball and snowman touches
let tingSFX = undefined;

//the user's object
let snowMan;

//the array of snowballs are collected
let snowBalls = [];
//how many snowballs
let numSnowBall = 20;
//how many snowballs are collected by snowman; (text will be shown on the top right corner of the game online)
let numSnowballCollected = 0;

//the array of fireballs falling
let fireBalls = [];
//how many fireballs
let numFireBall = 5;

//the array of kids running
let kids = [];
//how many kids
let numKid = 3;

//Loading:
//the fire.png image to use for the fireballs
//the sound used when a snowball is collected
function preload() {
  //fireball image
  fireBallImage = loadImage(`assets/images/fire.png`);
  //ting! sound when snowman touches snowball
  tingSFX = loadSound(`assets/sounds/ting.wav`);
}

//canvas & loops/calling snowman, kids & fireballs,snowballs
function setup() {
  createCanvas(windowWidth, windowHeight);

  //calling the snowman inheritance object
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

  //making forloop of kids
  for (let i = 0; i < numKid; i++) {
    let x = random(0, width);
    let y = random(0, height);
    //making kids 'fill' property with random colors; refer to kid.js
    let kidColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    };
    //creating new kid
    let kid = new Kid(x, y, kidColor);
    kids.push(kid);
  }
}

/**
Drawing:
- the functions calling the updated inheritance objects (snowman, snowball, fireball, kid)
- the functions created in the script.js
*/
function draw() {
  background(155);

  if (state === `title`) {
    title();
  } else if (state === `startGame`) {
    game();
  } else if (state === `gameOver`) {
    snowmanDead();
  }
  if (state === `title`) {
  }
}

function title() {
  fill(255);
  textFont(`forte`);
  textStyle(BOLD);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`Save Mr.Snowman!`, width / 2, height / 2);
}

function loser() {
  fill(255);
  textFont(`forte`);
  textStyle(BOLD);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`Mr.Snowman melted`, width / 2, height / 2);
}

function mousePressed() {
  if (state === `title`) {
    state = `startGame`;
  }
}

function game() {
  //updating behaviour of the Snowman inheritance object from snowman.js file
  updateSnowman();

  //updating behaviour of the snowball inheritance object from snowballs.js file
  updateSnowball();

  //updating behaviour of the fireball inheritance object from fireball.js file
  updateFireball();

  //updating behaviour of the kid inheritance object from kid.js
  updateKid();

  //displaying the text how many snowballs and fireballs touch snowman
  numSnowballText();
}

// updating the snowman behaviour
function updateSnowman() {
  snowMan.move();
  snowMan.display();
  snowMan.sizingMovement();
}

//updating the snowball behaviour
function updateSnowball() {
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
}

//updating the fireball behaviour
function updateFireball() {
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

//updating the kid behaviour
function updateKid() {
  //drawing the array of kids using forloop
  for (let i = 0; i < kids.length; i++) {
    let kid = kids[i];
    //calling methods- move, wrap, display
    kid.move();
    kid.wrap();
    kid.display();
  }
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
      tingSFX.setVolume(0.2);
      tingSFX.play();
    }
  }
}

//snowman size shrinks (melts) when it touches a fireball
function meltSnowman(fireBall, snowMan) {
  //check to overlap if fireball hasn't melted snowman
  let d = dist(snowMan.x, snowMan.y, fireBall.x, fireBall.y);
  //fireball melts snowman and snowman size shrinks
  if (d < snowMan.size / 2 + fireBall.width / 2 + fireBall.height / 2) {
    //snowman shrinks every 2 frames
    snowMan.size -= 1;

    //snowman size is constrained from getting any larger/smaller stopping at 500 px
    snowMan.size = constrain(snowMan.size, 10, 500);
  }
}

function numSnowballText() {
  //drawing a text that notifies the user how many snowballs are collected
  //text located at top right corner of canvas
  fill(0);
  textFont(`forte`);
  textStyle(BOLD);
  textSize(15);
  text(`Snowballs collected: ${numSnowballCollected}`, 1250, 60);
}

function snowmanDead() {
  if ((snowMan.size = 5)) {
    state = `gameOver`;
  }
}
