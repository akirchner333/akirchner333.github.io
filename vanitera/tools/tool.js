class Tool{
	constructor(){
	}

	draw(){}
	mousePressed(event){}
	mouseClicked(){
		console.log("Running default super class mouseClicked");
	}
	mouseMoved(){}
	mouseReleased(){}
	keyPressed(){}

	isMouseWithinCanvas() {
	  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
	}
}