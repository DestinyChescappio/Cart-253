class Paddle {
  constructor(w,h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
    this.vx = 0,
    this.vy = 0,
    this.speed = 10
}
move() {
//set to left arrow pressed at horizontal movement
if (keyIsDown(LEFT_ARROW)) {
  //if it is set, the velocity is negative
  this.vx = -this.speed;
}
//otherwise it is set to the right arrow pressed
else if(keyIsDown(RIGHT_ARROW)) {
  //if it is set, the velocity is positive
  this.vx = this.speed;
}
//if none of the left and right arrow keys are pressed
else {
  //then it stops moving
this.vx = 0;
}
//setting up the movement
this.x = this.x + this.vx;
this.y = this.y + this.vy;
}

display() {
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(this.x,this.y,this.width,this.height);
  pop();
}
}
