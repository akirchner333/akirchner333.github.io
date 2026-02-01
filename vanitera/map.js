const upperLeftY = 1;
const upperLeftX = 10;
const radius = 46;
const xWider = 0.0215;
const yWider = 0.0065;
const hexesVertical = 40;
const hexesHorizontal = 60;
let zeroX, zeroY;

let pat, mar;
function preload(){
	pat = loadImage("Patlania.png")
	mar = loadImage("Maraga.png")
}


let panZoom;
const hexes = [];
let total = 0
let whichMap = true;
function setup(){
	const c = createCanvas(windowWidth, windowHeight-30);
	c.parent("#canvas")
	panZoom = new Zoom(pat.width, pat.height)

	zeroX = upperLeftX - pat.width/2
	zeroY = upperLeftY - pat.height/2;

	for(let y = 0; y < hexesVertical; y++){
		for(let x = 0; x < hexesHorizontal; x++){
			const hex = new Hexagon(
				...hexCenter(x, y),
				radius,
				(y+1) + x * 100
			)
			hexes.push(hex)
		}
	}

	updateTotal()

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
}

function draw(){
	background("white")
	scale(panZoom.zoom)
	translate(panZoom.xPan, panZoom.yPan)

	imageMode(CENTER)
	image(
		whichMap ? pat : mar, 0, 0, 
		pat.width, 
		pat.height
	)
	strokeWeight(1)
	stroke("white")
	hexes.forEach(h => {
		h.draw()
	});
}

function hexCenter(x, y){
	const xOffset = radius * (1.5 + xWider);
	const yOffset = radius * (sqrt(3) + yWider);
	if(x % 2 == 0){
		return [
			x * xOffset + zeroX,
			y * yOffset + zeroY];
	}
	return [
		x * xOffset + zeroX, 
		y * yOffset + yOffset/2 + zeroY
	];
}

function updateTotal(){
	document.getElementById("total").innerText = total;
}

function mouseClicked(event){
	if(isMouseWithinCanvas()){
		hexes.forEach(h => {
			if(h.within(...panZoom.screenToMap(mouseX, mouseY))){
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
    panZoom.updateOffset(pmouseX - mouseX, pmouseY - mouseY);
  }
}

function touchMoved(){
	if (dragging) {
    panZoom.updateOffset(pmouseX - mouseX, pmouseY - mouseY);
  }
}

function isMouseWithinCanvas() {
  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}

function mouseWheel(event){
	panZoom.changeZoom(-event.delta/500)
}