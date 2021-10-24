//when we define a class, we don't need "usestrict"
//we need to tell index.HTML that this new file is part of our project
//duplicate the "my scripts" and put the file name "flower" or whatever the file is called
//now define the flower class

//1) after taking care of the html script, tell the class how to setup the properties of the flower
class Flower {
  //to tell it how to setup properties

constructor(x, y, size, stemLength, petalColor) { //when we are talking about functions in class termonology, they're called METHODS
//putting parameters inside the paranthesis '()' with "x, y, size, etc"
  // pasting the flower setup js from the other script
  //placing 'this' in front of the property names
  //replace the ':' with '=' on each property name
  //instead of only commas at the end of property names, put a semicolon at the end of the comma
  this.x = x;
  this.y = y; //if we want the x and y to set our properties, we need to use them here
  this.size = size; //the same with other parameters (stemLength and petalColor below)...
  this.maxSize = size;
  this.stemLength = stemLength;
  this.stemThickness = 10;
  this.petalThickness = 10;
  this.maxPetalThickness = 10;
  // Color information
  this.stemColor = {
    r: 50,
    g: 150,
    b: 50
  };
  this.petalColor = petalColor;    //replace the js (r,g,b) info with "petalColor" properties corresponding with the constructor

  this.centreColor = {
    r: 50,
    g: 0,
    b: 0
  };
//to have the flowers shrink then disappear
this.alive = true;

//the other thing we do with the flower is we display it
//copy and paste and do the same thing
  }

//to make it shrink and eventually die:
  //to make it shrink. Put a method called 'shrink'
  shrink(){
    let shrinkage = random(0,0.1);
    this.size = this.size - shrinkage;
    this.petalThickness = this.petalThickness - shrinkage/10;

  //did this kill the flower?
  if (this.size <= 0 || this.petalThickness <= 0) {
  this.alive = false; //then it's dead
} // to make the flowers shrink and eventually die visually, we put it in function draw in the other script (script.js)
  }

  pollinate() {
    //flower grows at a random rate
    let growth = random(0,0.5);
    //add that growth amounth to the size
    this.size = this.size + growth;
    this.petalThickness = this.petalThickness + growth/10; //divided by 10 because we don't want the petal to get too big too fast
//constrain the flower from getting too big
this.size = constrain(this.size,0,this.maxSize);
this.petalThickness = constrain(this.petalThickness,0,this.maxPetalThickness);
  }

//write out the method name
//we don't have parameter called "flower" so we replace it with "this"
//"this" always refers to the flower
display() {
  //Draw a line for the stem
  push();
  strokeWeight(this.stemThickness);
  stroke(this.stemColor.r,this.stemColor.b,this.stemColor.b);
  line(this.x,this.y,this.x,this.y + this.stemLength);
  //Draw a circle with a heavu putline for the flower
  strokeWeight(this.petalThickness);
  fill(this.centreColor.r,this.centreColor.g,this.centreColor.b);
  stroke(this.petalColor.r,this.petalColor.g,this.petalColor.b);
  ellipse(this.x,this.y,this.size);
  pop();
}
//to make the flowers react (p5 events)
mousePressed() {
  //whether a flower was clicked on; calculating the distance between the mouse and flower
  let d = dist(this.x,this.y,mouseX,mouseY);

  //to check if the distance is small enough to be considered a 'click' inside the flower's head
  if (d < this.size/2 + this.petalThickness){ //petalThickness doesn't need to be divided by 2 because the thickness is just how thick it is around the rim of the flower
//this means the mouse was clicked inside the head of the flower
//what is it doing? make it grow --> change the properties way at the top in 'stemlength'

//assign the stemLength to itself and add '+' how much pixels it'll grow
  this.stemLength = this.stemLength + 5;

//you cannot just change the stemLength to make it grow, you must change the 'y' position
//subtract '-' how much it'll grow to make it go upwards
this.y = this.y - 5;
}
}
//this mousePressed doesn't work. Why? because p5 doesn't call methods called 'mousepressed'
//so we will need to go back to the original script to declare the mousePressed Function to make it work
}
//this is the complete class definition for the flower
//back to the other script, we no longer need the displayFlower function and the createFlower function
//in the other scipt, how do we create a flower out of this class defintiion? (since it was deleted in the flower function)
