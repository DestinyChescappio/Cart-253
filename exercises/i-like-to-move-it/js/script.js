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
    growthRate: 1.5,
    speed: 1,
    fill: 200,
    alpha: 220


    };

    //circle 2
    let circleX = 0;
    let circleY =400;
    let circleSize = 50;


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
  circle1.size = circle1.size + circle1.growthRate;
  circle1.size = constrain(circle1.size,0,width);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

//Circle2
circleX = circleX + 2;
ellipse(circleX, circleY, circleSize);





}
