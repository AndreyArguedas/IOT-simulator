function Policeman(x,y){
	this.x = x;
	this.y = y;
	this.posInicial = x;
	this.frame = 0;
	this.h = 64;
	this.w = 48;
	this.canMove = false;
	this.visible = true;

	this.show = function(car){
		if(this.visible === true){
			image(policemanImg,48 * this.frame++,64,48,64,this.x,this.y,48,64);
			this.frame = (this.frame === 4)?0:this.frame;
			this.x = this.posInicial - car.x  * 4;
		}
	}
}