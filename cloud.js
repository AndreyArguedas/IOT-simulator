function Cloud(){
	this.xCloud = 0;
	this.yCloud = 0;
	this.xRain = 0;
	this.yRain = 100;
	this.rain = false; 
	/*this.move = function(car){ //d es la direcion
		this.xCloud = 0;
		this.yCloud = 15;
		this.xRain = 0;
		this.yRain = 10;
	}*/
	
	this.show = function(){
        //if(car.gas < 9000)
			//level = 2;
			image(darkCloudImg,0,0,1200,182,this.xCloud,this.yCloud,1200,182);
			image(rainImg,0,0,1000,600,this.xRain,this.yRain,1000,600);
    }
	
}