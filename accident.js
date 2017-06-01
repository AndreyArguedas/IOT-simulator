function Accident(x,y){
	this.x = x;
	this.y = y;
	this.w = 220;
	this.h = 128;
	this.posInicial = this.x;

	this.show = function(car){
		image(accidentImg,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
		this.x =  this.posInicial - car.x * 4;
	}

	this.valueInRange = function(value,min, max){ return (value >= min) && (value <= max); }

	this.colission = function(car){
    	var xOverlap = this.valueInRange(this.x, car.x, car.x + car.w) || this.valueInRange(car.x, this.x, this.x + this.w);

    	var yOverlap = this.valueInRange(this.y, car.y, car.y + car.h) ||this.valueInRange(car.y, this.y, this.y + this.h);

    	return xOverlap && yOverlap;
	}
}