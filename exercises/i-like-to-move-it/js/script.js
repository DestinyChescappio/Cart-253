/**
I-like-to-Move-it!
Destiny Chescappio

An interactive game. The game takes place in space over a pulsating moon with
flying objects flying over it. The triangle represents the laser beam to hit the score;
the moving square (flyingobject4). The goal is to search and sort out the moving and
flashing object and find the square to hit the score.
E1: I like to Move it!
*******************************************************************************
*/
//SetUp

let bg = {
  r: 50,
  g: 0,
  b: 80,
};

//moon
let moon = {
  x: 400,
  y: 400,
  size: 100,
  speed: 9,
  fill: 200,
};

//flyingobject1
let flyingobject1 = {
  x: 0,
  y: 200,
  size: 30,
  speed: 4,
  fill: 0,
};

//flyingobject2
let flyingobject2 = {
  x: 0,
  y: 600,
  size: 30,
  speed: 4,
  fill: 0,
};
//flyingobject3
let flyingobject3X = 800;
let flyingobject3Y = 500;
let flyingobject3Size = 30;
let flyingobject3Speed = 4;

//flyingobject4
let flyingobject4X = 800;
let flyingobject4Y = 300;
let flyingobject4Size = 20;
let flyingobject4Speed = 4;

/**
canvas with no stroke
*/
function setup() {
  createCanvas(800, 800);
  noStroke();
}

/**
The moon ; flyingobject1, flyingobject2, flyingobject3,
flyingobject4 are the flying objects ;laser beam is the red laser beam
*/
function draw() {
  background(bg.r, bg.g, bg.b);
  bg.b = bg.b + 0;

  //Draws the moon
  //circle1.x = circle1.x + circle1.speed;
  //circle1.x = constrain(circle1.x,400,800/2);
  moon.size = map(mouseY, height, 0, 50, 500);
  moon.size = constrain(moon.size, 0, width);
  fill(moon.fill);
  ellipse(moon.x, moon.y, moon.size);

  //draws flyingobject1
  flyingobject1.x = flyingobject1.x + flyingobject1.speed;
  flyingobject1.size = flyingobject1.size;

  flyingobject1.fill = random(0, 255);
  fill(flyingobject1.fill);
  ellipse(flyingobject1.x, flyingobject1.y, flyingobject1.size);

  //draws flyingobject2
  flyingobject2.x = flyingobject2.x + flyingobject2.speed;
  flyingobject2.size = flyingobject2.size;

  flyingobject2.fill = random(0, 255);
  fill(flyingobject2.fill);
  ellipse(flyingobject2.x, flyingobject2.y, flyingobject2.size);

  //draws flyingobject3
  flyingobject3X = flyingobject3X - flyingobject3Speed;
  ellipse(flyingobject3X, flyingobject3Y, flyingobject3Size);

  //draws flyingobject4
  flyingobject4X = flyingobject4X - flyingobject4Speed;
  square(flyingobject4X, flyingobject4Y, flyingobject4Size);

  //draws laserbeam
  fill(255, 0, 0);
  triangle(mouseX, mouseY, 58, 20, 90, 75);
}
