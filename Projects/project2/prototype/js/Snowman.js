class Snowman {
//properties of snowman
constructor(w, h){
  this.width = w;
  this.height = h;
  this.x = 0;
  this.y = height - this.height/2;
  this.size = 100;
  this.vx = 0;
  this.vy = 0;
  this.speed = 5
}
move(){
  //set to left arrow pressed at horizontal movement
if (keyIsDown(LEFT_ARROW)) {
  //if it's set, the velocity is negative
  this.vx = -this.speed;
}
//otherwise it's set to the right arrow pressed
else if (keyIsDown(RIGHT_ARROW)) {
  //if it's set, the velocity is positive
  this.vx = this.speed;
}
//if none of the left and right arrow keys are pressed; it stops
else {
  this.vx = 0;
}
//movement set up
this.x = this.x + this.vx;
this.y = this.y + this.vy;
}

display(){
  push();
  noStroke();
  fill(255);
  ellipse(this.x,this.y,this.size);
  pop();
  //snowman head
  push();
  ellipse(this.x,this.y+15,this.size-30);
  pop();
}
}
