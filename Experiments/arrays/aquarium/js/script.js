/**
Aquarium
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let school = []; //the array is 'school' so empty square brackets is storing it in the school
let schoolSize = 10; //<-- 4 fishes is the school size (so you can replace the 4's below with school size)
                     // FINALLY THE BEAUTY OF ARRAYS ;we could change it to 10 here only and don't have to make changes anywhere else
function setup() {
  createCanvas(600, 600);
  // Create four fish, positioned randomly
//create the 'forloop' when counting from 0,1,2,3... so obviously we start at 0 and go from there
//so how many times through we do our loop since we wanna create 4 different fish
//one way we could put '<= 3' (less than or equal to 3) but we put (less than 4) because we have 4 fish
for (let i = 0; i < schoolSize; i++) { //and you want it to go up each time up to 4 (so it's 0, then 1, then 2, then 3, then 4)
let fish = createFish(random(0,width), random(0,height));
school.push(fish); //<-- can also put the push in the setup function
}  //how it shows/maps from 0,1,2,3? 'create four fish positioned randomly'
//school[i] = createFish(random(0, width), random(0, height)); //finally, this alone creates our 4 fish
}//after 'create four fish positioned randomly', we no longer need the repetativeness below!! (commented out)
//replace this is we are using a 'push' for this part (no longer need line 24)


///FACTS TO KNOW:
//the address in the square bracket is called: index (so index 1 is: [1])
//the number in the index is the fish (so fish 1 is in [1] 'index 1')
//the value we put in the array is called: element (so the 'createFish(random(0,width....)' above is an element
//HOWEVER it's still getting repeated! so use something that counts (notice how the index is counting 0,1,2,3)
//so we use 'forLoop' when counting something


// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);
//we can use arrays here too!

for (let i = 0; i < school.length; i++){ //<-- "school.length" is the length property of an array. So it knows how many things are in that array (so it's 4)
  moveFish(school[i]);                     //^^ why use length property of an array? because we already used 'schoolSize' like shown above
  //making fish display & move                                         //we could use '10' fish as the new length but we don't change anything here but the contents above ^^ in the 'set up'
  displayFish(school[i]);
}
}

//THIS WON'T ALWAYS WORK (ARRAYS) because: sometimes written programs where we might want to move all of the fish before display the fish

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

//now we have arrays, we can add fish by using an action like mouse pressed
function mousePressed(){
  let fish = createFish(mouseX,mouseY);
  //how to get it in the array? we can use the function 'push' that arrays can used
  //the function 'push' is related to what we know with the regular (push/pop)
  school.push(fish); //<-- so the push function is gonna take what we give it in its paranthesis '()' and put it inside the 'school' array
                     //so where will it put in the 'school'? at the end of the array; so at index 4
}
