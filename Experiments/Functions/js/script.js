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

move();
wrap();
display();
//circle movement; use 'function move' below instead of this
//circle.x = circle.x + circle.vx;
//circle.y = circle.y + circle.vy;


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
//can also use the function move to call it somewhere else
function move(){
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

  function wrap(){
    if (circle.x > width){
      reset();
    }
  }
//circle display
function display(){
fill(255,0,0);
ellipse(circle.x,circle.y,circle.size);
}

//after mousepressed, we can call the function to reset; this is also the main origin when calling the funtion 'reset'
function reset(){
  circle.x = 0;
  circle.vx = circle.vx + 2;
  circle.vy = circle.vy - 0.25;
  circle.size = circle.size + 5;

}
//we can do the same effect here. To use the reset function to repeat its actions instead of typing out the same thing over n over again
function mousePressed(){
  //so instead of writing this whole thing....

//have the user reset the circle by clicking (this is a repeated code)
//circle.x = 0;
//circle.vx = circle.vx + 2;
//circle.size = circle.size + 5;

//just write:
reset();
}
