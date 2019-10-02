var snakeLength = 3;
var snakeHistory = [[640, 360], [660, 360], [680, 360]];
var snakeDirX = 20;
var snakeDirY = 0;
var foodX = 300;
var foodY = 300;
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
  
  snakeHistory.unshift([snakeHistory[0][0] + snakeDirX, snakeHistory[0][1] + snakeDirY]);
  while (snakeHistory.length > snakeLength) {
    snakeHistory.splice(snakeHistory.length - 1, 1);
  }
  
  background(220, 220, 220);
  //makes background a gray color
  fill("black");
  for (i = 0; i < snakeHistory.length; i++) {
    for (j = 0; j < snakeHistory.length; j++) {
      if ((snakeHistory[i][0] == snakeHistory[j][0] && snakeHistory[i][1] == snakeHistory[j][1] && i != j) || snakeHistory[0][0] < 0 || snakeHistory[0][0] >= 1280 || snakeHistory[0][1] < 0 || snakeHistory[0][1] >= 720) {
        snakeHistory = [[640, 360], [620, 360], [600, 360]];
        snakeLength = 3;
        snakeDirX = 20;
        snakeDirY = 0;
      }
    }
    if (snakeHistory[i][0] == foodX && snakeHistory[i][1] == foodY) {
      snakeLength += 3;
      score += 1;
      foodX = round(random(63)) * 20;
      foodY = round(random(31)) * 20;
    }
    rect(snakeHistory[i][0], snakeHistory[i][1], 20, 20);
  }
  fill("red");
  rect(foodX, foodY, 20, 20);
}
