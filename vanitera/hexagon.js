class Hexagon{
	constructor(x, y, radius, number){
		this.x = x;
		this.y = y;
		this.number = number
		this.radius = radius;
		this.vertices = [];
		this.colors = [
			color(0, 0, 0, 0),
			color(255, 0, 0, 100),
			color(0, 0, 255, 200)
		];
		this.currentColor = 0;
		for(var i = 0; i < 6; i++){
			this.vertices.push({
				x: x + radius * cos(i * TAU/6),
				y: y + radius * sin(i * TAU/6)
			});
		}
	}

	draw(){
		stroke("white");
		fill(this.colors[this.currentColor])
		beginShape()
		for(var i = 0; i < 6; i++){
			vertex(this.vertices[i].x, this.vertices[i].y)
		}
		endShape(CLOSE)
	}

	toggle(){
		this.currentColor = (this.currentColor + 1) % this.colors.length;
	}

	reset(){
		this.currentColor = 0;
	}

	within(x, y){
		// if(x < min(this.vertices.map(v => v.x))) return false;
		// if(x > max(this.vertices.map(v => v.x))) return false;
		// if(y < min(this.vertices.map(v => v.y))) return false;
		// if(y > max(this.vertices.map(v => v.y))) return false;
		var toPoint = createVector(x - this.x, y - this.y)
		// Check is it inside the outer circle
		if(toPoint.mag() > this.radius) return false
		// Had some problems with this catching neighboring hexes.
		// Couldn't figure out why.
		// So the inscribing hex is a little smaller than it should be
		if(toPoint.mag() <= this.radius * sqrt(3) * 0.4) return true

		let intersections = 0;
		for(var i = 0; i < this.vertices.length; i++){
			let a = this.vertices[i]
			let b = this.vertices[(i + 1) % this.vertices.length];
			if(y >= min(a.y, b.y) && y <= max(a.y, b.y)){
				if(x < min(a.x, b.x)){
					intersections += 1
				}else if(x < max(a.x, b.y)){
					const slope = (a.x - b.x)/(a.y - b.y)
					const plus = a.x - a.y * slope 
					const intersectX = y * slope + plus
					if(x < intersectX){
						intersections += 1
					}
				}
			}
		}
		return intersections % 2 == 1;
	}
}