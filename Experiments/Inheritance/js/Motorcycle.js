class Motorcycle extends Vehicle {

  //properties of the motorcycle
    constructor(x, y){
      super(x,y);
      this.width = 30;
      this.height = 10;
      this.vx = 10;
    }

  //displaying the motorcycle
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255,255,0);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

}

//NOTES ON INHERITANCE:

//both objects look identical (because their methods/properties are copy pasted before)
//Both are vehicles but different; and a vehicle has those shared properties/methods/abilities
//We must define what a vehicle is so we can collect this common code into one place --> what INHERITANCE is for
//Inheritance allows us to define a class like a vehicle that other classes like car, motorcycle,truck,scooter, inherate from
//Those specific vehicles get all their properties/methods and they can make their own specific version of that overall idea

//The Vehicle, the thing that car and motorcycle are versions of, is called a SUPER-CLASS/PARENT-CLASS
//The motorcycle and car that inherate from the vehicle are called SUB-CLASSES/CHILD-CLASSES

//NOTES ON OVERRIDING METHODS:
//we want some vehicles to looks they are driven randomly (like a drunk driver)
//However, editing the move method would have all cars to move the same
//
