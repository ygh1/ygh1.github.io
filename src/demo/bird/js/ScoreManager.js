(function(){
	class ScoreManager{	
		constructor(){
			this.score = 0;
			this.x = game.canvas;
		}
		addPoint(){
			this.score ++;
		}
		update(){
			
		}
		render(){
			let beginPos = game.canvas.width/2 - (this.score.toString().length*40/2)
			let scoreLength = this.score.toString().length;
			for(let i=0;i<scoreLength;i++){
				let num = this.score.toString().substr(i,1);
				this.scoreCtrl(num,beginPos+40*i,50)
			}
		}
		scoreCtrl(num,x,y){
			game.ctx.drawImage(game.images['number'],num*40,0,40,57,x,y,40,57);
		}
	}
	window.ScoreManager = ScoreManager;	
})();