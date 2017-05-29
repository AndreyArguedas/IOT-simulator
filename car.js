function Car(x,y){
	this.x = x;
	this.y = y;
	this.gas = 10000;
	this.velocity = 1; //Cada segundo avanza 16 pixeles
	this.frame = 0; //La imagen que esta usando en un momento
	this.canMove = true;
	this.tire=6;
	this.isMoving = false;
	this.w = 128; //El ancho de la imagen
	this.h = 72; //El alto de la imagen
	this.move = function(d){ //d es la direcion
		if(this.canMove === true){
			this.gas -= this.velocity; //Si se puede mover se le va gastando la gasolina
			if(d === 1)
				this.x += this.velocity;
			else if(d === 2 && this.x>-1)
				this.x -= this.velocity;
			else if(d === 3)
				this.y -= this.velocity;
			else if(d === 4)
				this.y += this.velocity;
		}
	}
	
	this.show = function(){
        image(carImg,128 * this.frame++,110*2 ,128,this.h,this.x,this.y,128,this.h);
        noFill();
        stroke(255,0,0);
		rect(this.x,this.y,128,this.h);
        this.frame = (this.frame === 3)?0:this.frame;
    }
	
}