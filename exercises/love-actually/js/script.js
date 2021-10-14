/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}
let circle1 = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2

};

let circle2 = {
  x: undefined,
  y: undefined,
  size: 100,
};

let state = `title`;//can be: title, simulation, love, sadness


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);
push();
  if(state === `title`){
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`){
    sadness();
  }
  pop();


  }

function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`, width/2,height/2);
  pop();
}

function simulation() {
display(circle1);
display(circle2);
unite();
}

function love(){
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!`, width/2,height/2);
  pop();

}
function sadness(){
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`:(`, width/2,height/2);
  pop();

}

function keyPressed (){
  if(state === `title`) {
    state = `simulation`;
  }
}
function display(){
//start changing circle1 velocity "less often" to make it more stable:
//telling circle1 to change direction randomly only 1% of the time
let change = random(); //generating random number between 0 and 1

if (change < 0.01){
  //choose random velocities within the "speed limit"
circle1.vx = random(-circle1.speed,circle1.speed);
circle1.vy = random(-circle1.speed,circle1.speed);
}
//circle1 display
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

//circle2 following mouse
circle2.x = mouseX;
circle2.y = mouseY;

//displaying circles
ellipse(circle1.x,circle1.y,circle1.size);
ellipse(circle2.x,circle2.y,circle2.size);
}

function unite(){
//check if circles overlaps
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
//if circles are touching
if (d < circle1.size/2 + circle2.size/2){
  state = `love`;
  }
}
