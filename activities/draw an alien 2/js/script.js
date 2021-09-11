/**************************************************
Draw an Alien
Destiny Chescappio

drawing an alien activity 2
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(640, 480);
background(255, 0, 140);
noStroke();

//draw body
fill(5,255,5);
ellipse(320,480,100,200);

//draw head
fill(5,255,5);
ellipse(320,240,200,300);

//draw eyes
fill(0,0,0);
ellipse(265,280,80,40);
ellipse(375,280,80,40);

//draw nostrils
fill(0,0,0);
ellipse(300,330,10,5);
ellipse(340,330,10,5);

//draw mouth
stroke(255,0,0);
strokeWeight(10);
rectMode(CENTER);
rect(320,360,40,20);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
