"use strict";

/**************************************************
Drawing experiments
Destiny Chescappio

experimenting with p5's drawing and color functions
**************************************************/
//setup()
//
//draws a face on the canvas
function setup() {
  createCanvas(500,500);

// set the background to mint
background(191,255,199);

//draw a flesh colored head
fill(250,200,200);
ellipse(250,250,200,200);

//draw the eyes the color black
fill(0);
ellipse(200,250,30,30);

//draw the mouth
strokeweight(10);
line(200,300,300,300);
}

// draw()
//
// does nothing
function draw() {

}
