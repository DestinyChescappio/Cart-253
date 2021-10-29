class Vehicle { //we will only use what a car and a motorcycle are by extension
  //properties of the car
    constructor(x, y){
      this.x = x; //it knows about the position but it gets through those parameters
      this.y = y;
      this.width = undefined; //in this case its measurements are undefined; it already knows it
      this.height = undefined;
      this.vx = 0; //velocity will be 0 because it knows about velocity but it doesn't have one
      this.vy = 0;
    }

//moving the car
move() {
  this.x +=  this.vx; //+= means:
  this.y += this.vy;
}
//having the car to wrap around the edge of the screen
wrap() {
  if (this.x > width) {
    this.x -= width; //-= means:
    }
  }

//now comes to the display method
//it will be empty because: it's to remind ourselves/others that we need this method in the subclass
//all vehicles should be displayed but the general idea of a vehicle doesn't need it; it's not a specifc vehicle
display() {
//defined this in the subclasses

  }
}
