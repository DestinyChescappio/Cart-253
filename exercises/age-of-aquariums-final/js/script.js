/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let state = `title`;

let safety = {
  x: 1500,
  y: 700,
  size: 400,
  fill: {
    r: 255,
    g: 204,
    b: 0
  }
}

let cheese = {
  x: 100,
  y: 100,
  size: 65,
}


let mice = [];
let numMice = 50;
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  //set up mice array with correct number of mice
  for (let i = 0; i < numMice; i++) {
    //create a new mouse
    let newMouse = createMouse();
    //storing new mice inside the array
    mice.push(newMouse);
  }
}

function createMouse() {
  let createdMice = {
    x: random(0, width),
    y: random(0, height),
    vx: 0,
    vy: 0,
    h: 30,
    w: 50,
    fill: 150,
    speed: 2,
    attached: false,
  };
  return createdMice;
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `time lost`) {
    timeLost();
  } else if (state === `safety`) {
    safe();
  }

}

function simulation() {
  //safety; where to bring the mice to before time runs out
  drawingSafety();

  //to check if cheese is inside safety
  cheeseInsideSafety();
  //cheese display
  displayCheese();
  //user cheese movement
  userCheese();

  for (let i = 0; i < mice.length; i++) {
    let mouse = mice[i];
    //moving the mouse/mice
    moveMouse(mouse);
    //to check if mouse is inside safety
    mouseInsideSafety(mouse);
    //mice display
    displayMouse(mouse);
//cheese and mouse inside safety means it displays the 'safe' state////////
}
}
function title() {
fill(`#fae`)
textFont(`ariel`);
textSize(`60`);
textStyle(BOLD);
textAlign(CENTER,CENTER);
text(`Feed the mice! Make the mice follow the cheese to safety before time runs out`,width/2,height/2);

}
function safe() {
  fill(0,255,0);
  textFont(`ariel`);
  textSize(`50`);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
  text(`the mice won't starve😁`, width/2, height/2);
}
function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function drawingSafety() {
  fill(safety.fill.r, safety.fill.g, safety.fill.b);
  ellipse(safety.x, safety.y, safety.size);
}

function userCheese() {
  cheese.x = mouseX;
  cheese.y = mouseY;
}


function moveMouse(mouse) {
  //mice following cheese
  if (mouse.x < cheese.x) {
    mouse.vx = 1;
  } else if (mouse.x > cheese.x) {
    mouse.vx = -1;
  }
  if (mouse.y < cheese.y) {
    mouse.vy = 1;
  } else if (mouse.y > cheese.y) {
    mouse.vy = -1;
  }

  //setting up the mouse to move
  mouse.x += mouse.vx;
  mouse.y += mouse.vy;

  //constrain mouse from going outside of canvas
  mouse.x = constrain(mouse.x, 0, width);
  mouse.y = constrain(mouse.y, 0, height);
}

function mouseInsideSafety(mouse) {
  let d = dist(mouse.x, mouse.y, safety.x, safety.y);
  if (d < safety.size / 2) {
    return true;
  } else {
    return false;
  }
}

function cheeseInsideSafety() {
  let d = dist(cheese.x, cheese.y, safety.x, safety.y);
  if (d < safety.size / 2) {
    return true;
  } else {
    return false;
  }
}


function displayCheese() {
  push();
  let c = color(255, 204, 0);
  fill(c);
  noStroke();
  ellipse(cheese.x, cheese.y, cheese.size);
  //cheese hole1
  fill(255, 160, 0);
  ellipse(cheese.x - 15, cheese.y - 10, cheese.size - 50);
  //cheese hole2
  fill(255, 160, 0);
  ellipse(cheese.x - 5, cheese.y + 18, cheese.size - 40);
  //cheese hole3
  fill(255, 160, 0);
  ellipse(cheese.x + 10, cheese.y - 14, cheese.size - 45);
  //cheese hole4
  fill(255, 160, 0);
  ellipse(cheese.x + 17, cheese.y + 12, cheese.size - 55);
  pop();
}

function displayMouse(mouse) {
  push();
  fill(150);
  noStroke();
  ellipse(mouse.x, mouse.y, mouse.h, mouse.w);
  //left ear
  fill(150);
  ellipse(mouse.x - 20, mouse.y - 17, mouse.h - 10, mouse.w - 30);
  //right ear
  fill(150);
  ellipse(mouse.x + 20, mouse.y - 17, mouse.h - 10, mouse.w - 30);
  //tail
  stroke('#fae');
  strokeWeight(3);
  line(mouse.x, mouse.y + 25, mouse.x, mouse.y + mouse.h + 20);
  pop();
}
