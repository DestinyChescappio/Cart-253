/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let mouse = {
x:300,
y:300,
h:30,
w:50,
vx:0,
vy:0,
fill:150
}
let cheese = {
x:undefined,
y:undefined,
size:65,

}



/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
}


/**
Description of draw()
*/
function draw() {
background(0);
//mice display
displayMouse();
//cheese display
displayCheese();
//user cheese movement
userCheese();

}

function displayMouse() {
push();
fill(150);
noStroke();
ellipse(mouse.x,mouse.y,mouse.h,mouse.w);
//left ear
fill(150);
ellipse(mouse.x-20,mouse.y-17,mouse.h-10,mouse.w-30);
//right ear
fill(150);
ellipse(mouse.x+20, mouse.y-17,mouse.h-10,mouse.w-30);
//tail
stroke('#fae');
strokeWeight(3);
line(mouse.x,mouse.y+25,mouse.x,mouse.y+mouse.h+20);
pop(); //needs to be in the middle vertically
}

function displayCheese() {
  let c = color(255,204,0);
  fill(c);
  noStroke();
  ellipse(cheese.x,cheese.y,cheese.size);
  //cheese hole1
  fill(255,160,0);
  ellipse(cheese.x-15,cheese.y-10,cheese.size-50);
  //cheese hole2
  fill(255,160,0);
  ellipse(cheese.x-5,cheese.y+18,cheese.size-40);
  //cheese hole3
  fill(255,160,0);
  ellipse(cheese.x+10,cheese.y-14,cheese.size-45);
  //cheese hole4
  fill(255,160,0);
  ellipse(cheese.x+17,cheese.y+12,cheese.size-55);
  }

function userCheese() {
  cheese.x = mouseX;
  cheese.y = mouseY;
}
