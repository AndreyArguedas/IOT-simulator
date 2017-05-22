function Ambulance(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 2; 
	this.move = function(car){ //d es la direcion
		if(this.x <= width) //Si el x es menor al ancho de la pantalla la ambulancia sigue avanzando
			this.x += this.velocity;
		else
			car.canMove = true;
	}
	
	this.show = function(){
        image(ambulanceImg,0,0,138,90,this.x,this.y,138,90);
    }
	
}