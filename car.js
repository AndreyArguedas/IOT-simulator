function Car(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 1; //Cada segundo avanza 16 pixeles
	this.frame = 0; //La imagen que esta usando en un momento
	this.canMove = true;
	this.move = function(d){ //d es la direcion
		if(this.canMove === true){
			if(d === 1)
				this.x += this.velocity;
			else if(d === 2 && this.x>-1)
				this.x -= this.velocity;
			else if(d === 3 && this.y>500)
				this.y -= this.velocity;
			else if(d === 4 && this.y<550)
				this.y += this.velocity;
		}
	}
	
	this.show = function(){
        image(carImg,128 * this.frame++,96*2 ,128,96,this.x,this.y,128,96);
        this.frame = (this.frame === 3)?0:this.frame;
    }
	
}