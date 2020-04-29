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
    r: 0,
    g: random(0, 55),
    b: random(100, 255),
    a: random(50, 100)
  }
  filter(BLUR, 1)
  noStroke();
  fill(color.r, color.g, color.b, color.a);
  ellipse(pos.x, pos.y, 25, 25);

}
