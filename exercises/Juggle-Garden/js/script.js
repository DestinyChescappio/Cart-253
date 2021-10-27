/**
E5: Catch the Chainsaws!
Destiny Chescappio

Catch all the chainsaws to prevent serious injury. If you miss any, your fingers are gone!
Using the left and right arrow keys, you can move the paddle to catch the tossing chainsaws.
*/

"use strict";
let state = `title`;

let gravityForce = 0.0025;

let paddle;

let chainsaws = [];
let numChainsaw = 3;

let numBounces = 0;


/**
creating the canvas, calling the paddle class, making a forloop for the number of chainsaws displayed
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //calling the class Paddle
  paddle = new Paddle(300, 20);

  //making a forloop that counts the numChainsaw
  for (let i = 0; i < numChainsaw; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let chainsaw = new Chainsaw(x, y);
    chainsaws.push(chainsaw);
  }
}


/**
drawing what happens from the title page, simulation, and winner page
*/
function draw() {
  background(0);
  //displaying what happens from the title, to simulation,losing and winning page
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `survive`) {
    winner();
  }
  if (state === `title`) {
    title();
  }

}

//setup of title page
function title() {
  fill(255, 0, 0);
  textFont(`krungthep`);
  textStyle(BOLD);
  textSize(80);
  textAlign(CENTER, CENTER);
  text(`Juggle the chainsaws!`, width / 2, height / 2);

  //simulation mission description for user
  fill(255);
  textFont(`arial`);
  textStyle(NORMAL);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`You must bounce 3 chainsaws with your paddle, miss any, bye-bye fingers🖐🏼`, width / 2, height / 2 + 100);

  //Instructions to start simulation
  fill(255);
  textFont(`arial`);
  textStyle(NORMAL);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`Use LEFT & RIGHT ARROW KEYS to move your paddle. Click anywhere to start`, width / 2, height / 2 + 200);
}

//simulation starts when mouse is pressed at title page
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

//what happens in the simulation
function simulation() {

  //paddle movement & display calls
  paddle.move();
  paddle.display();

  //forloop counting up to length of array
  for (let i = 0; i < chainsaws.length; i++) {
    let chainsaw = chainsaws[i];
    if (chainsaw.active) { //chainsaw is active, if dropped,they are not 'active'
      chainsaw.gravity(gravityForce);
      chainsaw.move();
      let bounced = chainsaw.bounce(paddle);
      if (bounced) {
        numBounces++;
      }

      //displaying chainsaw. Checking if chainsaw is off the screen;
      chainsaw.display();
      chainsaw.checkOffScreen();
    }
  }

  //forloop for ending
  for (let i = 0; i < chainsaws.length; i++) {
    let chainsaw = chainsaws[i];
    //if chainsaw is active, loop will stop (breaks)
    if (chainsaw.active) {
      break;
    }
  }
}

//setup for winning page
function winner() {
  fill(0, 255, 0);
  textFont(`krungthep`);
  textSize(80);
  text(`You didn't saw your fingers off! Great job😁`, width / 2, height / 2);
}
