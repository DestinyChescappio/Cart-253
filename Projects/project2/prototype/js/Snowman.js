class Snowman {
  //properties of snowman
  constructor(x, y) {
    this.x = 0;
    this.y = 765;
    this.size = 50;
    this.vx = 0;
    this.vy = 0;
    this.speed = 8;
    this.shrinking = true;
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
    //if it's moving, the size reduces at 0.1
    if (this.vx > 0 || this.vx < 0) {
      this.size -= 0.1;
    }

    //movement set up
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }

//shrink snowman every 5 pixels if left or right arrow is pressed
  //shrinkMovement(){
//if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
  //this.size = -5;
//} else if (!keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)){
  //this.size = 50;
//}

  //}

  //displaying the snowman
  display() {
    push();
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    pop();
    //snowman head
    push();
    noStroke();
    ellipse(this.x, this.y - 40, this.size - 15);
    pop();
  }
}
