function Police(x,y){
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
        image(policeImg,0,0,177,71,this.x,this.y,177,71);
        image(wifiOnImg,0,0,512,512,this.x + 10,this.y - 80,100,100);
    }
	
}