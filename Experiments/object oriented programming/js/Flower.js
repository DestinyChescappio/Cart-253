//whenwe define a class, we don't need "usestrict"
//we need to tell index.HTML that this new file is part of our project
//duplicate the "my scripts" and put the file name "flower" or whatever the file is called
//now define the flower class

//1) after taking care of the html script, tell the class how to setup the properties of the flower
class Flower {
  //to tell it how to setup properties
constructor() { //when we are talking about functions in class termonology, they're called METHODS
  // pasting the flower setup js from the other script
  //placing 'this' in front of the property names
  //replace the ':' with '=' on each property name
  //instead of only commas at the end of property names, put a semicolon at the end of the comma
  this.y = random(0, height);
  this.size = 50;
  this.stemLength = 75;
  this.stemThickness = 10;
  this.petalThickness = 10;
  // Color information
  this.stemColor = {
    r: 50,;
    g: 150,;
    b: 50
  };
  this.petalColor = {
    r: 200,;
    g: 50,;
    b: 50
  };
  this.centreColor = {
    r: 50,;
    g: 0,;
    b: 0
  }
//the other thing we do with the flower is we display it
//copy and paste and do the same thing
  };
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
}
//this is the complete class deifinition for the flower
//back to the other script, we no longer need the displayFlower function and the createFlower function
//in the other scipt, how do we create a flower out of this class defintiion? (since it was deleted in the flower function)
