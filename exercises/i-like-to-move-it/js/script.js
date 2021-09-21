/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


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
Description of setup
*/
function setup() {
  createCanvas(800,800);
  noStroke();

}


/**
Description of draw()
*/
function draw() {
  background(bg.r,bg.g,bg.b);
  bg.b = bg.b + 0;



//Middle circle1
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,400,800/2);
  circle1.size = map(mouseY,height,0,50,500);
  circle1.size = constrain(circle1.size,0,width);
  fill(circle1.fill);
  ellipse(circle1.x,circle1.y,circle1.size);

//CircleX
circleX.x = circleX.x + circleX.speed;
circleX.size = circleX.size;

circleX.fill = random(0,255);
fill(circleX.fill);
ellipse(circleX.x,circleX.y,circleX.size);



//circleY
circleY.x = circleY.x + circleY.speed;
circleY.size = circleY.size;

circleY.fill = random(0,255);
fill(circleY.fill);
ellipse(circleY.x,circleY.y,circleY.size);

//circleY2
circleX2 = circleX2 - circleSpeed;
ellipse(circleX2, circleY2, circleSize);

//Square
squareX = squareX - squareSpeed;
square(squareX, squareY, squareSize);

//triangle
fill(255,0,0);
triangle(mouseX, mouseY, 58, 20, 90, 75);

















}
