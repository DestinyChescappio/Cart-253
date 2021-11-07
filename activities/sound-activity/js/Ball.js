class Ball {
//setting the constructor's properties
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.size = 50;
  this.fill = {
    r: random(200,255),
    g: random(200,255),
    b: random(200,255)
  }
  this.speed = 5;
  this.vx = random(-this.speed,this.speed);
  this.vy = random(-this.speed,this.speed);
  }
}

move(){
  this.x += this.vx;
  this.y += this.vy;
}

bounce(){
if (this.x < 0 || this.x > this.size/2 > width) {
  this.vx = -this.vx;
}
if (this.y < 0 || this.y > this.size/2 < height) {
  this.vy = -this.vy;
}
}

display(){
push();
noStroke();
fill(this.fill.r,this.fill.g,this.fill.b);
ellipse(this.x,this.y,this.size);
pop();
}
