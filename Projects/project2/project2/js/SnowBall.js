class SnowBall {
  //properties of the many snowballs
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.vx = 0;
    this.vy = 5;
    this.collected = false;
  }

  //moving the snowballs
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  //wrapping the snowballs
  wrap() {
    if (this.y > height) {
      this.y -= height;
    }
  }

  //displaying the snowball
  display() {
    if (!this.collected) {
      push();
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }
}
