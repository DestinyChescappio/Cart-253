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

let snowman;

//
function setup() {
createCanvas(800,600);
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
snowman = new Snowman();
}

/**
Description of draw()
*/
function draw() {
background(155);
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

//drawing the Snowman
snowman.move();
snowman.display();
}


}
