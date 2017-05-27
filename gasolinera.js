function Gasolinera(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 2;
	this.free = true;//Se refiere a que la gasolinera esta libre 
	this.move = function(car){ //d es la direcion
		if(this.x <= width){ //Si el x es menor al ancho de la pantalla la ambulancia sigue avanzando
			this.x += this.velocity;
			if(this.x === car.x)
				car.gas = 10000;
		}
		else{
			car.canMove = true;
			this.free = true;
		}
	}
	
	this.show = function(){
		if(this.x < width && this.free === false) //Con el false nos referimos a que esta trabajando
        	image(gasolinaImg,0,0,294,100,this.x,this.y,294,100);
    }
	
}