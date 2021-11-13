class FireBall {
  //properties of the fire balls
  constructor(x, y, fireBallImage) {
  //position
    this.x = x;
    this.y = y;
  //dimensions
    this.height = 40
    this.width = 40;
  //velocity
    this.vx = 0;
    this.vy = 5;
  //image used as the object
    this.image = fireBallImage;
  //not melting the snowman if it does not touch the snowman
  this.melt = false;
  }

  //moving the fireballs
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  //wrapping the fireballs
  wrap() {
    if (this.y > height) {
      this.y -= height;
    }
  }
  //displaying the fireball
  display() {
    push();
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.height,this.width);
    pop();
  }
}
