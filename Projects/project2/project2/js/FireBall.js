class FireBall {
  //properties of the fire balls
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 40;
    this.vx = 0
    this.vy = 5;
    this.kill = false;

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
    noStroke();
    fill(255, 80, 0);
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }
}
