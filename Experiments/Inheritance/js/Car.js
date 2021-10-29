class Car extends Vehicle { // <--- how to let javascript know it's a specific vehicle; type EXTENDS (the superclass)
//properties of the car
  constructor(x, y){  //to tell javascript to call the SUPERCLASS constructor; type SUPER
    super(x,y);
    this.width = 50;
    this.height = 20;  //the other ones are deleted because it is common about a vehicle;
    this.vx = 5;       //these properties are left because they are specific about a car; different from other vehicles
  }

//move method is not needed because it is already common with any vehicle (SUPERCLASS)
//same as the wrap method

//displaying the car
display() {
  push();
  rectMode(CENTER);
  noStroke();
  fill(255,0,0);
  rect(this.x,this.y,this.width,this.height);
  pop();
}
}
