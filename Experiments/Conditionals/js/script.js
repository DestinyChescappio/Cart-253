let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}

function setup() {
  createCanvas(500,500);


}

function draw() {
  background(0);
  noStroke();
  fill(100,200,100);

let x = caterpillar.x;

ellipse(x,caterpillar.y,caterpillar.segmentSize);
x = x + 40;


}
