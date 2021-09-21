/**
I-like-to-Move-it!
Destiny Chescappio

An interactive game. The game takes place in space over a pulsating moon with
flying objects. The triangle represents the laser beam to hit the score;
the moving square. The goal is to search and sort out the moving and flashing
objects the y axis and find the square to hit the score.
E1: I like to Move it!
*******************************************************************************
*/
//SetUp

let bg = {
  r:50,
  g: 0,
  b: 80,

};


  let circle1 = {
    x: 400,
    y: 400,
    size: 100,
    speed: 9,
    fill: 200,



    };

    //circle X
    let circleX = {
      x: 0,
      y: 200,
      size: 30,
      speed: 4,
      fill: 0
    };

    //circleY
    let circleY = {
      x: 0,
      y: 600,
      size: 30,
      speed: 4,
      fill: 0
   };
   //circleY2
   let circleX2 = 800;
   let circleY2 = 500;
   let circleSize = 30;
   let circleSpeed = 4;

   //square
   let squareX = 800;
   let squareY = 300;
   let squareSize = 20
   let squareSpeed= 4;



/**
canvas with no stroke
*/
function setup() {
  createCanvas(800,800);
  noStroke();

}


/**
Middle circle is the moon, circleX, circleY, circleY2, square are the flying
objects triangle is the laser beam
*/
function draw() {
  background(bg.r,bg.g,bg.b);
  bg.b = bg.b + 0;



//Draws the moon
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,400,800/2);
  circle1.size = map(mouseY,height,0,50,500);
  circle1.size = constrain(circle1.size,0,width);
  fill(circle1.fill);
  ellipse(circle1.x,circle1.y,circle1.size);

//draws flying object.1
circleX.x = circleX.x + circleX.speed;
circleX.size = circleX.size;

circleX.fill = random(0,255);
fill(circleX.fill);
ellipse(circleX.x,circleX.y,circleX.size);



//draws flying object.2
circleY.x = circleY.x + circleY.speed;
circleY.size = circleY.size;

circleY.fill = random(0,255);
fill(circleY.fill);
ellipse(circleY.x,circleY.y,circleY.size);

//draws flying object.3
circleX2 = circleX2 - circleSpeed;
ellipse(circleX2, circleY2, circleSize);

//draws flying object.4;the score
squareX = squareX - squareSpeed;
square(squareX, squareY, squareSize);

//draws triangle;laser beam
fill(255,0,0);
triangle(mouseX, mouseY, 58, 20, 90, 75);

















}
