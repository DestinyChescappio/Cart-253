/**
Dodging Covid-19
Destiny Chescappio

COVID-19, represented by a red circle, will move from the left side of the canvas to the right at a random y position. Each time it reaches the right side, it will reset to the left at a random y position. The user will control their own circle with the mouse position. If the COVID-19 circle touches the user circle, everything stops! In the background we see random static for visual flair and we don’t see the mouse cursor.
*/


/**
Creating COVID-19 circle and setting up canvas
*/
let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
  };
    let user = {
      x: 250,
      y: 250,
      size: 100,
      fill: 255
};
//setting up the canvas
function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

}
/**
drawing background, moving COVID-19, & drawing COVID-19
*/

function draw() {
  background(0);

  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

//resetting COVID-19 to the left
  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);

  }
  //User movement
  user.x = mouseX;
  user.y = mouseY;

//COVID-19 fill property
  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
noStroke();

//display user
fill(user.fill);
ellipse(user.x,user.y,user.size);

ellipse(covid19.x,covid19.y,covid19.size);


}
