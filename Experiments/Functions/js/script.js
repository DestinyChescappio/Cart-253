
/**
Description of setup
*/
function setup() {
createCanvas(500,500);
}
/**
Description of draw()
*/
function draw() {
  background(0);

  parallels(100,100,5,1,100,1);
  parallels(50,50,10,2,20,10);
  parallels(200,200,15,7,3,20);
  parallels(312,257,20,0.5,300,1);
  //now we can draw our paralell lines anywhere because we started to use parameters ^^^
}
//parameters are variables: parameter called x and y: whenever we call the parallel functions, those numbers will called so x will be 100, and y will be 100
function parallels(x,y,numlines,lineWidth,lineHeight, lineSpacing){
  //we don't need these once we have parameters. We to make sure we use the parameters
  //let x = 50;
  //let y = 250;
  //do the loops 20 times (how many lines)
  for (let i = 0; i < numlines; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x,y,lineWidth,lineHeight);
    x = x + lineSpacing;
  }

}
