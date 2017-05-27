function Parking(x,y){
	this.x = x;
	this.y = y;

	this.show = function(car){
		noFill();
		stroke(255,204,0);
		rectMode(CENTER);
		rect(this.x,this.y,150,100);
		imageMode(CENTER);
		image(parkinImg,0,0,64,62,this.x,this.y,64,62);
		this.x =  2500 - car.x * 4;
	}
}