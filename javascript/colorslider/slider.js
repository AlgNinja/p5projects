function setup() {
createCanvas(windowWidth, windowHeight);
}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  var rslider = createSlider(0,255, 100);
  rslider.position(20, 20);
  var gslider = createSlider(0,255, 100);
  gslider.postion(20, 50);
  var bslider = createSlider(0,255, 100);
  bslider.position(20, 80);
}

