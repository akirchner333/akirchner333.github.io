// There are map coordinates, which determine where something is on the map.
// These should never change basically - things are where are on the map
// Then there are screen cordinates, which determines where on the canvas something is
// These change based on pan and zoom

class Zoom{
	constructor(mapWidth, mapHeight){
		this.xPan = this.getValue("xPan") || mapWidth/2;
		this.yPan = this.getValue("yPan") || mapHeight/2;

		this.mapWidth = mapWidth;
		this.mapHeight = mapHeight;
		this.minscale = max(width/mapWidth, height/mapHeight);
		this.zoom = this.getValue("zoom") || this.minscale;

		this.setupButtons();
	}

	setupButtons(){
		document.getElementById("zoom-in").onclick = (event) => {
			this.changeZoom(0.1)

			event.stopPropagation()
		}

		document.getElementById("zoom-out").onclick = (event) => {
			this.changeZoom(-0.1)

			event.stopPropagation()
		}
	}

	saveValue(key, value){
		localStorage.setItem(key, `${value}`)
	}

	getValue(key){
		const value = localStorage.getItem(key);
		if(value != null){
			return parseFloat(value);
		}
		return null;
	}

	changeZoom(delta){
		this.zoom += delta
		if(this.zoom < this.minscale){
			this.zoom = this.minscale
		}
		this.constrainOffset()
		this.saveValue("zoom", this.zoom);
		this.saveValue("xPan", this.xPan);
		this.saveValue("yPan", this.yPan);
	}

	screenToMap(x, y){
		return [x/this.zoom-this.xPan, y/this.zoom-this.yPan]
	}

	mapToScreen(x, y){
		return [(x + this.xPan) * this.zoom, (y + this.yPan) * this.zoom]
	}

	updateOffset(xDelta, yDelta){
		this.xPan -= xDelta;
		this.yPan -= yDelta;
		this.constrainOffset()
		this.saveValue("xPan", this.xPan);
		this.saveValue("yPan", this.yPan);
	}

	constrainOffset(){
		this.xPan = constrain(
			this.xPan, 
			width/this.zoom - this.mapWidth/2, 
			this.mapWidth/2
		);
		this.yPan = constrain(
			this.yPan,
			height/this.zoom - this.mapHeight/2,
			this.mapHeight/2
		);
	}
}