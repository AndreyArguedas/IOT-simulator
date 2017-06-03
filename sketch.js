var city1;   //Se definen las variables que cargaran las imagenes
var city2;
var city3;
var city5;
var city6;
var city7;
var city8;
var city9;
var carImg;
var car;
var scenario;
var peaton1Img;
var p1;
var a1;
var ambulanceImg;
var ambulance;
var police;
var policeImg;
var gasolinaImg;
var gasolina;
var smoke;
var smokeImg1;
var smokeImg2;
var informe=false;
var infraccion=false;
var colisionP1 = false;
var showconfirmGas = false;
var gasPlease = false;
var parkingImg;
var parking;
var thiefImg;
var thief;
var theft = false; //Variable para saber si el auto han tratado de robarlo
var needPolice = false;
var roboAtendido = false;
var bomberoImg;
var bombero;
var postLightImg;
var posts = []; //Array con los postes de luz
var msjMuni = false; //Un msj que se mostrara al inicio del escenario de las variables de postes de luces
var pasajeroImg;
var pasajero;
var showPasajero;
var mostrarUnaVez = 0; //Para controlar que el modal de pasajero se muestre solo una vez
var accident;
var accidentImg;
var othercarImg;
var rain;
var rainImg;
var darkCloudImg;
var modeRain = false;
var showModeRain=false;
var wifi;
var wifiOnImg;
var wifiOffImg;
var wifiPublico = false;
var showWifi = false;
var others = []; //Los carros negros para la variable de comunicacion entre carros

function preload(){
  city1 = loadImage("images/city1.jpg");
  city2 = loadImage("images/city5.png");
  city3 = loadImage("images/city3.png");
  city4 = loadImage("images/city14.png");
  city5 = loadImage("images/city9.jpg");
  city6 = loadImage("images/city8.jpg");
  city7 = loadImage("images/city7b.png");
  city8 = loadImage("images/night.jpg");
  city9 = loadImage("images/city12.png");
  carImg = loadImage("images/car.png");
  peaton1Img = loadImage("images/peaton.png");
  ambulanceImg = loadImage("images/ambulance.png");
  policeImg = loadImage("images/police.jpg");
  gasolinaImg = loadImage("images/gasolina.png");
  parkinImg = loadImage("images/parking.png");
  thiefImg = loadImage("images/thief.png");
  bomberoImg = loadImage("images/bombero.png");
  smokeImg1 = loadImage("images/humo3.png");
  smokeImg2 = loadImage("images/humo6.png");
  postLightImg = loadImage("images/postlight.png");
  pasajeroImg = loadImage("images/pasajero.png");
  accidentImg = loadImage("images/accidente.png");
  othercarImg = loadImage("images/othercar.png");
  rainImg = loadImage("images/rain2.png");
  darkCloudImg = loadImage("images/cloud2.jpg");
  wifiOnImg = loadImage("images/wifi5.png");
  wifiOffImg = loadImage("images/wifi4.png");
}

function setup(){
	var can = createCanvas(1000,650);//Se crea una pantalla de 700x700
  can.parent('screen');
	car = new Car(0,650-96);
	scenario = new Scenario();
  p1 = new Peaton(1000,600,0.5);
  a1 = new Alerta();
  ambulance = new Ambulance(0,650-90);
  police = new Police(0,650-90);
  gasolina = new Gasolinera(0,650-90);
  parking = new Parking(2500,500);
  thief = new Thief(0,500);
  bombero = new Bombero(-1500,460);
  smoke = new Smoke(0, 650-96);
  pasajero = new Pasajero(1500,550);
  for(var i = 0; i < 2; i++)
    posts.push(new Post(1000 * (i + 1),280));
  for(var i = 0; i < 2; i++)
    others.push(new OtherCar(1000 * (i + 1),500));
  accident = new Accident(2500,570);
  rain = new Cloud();
  wifi = new Wifi(0, 650-90);
  background(255);
}

