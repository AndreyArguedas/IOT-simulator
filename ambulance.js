function Ambulance(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 2; 
	this.move = function(car,colision){ //d es la direcion
		if(this.x <= width) //Si el x es menor al ancho de la pantalla la ambulancia sigue avanzando
			this.x += this.velocity;
		else{
			car.canMove = true;
			colision = false;
		}
	}
	
	this.show = function(){
        image(ambulanceImg,0,0,138,90,this.x,this.y,138,90);
        image(wifiOnImg,0,0,512,512,this.x + 10,this.y - 80,100,100);
    }
	
}