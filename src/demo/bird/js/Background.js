(function(){
	class Background{
		//这个类将有3个实例：房子，大树，地板
		constructor(params){
			this.image = params.image;
			this.width = params.width;
			this.height = params.height;
			this.speed = params.speed;
			this.y = params.y;
			this.x = 0;
			this.amount = Math.ceil(game.canvas.width / this.width);
		}
		// 渲染
		update(){
			this.x-=this.speed;
			if(this.x<-this.amount*this.width){
				this.x = 0;
			}
		}
		pause() {
			this.speed = 0;
		}
		render(){
			
			for(let i=0;i<this.amount*2;i++){
				game.ctx.drawImage(this.image,0,0,this.width,this.height,this.width*i+this.x,this.y,this.width,this.height)
			}
		}
	}
	window.Background = Background;
})()