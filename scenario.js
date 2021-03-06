function Scenario(){
	this.level = 1;
	this.show = function(x,v){
		if(this.level === 1){
			image(city1, -x * 2 * 2,0,4267,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia1.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 2){
			image(city2,-x * 2 * 2,0,2580,650); //Se dibuja el fondo //2080
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia2.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 3){
			image(city3,-x * 2 * 2,0,2778,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia3.png'></img><br><img src='topologias/topologia15.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 4){
			image(city5,-x * 2 * 2,0,2880,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia4.png'></img><br><br><br><img src='topologias/topologia14.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 5){
			image(city6,-x * 2 * 2,0,4268,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia6.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 6){
			image(city7,-x * 2 * 2,0,4222,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia6.png'></img><br><br><br><img src='topologias/topologia7.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 7){
			image(city8,-x * 2 * 2,0,2880,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia8.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 8){
			image(city9,-x * 2 * 2,0,3072,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia9.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 9){
			image(city10,-x * 2 * 2,0,2580,650); //Se dibuja el fondo
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia12.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 10){
			image(cityRestric,-x * 2 * 2,0,2214,650); //CIUDAD CON PARTE
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia12.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		else if(this.level === 11){
			image(city11,-x * 2 * 2,0,3800,650); //CIUDAD DONDE ESTA EL POLICIA
			$("#myModal5Message").html("");
			$("#myModal5Message").html("<img src='topologias/topologia11.png'></img><br><br><br><img src='topologias/topologia13.png'></img>");
		}
		
	}

	this.update = function(car){
		if(car.x > 828 && this.level === 1){
			this.level = 2;
			car.x = 0;
			car.tire--;
			$("#tbody").html("");
		}
		else if(car.x > 350 && this.level === 2){
			this.level = 3;
			car.x = 0;
			car.tire--;
			$("#tbody").html("");
		}
		else if(car.x > 500 && this.level === 3){
			this.level = 4;
			car.x = 0;
			car.tire--;
			$("#tbody").html("");
		}
		else if(car.x > 500 && this.level === 4){
			this.level = 5;
			car.x = 0;
			car.tire--;
		}
		else if(car.x > 828 && this.level === 5){
			this.level = 6;
			car.x = 0;
			car.tire--;
			$("#tbody").html("");
		}
		else if(car.x > 828 && this.level === 6){
			this.level = 7;
			car.x = 0;
			$("#tbody").html("");
		}

		else if(car.x > 520 && this.level === 7){
			this.level = 8;
			car.x = 0;
			$("#tbody").html("");
		}

		else if(car.x > 578 && this.level === 8){
			this.level = 9;
			car.x = 0;
			$("#tbody").html("");
		}

		else if(car.x > 400 && this.level === 9){
			this.level = 1;
			car.x = 0;
			$("#tbody").html("");
		}

		else if(car.x > 200 && this.level === 10){ //Ciudad con restriccion
			this.level = 11;
			car.x = 0;
			$("#tbody").html("");
		}

		else if(car.x > 700 && this.level === 11){ //Ciudad con parte
			this.level = 1;
			car.x = 0;
			$("#tbody").html("");
		}
		
	} 
	
	this.publucity = function(car){
		if(this.level === 1 ){
				if(car.x>65){
					return true;
				}
		}
		return false;
	}	

	
}