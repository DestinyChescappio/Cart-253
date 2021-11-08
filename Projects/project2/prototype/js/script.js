/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let fireBalls = [];
let numFireBall = 5;

let snowBalls = [];
let numSnowBall = 5;

let snowMan;

//
function setup() {
createCanvas(windowWidth,windowHeight);
//making forloop of cars
for (let i = 0; i < numSnowBall; i++){
  let x = random(0,width);
  let y = random(0,height);
  let snowBall = new SnowBall (x,y);
  snowBalls.push(snowBall);
}

//making forloop of fire balls
for (let i = 0; i < numFireBall; i++){
  let x = random(0,width);
  let y = random(0,height);
  let fireBall = new FireBall(x,y);
  fireBalls.push(fireBall);
}

//calling the snowman
snowMan = new Snowman();
}

//check if the snowman overlaps the snowball object
function checkSnowball(snowBalls){
//check to overlapp if snowball hasn't been collected yet
if (!snowBalls.collected) {
  let d = dist(snowMan.x,snowMan.y,snowBalls.x,snowBalls.y);
  if (d < snowMan.size/2 + snowBalls.size/2){
    snowBalls.collected = true;
  }
 }
}

/**
Description of draw()
*/
function draw() {
background(155);
//collecting the snowballs
checkSnowball(snowBalls);

//drawing the array of cars
for (let i = 0; i < snowBalls.length; i++){
  let snowBall = snowBalls[i];
  snowBall.move();
  snowBall.wrap();
  snowBall.display();
}
//drawing the array of fire balls
for (let i = 0; i < fireBalls.length; i++){
  let fireBall = fireBalls[i];
  fireBall.move();
  fireBall.wrap();
  fireBall.display();

}
//drawing the Snowman
snowMan.move();
snowMan.display();

}
