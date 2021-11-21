class Kids {
  constructor() {
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 25;
    this.vy = 0;
    this.vx = 4;
    this.speed = 4;
    //kidColor properties are located in the main script
    this.kidColor = kidColor;
    this.headColor = {
      r: 245,
      g: 245,
      b: 220,
    };
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
    fill(this.kidColor.r, this.kidColor.g, this.kidColor.b);
    //face

    //head
    ellipse(this.x, this.y, this.width, this.height - 10);
    //body
    ellipse(this.x, this.y, this.width, this.height);
    pop();
  }
}
