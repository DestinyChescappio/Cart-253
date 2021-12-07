/**
Keep Mr. Snowman Alive!
Destiny Chescappio

Move the snowman with keys and collect snowballs! snowman shrinks if snowballs
are not collected and when it moves. Snowman dies and melts away if it touches a fireball
*/

"use strict";
//title state is the beginner of the program/game
let state = "title";

//background image
let winterWonderlandImage;
//title image
let titleImage = undefined;
//game over image
let gameOverImage = undefined;
//lost magic image
let lostMagicImage = undefined;

//fire image (used for the fireballs)
let fireBallImage = undefined;

//sound is used when the snowball and snowman touches
let tingSFX = undefined;
//sound is used when the fireball and snowman touches
let ouchSFX = undefined;

//the user's object
let snowMan;

//the array of snowballs are collected
let snowBalls = [];
//how many snowballs
let numSnowBall = 20;
//how many snowballs are collected by snowman; (text will be shown on the top right corner of the game online)
let numSnowballCollected = 0;

//the array of fireballs falling
let fireBalls = [];
//how many fireballs
let numFireBall = 5;

//the array of kids running
let kids = [];
//how many kids
let numKid = 4;

//Loading:
//the fire.png image to use for the fireballs
//the sound used when a snowball is collected
function preload() {
  //background image
  winterWonderlandImage = loadImage(`assets/images/background-winterLand.jpg`);
  //title image
  titleImage = loadImage(`assets/images/title.gif`);
  //loser page image
  gameOverImage = loadImage(`assets/images/melt-snowman.gif`);
  //lost magic image
  lostMagicImage = loadImage(`assets/images/lost-magic.gif`);
  //fireball image
  fireBallImage = loadImage(`assets/images/fire.png`);

  //ting! sound when snowman touches snowball
  tingSFX = loadSound(`assets/sounds/ting.wav`);
  //ouch! sound when snowman touches fireball
  ouchSFX = loadSound(`assets/sounds/ouch.wav`);
}

//canvas & loops/calling snowman, kids & fireballs,snowballs
function setup() {
  createCanvas(windowWidth, windowHeight);
  //calling the snowman inheritance object
  snowMan = new Snowman();

  //making forloop of snowballs
  for (let i = 0; i < numSnowBall; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let snowBall = new SnowBall(x, y);
    snowBalls.push(snowBall);
  }

  //making forloop of fire balls
  for (let i = 0; i < numFireBall; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let fireBall = new FireBall(x, y, fireBallImage);
    fireBalls.push(fireBall);
  }

  //making forloop of kids
  for (let i = 0; i < numKid; i++) {
    let x = random(0, width);
    let y = random(0, height);
    //making kids 'fill' property with random colors; refer to kid.js
    let kidColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255),
    };
    //creating new kid
    let kid = new Kid(x, y, kidColor);
    kids.push(kid);
  }
}

/**
Drawing:
the title, game, and loser pages
*/
function draw() {
  background(236, 205, 255);
  if (state === `title`) {
    title();
  } else if (state === `startGame`) {
    game();
  } else if (state === `winning`) {
    winner();
  } else if (state === `gameOver`) {
    loser();
  } else if (state === `lostMagic`) {
    lostMagic();
  }
  if (state === `title`) {
  }
}

//title page displays
function title() {
  image(titleImage, width - 975, height - 630, 500, 500);
  fill(255);
  textFont(`marker felt`);
  textStyle(BOLD);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`Save Mr.Snowman!`, width / 2, height - 700);
  //instructions
  //to start game
  fill(255);
  textFont(`courier`);
  textStyle(NORMAL);
  textSize(20);
  textAlign(CENTER);
  text(
    `Press LEFT/RIGHT arrows to move & UP arrow to jump`,
    width / 2,
    height - 60
  );
  textSize(15);
  text(
    `Control Mr.Snowman and collect snowballs to survive to avoid melting from the fireballs. Be quick, the children may steal your magic hat.`,
    width / 2,
    height - 80
  );
  textSize(25);
  textStyle(BOLD);
  text(`PRESS ANY KEY TO START`, width / 2, height - 20);
}

//winner page displays
function winner() {
  imageMode(CENTER);
  image(winterWonderlandImage, windowWidth / 2, windowHeight / 2);
  image(titleImage, width / 2, height / 2, 500, 500);
  fill(255);
  textFont(`courier`);
  textStyle(BOLD);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`Mr.Snowman survived!`, width / 2, height - 700);
}

//loser page displays
function loser() {
  image(gameOverImage, width / 2, height / 2, 400, 400);
  fill(255);
  textFont(`courier`);
  textStyle(BOLD);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(`Mr.Snowman melted. Try Again!`, width / 2, height - 700);
}

//lost magic page displays
function lostMagic() {
  image(lostMagicImage, width / 2, height / 2, 500, 500);
  fill(255);
  textFont(`courier`);
  textStyle(BOLD);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(
    `Mr.Snowman's magic hat has been taken off. Try Again!`,
    width / 2,
    height - 700
  );
}

//press mouse pad/buttom to start game
function keyPressed() {
  if (state === `title`) {
    state = `startGame`;
  }
}

