(function(){
	class StaticResourcesUtil{
		constructor(){
			this.images = new Object();
		}
		loadPicture(url,callback){
			var self = this;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status >= 200 && xhr.status <300 || xhr.status == 304){
						var jsonObj = JSON.parse(xhr.responseText);
						let alreadyLoadNum = 0;
						const allNum = jsonObj.images.length;
						for(let i=0;i<jsonObj.images.length;i++){
							let image = new Image();
							image.src = jsonObj.images[i].src;
							image.index = i;
							image.onload = function(){
								self.images[jsonObj.images[this.index].name] = this;
								alreadyLoadNum++;
								callback(alreadyLoadNum,allNum,self.images)
							}
						}
					}

				}
			}
			xhr.open('get',url,true);
			xhr.send(null);
		}
	}
	window.StaticResourcesUtil = StaticResourcesUtil;
})()