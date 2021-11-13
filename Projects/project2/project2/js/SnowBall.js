class SnowBall {
  //properties of the many snowballs
  constructor(x, y) {
  //position
    this.x = x;
    this.y = y;
  //size
    this.size = 30;
  //velocity
    this.vx = 0;
    this.vy = 5;
  //not collected when it's not in contact with the snowman
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
  //if not collected, it's displayed 
    if (!this.collected) {
      push();
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }
}
