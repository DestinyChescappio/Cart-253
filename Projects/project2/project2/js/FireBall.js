class FireBall {
  //properties of the fire balls
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 5;
    this.image = undefined;
  }

preload() {
  fire.image = loadImage(`assets/images/fire.png`);
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
    image(this.image,this.x,this.y);
    pop();
  }
}
