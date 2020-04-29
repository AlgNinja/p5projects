function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let pos = {
    x: random(0, windowWidth),
    y: random(0, windowHeight)
  }
  let color = {
    r: random(0, 255),
    g: random(0, 50),
    b: random(0, 255),
    a: 100
  }
  noStroke();
  fill(color.r, color.g, color.b, color.a);
  ellipse(pos.x, pos.y, 25, 25);

}
