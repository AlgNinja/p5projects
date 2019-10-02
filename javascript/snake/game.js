
function snake(length, history) {
  this.length = length;
  this.history = history;
  this.directionX = blocksize * 1;
  this.directionY = 0;
  //creates a basis for the snake including x,y, snake history, and length
  }
}

function setup() {
  createCanvas(1280, 720);
  frameRate(10);
  var blocksize = 20;
  s = new snake(3, [[blocksize * 5, blocksize * 5], [blocksize * 6, blocksize * 5], [blocksize * 7, blocksize * 5]]);
}

function draw() {
  if (keyIsDown(87) && s.directionY != blocksize) {
    s.directionX = 0;
    s.directionY = blocksize * -1;
    //w
  }
  if (keyIsDown(65) && s.directionX != blocksize) {
    s.directionX = blocksize * -1;
    s.directionY = 0;
    //a
  }
  if (keyIsDown(68) && s.directionX != blocksize * -1) {
    s.directionX = blocksize;
    s.directionY = 0;
    //d
  }
  if (keyIsDown(83) && s.directionY != blocksize * -1) {
    s.directionX = 0;
    s.directionY = blocksize;
    //s
  }

  background(220, 220, 220);
  //makes background a gray color
  fill("black");
  for (i = 0; i < s.history.length; i++) {
    rect(s.history[i][0], s.history[i][1], blocksize, blocksize);
  }
}
