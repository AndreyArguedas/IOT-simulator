function Post(x,y){
	this.x = x;
	this.y = y;
	this.light = false; //Variable para encender la luz
	this.posInicial = this.x; //Este atributo es necesario para lograr el efecto de que las cosas se mueven

	this.show = function(){
		image(postLightImg,0,0,56,298,this.x,this.y,56,298);
		image(wifiOnImg,0,0,512,512,this.x,this.y - 70,100,100);
		if(this.light === true){
			fill(255,204,0);
			ellipse(this.x + 30,this.y + 20,100,100); //Se dibuja un circulo
		}
		this.x =  this.posInicial - car.x * 4;
	}

	this.distCar = function(car){
		if(Math.abs(this.x - car.x) <= 380) //Si al restar el x del carro y el poste solo hay "380 metros" de distancia, alumbramo, sino no
			this.light = true;
		else
			this.light = false;
	}
}