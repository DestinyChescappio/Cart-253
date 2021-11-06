class Ball {
//setting the constructor's properties
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.size = 50;
  this.fill = random(150,0,255);
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

}

display(){
push();
noStroke();
fill(this.fill);
ellipse(this.x,this.y,this.size);
pop();
}
