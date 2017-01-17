/**
 * Created by luoluo on 2016/11/22.
 */
//第三行//第三行//第三行//第三行//第三行//第三行
$('#bg3 .box').css('height', clientH+'px');



/**
 * Created by luoluo on 2016/10/10.
 */
+function (x) {
    //构造函数
    //将赋值放到 构造函数中
    // --- 带有逻辑判断循环, 放到其他的函数进行
    function Masonry(container) {
        this.container = container;
        this.imgHeight = [0, 0, 0];
    }
    //添加img的函数
    Masonry.prototype.appendImg = function (left,el, event,x,y) {
        var e = event || window.event;
        var temp=el.offsetTop;
        for (var j = 0; j < left.children.length; j++) {
            if (left.children[j].data_num == el.data_num && left.children[j].offsetTop > temp) {
                left.children[j].style.top = left.children[j].offsetTop - el.offsetHeight -14 + 'px';
            }
        }
        var minNum = getMin(this.imgHeight);
        var containerOffsetLeft = this.container.offsetLeft;
        el.style.left =  e.clientX-x-containerOffsetLeft  + 'px';
        el.style.top = e.clientY-y + 'px';
        //
        setTimeout(function () {
            //图片最终位置
            el.style.top = minNum.value + 'px';
            el.style.left = minNum.index * (150 + 10) + 'px';

        }, 1);
        this.container.appendChild(el);
        this.imgHeight[minNum.index] += el.offsetHeight + 10;
    };
    //从数组中找到最小的, 序号和值
    function getMin(arr) {
        var minValue = arr[0];
        var minIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
                minIndex = i;
            }
        }
        return {
            index: minIndex,
            value: minValue
        }
    }
    x.Masonry = Masonry;
}(window);




var left = document.getElementsByClassName('left')[0];
var right = document.getElementsByClassName('right')[0];
var imgNum, wuchaX, wuchaY;
var m = new Masonry(right);
var arr = [0, 0, 0];

for (var i = 0; i < left.children.length; i++) {
    left.children[i].data_num = parseInt(left.children[i].offsetLeft / 165);
}
left.ondragstart = function (event) {
    var e = event || window.event;
    if (e.target) imgNum = e.target;
    else imgNum = e.target;
    wuchaX = e.clientX - imgNum.offsetLeft;
    wuchaY = e.clientY - imgNum.offsetTop;
};

right.ondragover =  function(){
    luo.stopDefaultEvent(event);
};
//            function (event) {
//        var e = event || window.event;

//        if (e.preventDefault) e.preventDefault();//高级浏览器
//        else e.returnValue = false;//IE6-8
//    };

right.ondrop = function () {
    m.appendImg(left, imgNum, event, wuchaX, wuchaY);
    imgNum = null;
};




//向下的箭头
document.getElementById('goDown3').onclick = function () {
    var num = 1;
    var num2 = 8;

    function bg1timerFn() {
        document.documentElement.scrollTop += num;
        document.body.scrollTop += num;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= clientH * 3 / 13 * 12) {
            num = 1;
        } else if (scrollTop >= clientH * 3 / 12 * 11) {
            num = 2;
        } else if (scrollTop >= clientH * 3 / 11 * 10) {
            num = 3;
        } else if (scrollTop >= clientH * 3 / 10 * 9) {
            num = 4;
        } else if (scrollTop >= clientH * 3 / 9 * 8) {
            num = 5;
        } else if (scrollTop >= clientH * 3 / 8 * 7) {
            num = 6;
        } else if (scrollTop >= clientH * 3 / 7 * 6) {
            num = 7;
            num2 = 20;
        } else if (scrollTop >= clientH * 3 / 2) {
            num = 8;
        } else if (scrollTop >= clientH * 3 / 3) {
            num = 6;
        } else if (scrollTop >= clientH * 3 / 4) {
            num = 5;
        } else if (scrollTop >= clientH * 3 / 5) {
            num = 3;
        } else if (scrollTop >= clientH * 3 / 6) {
            num = 2;
        } else if (scrollTop >= clientH * 3 / 7) {
            num = 1;
        } else if (scrollTop >= clientH * 3 / 8) {
            num = 1;
        }
        if (scrollTop >= clientH * 3) {
            document.documentElement.scrollTop = clientH * 3;
            document.body.scrollTop = clientH * 3;
            clearInterval(bg1timer);
        }
    }
    var bg1timer = setInterval(bg1timerFn, num2)
};








