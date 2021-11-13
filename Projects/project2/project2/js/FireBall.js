class FireBall {
  //properties of the fire balls
  constructor(x, y, fireBallImage) {
    this.x = x;
    this.y = y;
    this.height = 40
    this.width = 40;
    this.vx = 0;
    this.vy = 5;
    this.image = fireBallImage;
  }

  //moving the fireballs
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  //wrapping the fireballs
  wrap() {
    if (this.y > height) {
      this.y -= height;
    }
  }
  //displaying the fireball
  display() {
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.height,this.width);
    pop();
  }
}
