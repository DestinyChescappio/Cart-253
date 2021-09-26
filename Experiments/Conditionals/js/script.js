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

  ellipse(caterpillar.x,caterpillar.y,caterpillar.segmentSize);


}
