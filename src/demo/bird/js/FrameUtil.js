(function(){
	// 帧工具类。提供当前的帧数；提供当前的真实的fps
	class FrameUtil{
		constructor(){
			// 起始帧
			this.sFrame = 0;
			// 当前帧
			this.currentFrame = 0;
			this.relFps = 0;
			// 起始时间
			this.sTime = new Date();
		}
		update(){
			// 当前自增
			this.currentFrame ++;
			// 当前时间
			this.currentTime = new Date();
			// 如果当前时间减去起始时间大于1000毫秒
			if(this.currentTime-this.sTime>=1000){
				// 获取fps=当前帧减去起始帧
				this.relFps = this.currentFrame - this.sFrame;
				// 重置起始帧跟起始时间
				this.sFrame = this.currentFrame;
				this.sTime = this.currentTime;
			}
		}
	}
	window.FrameUtil = FrameUtil;
})()