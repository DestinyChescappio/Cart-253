class FireBall {
//properties of the fire balls
constructor(x,y){
  constructor(x,y){
  this.x = x;
  this.y = y;
  this.image = undefined;
  this.vx = 0;
  this.vy = 5;
  }
}

preload(){
  this.image = loadImage(`assets/images/fire.png`);
}
}

move(){
  this.x += this.vx;
  this.y += this.vy;
}

wrap(){
  if (this.y > height){
    this.y -= height;
  }
}

display(){
  push();
  imageMode();
  image(this.image,this.x,this.y);
  pop();
}
