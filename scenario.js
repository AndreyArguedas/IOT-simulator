function Scenario(){
	this.level = 1;
	this.show = function(x,v){
		//console.log(x);
		if(this.level === 1 ){
			image(city1, -x * v * 2,0,4267,650); //Se dibuja el fondo
		}
		else{
			image(city2,-x * v * 2,0,2080,650); //Se dibuja el fondo
		}
	}

	this.update = function(car){
		if(car.x > 828){
			this.level = 2;
			car.x = 0;
		}
	}
}