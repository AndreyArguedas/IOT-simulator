function wifiScenario(x,y){
	this.x = x;
	this.y = y;
	this.posInicial = x; //Este atributo es necesario para lograr el efecto de que las cosas se mueven

	this.show = function(car){
		image(wifiOnImg,0,0,512,512,this.x,this.y,100,100);
		this.x =  this.posInicial - car.x * 4;
	}

}