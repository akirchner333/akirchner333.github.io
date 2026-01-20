// How big the image is displayed. Smaller the scale, smaller the image
const scale = 0.8
// Shifts the whole hex grid. Adjust this to make the hexes line up with the map
const upperLeftX = 10 * scale;
const upperLeftY = 0 * scale;
// How big the hexes are
const radius = 46 * scale;
// The hexes are slightly wider than they're tall
// This number makes sure they properly tile over the map
const xWider = 0.0215;
// How many hexes you want in each row and how many columns of hexes you want
const hexesVertical = 40;
const hexesHorizontal = 60;

let pat, mar;
function preload(){
	pat = loadImage("Patlania.png")
	mar = loadImage("Maraga.png")
}

let offsetX = 0;
let offsetY = 0;
const hexes = []
let total = 0
let whichMap = true
function setup(){
	createCanvas(windowWidth, windowHeight-30);
	for(let y = 0; y < hexesVertical; y++){
		for(let x = 0; x < hexesHorizontal; x++){
			hexes.push(new Hexagon(
				...hexCenter(x, y),
				radius,
				(y+1) + x * 100
			))
		}
	}

	document.getElementById("reset").onclick = (event) => {
		hexes.forEach(h => h.reset());
		total = 0;
		updateTotal();
		event.stopPropagation();
		return false
	}

	document.getElementById("switch").onclick = (event) => {
		whichMap = !whichMap;
		event.stopPropagation();
		return false
	}

	document
		.getElementsByTagName("canvas")[0]
		.addEventListener("contextmenu", e => {
			e.preventDefault()
		})

	updateTotal()
	pat.resize(pat.width * scale, pat.height * scale)
	mar.resize(mar.width * scale, mar.height * scale)
}

function hexCenter(x, y){
	const xOffset = radius * (1.5 + xWider)
	const yOffset = radius/0.575
	if(x % 2 == 0){
		return [x * xOffset, y * yOffset];
	}
	return [x * xOffset, y * yOffset + yOffset/2];
}

function draw(){
	translate(offsetX, offsetY)
	image(whichMap ? pat : mar, 0, 0, image.width/10, image.height/10)
	translate(upperLeftX, upperLeftY)
	strokeWeight(1)
	hexes.forEach(h => {
		h.draw()
	});

	// if(keyIsPressed){
	// 	if(key == "d"){
	// 		offsetX = constrain(offsetX - 1, -pat.width + width, 0);
	// 	}
	// 	if(key == "a"){
	// 		offsetX = constrain(offsetX + 1, -pat.width + width, 0);
	// 	}
	// 	if(key == "w"){
	// 		offsetY = constrain(offsetY + 1, -pat.height + height, 0);
	// 	}
	// 	if(key == "s"){
	// 		offsetY = constrain(offsetY - 1, -pat.height + height, 0);
	// 	}
	// }
}

function updateTotal(){
	document.getElementById("total").innerText = total;
}

function mouseClicked(event){
	hexes.forEach(h => {
		if(h.within(mouseX-upperLeftX-offsetX, mouseY-upperLeftY-offsetY)){
			h.toggle();
			if(h.currentColor == 0){
				total--;
			}else if(h.currentColor == 1){
				total++;
			}
		}
	});
	updateTotal();
	if(mouseButton != LEFT){
		event.stopPropagation()
		return false
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight-30)
}

let dragging = false;
function mousePressed(event) {
  if (isMouseWithinCanvas() && mouseButton != LEFT) {
    dragging = true;
  }
}

function touchStarted(){
	if(isMouseWithinCanvas()){
		dragging = true;
	}
}

function mouseReleased() {
  dragging = false;
}

function mouseDragged() {
  if (dragging && mouseButton != LEFT) {
    // Update the canvas position, but keep within bounds
    offsetX = constrain(offsetX - (pmouseX - mouseX), -pat.width + width, 0);
    offsetY = constrain(offsetY - (pmouseY - mouseY), -pat.height + height, 0);

  }
}

function touchMoved(){
	if (dragging) {
    // Update the canvas position, but keep within bounds
    offsetX = constrain(offsetX - (pmouseX - mouseX), -pat.width + width, 0);
    offsetY = constrain(offsetY - (pmouseY - mouseY), -pat.height + height, 0);
  }
}

function isMouseWithinCanvas() {
  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}