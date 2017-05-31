function Pasajero(x,y,z){
	this.x = x;
	this.y = y;
	this.posInicial = this.x; //Para generar el efecto de movilidad de la ciudad
	this.frame = 0;
	this.canMove = true;

	this.show = function(){
		image(pasajeroImg,64 * this.frame++,128,64,64,this.x,this.y,64,64);
		this.frame = (this.frame === 8)?0:this.frame;
		textSize(30);
		text("AYUDA",this.x,this.y);
	}

	this.move =  function(car){
		this.x -= 4;
	}
}