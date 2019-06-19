
function snake(length, history) {
  this.length = length;
  this.history = history;
  this.directionX = 0;
  this.directionY = blocksize * -1;
  //creates a basis for the snake including x,y, snake history, and length
  this.move() = function() {
    if (keyIsDown(87) && this.directionY != blocksize) {
      this.directionX = 0;
      this.directionY = blocksize * -1;
      //w
    }
    if (keyIsDown(65) && this.directionX != blocksize) {
      this.directionX = blocksize * -1;
      this.directionY = 0;
      //a
    }
    if (keyIsDown(68) && this.directionX != blocksize * -1) {
      this.directionX = blocksize;
      this.directionY = 0;
      //d
    }
    if (keyIsDown(83) && this.directionY != blocksize * -1) {
      this.directionX = 0;
      this.directionY = blocksize;
      //s
    }

  }
}

function setup() {
  createCanvas(1280, 720);
  frameRate(30);
  var blocksize = 20;
  s = new snake(3, [[blocksize * 5, blocksize * 5], [blocksize * 6, blocksize * 5], [blocksize * 7, blocksize * 5]]);
}

function draw() {

  background(220, 220, 220);
  //makes background a gray color
}
