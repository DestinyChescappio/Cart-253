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
  x: undefined,
  y: undefined,
  size: 100,
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
display();
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

function mousePressed(){
  if(state === `title`) {
    state = `simulation`;
  }
}

function display(){
//circle2 following mouse
  circle2.x = mouseX;
  circle2.y = mouseY;

  //displaying circles
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
}
