/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let cars = [];
let numCars = 10;

//
function setup() {
createCanvas(800,600);
//making forloop of cars
for (let i = 0; i < numCars; i++){
  let x = random(0,width);
  let y = random(0,height);
  let car = new Car (x,y);
  cars.push(car);
}
}


/**
Description of draw()
*/
function draw() {
background(155);
//drawing the array of cars
for (let i = 0; i < cars.length; i++){
  let car = cars[i];
  car.move();
  car.wrap();
  car.display();
}
}
