/**
Keep Mr. Snowman Alive!
Destiny Chescappio

Move the snowman with keys and collect snowballs! snowman shrinks if snowballs
are not collected. Snowman dies and melts away if it touches a fireball
*/

"use strict";
let fireBalls = [];
let numFireBall = 5;

let snowBalls = [];
let numSnowBall = 5;

let snowMan;

//canvas & loops/calling fireballs & snowballs
function setup() {
  createCanvas(windowWidth, windowHeight);
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

  //drawing the Snowman
  snowMan.move();
  snowMan.display();
  snowMan.sizingMovement();

  //drawing the array of cars
  for (let i = 0; i < snowBalls.length; i++) {
    let snowBall = snowBalls[i];
    snowBall.move();
    snowBall.wrap();
    snowBall.display();

    //collecting the snowballs
    snowballCollection(snowBall, snowMan);
    growSnowman(snowBall, snowMan);
  }
  //drawing the array of fire balls
  for (let i = 0; i < fireBalls.length; i++) {
    let fireBall = fireBalls[i];
    fireBall.move();
    fireBall.wrap();
    fireBall.display();

    //killing snowman
    checkFireball(fireBall, snowMan);
  }
}

function checkFireball(fireBall, snowMan) {
  //check to overlap if fireball hasn't been touched yet
  if (!fireBall.kill) {
    let d = dist(snowMan.x,snowMan.y,fireBall.x,fireBall.y);

    if (d < snowMan.size / 2 + fireBall.size /2){
      fireBall.kill = true;
    }
  }
}

function growSnowman (snowBall, snowMan) {
  //if both snowball and snowman touches
  if (!snowMan.grow) {
    let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
  //if overlaps, snowman size grows
  if (d < snowMan.size / 2 + snowBall.size / 2) {
     snowMan.size += 2;
   }
  }
}

//check if the snowman overlaps the snowball object
function snowballCollection(snowBall, snowMan) {
  //check to overlapp if snowball hasn't been collected yet
  if (!snowBall.collected) {
    let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
  //snowball collects snowball & snowball disappears
    if (d < snowMan.size / 2 + snowBall.size / 2) {
      snowBall.collected = true;
    }
  }
}
