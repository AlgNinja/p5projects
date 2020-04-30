let bubble = [];

class Bubble {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.speedX = 8;
    this.speedY = 8;
  }
  move() {
   this.x += this.speedX;
   this.y += this.speedY;
  }
  show() {
    fill(0, 60, 255);
    circle(this.x, this.y, 30)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < 2; i++) {
    bubble[i] = new Bubble();
  }
}

function draw() {
  background(220);
  for(let i = 0; i < 2; i++) {
    bubble[i].move();
    bubble[i].show();
    if(bubble[i].x > windowWidth - 15 || bubble[i].x < 15) {
      bubble[i].speedX *= -1;
    }
    if(bubble[i].y > windowHeight - 15|| bubble[i].y < 15) {
      bubble[i].speedY *= -1;
    }
  }
}
