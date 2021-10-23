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
  numFlowers: 20,
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
    // Create a new flower
    let flower = createFlower();
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }
}

// createFlower()
// Creates a new JavaScript Object describing a flower and returns it
function createFlower() {
  // Create our object
  let flower = {
    // Position and size information
    x: random(0, width),
    y: random(0, height),
    size: 50,
    stemLength: 75,
    stemThickness: 10,
    petalThickness: 10,
    // Color information
    stemColor: {
      r: 50,
      g: 150,
      b: 50
    },
    petalColor: {
      r: 200,
      g: 50,
      b: 50
    },
    centreColor: {
      r: 50,
      g: 0,
      b: 0
    }
  };
  return flower;
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
    displayFlower(flower);
  }
}


function displayFlower(flower) {
  push();
  //draw a line for the stem
  strokeWeight(flower.stemThickness);
  stroke(flower.stemColor.r,flower.stemColor.b,flower.stemColor.b);
  line(flower.x,flower.y,flower.x,flower.y + flower.stemLength);
  //Draw a circle with a heavu putline for the flower
  strokeWeight(flower.petalThickness);
  fill(flower.centreColor.r,flower.centreColor.g,flower.centreColor.b);
  stroke(flower.petalColor.r,flower.petalColor.g,flower.petalColor.b);
  ellipse(flower.x,flower.y,flower.size);
  pop();
}
