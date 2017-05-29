function Peaton(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = 64;
	this.h = 62;
	this.velocity = 2;
	this.frame = 0;
	this.direction = 0;
	this.alive = true;
	this.canMove = true;
	this.show = function(x,v){
		if(this.canMove === true){
			image(peaton1Img,64 * this.frame++,62 * this.direction ,64,62,this.x,this.y,64,62);
			this.frame = (this.frame === 8)?0:this.frame;
        	this.x = 1000 -x * v * 2;
        	noFill();
			stroke(255,0,0);
			rect(this.x,this.y,64,62);
		}
		else
  			image(peaton1Img,64 * this.frame,62 * this.direction ,64,62,this.x,this.y,64,62);
	}

	this.move = function(){
		if(this.canMove === true){
			if(this.direction === 0){ //Osea va para arriba
			this.y -= this.velocity;
			if(this.y < 450){ //Es momento de ir para abajo
				this.direction = 2;
			}
		}
			else if(this.direction === 2){
				this.y += this.velocity;
				if(this.y > 590) //Es momento de ir para arriba
					this.direction = 0;
			}
		}
		
	}

	this.valueInRange = function(value,min, max){ return (value >= min) && (value <= max); }

	this.colission = function(car){
    	var xOverlap = this.valueInRange(this.x, car.x, car.x + car.w) || this.valueInRange(car.x, this.x, this.x + this.w);

    	var yOverlap = this.valueInRange(this.y, car.y, car.y + car.h) ||this.valueInRange(car.y, this.y, this.y + this.h);

    	return xOverlap && yOverlap;
	}
}
