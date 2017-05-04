function Peaton(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.velocity = 2;
	this.frame = 0;
	this.direction = 0;
	this.alive = true;
	this.show = function(x,v){
		image(peaton1Img,64 * this.frame++,62 * this.direction ,64,62,this.x,this.y,64,62);
        this.frame = (this.frame === 8)?0:this.frame;
        this.x = 1000 -x * v * 2;
	}

	this.move = function(){
		
		if(this.direction === 0){ //Osea va para arriba
			this.y -= this.velocity;
			if(this.y < 450){ //Es momento de ir para abajo
				this.direction = 2;
			}
		}
		else if(this.direction === 2){
			this.y += this.velocity;
			if(this.y > 590){ //Es momento de ir para arriba
				this.direction = 0;
			}
		}
	}

	this.colission = function(c){
		var dis = dist(this.x,this.y,c.x,c.y);
       	if(dis < 30 + 60)
          return true;
       	return false;
	}
}
