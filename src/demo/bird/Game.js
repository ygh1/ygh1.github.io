(function(){
	class Game {
		constructor(paramsJSON){
			this.gameEnd = false;
			var self = this;
			// fps表示frames per second每秒多少帧
			// 默认是60
			this.fps = paramsJSON.fps || 60;
			// 定时器
			this.timer = null;
			// 我的帧工具
			this.frameUtil = new FrameUtil();
			// 得到canvas
			this.canvas = document.getElementById(paramsJSON.id);
			// 得到上下文
			this.ctx = canvas.getContext('2d');
			this.sr = new StaticResourcesUtil()
			this.sr.loadPicture('json/resource.json',function(alreadyLoadNum,allNum,imagesObj){
				self.ctx.font = '16px 黑体'
				self.ctx.fillText('正在加载中',canvas.width/2,canvas.height/2);
				if(alreadyLoadNum == allNum){
					self.images = imagesObj;
					self.run();
				}
			})
		}
		run(){
			var self = this;
			this.timer = setInterval(function(){
				self.mainloop();
			},1000/self.fps);
			this.house = new Background({
				'image': this.images.house,
				'width': 300,
				'height': 256,
				'speed': 1.5,
				'y':this.canvas.height-316
			})
			this.floor = new Background({
				'image': this.images.floor,
				'width': 48,
				'height': 48,
				'speed': 1.5,
				'y':this.canvas.height-48
			})
			this.tree = new Background({
				'image': this.images.tree,
				'width': 300,
				'height': 216,
				'speed': 1.5,
				'y':this.canvas.height-264
			})
			this.bird = new Bird();
			this.pipeArr = [];
			this.ScoreManager = new ScoreManager();

			
		}
		mainloop(){
			// 清屏
			this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
			this.house.update();
			this.house.render();
			this.floor.update();
			this.floor.render();
			this.tree.update();
			this.tree.render();
			this.bird.update();
			this.bird.render();
			// 管子更新渲染
			if(!this.gameEnd && this.frameUtil.currentFrame%200 == 0){
				this.pipeArr.push(new Pipe())
			}
			for(let i=0;i<this.pipeArr.length;i++){
				this.pipeArr[i].update();
				this.pipeArr[i].render();
			}
			// 帧更新渲染
			this.frameUtil.update();
			this.ctx.fillText('FPS / ' + this.frameUtil.relFps,10,15);
			this.ctx.fillText('FNO / ' + this.frameUtil.currentFrame,10,30);

			// 分数更新渲染
			this.ScoreManager.update();
			this.ScoreManager.render();
			
		}
		pause(){
			clearInterval(this.timer);
		}
		gameover (){
			this.house.pause();
			this.floor.pause();
			this.tree.pause();
			for(let i=0;i<game.pipeArr.length;i++){
				game.pipeArr[i].pause();
			}
			this.gameEnd = true;
			this.bird.die = true;
		}
	}
	window.Game = Game;
})();