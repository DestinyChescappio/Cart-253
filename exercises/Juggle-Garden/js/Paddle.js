class Paddle {
  constructor() {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;
}
move() {

}

display() {
  push();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(this.x,this.y,this.width,this.height);
  pop();
}
}
