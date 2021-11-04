/**
Pedestrian Palaver: Inheritance Activity
Destiny Chescappio

A traffic simulation where the user is a highly endangered pedestrian trying to cross the road.
*/

"use strict";
//states
let state = `simulation`;

let pedestrian;

function setup() {
createCanvas(windowWidth,windowHeight);

let x = width/2;
let y = height;
pedestrian = new Pedestrian(x,y);
}



function draw() {
background(0);
//drawing the states
if (state === `title`) {
  title();
}
if (state === `simulation`) {
  simulation();
}
if (state === `dead`) {
  dead();
  }
}

//making the states' functions (title, simulation, dead)
function title() {
displayText(`PEDESTRIAN PALAYER!`)
}

function simulation() {
pedestrian.handleInput();
pedestrian.move();
pedestrian.display();
}

function success() {
  displayText(`YOU MADE IT!`);
}

function dead() {
displayText(`YOU DIED! SO SAD`)
}

function displayText(string) {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  text(string,width/2,height/2);
  pop();
}

function keyPressed() {
  if (state === `title`);

}
