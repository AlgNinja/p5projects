var snakeLength = 3;
var snakeHistory = [[640, 360], [660, 360], [680, 360]];
var snakeDirX = 20;
var snakeDirY = 0;
//creates a basis for the snake including x,y, snake history, and length

function setup() {
  createCanvas(1280, 720);
  background(220, 220, 220);
  frameRate(10);
  stroke(255, 255, 255);
}

function draw() {
  if (keyIsDown(87) && snakeDirY != 20) {
    snakeDirX = 0;
    snakeDirY = -20;
    //w
  }
  if (keyIsDown(65) && snakeDirX != 20) {
    snakeDirX = -20;
    snakeDirY = 0;
    //a
  }
  if (keyIsDown(68) && snakeDirX != -20) {
    snakeDirX = 20;
    snakeDirY = 0;
    //d
  }
  if (keyIsDown(83) && snakeDirY != -20) {
    snakeDirX = 0;
    snakeDirY = 20;
    //s
  }

  background(220, 220, 220);
  //makes background a gray color
  fill("black");
  for (i = 0; i < snakeHistory.length; i++) {
    rect(snakeHistory[i][0], snakeHistory[i][1], 20, 20);
  }
}
