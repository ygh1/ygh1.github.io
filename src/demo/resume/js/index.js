(function() {
	// 音乐播放器设置
	var oAudio = document.getElementById('audio');
	var oMusic = document.getElementById('music');
	oMusic.addEventListener('click', function() {
		if(oAudio.paused) {
			oAudio.play();
			rotateFn();
		}else{
			oAudio.pause();
			clearInterval(musicTimer);
		}
	}, false);

	var rotateDeg = 0;
	var musicTimer = null;
	function rotateFn() {
		musicTimer = setInterval(function() {
			rotateDeg ++;
			oMusic.style.transform = 'rotate('+rotateDeg+'deg)'
			if(rotateDeg>=360) {
				rotateDeg = 0;
			}
		}, 10)
	}
	rotateFn();
	// swiper初始化
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true,
		pagination: '.swiper-pagination',
		nextButton:'.next-page',
		effect: 'coverflow',
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
		}
	})
})();
