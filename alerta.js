function Alerta(){
	this.texto = "";
	this.x = 0;
	this.y = 0;
	
	this.show = function(texto, x, y){
		text(texto, x, y);
    }
	
	this.publucity = function(car){
		if(car.x>65){
			//text(Usted esta a 200 metros de el hotel california, 10, 30);
			return true;
		}
			return false;
	}	
	
}