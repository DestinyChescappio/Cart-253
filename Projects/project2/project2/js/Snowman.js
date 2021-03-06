class Snowman {
  //properties of snowman
  constructor(x, y) {
    //position
    this.x = 0;
    this.y = height - this.size / 2;
    //size
    this.size = 50;
    //velocity
    this.vx = 0;
    this.vy = 0;
    //vector force
    this.ax = 0;
    this.ay = 0;
    //how fast
    this.speed = 8;
    //does not grow; only grows when it collects a snowball
    this.grow = false;
    //melts more when it touches fireball
    this.melt = false;
    //using rotation to make hat tilt
    this.hatRotation = 0;
    //snowman is not jumping if up arrow is not pressed
    this.isJumping = false;
  }

  //snowman movement
  move() {
    //gravity occurs after up arrow is pressed and velocity is negative
    if (keyIsDown(UP_ARROW)) {
      // call the jump method
      //only jump if snowman still not jumping
      if (this.isJumping === false) {
        //jumping is true
        this.isJumping = true;
        //how much snowman jumps
        this.vy = -18;
      }
    }
    //set to left arrow pressed at horizontal movement
    if (keyIsDown(LEFT_ARROW)) {
      //if it's set, the velocity is negative
      this.vx = -5;
    }
    //otherwise it's set to the right arrow pressed
    else if (keyIsDown(RIGHT_ARROW)) {
      //if it's set, the velocity is positive
      this.vx = 5;
    }
    //if none of the left and right arrow keys are pressed; it stops
    else {
      this.vx = 0;
    }
    //movement set up
    this.x = this.x + this.vx;
    //constraining snowman from going past canvas
    this.x = constrain(this.x, 0, width);

    //snowman is jumping
    if (this.isJumping == true) {
      //how much snowman falls
      this.vy += 0.8;
      //change y
      this.y += this.vy;

      //jumping velocity is at zero and cannot 'jump'
      if (this.y >= height - this.size / 2) {
        this.vy = 0;
        this.isJumping = false;
      }
    }
    //if not jumping
    else {
      this.y = height - this.size / 2;
    }
  }

  //Instructor (Pippin) helped with this
  //size decreases the more the snowman moves
  sizingMovement() {
    if (!this.grow) {
      //if it's moving, the size reduces at 0.1
      if (this.vx > 0 || this.vx < 0) {
        this.size -= 0.07;
        //Instructor (Pippin) helped with constraining the size limit
        //snowman size is constrained from getting any smaller/bigger
        this.size = constrain(this.size, 10, 500);
      }
    }
  }

  //displaying the snowman
  //making the snowman's head, body, carrot nose be in sync when their size changes with melting or growing
  display() {
    push();
    // snowman body
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);

    //Instructor (Pippin) helped with making the head size be in sync with the body when resizing
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

    push();
    //Instructor (Pippin) helped with rotating the hat
    //hat rotate
    translate(headX, headY - headSize / 2);
    rotate(this.hatRotation);
    //hat-rect part
    fill(0);
    rectMode(CENTER);
    rect(0, 0 - 25 / 2, 15, 25);
    //hat-ellipse part
    fill(0);
    ellipse(0, 0, 35, 8);
    pop();
    pop();
  }
}
