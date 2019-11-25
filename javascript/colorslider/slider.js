let rslider, gslider, bslider;
function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
  
rslider = createSlider(0,255, 100);
rslider.position(20, 20);
gslider = createSlider(0,255, 100);
gslider.position(20, 50);
bslider = createSlider(0,255, 100);
bslider.position(20, 80);
  
}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  
  
  const r = rslider.value();
  const g = gslider.value();
  const b = bslider.value();
  
  background(r, g, b);
}

