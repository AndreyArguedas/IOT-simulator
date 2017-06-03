function Wifi(x,y){
	this.x = x;
	this.y = y;
	this.on = true; 
	this.print = true;
	this.cont = 0;
	this.move = function(car){ 
		this.x = car.x;
		this.y = car.y-80;
	}
	
	this.show = function(){
		
		this.cont++;
		
		if(this.on === true && this.cont%2===0){
			image(wifiOnImg,0,0,512,512,this.x,this.y,100,100);
		}else if(this.on === false && this.cont%2===0) {
			image(wifiOffImg,0,0,518,518,this.x,this.y,100,100);
		}
    }
	
}