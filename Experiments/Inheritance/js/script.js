/**
Inheritance,overriding,polymorphism,chains of inheritance 
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
"use strict";
//cars setup
let vehicles = []; //for polymorphism: let's replace it with a vehicle array
let numCars = 10;
let numMotorcycles = 10; //we will also have a numMotorcycles array
let numSportsCars = 3;
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
    vehicles.push(car); //polymorphism: add the car to the vehicles array because the car is a type of vehicle
  }
//making a forloop of motorcycles
for (let i = 0; i < numMotorcycles; i++) {
  let x = random (0,width);
  let y = random (0,height);
  let motorcycle = new Motorcycle (x, y);
    vehicles.push(motorcycle); //polymorphism: we also add the motorcycles to vehicles array as well
  }

//making a forloop for the sportscars
for (let i = 0; i < numSportsCars; i++) {
  let x = random (0,width);
  let y = random (0,height);
  let sportscar = new SportsCar (x, y);
  vehicles.push(sportscar); //polymorphism: add the sportscar to the vehicles array because the car is a type of vehicle
}//we can leave draw alone for sportscar,cars,motorcycles, because they are all vehicles
}

/**
Description of draw()
*/
function draw() {
  background(0);
//now we have one array which is the vehicles (polymorphism)
//we draw the array of vehicles
for (let i = 0; i < vehicles.length; i++) {
  let vehicle = vehicles[i];
  vehicle.move();
  vehicle.wrap();
  vehicle.display();
  }
}
