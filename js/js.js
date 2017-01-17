


var clientH = document.documentElement.clientHeight || document.body.clientHeight;
var clientW= document.documentElement.clientWidth || document.body.clientWidth;
//设置背景 的高
document.getElementById('bg1').style.height = clientH + 'px';
document.getElementById('bg2').style.height = clientH + 'px';
document.getElementById('bg3').style.height = clientH + 'px';
document.getElementById('bg4').style.height = clientH + 'px';
document.getElementById('bg5').style.height = clientH + 'px';

//设置背景1中的向下滑动
document.getElementById('goDown1').onclick = function () {
    var num = 1;
    var num2 = 8;

    function bg1timerFn() {
        document.documentElement.scrollTop += num;
        document.body.scrollTop += num;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= clientH / 13 * 12) {
            num = 1;
        } else if (scrollTop >= clientH / 12 * 11) {
            num = 2;
        } else if (scrollTop >= clientH / 11 * 10) {
            num = 3;
        } else if (scrollTop >= clientH / 10 * 9) {
            num = 4;
        } else if (scrollTop >= clientH / 9 * 8) {
            num = 5;
        } else if (scrollTop >= clientH / 8 * 7) {
            num = 6;
        } else if (scrollTop >= clientH / 7 * 6) {
            num = 7;
            num2 = 20;
        } else if (scrollTop >= clientH / 2) {
            num = 8;
        } else if (scrollTop >= clientH / 3) {
            num = 6;
        } else if (scrollTop >= clientH / 4) {
            num = 5;
        } else if (scrollTop >= clientH / 5) {
            num = 3;
        } else if (scrollTop >= clientH / 6) {
            num = 2;
        } else if (scrollTop >= clientH / 7) {
            num = 1;
        } else if (scrollTop >= clientH / 8) {
            num = 1;
        }
        if (scrollTop >= clientH) {
            document.documentElement.scrollTop = clientH;
            document.body.scrollTop = clientH;
            clearInterval(bg1timer);
        }
    }

    var bg1timer = setInterval(bg1timerFn, num2)
};

//    第二行
//    $('#bg2 div p').eq(2).css('transform', 'translate(-150%,0)');
window.onscroll = function () {
    if ((document.documentElement.scrollTop >= clientH-80 && document.documentElement.scrollTop <= 1.3 * clientH)
        || (document.body.scrollTop >= clientH-80 && document.body.scrollTop <= 1.3 * clientH)) {
        $('#bg2 div p').eq(0).css('opacity', '1');
        $('#bg2 div p').eq(0).css('marginTop', '0');
        for (var i = 1; i < 8; i++) {
            if (i % 2 == 1) {
                var aaa = '150%';
            } else {
                var aaa = '-150%';
            }
            $('#bg2 div p').eq(i).css('transform', 'translate(' + aaa + ',0) rotate(360deg)');
        }
    } else {
        $('#bg2 div p').eq(0).css('opacity', '0');
        $('#bg2 div p').eq(0).css('marginTop', '-80px');
        for (var i = 1; i < 8; i++) {
            $('#bg2 div p').eq(i).css('transform', 'none');
        }
    }

//    第四行动画部分

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > clientH * 2.5 && scrollTop < clientH * 3.5){
        //规定五个作品的不同动画和顶部文字

        $('#bg4>p').eq(0).css('transform', ' translate(0,70px)');
        $('#bg4>p').eq(0).css('opacity', '1');

        //黑客帝国
        $('#row4Zuopin div').eq(0).css('transform', ' translate(-' + clientW * 0.35 + 'px, -' + clientH * 0.3 + 'px) scale(2.5)');
        //微博页面
        $('#row4Zuopin div').eq(1).css('transform', ' translate(-' + clientW * 0.35 + 'px, ' + clientH * 0.2 + 'px) scale(2.5)');
        //套牛小游戏
        $('#row4Zuopin div').eq(2).css('transform', 'scale(3)');
        //鼠标粒子特效
        $('#row4Zuopin div').eq(3).css('transform', ' translate(' + clientW * 0.35 + 'px, -' + clientH * 0.3 + 'px) scale(2.5)');
        //京东到家
        $('#row4Zuopin div').eq(4).css('transform', ' translate(' + clientW * 0.35 + 'px, ' + clientH * 0.2 + 'px) scale(2.5)');
    }else{
        $('#row4Zuopin div').css('transform', ' none');
        $('#bg4>p').eq(0).css('transform', ' translate(0,0px)');
        $('#bg4>p').eq(0).css('opacity', '0');
    }


//  最后一部分的动画
    if (scrollTop > clientH * 3.6){
        //规定五个作品的不同动画和顶部文字
        $('#bg5 .ziwojieshao div i').css('marginLeft', '40px');
        $('#bg5 .ziwojieshao div i').css('transform', 'rotate(720deg)');
        $('#bg5 .ziwojieshao div').css('transform', 'translate(-400px,0)');
        $('#bg5 .ziwojieshao div').css('opacity', '1');
        $('#bg5 .jieshao1').css('left', '30px');
        $('#bg5 .jieshao2').css('right', '30px');
    }else{
        $('#bg5 .ziwojieshao div i').css('marginLeft', '-600px');
        $('#bg5 .ziwojieshao div i').css('transform', 'none');
        $('#bg5 .ziwojieshao div').css('transform', 'none');
        $('#bg5 .ziwojieshao div').css('opacity', '0.5');
        $('#bg5 .jieshao1').css('left', '-300px');
        $('#bg5 .jieshao2').css('right', '-300px');
    }
}
document.getElementById('goDown2').onclick = function () {
    var num = 1;
    var num2 = 8;

    function bg1timerFn() {
        document.documentElement.scrollTop += num;
        document.body.scrollTop += num;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= clientH * 2 / 13 * 12) {
            num = 1;
        } else if (scrollTop >= clientH * 2 / 12 * 11) {
            num = 2;
        } else if (scrollTop >= clientH * 2 / 11 * 10) {
            num = 3;
        } else if (scrollTop >= clientH * 2 / 10 * 9) {
            num = 4;
        } else if (scrollTop >= clientH * 2 / 9 * 8) {
            num = 5;
        } else if (scrollTop >= clientH * 2 / 8 * 7) {
            num = 6;
        } else if (scrollTop >= clientH * 2 / 7 * 6) {
            num = 7;
            num2 = 20;
        } else if (scrollTop >= clientH * 2 / 2) {
            num = 8;
        } else if (scrollTop >= clientH * 2 / 3) {
            num = 6;
        } else if (scrollTop >= clientH * 2 / 4) {
            num = 5;
        } else if (scrollTop >= clientH * 2 / 5) {
            num = 3;
        } else if (scrollTop >= clientH * 2 / 6) {
            num = 2;
        } else if (scrollTop >= clientH * 2 / 7) {
            num = 1;
        } else if (scrollTop >= clientH * 2 / 8) {
            num = 1;
        }
        if (scrollTop >= clientH * 2) {
            document.documentElement.scrollTop = clientH * 2;
            document.body.scrollTop = clientH * 2;
            clearInterval(bg1timer);
        }
    }
    var bg1timer = setInterval(bg1timerFn, num2)
};

