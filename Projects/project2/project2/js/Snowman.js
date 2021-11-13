class Snowman {
  //properties of snowman
  constructor(x, y) {
    this.x = 0;
    this.y = 765;
    this.size = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 8;
    this.grow = false;
    this.melt = false;
  }
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

  sizingMovement() {
    if (!this.grow){
  //if it's moving, the size reduces at 0.1
    if (this.vx > 0 || this.vx < 0) {
      this.size -= 0.07;
    }
  }
}

  //displaying the snowman
  display() {
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    //snowman head
    noStroke();
    ellipse(this.x, this.y - 40, this.size - 15);
    pop();

    //carrot nose
    push();
    noStroke();
    fill(`#FF6F00`);
    ellipse(this.x+8,this.y-40,20,8);
    //hat-rect part
    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y - 70,15,25);
    //hat-ellipse part
    fill(0);
    ellipse(this.x, this.y - 55,35,8);
    pop();
}
}
