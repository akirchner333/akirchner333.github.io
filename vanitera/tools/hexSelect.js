const upperLeftY = 1.5;
const upperLeftX = 10;
const radius = 46;
const xWider = 0.0215;
const yWider = 0.0065;
const hexesVertical = 40;
const hexesHorizontal = 60;
let zeroX, zeroY;

class HexSelect extends Tool{
	constructor(){
		super();
		this.hexes = []
		this.total = 0;
		// Playing fast and loose with global variables vs class variables
		// The question is, who will stop me?
		zeroX = upperLeftX - pat.width/2
		zeroY = upperLeftY - pat.height/2;
		for(let y = 0; y < hexesVertical; y++){
			for(let x = 0; x < hexesHorizontal; x++){
				const hex = new Hexagon(
					...this.hexCenter(x, y),
					radius,
					(y+1) + x * 100
				)
				this.hexes.push(hex)
			}
		}

		this.totalDisplay = document.getElementById("total")
		this.updateTotal()

		zeroX = upperLeftX - pat.width/2
		zeroY = upperLeftY - pat.height/2;

		document.getElementById("reset").onclick = (event) => {
			this.reset()
			event.stopPropagation();
			return false
		}
	}

	draw(){
		strokeWeight(1)
		stroke("white")
		this.hexes.forEach(h => {
			h.draw()
		});
	}

	hexCenter(x, y){
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

	reset(){
		this.hexes.forEach(h => h.reset());
		this.total = 0;
		this.updateTotal();
	}

	updateTotal(){
		this.totalDisplay.innerText = this.total;
	}

	mouseClicked(event){
		if(this.isMouseWithinCanvas()){
			this.hexes.forEach(h => {
				if(h.within(...panZoom.screenToMap(mouseX, mouseY))){
					h.toggle();
					if(h.currentColor == 0){
						this.total--;
					}else if(h.currentColor == 1){
						this.total++;
					}
				}
			});
			this.updateTotal();

			if(mouseButton != LEFT){
				event.stopPropagation()
				return false
			}
		}
	}
}