function draw(){ //Esto es un while que dibuja en pantalla cada 60 milisegundos, es propio de la libreria p5
	
	scenario.show(car.x,car.velocity);
	car.show();
	smoke.show();
	wifi.show();
	ocultarModal("myMessage");
  if(scenario.level === 2 && p1.alive === true){
    p1.show(car.x,2);
    p1.move();
    a1.distPeaton(Math.floor(dist(p1.x,p1.y,car.x,car.y)) / 100);
    if(p1.colission(car)){
      p1.x += 150;
      p1.canMove = false;
      car.canMove = false;
      colisionP1 = true; //Ponemos la variable de que choco al peaton en true
      mostrarModal("myModal", "Ha ocurrido un accidente", "Mediante el sensor de choques de su automovil se ha detectado una colision, mediante la computadora de su auto se ha alertado al 911, los cuales llegaran enseguida." + "<br>" + "<img src='images/ambulancia.png'></img>");
    }
	
  }

	if(scenario.level === 4){
		rain.show();
	}
	if(scenario.level === 5){
		modeRain = false;
	}
	

	if(scenario.level === 4 && showModeRain === false){
		showModeRain = true;
		bootbox.confirm({
        message: "Se a detectado humedad en la carretera, deseas activar el modo lluvia?........................(El modo lluvia no permite subir a mas de 5000 revoluciones)",
        buttons: {
            confirm: {
                label: 'Activar modo lluvia',
                className: 'btn-success'
            },
            cancel: {
                label: 'Seguir en modo normal',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            modeRain = result;
        }
    });
	}
	
	if(showWifi === false && wifi.on === false){
			showWifi=true;
			bootbox.confirm({
			message: "Te has quedado sin internet, deseas conectarte una red publica cercarna para realizar el pago de tu servio de Internet?",
			buttons: {
				confirm: {
					label: 'Conectarse a Red Publica',
					className: 'btn-success'
				},
				cancel: {
					label: 'Seguir sin conexion',
					className: 'btn-danger'
				}
			},
			callback: function (result) {
				wifiPublico = result;
			}
		});
	}
	
	ocultarModal("myMessage");
	if(wifiPublico===true && car.x>350 && car.x<356){
		wifi.on = true;
		wifiPublico=false;
		mostrarModal("myModal", "Te has conectado a la red WI-FI del taxista" + "<br>" + "<img src='images/taxi1.png'></img>");
	}
	

	ocultarModal("myMessage");
  if(scenario.level === 3 && car.x>150 && car.x<156){
    if(car.velocity===4){
		infraccion = true;
		car.canMove = false;
		mostrarModal("myModal",  "Has cometido una infraccion", "El sensor de informes de transito indica que usted ha recibido una infraccion por exceder el limite de velocidad en esta zona" + "<br>" + "<img src='images/signal1.jpg'></img>");
    }
  }
  
  if(car.gas < 5000){
	  smoke.level = 2;
	  smoke.show();
  }
  
  if(car.gas > 8800 && car.gas < 8850){
	  wifi.on = false;
  }
  
  ocultarModal("myMessage");
  if(scenario.level === 1 && informe === false){
	   if(car.tire <5){
		    informe=true;
		    mostrarModal("myModal",  "Aviso del estado del vehiculo", "El sensor de informes de estado de su automovil indica que se presenta un desgaste en las llantas, debe cambiarlas pronto" + "<br>" + "<img src='images/tire2.png'></img>");
	   }
  }
	ocultarModal("myMessage");
	if(scenario.level === 6 && car.x>360 && car.x<366){
	   if(smoke.level === 2){
		    //informe=true;
		    mostrarModal("myModal",  "Aviso del estado del vehiculo", "El sensor de control de humo de COSEVI a enviado una alerta que indica que su vehiculo expulsa una cantidad exesiva de humo, necesita revision cuanto antes " + "<br>" + "<img src='images/cosevi.png'></img>");
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
  if(keyIsDown(32) && modeRain === false)
    car.velocity = 4;
  else
    car.velocity = 2;
	
	smoke.move(car);
	wifi.move(car);
  	scenario.update(car);
  	textSize(32);
    fill(255,0,0);
    text(parseInt(car.velocity * 20) + "KPH", 10, 30);
    text("GASOLINA " + car.gas + " mililitros" , 600, 30);
	if(colisionP1 === true){ //Si el carro no se puede mover
        ambulance.move(car,colisionP1);		//La ambulancia se mueve en direccion al accidente
		    ambulance.y = p1.y;
        ambulance.show();    //Se muestra la ambulancia
        if(ambulance.x >= p1.x)//Si la ambulancia llega al peaton lo dejamos de mostrar
          p1.alive = false;
    }

  if(car.gas <= 0 ){
      car.gas = 0;
      car.canMove = false;
      gasolina.free = false;
      if(showconfirmGas === false){
        showconfirmGas = true; //Poner inmediatamente en true para que se muestre solo una vez
        bootbox.confirm({
        message: "Has quedado sin gasolina, deseas que tu gasolinera preferida te rescate?",
        buttons: {
            confirm: {
                label: 'SÍ,NECESITO AYUDA',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO,GRACIAS',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            gasPlease = result;
        }
    });
      }
  }

  if(gasolina.free === false && gasPlease === true){
    gasolina.move(car);
    gasolina.show();
  }
	
	if(infraccion===true){
		police.move(car);
		police.show();
	}

  if(scenario.level === 4){
      pasajero.move(car);
      pasajero.show();
    if(pasajero.x === car.x && pasajero.canMove === true){
      pasajero.canMove = false;
      bootbox.confirm({
        message: "EL PEATON HA SIDO ASALTADO, PODRÌAS DARLE UN AVENTON HASTA SU CIUDAD?",
        buttons: {
            confirm: {
                label: 'SÍ',
                className: 'btn-success'
            },
            cancel: {
                label: 'NO',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            pasajero.canMove = !result;
            if(pasajero.canMove === true) //Esto significa que no monto al pasajero
              pasajero.visible = true;
            else
              showPasajero = true; //Mostrar modal de pasajero
        }
      });
    }
    if(showPasajero === true && mostrarUnaVez === 0){
      mostrarUnaVez = 1;
      mostrarModal("myModal",  "EL VEHICULO HA IDENTIFICADO AL PASAJERO", "MEDIANTE LA CAMARA UBICADA EN LA GUANTERA SE HA IDENTIFICADO LA INFORMACION DEL PASAJERO. CEDULA:4-0444-0222 NOMBRE:JULIO QUESADA AGUIRRE " + "<br>" + "<img src='images/pasajeroindividual.png'></img>");
    }

  }

  if(scenario.level === 5){
    bombero.move();
    bombero.show();
    var dt = dist(bombero.x,bombero.y,car.x,car.y);
    a1.distBombero(Math.floor(dt) / 100);
    console.log(bombero.colission(car));
  }

  if(scenario.level === 6){
    parking.show(car);
    var d = dist(parking.x,parking.y,car.x,car.y);
    a1.distParking(Math.floor(d) / 100);
    if((Math.floor(d) / 100) < 0.7){
      thief.move();
      thief.show();
      if(thief.canMove === false && roboAtendido === false)
        theft = true;
    }

    if(theft === true){
    theft = false;
    roboAtendido = true;
    mostrarModal("myModal",  "SU VEHICULO ESTA SIENDO ROBADO!!!", "MEDIANTE EL SENSOR DE LA PUERTA HA SIDO CAPTURADA LA HUELLA DIGITAL DEL LADRON Y SE HA ENVIADO UN REPORTE A LA PATRULLA MAS CERCANA, LOS CUALES HAN REIBIDO SU DIRECCION Y LO AYUDARAN" + "<br>" + "<img src='images/police.jpg'></img>");
    needPolice = true;
    police.x = 0; //Volvemos a mandar a la policia al inicio de la pagina
    police.y = 500;
  }

  if(needPolice){
    police.move();
    police.show();
    if(police.x >= 476){
      thief.visible = false;
    }
    if(police.x >= width){
      needPolice = false;
      roboAtendido = true;
      car.canMove = true;
    }
  }      
  }

  if(scenario.level === 7){
    if(msjMuni === false){
      mostrarModal("myModal",  "PRECAUCION CON EL NUEVO SISTEMA DE LUCES!!!", "LA MUNICPALIDAD LE COMUNICA QUE ESTA CIUDAD CUENTA CON UN SISTEMA DE LUCES QUE POSEEN UN SENSOR EN LA PARTE SUPERIOR PARA ILUMINAR SOLAMENTE CUANDO SU VEHICULO SE ENCUENTRA CERCA" + "<br>" + "<img src='images/postlight.png'></img>");
      msjMuni = true; //true para que no se vuelva a mostrar
    }
    for(var i = 0; i < posts.length; i++){
      posts[i].show(car);
      posts[i].distCar(car); //Para estar actualizando las luces
    }
  }

  if(scenario.level === 8){
    accident.show(car);
    for(var i = 0; i < others.length; i++){
      others[i].show(car);
      others[i].move(car);
      others[i].alertar(car);
      if(accident.colission(car) === true)
        car.x -= 10;
    }
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
 
 
 
 