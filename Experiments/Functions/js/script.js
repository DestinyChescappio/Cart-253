let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0
};

/**
Description of setup
*/
function setup() {
  //example of calling a function: it does whatever job it's supposed to do but we don't know how it's done

  createCanvas(500,500);


}


/**
Description of draw()
*/
function draw() {
  background(0);
//circle movement
circle.x = circle.x + circle.vx;
circle.y = circle.y + circle.vy;

//by calling the reset function, we're telling javascript to do the repeated instructions in the 'Function Reset' below
//if the circle on the x axis
if (circle.x > width) {
  reset();
}
//(instead of doing these 3 things, we can call our reset function ^^^)
//if circle is reaching the right side,
//if (circle.x > width){
  //it resets its position
  //circle.x = 0;
  //it would get faster by 2 pixels per frame
  //circle.vx = circle.vx + 2;
  //it would get bigger each time
  //circle.size = circle.size + 5;
}
//circle display
fill(255,0,0);
  ellipse(circle.x,circle.y,circle.size);
}
//after mousepressed, we can call the function to reset
function reset(){
  circle.x = 0;
  circle.vx = circle.vx + 2;
  circle.size = circle.size + 5;

}

function mousePressed(){
//have the user reset the circle by clicking (this is a repeated code)
circle.x = 0;
circle.vx = circle.vx + 2;
circle.size = circle.size + 5;
}
