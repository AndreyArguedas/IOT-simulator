function Dron(x,y){
	this.x = x;
	this.y = y;
	this.posInicial = this.x;
	this.alertar = false;
	this.temp = 21;

	this.show = function(car){
		image(dronImg,this.x,this.y);
		this.x = this.x = this.posInicial - car.x  * 4;
	}

	this.update = function(car,level){
		if(Math.abs(this.x - car.x) <= 280){
			switch(level) {
    			case 4:
        			if(this.alertar === false){
        				this.mostrarModal("myModal",  "HA HABIDO UN CAMBIO DE TEMPERATURA", "EL DRONE UBICADO EN EL CIELO ENVARIA SEÑALES A TU A/C PARA CLIMATIZAR MEJOR TU AUTO" + "<br>" + "<img src='images/termometro.png'></img>");
        				this.temp = 31;
        			}
        			this.alertar = true;
       			 	return this.temp;
       			 	break;
       			 case 6:
        			if(this.alertar === false){
        				this.mostrarModal("myModal",  "HA HABIDO UN CAMBIO DE TEMPERATURA", "EL DRONE UBICADO EN EL CIELO ENVARIA SEÑALES A TU A/C PARA CLIMATIZAR MEJOR TU AUTO" + "<br>" + "<img src='images/termometro.png'></img>");
        				this.temp = 17;
        			}
        			this.alertar = true;
       			 	return this.temp;
       			 	break;
       			case 7:
        			if(this.alertar === false){
        				this.mostrarModal("myModal",  "HA HABIDO UN CAMBIO DE TEMPERATURA", "EL DRONE UBICADO EN EL CIELO ENVARIA SEÑALES A TU A/C PARA CLIMATIZAR MEJOR TU AUTO" + "<br>" + "<img src='images/termometro.png'></img>");
        				this.temp = 28;
        			}
        			this.alertar = true;
       			 	return this.temp;
       			 	break;
       			 case 8:
        			if(this.alertar === false){
        				this.mostrarModal("myModal",  "HA HABIDO UN CAMBIO DE TEMPERATURA", "EL DRONE UBICADO EN EL CIELO ENVARIA SEÑALES A TU A/C PARA CLIMATIZAR MEJOR TU AUTO" + "<br>" + "<img src='images/termometro.png'></img>");
        				this.temp = 12;
        			}
        			this.alertar = true;
       			 	return this.temp;
       			 	break;
    		default:
        		return this.temp;
			}
		}
		if(car.x === 0)
			this.alertar = false;
		return this.temp;
	}
	
	this.mostrarModal = function(idDiv ,titulo, mensaje){
     	$("#"+idDiv+"Title").html(titulo);
     	$("#"+idDiv+"Message").html(mensaje);
     	$("#"+idDiv).modal();
 	}
}