
let bgColor = 0;
let ellipseColor = 0;
let squareColor = 0;

function setup() { 
  createCanvas(400, 400);
	bgColor = random(255);
	ellipseColor = random(255);
	squareColor = random(255);
	rectMode(CENTER);
} 

function draw() { 
  background(bgColor);
	noStroke();
	fill(ellipseColor);
	ellipse(0.33 * width, height * 0.5, 100, 100);
	noStroke();
	fill(squareColor);
	rect(0.67 * width, height * 0.5, 100, 100);
  if (mouseIsPressed) {
    bgColor = color(random(255), random(255), random(255));
		ellipseColor = color(random(255), random(255), random(255));
		squareColor = color(random(255), random(255), random(255));
  }
}

function mousePressed() {
	
}