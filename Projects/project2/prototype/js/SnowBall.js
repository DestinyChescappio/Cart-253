class SnowBall {
//properties of the many cars (that makes traffic)
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;
  this.vx = 0;
  this.vy = 5;
  //this.collected = false
}


//moving the traffic
move(){
  this.x += this.vx;
  this.y += this.vy;
}

wrap(){
  if (this.y > height){
    this.y -= height;
  }
}

display() {
  //if (!this.collected){
push();
noStroke();
fill(255);
ellipse(this.x,this.y,this.width,this.height);
pop();
}
}
}
