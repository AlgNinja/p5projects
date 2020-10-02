s=true;setup=()=>createCanvas(windowWidth, windowHeight);windowResized=()=>resizeCanvas(windowWidth, windowHeight);draw=()=>s?(background(0, 0, 0),s=false):(background(255, 255,255),s=true)
