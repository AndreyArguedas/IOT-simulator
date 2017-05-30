function Smoke(x,y){
	this.x = x;
	this.y = y;
	this.level = 1; 
	this.move = function(car){ //d es la direcion
		/*if(this.x <= width) //Si el x es menor al ancho de la pantalla la ambulancia sigue avanzando
			this.x += this.velocity;
		else
			car.canMove = true;*/
		//this.x = car.x-100;
		//this.y = car.y-20;
		
		this.x = car.x-150;
		this.y = car.y-20;
		
	}
	
	this.show = function(){
        //if(car.gas < 9000)
			//level = 2;
		if(this.level == 1){
			image(smokeImg1,0,0,128,128,this.x,this.y,128,128);
		}else {
			image(smokeImg2,0,0,150,105,this.x,this.y,150,105);
		}
    }
	
}