//to make a bee; then the bees fly randomly; then pollinate the flowers
class Bee {

  // constructor() sets up our starting properties
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.minSize = 10; // If we get smaller than this minimum we're dead
    this.maxSize = 40; //we don't want the bees to get too huge after declaring 'growthRate' property
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.shrinkRate = 0.05; // How much smaller we get each frame
    this.growRate = 0.05;
    this.jitteriness = 0.1; // How likely the bee is to change direction
    this.alive = true; // The Bee starts out alive!
  }


  // shrink() causes the bee to get smaller over time
  shrink() {
    // Shrink by reducing the size by a set amount
    this.size = this.size - this.shrinkRate;
    // Check if we're smaller than the minimum size
    if (this.size < this.minSize) {
      // If so, we're dead
      this.alive = false;
    }
  }
//to have the bees overlap and pollinate
//inside the '()' will tell what to pollinate
  tryToPollinate(flower){ //tryToPollinate method needs to be called in the main script 
    //determining the distance between the bee "this" and the flower
let d = dist(this.x,this.y,flower.x,flower.y);
//check if the bee is small enough to overlap the flower
if (d < this.size/2 + flower.size/2 + flower.petalThickness) {
  this.grow(); //calling the grow method
  flower.pollinate(); //telling the flower it got pollinated (this pollinate method needs to be added in the flower.js)
}
  }
//once the bee overalps, it will grow
grow() {
  this.size = this.size + this.growRate;
//constrain the size when it's growing
  this.size = constrain(this.size,this.minSize, this.maxSize);
} //we call the 'grow' method inside the 'tryToPollinate' method because we want the flower to grow by putting 'this' in front of it since we are in the class

  // move() moves the bee by potentially changing direction
  // and then changing position based on velocity
  move() {
    // First check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our bee onto the canvas
  display() {
    push();
    // Wings on either side
    fill(255, 255, 255);
    noStroke();
    ellipse(this.x - this.size / 2, this.y, this.size / 2);
    ellipse(this.x + this.size / 2, this.y, this.size / 2);
    pop();

    // Body
    push();
    fill(225, 225, 50);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

    // Eyes
    push();
    fill(0, 0, 0);
    noStroke();
    ellipse(this.x - this.size / 10, this.y, this.size / 10);
    ellipse(this.x + this.size / 10, this.y, this.size / 10);
    pop();
  }
}
//after writing this out/creating a new javescript project; ALWAYS go to the index.html and declare it!!
//this won't do anything in the sense it will physicaly display it; so we must include the bees in the main script
