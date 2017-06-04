function OtherCar(x,y){
	this.x = x;
	this.y = y;
	this.posInicial = this.x; //Para generar el efecto de movilidad de la ciudad
	this.canMove = true;
	this.w = 113;
	this.h = 70;
	this.alert = false;

	this.alertar = function(car){
		if(Math.abs(this.x - car.x) <= 180 && this.alert === false){ //Si al restar el x del carro y el poste solo hay "380 metros" de distancia, alumbramo, sino no
			this.alert = true;
			mostrarModal("myModal",  "PRECAUCION HAY UN ACCIDENTE ADELANTE TUYO", "EL CONDUCTOR DEL CARRO NEGRO QUE SE UBICA EN TU CARRIL CONTRARIO TE HA ALERTADO QUE HAY UN ACCIDENTE MUY CERCA" + "<br>" + "<img src='images/other.png'></img>");
		} 
			
	}

	this.show = function(){
		image(othercarImg,0,100,this.w,this.h,this.x,this.y,this.w,this.h);
		image(wifiOnImg,0,0,512,512,this.x + 10,this.y - 80,100,100);
		noFill();
		stroke(255,0,0);
		rect(this.x,this.y,this.w,this.h);
	}

	this.move =  function(car){
		if(this.canMove === true)
			this.x -= 4;
	}

	this.mostrarModal = function(idDiv ,titulo, mensaje){
     	$("#"+idDiv+"Title").html(titulo);
     	$("#"+idDiv+"Message").html(mensaje);
     	$("#"+idDiv).modal();
 	}
 
 	this.ocultarModal = function(idDiv){
     	$("#"+idDiv).modal("hide");  
 	}
 
  	this.cambiarMensajeModal = function(idDiv ,titulo, mensaje){
     	$("#"+idDiv+"Title").html(titulo);
     	$("#"+idDiv+"Message").html(mensaje);
 	}
}