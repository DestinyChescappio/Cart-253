/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
//a variable witha js object that will keep track our garden's properties; the array of flowers in the garden

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 50,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};


/**
Description of setup
*/
function setup() {
createCanvas(600,600);

// Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
//setting temporary parameters --> these variables will be used as arguments
let x = random(0, width);
let y = random (0, height);
let size = random(50,80);
let stemLength = random(50,100);
let petalColor = {
  r: random(100,255),
  g: random(100,255),
  b: random(100,255)
}     //this way these variables can be used inside the "Flower" below

    // Create a new flower
    let flower = new Flower(x, y, size, stemLength, petalColor); //now that the createFlower was deleted after making the class in the flower js.,
//after the class was created, replace the "createFlower" with "new" (space) "Flower"
//the new "Flower" calls the constructor from the other script (Flower.js)
//whenever the constructor is used/called in this js, write: new (space) "name-of-the-class"
//same goes for the displayFlower function bellow......
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }
}

/**
Description of draw()
*/
  // draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    //rather than directly always displaying and shrinking the flower, we first check if the flower is alive
    if (flower.alive) {
    //if it's alive,then it will shrink and display the flower
    //before we display the flower, we tell it to shrink (call its shrink method)
    flower.shrink();

    flower.display(); //this flower has a method of displaying itself so...
    //since the function was deleted, same as the "createFlower" function,
    //we replace "displayFlower" called function and type out the "(the variable that has the flower in it).(methods)" so: flower.display();
    //this tells the method (display) from the other js, (Flower.js) to do whatever it's doing here in this js file
    }
  }
}
//we can start to write: Classes.
//A class is a code that describes how some kind of object behaves (what are the properties & functions of that obejct)
//A class is just the template that describes how an object works
//for good practice, we put the classes in a separate file (right click on js folder;select a new file)

//to declare the p5 event for the flower script
function mousePressed() {
//making the for loop with the flowers array
  for (let i = 0; i < garden.flowers.length; i++) {
let flower = garden.flowers[i];
//tell that flower the mouse was pressed
flower.mousePressed();
  }
}
