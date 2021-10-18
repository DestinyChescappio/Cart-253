/**
debugging functions
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

funtion drawCircle() {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught SyntaxError: Unexpected identifier script.js:11
//An error telling us JavaScript has seen unexpected; could be a typo
//note in Atom which uses 'syntax highlighting' to change the colors of the various key words in the program
//'function' is the wrong color for a keyword, turning white instead of purple

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drawCircle) {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught SyntaxError: Unexpected token ')' script.js:11
//the ')' is unexpected because there is no '(' before it.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drawCircle( {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught SyntaxError: Invalid destructuring assignment target script.js:11
//this error is talking about an aspect of JavaScript (destructing) we unaware of; we can eyeball the line to see the issue
 function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drawCircle({
    ellipse(width / 2, height / 2, 100);
  }


//Missing a curly bracket leads to the same kinds of errors as in any element of a program that uses curly brackets around blocks of code, e.g.
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drawCircle()
ellipse(width / 2, height / 2, 100);
}
//Uncaught SyntaxError: Unexpected identifier script.js:12
//Here the ellipse() function call is unexpected because there’s no { before it to properly start our function’s block of code
//We just need to search backward from the unexpected part to the thing that’s causing it.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drawCircle() {
  ellipse(width / 2, height / 2, 100);
//Uncaught SyntaxError: Unexpected end of input script.js:12 --> this means there's an unexpected input
//always caused by missing curly brackets


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  dawCircle();
}

function drawCircle() {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught ReferenceError: dawCircle is not defined script.js:8
//this happens when the function is called, it is spelt wrong, 'dawCircle();'


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drewCircle() {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught ReferenceError: drawCircle is not defined script.js:8
//the error happens where the name of the function is spelt wrong in our function definition
//we need to look at the function definition to correct the problem


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  drawCircle();
}

function drewCircle() {
  ellipse(width / 2, height / 2, 100);
}
//Uncaught ReferenceError: drawCircle is not defined script.js:8
//the error is when the function name is wrong in the function definition
