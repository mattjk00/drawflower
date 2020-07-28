let r = 5;
let theta = 0;
let x = 0;
let y = 0;
let size;
let c;
let z = 9;

function setup() {
  createCanvas(600, 800);
  background(color(253, 281, 292));
  size = random(30, 50);
  c = color(random(100, 255), random(80, 150), random(85, 175));
  frameRate(5000);
  cx = width/2;
  cy = height/2;
  stroke(color(50, 100, 50));
  noFill();
  bezier(cx, cy, cx - 100, cy + 100, cx + 25, cy + 200, cx + 50, cy + 500);
  z = random(3, 7);
}

function draw() {
  //background(220);
  
  theta += 0.002;
  if (theta >= 2 * PI) {
    theta = 0;
    size -= 1;
    dc = random(-15, 15);
    c = color(red(c) - dc, green(c) + dc * 2, blue(c) - dc);
    z --;
    if (z == 0) {
        z = 7;
    }
  }
  
  r = (size/10) * sin(z * theta);
  
  x = size * r * cos(theta);
  y = size * r * sin(theta);
  
  stroke(c);
  ellipse(width/2 - x, height/2 - y, 1);
}