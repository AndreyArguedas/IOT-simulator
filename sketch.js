var city1;   //Se definen las variables que cargaran las imagenes
var city2;
var city3;
var carImg;
var car;
var scenario;
function preload(){
  city1 = loadImage("images/city1.jpg");
  city2 = loadImage("images/city5.png");
  city3 = loadImage("images/city3.png");
  city4 = loadImage("images/city6.jpg");
  carImg = loadImage("images/car.png");
}

function setup(){
	createCanvas(1000,650);//Se crea una pantalla de 700x700
	car = new Car(0,650-96);
	scenario = new Scenario();
  background(255);
}

function draw(){ //Esto es un while que dibuja en pantalla cada 60 milisegundos, es propio de la libreria p5
	
	scenario.show(car.x,car.velocity);
	car.show();
	if(keyIsDown(RIGHT_ARROW))
  	 car.move(1);

  	if(keyIsDown(LEFT_ARROW))
  	 car.move(2);

  	scenario.update(car);
  	console.log(car.x);
}
