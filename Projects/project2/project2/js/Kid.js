class Kid {
  constructor(x, y, kidColor) {
    this.x = x;
    this.y = height - 18;
    this.width = 25;
    this.height = 35;
    this.vy = 0;
    this.vx = 4;
    this.speed = 4;
    //kidColor properties are located in the main script
    this.kidColor = kidColor;
    this.faceColor = {
      r: 245,
      g: 245,
      b: 220,
    };
  }

  move() {
    this.x = this.x - this.vx;
    this.y = this.y + this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }

  display() {
    push();
    //head
    noStroke();
    fill(this.kidColor.r, this.kidColor.g, this.kidColor.b);
    ellipse(this.x, this.y - 20, this.width, this.height - 10);
    //body
    ellipse(this.x, this.y, this.width, this.height);
    noStroke();
    //face
    fill(this.faceColor.r, this.faceColor.g, this.faceColor.b);
    ellipse(this.x, this.y - 20, this.width - 10, this.height - 20);
    pop();
  }
}
