/**
Dodge-em
Destiny Chescappio

Voldemort is the evil villian with a noce that needs justice. Catch the tiny
circle (tiny circle) with his clown nose(circle).
*/


/**
image of voldemort
*/
let targetObjective = undefined;

function preload() {
  targetObjective = loadImage('assets/images/no nose.jpeg');
}
//tiny black circle
let tinyCircle = {
  x: 0,
  y: 285,
  size: 10,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: 255
}
//a circle object
let circle = {
  x: 300,
  y: 300,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.02,
  maxSpeed: 1,
  fill: {
    r: 150,
    g: 0,
    b: 100
  }
}

/**
canvas setup
*/
function setup() {
  createCanvas(600, 600);

  //moving tiny circle setup
  tinyCircle.y = tinyCircle.y + tinyCircle.X
  tinyCircle.vx = tinyCircle.speed;
}

/**
Drawing the tiny circle & interactive circle()
*/
function draw() {
  background(0);

  //display targetObjective
  imageMode(CENTER);
  image(targetObjective, width / 2, height / 2);


  //tiny circle movement
  tinyCircle.x = tinyCircle.x + tinyCircle.vx;
  tinyCircle.y = tinyCircle.y + tinyCircle.vy;

  //tiny circle movement to left
  if (tinyCircle.x > width) {
    tinyCircle.x = 0;
    tinyCircle.y = 285;
  }

  // Circle following mouse on both X & Y axis
  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  } else {
    circle.ax = circle.acceleration;
  }
  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  } else {
    circle.ay = circle.acceleration;
  }

  //setting circle velocity through acceleration & constraining velocity from reaching max speed
  circle.vx = circle.vx + circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);

  circle.vy = circle.vy + circle.ay;
  circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

  //velocity used to make circle movement to the right side
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  //display tiny Circle
  fill(tinyCircle.fill);
  noStroke();
  ellipse(tinyCircle.x, tinyCircle.y, tinyCircle.size);

  //display circle
  fill(circle.fill.r, circle.fill.g, circle.fill.b);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);



}
