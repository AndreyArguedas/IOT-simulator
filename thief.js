function Thief(x,y){
	this.x = x;
	this.y = y;
	this.velocity = 2;
	this.frame = 0;
	this.canMove = true;
	this.visible = true;
	this.move = function(){ //d es la direcion
		if(this.x <= 474){
			this.x += this.velocity;
		}
		else
			this.canMove = false;		
	}
	
	this.show = function(){
		if(this.visible){
			if(this.canMove === true){
				image(thiefImg,125.8 * this.frame++,519,125.8,170,this.x,this.y,125.8,170);
        		this.frame = (this.frame === 9)?0:this.frame;
			}
        	else
        		image(thiefImg,125.8 * this.frame,519,125.8,170,this.x,this.y,125.8,170);
		}
    }
}