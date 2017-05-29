function Bombero(x,y){
	this.x = x;
	this.y = y;
	this.v = 4;
	this.w = 355;
	this.h = 127;
	this.move = function(){
		this.x += this.v;
	}

	this.show = function(){
		//imageMode(CENTER);
		image(bomberoImg,0,0,355,127,this.x,this.y,355,127);
		noFill();
		stroke(255,0,0);
		//rectMode(CENTER);
		rect(this.x,this.y,355,127);
	}

	/*this.colission = function(car){
		return this.x < car.x + car.w && this.x + this.w > car.x && this.y < car.y + car.h && this.y + this.h > car.y;
	}*/

	this.valueInRange = function(value,min, max){ return (value >= min) && (value <= max); }

	this.colission = function(car){
    	var xOverlap = this.valueInRange(this.x, car.x, car.x + car.w) || this.valueInRange(car.x, this.x, this.x + this.w);

    	var yOverlap = this.valueInRange(this.y, car.y, car.y + car.h) ||this.valueInRange(car.y, this.y, this.y + this.h);

    	return xOverlap && yOverlap;
	}
}