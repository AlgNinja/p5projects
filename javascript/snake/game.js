function snake(length, history) {
  this.bodyLength = length;
  this.bodyHistory = history;
  this.directionX = 20;
  this.directionY = 0;
  //creates a basis for the snake including x,y, snake history, and length
}

function setup() {
  createCanvas(1280, 720);
  
  frameRate(10);
  stroke(255, 255, 255);
  s = new snake(3, [[640, 360], [660, 360], [680, 360]]);
}

function draw() {
  if (keyIsDown(87) && s.directionY != 20) {
    s.directionX = 0;
    s.directionY = -20;
    //w
  }
  if (keyIsDown(65) && s.directionX != 20) {
    s.directionX = -20;
    s.directionY = 0;
    //a
  }
  if (keyIsDown(68) && s.directionX != -20) {
    s.directionX = 20;
    s.directionY = 0;
    //d
  }
  if (keyIsDown(83) && s.directionY != -20) {
    s.directionX = 0;
    s.directionY = 20;
    //s
  }

  background(220, 220, 220);
  //makes background a gray color
  fill("black");
  for (i = 0; i < s.bodyHistory.length; i++) {
    rect(s.bodyHistory[i][0], s.bodyHistory[i][1], 20, 20);
  }
}
