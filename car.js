function Car(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 2; //Cada segundo avanza 16 pixeles
	this.frame = 0; //La imagen que esta usando en un momento

	this.move = function(d){ //d es la direcion
		if(d === 1)
			this.x += this.velocity;
		else
			this.x -= this.velocity;
	}

	this.show = function(){
        image(carImg,128 * this.frame++,96*2 ,128,96,this.x,this.y,128,96);
        this.frame = (this.frame === 3)?0:this.frame;
    }
}