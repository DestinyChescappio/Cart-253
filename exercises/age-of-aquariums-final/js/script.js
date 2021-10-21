/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let cheese = {
x:undefined,
y:undefined,
size:65,
}

let mice = [];
let numMice = 15;
/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
noCursor();
mice = []; //starting with empty array
for (let i = 0; i < numMice; i++){
let mouse = createMouse();
  mice.push(mouse);
}
}


/**
Description of draw()
*/
function draw() {
background(0);
//user cheese movement
userCheese();

//creating and setting up the mouse
createMouse();

//to check if the mouse is attached
for (let i = 0; i < mice.length; i++) {
let mouse = mice[i];
attach(cheese, mouse[i]);
}


//cheese display
displayCheese(cheese);

//mice display
for (let i = 0; i < mice.length; i++) {
let mouse = mice[i];
displayMouse(mouse[i]);
  }
}


function userCheese() {
  cheese.x = mouseX;
  cheese.y = mouseY;
}

function createMouse() {
  let createdMouse = {
    x:random(0,width),
    y:random(0,height),
    size: {
    h:30,
    w:50
  },
    vx:0,
    vy:0,
    fill:150,
    speed:2,
    attached: false,
};
    return createdMouse;
}

function attach(cheese, mouse) {
  if (!mouse.attached) {
  let d = dist(cheese.x,cheese.y,mouse.x,mouse.y);
  if (d < cheese.size/2 + mouse.size/2) {
    //the mouse and cheese overlap
    mouse.attached = true;
    }
  }
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

function displayMouse(mouse) {
  if (!mouse.attached) {
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
pop();
}
}
