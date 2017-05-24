var city1;   //Se definen las variables que cargaran las imagenes
var city2;
var city3;
var city5;
var city6;
var carImg;
var car;
var scenario;
var peaton1Img;
var p1;
var a1;
var ambulanceImg;
var ambulance;

function preload(){
  city1 = loadImage("images/city1.jpg");
  city2 = loadImage("images/city5.png");
  city3 = loadImage("images/city3.png");
  city4 = loadImage("images/city6.jpg");
  city5 = loadImage("images/city13.jpg");
  city6 = loadImage("images/city8.jpg");
  carImg = loadImage("images/car.png");
  peaton1Img = loadImage("images/peaton.png");
  ambulanceImg = loadImage("images/ambulancia.png");
}

function setup(){
	var can = createCanvas(1000,650);//Se crea una pantalla de 700x700
  can.parent('screen');
	car = new Car(0,650-96);
	scenario = new Scenario();
  p1 = new Peaton(1000,600,0.5);
  a1 = new Alerta();
  ambulance = new Ambulance(0,650-90);
  background(255);
}

function draw(){ //Esto es un while que dibuja en pantalla cada 60 milisegundos, es propio de la libreria p5
	
	scenario.show(car.x,car.velocity);
	car.show();
	ocultarModal("myMessage");
  if(scenario.level === 2 && p1.alive === true){
    p1.show(car.x,2);
    p1.move();
    a1.distPeaton(Math.floor(dist(p1.x,p1.y,car.x,car.y)) / 100);
    if(p1.colission(car)){
      p1.x += 150;
      p1.canMove = false;
      car.canMove = false;
      mostrarModal("myModal", "Ha ocurrido un accidente", "Mediante el sensor de choques de su automovil se ha detectado una colision, mediante la computadora de su auto se ha alertado al 911, los cuales llegaran enseguida." + "<br>" + "<img src='images/ambulancia.png'></img>");
    }
	
  }
	ocultarModal("myMessage");
  if(scenario.level === 3 && car.x>150 && car.x<154){
    if(car.velocity===3){
      mostrarModal("myModal",  "Has cometido una infraccion", "El sensor de informes de transito indica que usted ha recibido una infraccion por exceder el limite de velocidad en esta zona" + "<br>" + "<img src='images/signal1.jpg'></img>");
    }
	
  }
	
  a1.publucity(car,scenario);//La clase se encarga internamente de mostrar la publicidad
    
	if(keyIsDown(RIGHT_ARROW))
  	 car.move(1);
  if(keyIsDown(LEFT_ARROW))
  	car.move(2);
  if(keyIsDown(UP_ARROW))
    car.move(3);
  if(keyIsDown(DOWN_ARROW))
    car.move(4);
	keyPressed();
  	scenario.update(car);
  	
    if(car.canMove === false){ //Si el carro no se puede mover
        ambulance.move(car);		//La ambulancia se mueve en direccion al accidente
		ambulance.y = p1.y;
        ambulance.show();    //Se muestra la ambulancia
        if(ambulance.x >= p1.x)//Si la ambulancia llega al peaton lo dejamos de mostrar
          p1.alive = false;
    }
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
 
 function keyPressed()  {
  if (keyCode === 32) {
	car.velocity = 3;
  }
  if(keyCode === 17){
	car.velocity = 1;  
  } 
 }
 
 
 