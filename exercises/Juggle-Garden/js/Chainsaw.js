class Chainsaw {
constructor(x,y) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 50;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.maxSpeed= 10;
  this.size = 40;
  this.active = true;
  }
//making the chainsaw drop by gravity
gravity(force) {
  this.ay = this.ay + force;
}

//making the chainsaw move
move() {
  this.vx = this.vx + this.ax;
  this.vy = this.vy + this.ay;

//constraining the velocity base on the maxSpeed property
  this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
  this.vy = constrain(this.vy, -this.maxSpeed, this,maxSpeed);

//adding the velocity to the position
this.x = this.x + this.vx;
this.y = this.y + this.vy;

}

bounce(paddle) {
  //checking if the chainsaw bounces on the left edge of the Paddle
  if (this.x > paddle.x - paddle.width/2 &&
      this.x < paddle.x + paddle.width/2 &&
    //chainsaw is within the width of the paddle vertaically and horizontally
  //AND overlapping as well with the paddle (pass half the top of the paddle)
      this.y + this.size/2 > paddle.y - paddle.height/2 &&
      this.y = this.size/2 < paddle.y + paddle.height/2) {

//bouncing to the left
let dx = this.x - paddle.x;
this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2.-2,-2);

  this.vy = -this.vy;
  this.ay = 0;
  }
}


//drawing the chainsaw
display() {
  push();
  fill(255,0,0);
  stroke(0);
  rect(this.x,this.y,this.size);
//chainsaw teeth
  fill(150);
  rect(this.x+41,this.y+6,this.h,this.w);
  pop();
}
}
