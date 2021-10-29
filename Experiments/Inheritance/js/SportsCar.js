class SportsCar extends Car {
//the sportscar extends the car class while car class extends the vehicle class
  constructor(x,y) {
    super(x,y);
    //making the sports car faster than the car.js
    this.vx = 15;
  }
  display() {
    super.display();
    //drawing racing stripes; different from the car.js
    push();
    rectMode(CENTER);
    fill(255,255,0);
    noStroke();
    rect(this.x, this.y - this.height/10, this.width, this.height/20);
    rect(this.x, this.y + this.height/10, this.width, this.height/20);
    pop();
  }
}
