class Car {
//properties of the many cars (that makes traffic)
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 20;
  this.vx = 0;
  this.vy = 5;
  }

//moving the traffic
move(){
  this.x += this.vx;
  this.y += this.vy;
}

wrap(){
  if (this.x > width){
    this.x -= width;
  }
}

display() {
push();
rectMode(CENTER);
noStroke();
fill(255,0,0);
rect(this.x,this.y,this.width,this.height);
pop();
}
}
