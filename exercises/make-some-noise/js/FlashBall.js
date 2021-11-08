class FlashBall {
  //setting the flashing balls properties
  constructor(x,y,note){
  this.x = x;
  this.y = y;
  this.size = 100;
  this.fill = {
    r: 255,
    g: 255,
    b: random(0,255)
  }
  this.speed = 10;
  this.vx = random(-this.speed,this.speed);
  this.vy = random(-this.speed,this.speed);
}

move(){
  this.x += this.vx;
  this.y += this.vy;
}

bounce(){
if (this.x - this.size/2 < 0 || this.x + this.size/2 > width){
  this.vx = -this.vx;
  this.playNote();
}
if (this.y - this.size/2 < 0 || this.y + this.size/2 > height){
  this.vy = -this.vy;
  this.playNote();
}
}

//playing the note inside the note property; which note to play
playNote() {
  this.synth.play(this.note,0.4,0,0.1);
}

display(){
push();
noStroke();
fill(this.fill.r,this.fill.g,this.fill.b);
ellipse(this.x,this.y,this.size);
pop();
}
}
