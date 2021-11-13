class SnowBall {
//properties the snowball 
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.size = 30;
  this.vx = 0;
  this.vy = 5;
  this.collected = false
}


//moving the snowball
move(){
  this.x += this.vx;
  this.y += this.vy;
}

//wrapping the snowball object
wrap(){
  if (this.y > height){
    this.y -= height;
  }
}

//displaying snowball
display() {
//if it's not collected, it's displayed
  if (!this.collected){
push();
noStroke();
fill(255);
ellipse(this.x,this.y,this.size);
pop();
}
}
}