//what happens in the game
function game() {
  imageMode(CENTER);
  image(winterWonderlandImage, windowWidth / 2, windowHeight / 2);

  //updating behaviour of the Snowman inheritance object from snowman.js file
  updateSnowman();
  //updating behaviour of the snowball inheritance object from snowballs.js file
  updateSnowball();
  //updating behaviour of the fireball inheritance object from fireball.js file
  updateFireball();
  //updating behaviour of the kid inheritance object from kid.js
  updateKid();

  //displaying the text how many snowballs and fireballs touch snowman
  numSnowballText();
}

// updating the snowman behaviour
function updateSnowman() {
  snowMan.move();
  snowMan.display();
  snowMan.sizingMovement();
  //calling the function- when snowman dies
  snowmanDead();
  //when snowman survives
  snowmanSurvive();
}

//updating the snowball behaviour
function updateSnowball() {
  //drawing the array of snowballs
  for (let i = 0; i < snowBalls.length; i++) {
    let snowBall = snowBalls[i];
    //calling methods - move,wrap,display
    snowBall.move();
    snowBall.wrap();
    snowBall.display();
    //calling the function - collecting the snowballs
    snowballCollection(snowBall, snowMan);
    //calling the function - snowman grows when snowball touches him
    growSnowman(snowBall, snowMan);
  }
}

//updating the fireball behaviour
function updateFireball() {
  //drawing the array of fire balls using a forloop
  for (let i = 0; i < fireBalls.length; i++) {
    let fireBall = fireBalls[i];
    // calling methods- move, wrap, display
    fireBall.move();
    fireBall.wrap();
    fireBall.display();
    //calling the function 'meltSnowman' - snowman shrinks when fireball touches him
    meltSnowman(fireBall, snowMan);
  }
}

//updating the kid behaviour
function updateKid() {
  //drawing the array of kids using forloop
  for (let i = 0; i < kids.length; i++) {
    let kid = kids[i];
    //calling methods- move, wrap, display from kid.js
    kid.move();
    kid.wrap();
    kid.display();
    //losthat function called
    lostHat(kid, snowMan);
  }
}

//snowman melts and dies when his size is less than 15 px
function snowmanDead() {
  if (snowMan.size < 15) {
    //game over state triggers
    state = `gameOver`;
  }
}

//snowman survives when he collects more than 19 snowballs and the user wins
function snowmanSurvive() {
  //if the snowman collects more than 19; initially if he collects 20
  if (numSnowballCollected > 19) {
    //the winning state triggers
    state = `winning`;
  }
}

//snowball gets collected by snowman
function snowballCollection(snowBall, snowMan) {
  //check to overlapp if snowball hasn't been collected yet
  if (!snowBall.collected) {
    let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
    //snowball collects snowball & snowball disappears
    if (d < snowMan.size / 2 + snowBall.size / 2) {
      snowBall.collected = true;
      //keeping track of how many snowballs were collected
      numSnowballCollected += 1;

      //when snowball touches snowman, the 'ting!' sound triggers with its random rates
      let currentRate = random(0.3, 0.5);
      //plays random rates
      tingSFX.rate(currentRate);
      //volume is set
      tingSFX.setVolume(0.2);
      //to play it
      tingSFX.play();
    }
  }
}

//snowman grows when he touches snowball
function growSnowman(snowBall, snowMan) {
  //if both snowball and snowman touches
  let d = dist(snowMan.x, snowMan.y, snowBall.x, snowBall.y);
  //snowman size grows
  if (!snowBall.collected && d < snowMan.size / 2 + snowBall.size / 2) {
    snowMan.size += 20;
    //constraining snowman size when it grows and stops at 500 px
    snowMan.size = constrain(snowMan.size, 0, 500);
  }
}

//snowman size shrinks (melts) when it touches a fireball
function meltSnowman(fireBall, snowMan) {
  //check to overlap if fireball hasn't melted snowman
  let d = dist(snowMan.x, snowMan.y, fireBall.x, fireBall.y);
  //fireball melts snowman and snowman size shrinks
  if (d < snowMan.size / 2 + fireBall.width / 2 + fireBall.height / 2) {
    //snowman shrinks every 2 frames
    snowMan.size -= 1;
    //snowman size is constrained from getting any larger/smaller stopping at 500 px
    snowMan.size = constrain(snowMan.size, 10, 500);
    //if the snowman is melting, the sound plays once; otherwise the sound playing is false
    if (ouchSFX.isPlaying() === false) {
      ouchSFX.play();
    }
  }
}

//snowman loses magic when the kids "knock" off his hat (when the kids touch snowman)
function lostHat(kid, snowMan) {
  //check if kid and snowman touch
  let d = dist(snowMan.x, snowMan.y, kid.x, kid.y);
  if (d < snowMan.size / 2 + kid.width / 2 + kid.height / 2) {
    //hat rotates at 0.003 px
    snowMan.hatRotation += 0.01;
  }
  //if the hat rotates more than 2 px
  if (snowMan.hatRotation > 2) {
    //lost magic state triggers
    state = `lostMagic`;
  }
}

//drawing a text that notifies the user how many snowballs are collected
function numSnowballText() {
  //text located at top right corner of canvas
  fill(0);
  textFont(`forte`);
  textStyle(BOLD);
  textSize(15);
  text(`Snowballs collected: ${numSnowballCollected}`, 1250, 60);
}
