function Alerta(){
	this.texto = "";
	this.x = 0;
	this.y = 0;
	this.msj1 = false; //Se pone en true cuando ya se haya mostrado una vez
	this.msj2 = false;
	this.msj3 = false;
	this.msj4 = false;
	
	this.show = function(texto, x, y){
		text(texto, x, y);
    }
	
	this.publucity = function(car,scenario){
		if(car.x > 65 && car.x < 200 && scenario.level === 1 && this.msj1 === false){
			$("tbody").append("<tr><td>HABITACIONES 2X1 A $15 SOLO EN HOTEL CALIFORNIA</td></tr>");
			this.msj1 = true;
		}
		if(car.x > 250 && car.x < 300 && scenario.level === 1 && this.msj2 === false){
			$("tbody").append("<tr class='green'><td>BURGER CLUB LAS MEJORES HAMBURGUESAS A $1</td></tr>");
			this.msj2 = true;
		}
		if(car.x > 332 && car.x < 375 && scenario.level === 1 && this.msj3 === false){
			$("tbody").append("<tr><td>HOTEL M GRAND ABIERTO LAS 24/7</td></tr>");
			this.msj3 = true;
		}
		if(car.x > 506 && car.x < 600 && scenario.level === 1 && this.msj4 === false){
			$("tbody").append("<tr><td>IGLESIA EL BAUTISMO,CONFESIONES DE LUNES A VIERNES</td></tr>");
			this.msj4 = true;
		}
	}

	this.distPeaton = function(distancia){
		if($("#alertDistance").length){ //Si ya existe el espacio alert distance
			$("#alertDistance").css("background-color", "red");
			$("#alertDistance").html("<td>ADVERTENCIA!!! USTED ESTA A " + distancia + " METROS DE UN PEATON.</td>");			
		}
		else
			$("tbody").append("<tr id='alertDistance'><td>ADVERTENCIA!!! USTED ESTA A " + distancia + " METROS DE UN PEATON.</td></tr>");

	}

	this.distParking = function(d){
		if($("#alertDistance").length){ //Si ya existe el espacio alert distance
			$("#alertDistance").css("background-color", "yellow");
			$("#alertDistance").html("<td>AVISO!!! USTED ESTA A " + d+ " METROS DE UNA ZONA DE PARQUEO.</td>");			
		}
		else
			$("tbody").append("<tr id='alertDistance'><td>AVISO!!! USTED ESTA A " + d + " METROS DE UNA ZONA DE PARQUEO.</td></tr>");
	}

	this.distBombero = function(distancia){
		if($("#alertBombero").length){ //Si ya existe el espacio alert distance
			$("#alertBombero").css("background-color", "red");
			$("#alertBombero").html("<td>ADVERTENCIA!!! UN CAMION DE BOMBEROS ESTA A " + distancia + " METROS DE USTED, POR FAVOR ACERQUE SU VEHICULO A LA CERA PARA DAR PASO.</td>");			
		}
		else
			$("tbody").append("<tr id='alertBombero'><td>ADVERTENCIA!!! UN CAMION DE BOMBEROS ESTA A" + distancia + " METROS DE USTED, POR FAVOR ACERQUE SU VEHICULO A LA CERA PARA DAR PASO.</td></tr>");
	}	
	
}