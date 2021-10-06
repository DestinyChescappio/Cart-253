/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let shape = {
  x: undefined,
  y: undefined,
  size: 200,
  beingDragged: false,
  //to make it fade
  alpha: 100
};
let x = 10;

/**
Description of setup
*/
function setup() {
  createCanvas(700, 300);
  shape.x = width / 4;
  shape.y = height / 2;
}

/**
Description of draw()
*/
function draw() {
  background(0);

//handledragging for dragging shape
handleDragging();
  drawShape();
  drawBoundary();
}
//dragging circle when mouse is pressed & released
function handleDragging() {
  if (shape.beingDragged === true){
  shape.x = mouseX;
  shape.y = mouseY;

 }
}

function drawShape() {
  //to make it fade
shape.alpha = map(shape.x, 0, width, 0, 255);

  push();
  //select the filll based on mouseover
  if (mouseIsInsideShape()) {
    //yes means red
    fill(255, 0, 0, shape.alpha);
  } else {
    //no means yellow - making it fade
    fill(255, 255, 0, shape.alpha);
  }

  ellipse(shape.x, shape.y, shape.size);
  pop();
}


function mouseIsInsideShape() {
  let d = dist(mouseX, mouseY, shape.x, shape.y);
  if (d < shape.size / 2) {
    return true;
  } else {
    return false;
  }
}
//draw the centraline
function drawBoundary(){
push();
stroke(255);
line(width / 2, 0, width /2 , height);
pop();
//dragging circle when mouse is pressed and released
}
function mousePressed() {
  if (mouseIsInsideShape()) {
    shape.beingDragged = true;
  }
}
function mouseReleased() {
  if (shape.beingDragged && shape.x > width / 2) {
    shape.alpha = 0;
    noLoop();
  }
  shape.beingDragged = false;
}
