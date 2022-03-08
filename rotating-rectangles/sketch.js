const CANVAS_SIZE = 800;
const RECT_SIZE = 20;

//constant variables
const RECT_AMOUNT = CANVAS_SIZE / RECT_SIZE;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(33, 32, 30);
  translate(width / 2, height / 2);
  noStroke();
  rectMode(CENTER);
  for (let i = RECT_AMOUNT; i > 0; i--) {
    fill(i % 2 === 0 ? "rgb(33,32,30)" : 255);
    rotate(-0.025);
    rect(0, 0, RECT_SIZE * i, RECT_SIZE * i);
  }
}
