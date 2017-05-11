function Alerta(){
	this.texto = "";
	this.x = 0;
	this.y = 0;
	this.msj1 = false; //Se pone en true cuando ya se haya mostrado una vez
	
	this.show = function(texto, x, y){
		text(texto, x, y);
    }
	
	this.publucity = function(car,scenario){
		if(car.x > 65 && car.x < 200 && scenario.level === 1 && this.msj1 === false){
			$("tbody").append("<tr><td>HABITACIONES 2X1 A $15 SOLO EN HOTEL CALIFORNIA</td></tr>");
			fill(0, 102, 153);
			text("HABITACIONES 2X1 A $15 SOLO EN HOTEL CALIFORNIA", 10, 30,200,200);
			this.msj1 = true;
		}
	}	
	
}