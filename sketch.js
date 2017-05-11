var city1;   //Se definen las variables que cargaran las imagenes
var city2;
var city3;
var carImg;
var car;
var scenario;
var peaton1Img;
var p1;
var a1;

function preload(){
  city1 = loadImage("images/city1.jpg");
  city2 = loadImage("images/city5.png");
  city3 = loadImage("images/city3.png");
  city4 = loadImage("images/city6.jpg");
  carImg = loadImage("images/car.png");
  peaton1Img = loadImage("images/peaton.png");
}

function setup(){
	var can = createCanvas(1000,650);//Se crea una pantalla de 700x700
  can.parent('screen');
	car = new Car(0,650-96);
	scenario = new Scenario();
  p1 = new Peaton(1000,600,0.5);
  a1 = new Alerta();
  background(255);
}

function draw(){ //Esto es un while que dibuja en pantalla cada 60 milisegundos, es propio de la libreria p5
	
	scenario.show(car.x,car.velocity);
	car.show();
	ocultarModal("myMessage");
  if(scenario.level === 2 && p1.alive === true){
    p1.show(car.x,car.velocity);
    p1.move();
    if(p1.colission(car)){
      p1.alive = false;
      mostrarModal("myModal", "Ha ocurrido un accidente", "Mediante el sensor de choques de su automovil se ha detectado una colision, mediante la computadora de su auto se ha alertado al 911, los cuales llegaran enseguida");
    }
  }
	/*if(a1.publucity(car,scenario)){
		if(scenario.level==1){
			a1.show("Usted esta a 200 metros del hotel California", 250-(car.x)*2, 30);
      $("tbody").append("<tr><td>Usted esta a 200 metros del hotel California</td></tr>");
		}
	}*/

  a1.publucity(car,scenario);//La clase se encarga internamente de mostrar la publicidad
    
	if(keyIsDown(RIGHT_ARROW))
  	 car.move(1);
  if(keyIsDown(LEFT_ARROW))
  	car.move(2);
  if(keyIsDown(UP_ARROW))
    car.move(3);
  if(keyIsDown(DOWN_ARROW))
    car.move(4);
  
  	scenario.update(car);
  	//console.log(car.x);
}


function mostrarModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
     $("#"+idDiv).modal();
 }
 
 function ocultarModal(idDiv){
     $("#"+idDiv).modal("hide");  
 }
 
  function cambiarMensajeModal(idDiv ,titulo, mensaje){
     $("#"+idDiv+"Title").html(titulo);
     $("#"+idDiv+"Message").html(mensaje);
 }
 