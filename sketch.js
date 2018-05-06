xoff = 0;
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(51);

	var x = map(noise(xoff), 0, 1, 0, width);
	xoff += 0.01;
	ellipse(x, 200, 24, 24);

}