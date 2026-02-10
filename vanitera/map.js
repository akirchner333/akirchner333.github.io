let pat, mar;
function preload(){
	pat = loadImage("Patlania.png")
	mar = loadImage("Maraga.png")
}

let panZoom;
let tool;
let whichMap = true;
function setup(){
	const c = createCanvas(windowWidth, windowHeight-35);
	// const c = createCanvas(pat.width, pat.height, SVG)
	c.parent("#canvas")
	panZoom = new Zoom(pat.width, pat.height)
	panZoom.zoom = 1

	tool = new HexSelect()

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

	document
		.getElementById("open-instructions")
		.onclick = (event) => {
			const instructions = document.getElementById("instructions");
			if(instructions.classList.contains("invisible")){
				instructions.classList.remove("invisible")
			}else{
				instructions.classList.add("invisible")
			}
			
			event.stopPropagation();
			return false;
		}

	document
		.getElementById("close-instructions")
		.onclick = (event) => {
			document.getElementById("instructions").classList.add("invisible")
			
			event.stopPropagation();
			return false;
		}
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

	tool.draw();
}

function mouseClicked(event){
	tool.mouseClicked(event);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight-35)
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
	tool.mouseReleased()
  dragging = false;
}

function mouseMoved(){
	if(tool){
		tool.mouseMoved();	
	}
}

function mouseDragged() {
  if (dragging && mouseButton != LEFT) {
    panZoom.updateOffset(pmouseX - mouseX, pmouseY - mouseY);
  }else{
  	tool.mouseMoved();
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

function keyPressed(){
	tool.keyPressed();
}