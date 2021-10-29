class Car extends Vehicle { // <--- how to let javascript know it's a specific vehicle; type EXTENDS (the superclass)
//properties of the car
  constructor(x, y){  //to tell javascript to call the SUPERCLASS constructor; type SUPER
    super(x,y);
    this.width = 50;
    this.height = 20;  //the other ones (and methods) are deleted because it is common about a vehicle;
    this.vx = 5;       //these properties are left because they are specific about a car; different from other vehicles

    this.drunkenness = 0.2; //this determines how often the drunk car will "veer" so 20% chance
  }

//overriding methods; making the car move randomly on the y axis
//name the new behavior and (optional) add a new method
move() {
this.veer(); //when the car moves, it veers (cause it to move on y axis)

super.move(); //we also call the superclass of the veer version
}

veer(){
let r = random();
if (r < this.drunkenness){
  this.vy = random(-5,5); //it'll go up or down and random times
}
}

wrap(){
  super.wrap();

  if (this.y > height) {
    this.y -= height;
  }
  else if (this.y < 0){
    this.y += height;
  }
}

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
