function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
  
var rslider = createSlider(0,255, 100);
rslider.position(20, 20);
var gslider = createSlider(0,255, 100);
gslider.postion(20, 50);
var bslider = createSlider(0,255, 100);
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

