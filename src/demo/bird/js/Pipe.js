(function() {
	class Pipe{
		constructor() {
			this.type = Math.random()>0.5?1:0;
			this.h = Math.floor( (Math.random() * ( game.canvas.height/2-100) ) ) + 100;
			this.w = 148;
			this.x = game.canvas.width;
			this.y = this.type == 0 ? game.canvas.height-this.h-45 : 0;
			this.speed = 1.5;
			this.done = false;
		}
		update() {
			this.x -= this.speed;
			if(game.bird.x+game.bird.w>this.x && game.bird.x<this.x+this.w){
				if(this.type == 0){
					if(game.bird.y>= this.y -game.bird.h){
						game.gameover();
					}
				}else if(this.type == 1){
					if(game.bird.y<=this.h){
						game.gameover();
					}
				}
			}
			if(!this.done && this.x<game.canvas.width / 2 - this.w){
				game.ScoreManager.addPoint();
				this.done = true;
			}
		}
		pause() {
			this.speed = 0;
		}
		render() {
			if(this.x<-this.w){
				game.pipeArr.splice( game.pipeArr.indexOf(this), 1 );
			}
			if(this.type == 0){
				game.ctx.drawImage(game.images.pipe0, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h);
			}else if(this.type == 1){
				game.ctx.drawImage(game.images.pipe1, 0, 1664-this.h, this.w, this.h, this.x, this.y, this.w, this.h);
			}
		}
	}
	window.Pipe = Pipe;
})();