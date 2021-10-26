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
