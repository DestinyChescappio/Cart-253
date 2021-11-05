class Traffic {
//properties of the many cars (that makes traffic)
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.width = undefined;
  this.height = undefined;
  this.vx = 0;
  this.vy = 0;
  }

//moving the traffic
move(){
  this.x += this.vx;
  this.y += this.vy;
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
