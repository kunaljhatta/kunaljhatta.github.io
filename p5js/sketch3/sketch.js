function setup() {
    createCanvas(displayWidth, displayHeight);
    }
    function draw() {
    let c = color(900, 400, 30);
    if (mouseIsPressed) {
    fill(0);
    } else {
    fill(c);
    }
    ellipse(mouseX, mouseY, 80, 80);
    }