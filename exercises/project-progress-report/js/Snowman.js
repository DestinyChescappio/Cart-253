class Snowman {
  //properties of snowman
  constructor(x, y) {
    //position
    this.x = 0;
    this.y = 765;
    //size
    this.size = 50;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //how fast
    this.speed = 8;
    //does not grow; only grows when it collects a snowball
    this.grow = false;
    //melts more when it touches fireball
    this.melt = false;
  }

  //snowman movement
  move() {
    //set to left arrow pressed at horizontal movement
    if (keyIsDown(LEFT_ARROW)) {
      //if it's set, the velocity is negative
      this.vx = -this.speed;
    }
    //otherwise it's set to the right arrow pressed
    else if (keyIsDown(RIGHT_ARROW)) {
      //if it's set, the velocity is positive
      this.vx = this.speed;
    }
    //if none of the left and right arrow keys are pressed; it stops
    else {
      this.vx = 0;
    }
    //movement set up
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

  //size decreases the more the snowman moves
  sizingMovement() {
    if (!this.grow) {
      //if it's moving, the size reduces at 0.1
      if (this.vx > 0 || this.vx < 0) {
        this.size -= 0.2;
        //snowman size is constrained from getting any smaller/bigger
        this.size = constrain(this.size, 0, 500);
      }
    }
  }

  //displaying the snowman
  //making the snowman's head, body, carrot nose be in sync when their size changes with melting or growing
  display() {
    push();
    noStroke();
    fill(255);
    // snowman body
    ellipse(this.x, this.y, this.size);

    //snowman head
    let headX = this.x;
    let headY = this.y - (2 * this.size) / 3;
    let headSize = this.size / 2;
    noStroke();
    ellipse(headX, headY, headSize);
    pop();
    //carrot nose
    push();
    noStroke();
    fill(`#FF6F00`);
    ellipse(headX + headSize / 3, headY, headSize / 2, headSize / 8);
    //hat-rect part
    fill(0);
    rectMode(CENTER);
    rect(headX, headY - headSize / 2 - 25 / 2, 15, 25);
    //hat-ellipse part
    fill(0);
    ellipse(headX, headY - headSize / 2, 35, 8);
    pop();
  }
}
