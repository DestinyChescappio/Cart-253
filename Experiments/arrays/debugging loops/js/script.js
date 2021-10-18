/**
debugging loops 
Author Name

NOTE! this work is only for notes only. This will not show up on the web!!
*/

"use strict";

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  while x <= width) {
    ellipse(x, y, size);
    x = x + size;
  }
}
//'uncaught SyntaxError: Unexpected identifier script.js:11' --> this means a parenthesis is missing on line 11

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  while (x <= width {
    ellipse(x, y, size);
    x = x + size;
  }
}
//'uncaught Syntax error: unexpected token '{' script.js:11' --> this means we need to know the syntax well enough to spot the missing ')
//this error is helpful in a way it tells us the '{' is unexpected = meaning something BEFORE it is the problem.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  while (x <= width)
    ellipse(x, y, size);
    x = x + size;
  }
}
//'Uncaught SyntaxError: Unexpected token '}' script.js:15' --> it points to line 15 which is the last '}' but the error is on line 11
//why? the '}' on line 14 now closes the code block for 'draw()' which is the last '{' --> that means the next '}' on line 15 is closing nothing
//when we see an 'unexpected }' error we should either search upward from the line for a missing '{' OR find out we have a spare '{'

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  while (x <= width) {
    ellipse(x, y, size);
    x = x + size;
}
//Uncaught SyntaxError: Unexpected end of input script.js:15 --> this error is not direct but it can help us in a way
//'unexpected end of input' means the program reaches the end of the file without finding enough '}' to close functions that are written in it
//to solve this error: we should work backwards from the bottom of the program and look for a spot that's missing '}'
//these curcly bracket errors are easier to find if we use atom-beautify

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  for (let i = 0 i < 11; i++) {
    ellipse(x, y, size);
    x = x + size;
  }
}
//Uncaught SyntaxError: Unexpected identifier script.js:11 --> this means the unexpected identifier is the second 'i' after 'let i=0'
//because it doesn't make sense to JavaScript. We need to eyeball the line and look for it.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  let x = 0;
  let y = 250;
  let size = 50;
  while (x >= 0) {
    ellipse(x, y, size);
    x = x + size;
  }
}
//you can run into loops that never end errors! this happens when we write a condition that never becomes 'false'
//this 'while loop' will never end because 'x' is always going to be greater than or equal to '0'; it starts at 0 and gets larger by 50
//however you won't see an error message because JavaScript is technically doing the right thing
