class Kids {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.vy = 0;
    this.vx = 4;
    this.speed = 4;
    //kidColor properties are located in the main script
    this.kidColor = kidColor;
  }

  move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }

  display() {
    push();
    noStroke();
    fill();
    pop();
  }
}
