class Ball {
//making the ball properties
constructor(x,y) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 50;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.maxSpeed = 10;
  this.size = 40;
  this.active = true;
  }
//making the ball drop by gravity
gravity(force) {
  this.ay = this.ay + force;
  }

//to make the ball move
move() {
  this.vx = this.vx + this.ax;
  this.vy = this.vy + this.ay;

//constrain the the velocity base on the maxSpeed property
this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

//adding the velocity to the position
this.x = this.x + this.vx;
this.y = this.y + this.vy;

//check if the ball fallen off the canvas
if (this.y - this.size/2 > height) {
  this.active = false;
}
}

//to make a ball bounce
//defining a bounce method
bounce(paddle) {
  //checking if it bounces on the left edge of the paddle
if (this.x > paddle.x - paddle.width/2 &&
    this.x < paddle.x + paddle.width/2 &&
    //ball is within the width of the paddle vertically and horizontally
    //AND overlapping as well with the paddle (past half the top of the paddle)....
    this.y + this.size/2 > paddle.y - paddle.height/2 &&
    this.y - this.size/2 < paddle.y + paddle.height/2) {

//bounce
//ball on the left
  let dx = this.x - paddle.x;
  this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2);
//dx explanation; what's going on?

  this.vy = -this.vy;
  this.ay = 0;
  }
}
//drawing the Ball
display() {
  push();
  fill(255,50,50);
  stroke(0);
  rect(this.x,this.y,this.size);
//chainsaw teeth
  fill(150);
  rect(this.x+41,this.y+6,this.h,this.w);
  pop();
}

}
