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
size:100,
vx:0,
vy:0,
fill:150
}


/**
Description of setup
*/
function setup() {
createCanvas(600,600);
}


/**
Description of draw()
*/
function draw() {
background(0);
//mice
displayMouse();

}

function displayMouse() {
fill(150);
noStroke();
ellipse(mouse.x,mouse.y,mouse.h,mouse.w,mouse.size);
//left ear
fill(150);
ellipse(mouse.x-20,mouse.y-10,mouse.h-10,mouse.w-30);
//right ear
fill(150);
ellipse(mouse.x+20, mouse.y-10,mouse.h-10,mouse.w-30);
//tail
stroke('#fae');
strokeWeight(3);
line(mouse.x,mouse.y+25,mouse.x,mouse.y+mouse.h+20); //needs to be in the middle vertically
}
