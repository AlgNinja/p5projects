let bubble = [];

class Bubble {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.random = [-5, -6, -7, -8, -9, -10, 5, 6, 7, 8, 9, 10]
    this.velocity = this.random[Math.floor(Math.random()*20)]
    this.speedX = this.velocity;
    this.speedY = this.velocity;
  }
  
  move() {
   this.x += this.speedX;
   this.y += this.speedY;
  }
  show() {
    noStroke();
    fill(50, 50, 255);
    circle(this.x, this.y, 30)

  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < 20; i++) {
    bubble[i] = new Bubble();
  }
}

function draw() {
  background(220, 100);
  for(let i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
    if(bubble[i].x + 15 > windowWidth || bubble[i].x < 15) {
      bubble[i].speedX *= -1;

    }
    if(bubble[i].y + 15 > windowHeight || bubble[i].y < 15) {
      bubble[i].speedY *= -1;
    }
  }
}
