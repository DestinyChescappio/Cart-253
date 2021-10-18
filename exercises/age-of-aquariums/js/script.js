/**
age-of-aquariums
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let fliesGang = [];
let fliesGangSize = 20;

//the user displayed as a fly swatter
//let squisher = {
//  x: 0,
//  y: 0,
//  size: 50,
//  fill: {
//    r: 0,
//    g: 255,
//    b: 0
//  }
//}

//function createFlies(x, y) {
  //let flies = {
//  x: 300,
//  y: 300,
//  h: 30,
//  w: 15,
//  vx: 0,
//  vy: 0,
//  speed: 2,
//  fill: 0
//}
//return flies;
//}
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
createCanvas(600,600);

for (let i = 0; i < flyGang; i++) {
  let flies = createFlies(random(0,width), random(0,height));
}
}

function draw(){
  background(150);

//drawing flies' bodies and wings
  createFlies();

//drawing book to squash flies
 createSquisher();

//using the book as the user position
moveSquisher();

//check whether the user (squisher) has squished the fly
checkFlies();
}

//sets the user position to the book position
function moveSquisher() {
squisher.x = mouseX;
squisher.y = mouseY;
}

function checkFlies(flies) {
  //check for an overlap if flies hasn't been squished by squisher
  if (!flies.squished) {
    let d = dist(squisher.x,squisher.y,flies.x,flies.y);
    if (d < squisher.size / 2 + flies.size / 2) {
      flies.squished = true;
    }
  }
}

function moveFlies(flies) {
//moving the flies
  flies.x = flies.x + flies.vx;
  flies.y = flies.y + flies.vy;
}

//drawing 3 ellipses to create the flies
function createFlies(x, y) {
  let flies = {
  //flies body
 x: 300,
 y: 300,
 fill: 0,
 h: 30,
 w: 15,
 vx: 0,
 vy: 0,
 speed: 2
//left wing
fill(255);
ellipse(flies.x-10,flies.y-5,10,5);
//right wing
fill(255);
ellipse(flies.x+10,flies.y-5,10,5);
}
return flies;
}

function draw(){
  background(150);
}

function createSquisher(){
//drawing book to squash flies
fill(squisher.fill.r,squisher.fill.g,squisher.fill.b);
noStroke();
ellipse(squisher.x,squisher.y,squisher.size);
}
