class Ground {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = 900;
    this.height = 50;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
  }
}
