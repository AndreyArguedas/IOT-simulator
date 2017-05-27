function Scenario(){
	this.level = 1;
	this.show = function(x,v){
		if(this.level === 1){
			image(city1, -x * 2 * 2,0,4267,650); //Se dibuja el fondo
		}
		else if(this.level === 2){
			image(city2,-x * 2 * 2,0,2580,650); //Se dibuja el fondo //2080
		}
		else if(this.level === 3){
			image(city3,-x * 2 * 2,0,2778,650); //Se dibuja el fondo
		}
		else if(this.level === 4){
			image(city5,-x * 2 * 2,0,4267,650); //Se dibuja el fondo
		}
		else if(this.level === 5){
			image(city6,-x * 2 * 2,0,4268,650); //Se dibuja el fondo
		}
	}

	this.update = function(car){
		if(car.x > 828 && this.level === 1){
			this.level = 2;
			car.x = 0;
			car.tire--;
		}
		else if(car.x > 382 && this.level === 2){
			this.level = 3;
			car.x = 0;
		}
		else if(car.x > 382 && this.level === 3){
			this.level = 4;
			car.x = 0;
		}
		else if(car.x > 766 && this.level === 4){
			this.level = 5;
			car.x = 0;
		}
		else if(car.x > 828 && this.level === 5){
			this.level = 1;
			car.x = 0;
		}
		
	} 
	
	this.publucity = function(car){
		if(this.level === 1 ){
				if(car.x>65){
					//text(Usted esta a 200 metros de el hotel california, 10, 30);
					return true;
				}
		}
		return false;
	}	
	
}