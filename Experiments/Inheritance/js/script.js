/**
Inheritance: Car
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
"use strict";
//cars setup
let cars = [];
let numCars = 10;

//motorcycle setup
let motorcycles = [];
let numMotorcycles = 10;

/**
Description of setup
*/
function setup() {
  createCanvas(600,600);
//making a forloop of cars
  for (let i = 0; i < numCars; i++) {
    let x = random (0,width);
    let y = random (0,height);
    let car = new Car (x, y);
    cars.push(car);
  }
//making a forloop of motorcycles
for (let i = 0; i < numMotorcycles; i++) {
  let x = random (0,width);
  let y = random (0,height);
  let motorcycle = new Motorcycle (x, y);
  motorcycles.push(motorcycle);
}
}

/**
Description of draw()
*/
function draw() {
  background(0);
//drawing the forloop for the cars; give me the current car and I'll store it in this variable
for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
//calling the methods
car.move();
car.wrap();
car.display();
  }

//drawing the forloop for the motorcycles; give me the current motorcycle and I'll store it in the variable
for (let i = 0; i < motorcycles.length; i++) {
  let motorcycle = motorcycles[i];
//calling the methods
motorcycle.move();
motorcycle.wrap();
motorcycle.display();
}
}
