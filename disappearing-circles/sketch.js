const CANVAS_SIZE = 800;
const SMALL_CIRCLE_AMOUNT = 20;
const INTERVAL = 50; //millisecond

//constant variables
const ANGLE_SLICE = 360 / SMALL_CIRCLE_AMOUNT;
const POINTER_SIZE = CANVAS_SIZE / 45;
const CIRCLE_SIZE = CANVAS_SIZE / 1.8;

let highlightAngle = 0;
let elapsedTime = 0;

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(255, 11, 0);
  stroke(0);

  //pointer
  line(
    CANVAS_SIZE / 2,
    CANVAS_SIZE / 2 + POINTER_SIZE,
    CANVAS_SIZE / 2,
    CANVAS_SIZE / 2 - POINTER_SIZE
  );
  line(
    CANVAS_SIZE / 2 + POINTER_SIZE,
    CANVAS_SIZE / 2,
    CANVAS_SIZE / 2 - POINTER_SIZE,
    CANVAS_SIZE / 2
  );
}

function draw() {
  noStroke();
  for (let i = 0; i < SMALL_CIRCLE_AMOUNT; i++) {
    var angle = i * ANGLE_SLICE;
    var x =
      CANVAS_SIZE / 2 + (CIRCLE_SIZE / 2) * Math.cos((angle * Math.PI) / 180);
    var y =
      CANVAS_SIZE / 2 + (CIRCLE_SIZE / 2) * Math.sin((angle * Math.PI) / 180);
    fill(
      angle === highlightAngle
        ? 255
        : angle === highlightAngle - 180 || angle === highlightAngle + 180
        ? 150
        : 109
    );
    circle(x, y, (CANVAS_SIZE / SMALL_CIRCLE_AMOUNT) * 1.5);
  }

  if (highlightAngle === 360) {
    highlightAngle = 0;
  }

  elapsedTime += deltaTime;
  if (elapsedTime >= INTERVAL) {
    highlightAngle += ANGLE_SLICE;
    elapsedTime = 0;
  }
}
