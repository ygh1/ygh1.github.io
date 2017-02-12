(function(){
	class Bird{
		constructor(){
			// x轴位置
			this.x = (game.canvas.width - 85) / 2;
			// y轴位置
			this.y = 100;
			// 宽度
			this.w = 85;
			// 高度
			this.h = 60;
			// 翅膀的初始状态
			this.swing = 0;
			// 每帧运动的距离
			this.dy = 1;
			// 当前帧
			this.sFrame = game.frameUtil.currentFrame;
			// 头部
			this.ro = 0;
			// 状态，有限状态机，控制小鸟上升，还是下降。0表示下降，1表示上升。
			this.state = 0;

			// 让小鸟每帧上升的高度变化的一个变量
			this.deltaY = 0;
			// 绑定监听点击上升
			this.bindClickListener();
			// 小鸟是否死了
			this.die = false;
			// 死亡血迹动画
			this.dieanamate = 0;
		}
		update(){
			if(this.die){
				this.dieanamate ++ ;
				if(this.dieanamate == 30){
					game.pause();
				}
				return;
			}
			// 翅膀变化
			if(game.frameUtil.currentFrame%this.swingSpeed==0){
				this.swing++;
			}
			if(this.swing >= 2){
				this.swing = 0;
			}
			// 重力
			if(this.state == 0){
				this.swingSpeed = 5;
				this.dy += 0.0005*Math.pow(game.frameUtil.currentFrame - this.sFrame,2);
				this.ro ++;
			}else if(this.state ==1){
				this.dy = -3;
				this.deltaY+=1;
				this.dy += this.deltaY;
				if(this.dy < 0){
					this.state = 0;
					this.sFrame = game.frameUtil.currentFrame;
				}
			}
			this.y += this.dy;
			// 头部旋转
			// 判断小鸟飞到顶部，或者跌落到底部
			if(this.y<=0){
				this.y = 0;
			}
			if(this.y>=game.canvas.height - this.h){
				game.gameover();
			}
			
			
		}
		fly() {
			this.state = 1;
			this.oldY = this.y;
			this.deltaY = 0;
			this.ro = -25;
			this.swingSpeed = 2;
		}
		render(){
			if(this.die){

				let row = parseInt(this.dieanamate / 5);
				let col = this.dieanamate % 5;
				game.ctx.drawImage(game.images.blood,325*col,138*row,325,138,game.bird.x-120,game.bird.y,325,138)
				return;
			}
			game.ctx.save();
			game.ctx.translate(this.x+this.w/2,this.y+this.h/2);
			game.ctx.rotate(Math.PI/180*this.ro);
			game.ctx.translate(-(this.x+this.w/2),-(this.y+this.h/2))
			game.ctx.drawImage(game.images.bird,this.w*this.swing,0,this.w,this.h,this.x,this.y,this.w,this.h)
			game.ctx.restore();
		}
		bindClickListener(){
			var self = this;
			game.canvas.addEventListener('mousedown',function(){
				
				self.fly();
			});
			game.canvas.addEventListener('touchstart',function(){
				self.fly();
			});
		}
	}
	window.Bird = Bird;
})()