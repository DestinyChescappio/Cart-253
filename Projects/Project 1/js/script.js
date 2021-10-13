/**
p1: Catch the UFOs!
Destiny Chescappio

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Image display of galaxy
*/

let state = `simulation`;


let blackhole = {
  x: 500,
  y: 500,
  size: 100,
  fill: 0,
  alpha: 255
}

let ufo1 = {
  x: 0,
  y: 300,
  w: 60,
  h: 15,
  vx: 3,
  vy: 0,
  stroke: 'rgba(100%,0%,100%,0.5)',
  strokeWeight: 3,
  beingDragged: false,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
}

let ufo2 = {
  x: 600,
  y: 200,
  w: 60,
  h: 15,
  vx: -3,
  vy: 0,
  stroke: 'rgba(100%,0%,100%,0.5)',
  strokeWeight: 3,
  beingDragged: false,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
}
let ufo3 = {
  x: 0,
  y: 425,
  w: 60,
  h: 15,
  vx: 5,
  vy: 0,
  stroke: 'rgba(100%,0%,100%,0.5)',
  strokeWeight: 3,
  beingDragged: false,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
}
let ufo4 = {
  x: 600,
  y: 100,
  w: 60,
  h: 15,
  vx: -5,
  vy: 0,
  stroke: 'rgba(100%,0%,100%,0.5)',
  strokeWeight: 3,
  beingDragged: false,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
}

function preload() {
  galaxyImage = loadImage('assets/images/galaxy.jpeg');
}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
}

/**
Description of draw()
*/
function draw() {
background(0);

//to display the simulation and an end
  if (state === `simulation`) {
    simulation();
  } else if (state === `ending`) {
    ending();
  }

}

function simulation() {
  imageMode(CENTER);
  image(galaxyImage, width / 2, height / 2);

  if (!ufoIsInsideHole(ufo1)) {
    movement(ufo1);
  }
  if (!ufoIsInsideHole(ufo2)) {
    movement(ufo2);
  }
  if (!ufoIsInsideHole(ufo3)) {
    movement(ufo3);
  }
  if (!ufoIsInsideHole(ufo4)) {
    movement(ufo4);
  }

//to check if ALL ufos are in black ufo; this then stops and makes the 'ending'
if (ufoIsInsideHole(ufo1)&& ufoIsInsideHole(ufo2)&& ufoIsInsideHole(ufo3)&& ufoIsInsideHole(ufo4)){
state = `ending`;
}
//displaying blackhole
fill(blackhole.fill);
ellipse(blackhole.x, blackhole.y, blackhole.size);


//mouse is inside the ufo calls to make sure the 'mouse pressed' is on the ufo
  mouseIsInsideUfo(ufo1);
  mouseIsInsideUfo(ufo2);
  mouseIsInsideUfo(ufo3);
  mouseIsInsideUfo(ufo4);

//handledragging for dragging ufos calls
  handleDragging(ufo1);
  handleDragging(ufo2);
  handleDragging(ufo3);
  handleDragging(ufo4);

//display for displaying ufos calls
  display(ufo1);
  display(ufo2);
  display(ufo3);
  display(ufo4);

//leftbounce and rightbounce calls to make ufos bounce from one end to the other
  leftbounce(ufo1);
  leftbounce(ufo3);
  rightbounce(ufo4);
  rightbounce(ufo2);

}

function movement(ufo) {
//Ufo movement setup
  ufo.x = ufo.x + ufo.vx;
  ufo.y = ufo.y + ufo.vy;
//ufo movement 'stops' setup
  let d = dist(ufo1.x, ufo1.y, )
}

//dragging ufo
function handleDragging(ufo) {
  if (ufo.beingDragged === true) {
    ufo.x = mouseX;
    ufo.y = mouseY;
  }
}

//mouse is inside ufo
function mouseIsInsideUfo(ufo) {
  if (mouseX > ufo.x - ufo.w / 2 && mouseX < ufo.x + ufo.w / 2 &&
    mouseY > ufo.y - ufo.h / 2 && mouseY < ufo.y + ufo.h / 2) {
//this states whether the mouse inside the ufo is true or false
    console.log("true");
    return true;
  } else {
    return false;
  }
}

//dragging each ufo when mouse button is pressed
function mousePressed() {
  if (mouseIsInsideUfo(ufo1)) {
    ufo1.beingDragged = true;
  }
  if (mouseIsInsideUfo(ufo2)) {
    ufo2.beingDragged = true;
  }
  if (mouseIsInsideUfo(ufo3)) {
    ufo3.beingDragged = true;
  }
  if (mouseIsInsideUfo(ufo4)) {
    ufo4.beingDragged = true;
  }
}
//mouse button is released after dragging
function mouseReleased() {
  if (ufo1.beingDragged) {
    ufo1.beingDragged = false;
  }
  if (ufo2.beingDragged) {
    ufo2.beingDragged = false;
  }
  if (ufo3.beingDragged) {
    ufo3.beingDragged = false;
  }
  if (ufo4.beingDragged) {
    ufo4.beingDragged = false;
  }
}

function ufoIsInsideHole(ufo) {
//check if ufo is inside black hole
  let d = dist(ufo.x, ufo.y, blackhole.x, blackhole.y);
//return true if distance is less than blackhole radius
  if (d < blackhole.size / 2) {
    return true;
  } else {
    return false;
  }
}

//ufo drawing using the green structure & ufo window
function display(ufo) {
//displaying ufo green structure
  stroke('rgba(100%,0%,100%,0.5)');
  strokeWeight(3);
  fill(ufo.fill.r, ufo.fill.g, ufo.fill.b);
  ellipse(ufo.x, ufo.y, ufo.w, ufo.h);
//window
  fill(random(0, 255));
  ellipse(ufo.x, ufo.y - 5, 20, 13);
}

function leftbounce(ufo) {
//ufo going back and forth (starting LEFT side)
  if (ufo.x > width || ufo.x < 0) {
    ufo.vx = -ufo.vx;
  }
}

function rightbounce(ufo) {
//ufo going back and forth (starting RIGHT side)
  if (ufo.x > width || ufo.x < 0) {
    ufo.vx = -ufo.vx;
  }
}
