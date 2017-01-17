/**
 * Created by luoluo on 2016/9/2.
 */
window.onload = function () {
    var $ = function (ID) {
        return document.getElementById(ID);
    };

//内容区按钮事件 内容区按钮事件 内容区按钮事件
    var zhankai = $('zhankai');
    var shouqi = $('shouqi');
    //展开按钮的 点击事件
    zhankai.onclick = function () {

        zhankai.style.animation = 'move 1.5s';
        setTimeout(function () {
            zhankai.style.opacity = '0';
        }, 1000);
        setTimeout(function () {
            shouqi.style.opacity = '1';
        }, 1110);
        //定义内容区 左边部分 的 底部的 li 出现的 函数
        var yincangli = 'yincangli';
        var count = 0;

        function liChuXian() {
            count++;
            var iName = yincangli + count;
            var li = $(iName);
            console.log(li);
            li.style.opacity = '1';
            if (count == 4) {
                zhankai.style.animation = 'none';
                clearInterval(time1);
            }
        }

        var time1 = setInterval(liChuXian, 250)
    };

    //收起按钮的 点击事件
    shouqi.onclick = function () {
        shouqi.style.animation = 'move2 1.1s ease-in';
        setTimeout(function () {
            shouqi.style.opacity = '0';
        }, 1000);
        setTimeout(function () {
            zhankai.style.opacity = '1';
        }, 1110);
        //定义内容区 左边部分 的 底部的 li 收起的 函数
        var yincangli = 'yincangli';
        var count = 5;

        function liChuXian() {
            count--;
            var iName = yincangli + count;
            var li = $(iName);
            console.log(li);
            li.style.opacity = '0';
            if (count == 1) {
                shouqi.style.animation = 'none';
                clearInterval(time2);
            }
        }

        var time2 = setInterval(liChuXian, 250)
    };

    //留言板上传函数//留言板上传函数//留言板上传函数

    var fabu = $('fabu');//发布按钮
    var showUl = $('showUl');//展示区的ul
    var touxiang = 'abcdefghijklmnopqrstuvwxyz';//头像图片
    var mingzi = ['i konw you are in trouble', 'long live', 'godie', 'red',
        'shake it off', 'sparks fly', 'you belong with me', 'blank space',
        'mine', '22', 'style', 'speak now', 'love story', '洛洛', '璀璨钻石',
        '探险家', '泰勒', '德莱文', '呆呆的洛洛', '洛洛爱轮滑', '洛洛爱上炒鸡蛋',
        '嘻哈', '我的天空', '把悲伤留给自己', '斗图小王子', '斗神'];//用户名
    var iInnerHTML = ['&#xe6c9;', '&#xe61b;', '&#xe612;', '&#xe616;'];//i里面的内容
    var spanInnerHTML = ['收藏', '转发', '评论', '赞'];
    //上传内容函数
    fabu.onclick = function () {
        var text = $('txt');//获取文本
        //创建新的li
        var nli = document.createElement('li');
        nli.className = 'clearFix';
        var aLi = showUl.children;
        if (aLi.length == 0) {
            showUl.appendChild(nli);
        } else {
            showUl.insertBefore(nli, aLi[0]);
        }
        //创建li里面第一个div 创建li里面第一个div 创建li里面第一个div 创建li里面第一个div 创建li里面第一个div
        var nDiv1 = document.createElement('div');
        nDiv1.className = 'clearFix';
        nli.appendChild(nDiv1);
        //创建li里面第二个div 创建li里面第二个div 创建li里面第二个div 创建li里面第二个div 创建li里面第二个div
        var nDiv2 = document.createElement('div');
        nli.appendChild(nDiv2);
        nDiv2.innerHTML = text.value;
        //创建第二个div里面的div
        var nDiv2Div = document.createElement('div');
        nDiv2Div.className = 'img-bottom';
        nDiv2.appendChild(nDiv2Div);
        //创建li里面第三个div 创建li里面第三个div 创建li里面第三个div 创建li里面第三个div 创建li里面第三个div
        var nDiv3 = document.createElement('div');
        nDiv3.className = 'show-foot clearFix';
        nli.appendChild(nDiv3);
        for (var i = 0; i < 4; i++) {
            var nDiv3Div = document.createElement('div');
            nDiv3.appendChild(nDiv3Div);
            var nDiv3DivI = document.createElement('i');
            nDiv3DivI.className = 'iconfont';
            nDiv3DivI.innerHTML = iInnerHTML[i];
            nDiv3Div.appendChild(nDiv3DivI);
            var nDiv3DivSpan = document.createElement('span');
            nDiv3DivSpan.innerHTML = spanInnerHTML[i];
            nDiv3Div.appendChild(nDiv3DivSpan);
            if (i == 0) {
                nDiv3DivI.onclick = function () {
                    this.style.color = '#fa7d3c';
                }
            }
        }
        var countt = 0;
        nDiv3DivI.onclick = function () {
            ++countt;
            nDiv3DivSpan.innerHTML = '赞' + '<big> ' + countt + '</big>';
        };
        //===============================================================================================
        //nli.appendChild(nDiv2);
        //创建li里面第一个div的分支1  创建li里面第一个div的分支1
        var nDiv1Div1 = document.createElement('div');
        nDiv1.appendChild(nDiv1Div1);
        //创建分支1的头像//更换头像
        var headImg = document.createElement('img');
        headImg.src = 'headImg/' + touxiang[parseInt(Math.random() * 26)] + '.jpg';
        nDiv1Div1.appendChild(headImg);
        // 创建li里面第一个div的分支2 创建li里面第一个div的分支2
        var nDiv1Div2 = document.createElement('div');
        nDiv1.appendChild(nDiv1Div2);
        //创建分支2的p
        //p1
        var nDiv1Div2P1 = document.createElement('p');
        nDiv1Div2P1.innerHTML = mingzi[parseInt(Math.random() * 26)];
        nDiv1Div2.appendChild(nDiv1Div2P1);
        //p2
        var nDiv1Div2P2 = document.createElement('p');
        var nowDate = new Date();
        nDiv1Div2P2.innerHTML = '今天 ' + nowDate.toLocaleTimeString() + '来自 iphone6s';
        nDiv1Div2.appendChild(nDiv1Div2P2);

        // 创建li里面第一个div的分支3 创建li里面第一个div的分支3
        var nDiv1Div3 = document.createElement('div');
        nDiv1.appendChild(nDiv1Div3);
        //分支3的 i
        var nDiv1Div3i = document.createElement('i');
        nDiv1Div3i.innerHTML = '+';
        nDiv1Div3.appendChild(nDiv1Div3i);
        //分支3的 span
        var nDiv1Div3Span = document.createElement('span');
        nDiv1Div3Span.innerHTML = '关注';
        nDiv1Div3.appendChild(nDiv1Div3Span);

        // 创建li里面第一个div的分支4 创建li里面第一个div的分支4
        var nDiv1Div4 = document.createElement('div');
        nDiv1.appendChild(nDiv1Div4);
        //分支4的 i
        var nDiv1Div4i = document.createElement('i');
        nDiv1Div4i.className = 'iconfont';
        nDiv1Div4i.innerHTML = '&#xe65e;';
        nDiv1Div4.appendChild(nDiv1Div4i);

        //分支4的p
        var nDiv1Div4p = document.createElement('p');
        nDiv1Div4p.innerHTML = '删除';
        nDiv1Div4.appendChild(nDiv1Div4p);

        nDiv1Div4i.onclick = function () {
            nDiv1Div4p.style.opacity = '1';
        };
        nDiv1Div4p.onclick = function () {
            showUl.removeChild(this.parentNode.parentNode.parentNode)
        }
    };
    //===============================================================================================
    var text2 = $('txt');
    var haikeshuru = $('haikeshuru');
    //留言板显示还能输入多少字的函数
    text2.oninput = function () {
        var geshu = 138 - text2.value.length;
        haikeshuru.innerHTML = '还可以输入' + '<big> ' + geshu + ' </big>' + '个字';
    };


    //登陆时候onmouse
    var show1 = $('xianshi1');
    var yingcangp1 = $('yingcangp11');

    var show2 = $('xianshi2');
    var yingcangp2 = $('yingcangp22');
    var time3 = '';
    yingcangp1.onmouseover = show1.onmouseover = function () {
        clearTimeout(time3);
        yingcangp1.style.display = 'inline-block';
    };
    yingcangp1.onmouseout = show1.onmouseout = function () {
        time3 = setTimeout(function () {
            yingcangp1.style.display = 'none';
        }, 1000)
    };

    var time4 = '';
    yingcangp2.onmouseover = show2.onmouseover = function () {
        clearTimeout(time4);
        yingcangp2.style.display = 'inline-block';
    };
    yingcangp2.onmouseout = show2.onmouseout = function () {
        time4 = setTimeout(function () {
            yingcangp2.style.display = 'none';
        }, 1000)
    };

    //登陆的函数
    var denglu = $('denglulu');
    var key = $('keyss');
    var denglukuang = $('show2222');
    denglu.onclick = function () {
        if (key.value == '123456') {
            denglukuang.style.display = 'none';
        } else {
            alert('密码不正确！')
        }
    };
    var jizhumima = $('jizhumima');
    jizhumima.onclick = function () {
        if (jizhumima.checkbox = true) {
            key.value = '123456';
        } else {
            key.value = '';
        }
    };
//下面的大括号是onload的大括号
};