function Smoke(x,y){
	this.x = x;
	this.y = y;
	this.level = 1; 
	this.move = function(car){ 
		this.x = car.x-150;
		this.y = car.y-20;
	}
	
	this.show = function(){
		if(this.level == 1){
			image(smokeImg1,0,0,128,128,this.x,this.y,128,128);
		}else {
			image(smokeImg2,0,0,150,105,this.x,this.y,150,105);
		}
    }
	
}