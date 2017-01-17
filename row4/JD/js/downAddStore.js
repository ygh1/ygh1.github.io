var oUl = document.getElementById('row6');
var storeRank = document.getElementById('storeRank');
var header_input = document.getElementById('header_input');
var header2_bian = document.getElementById('header2_bian');
var jiantou = document.getElementById('jiantou');
var clientH = document.documentElement.clientHeight || document.body.clientHeight;
var clientW = document.documentElement.clientWidth || document.body.clientWidth;
var count = 3;//用来计数 请求完整数据时候

jiantou.onclick = function () {
    function huiqu() {
        document.body.scrollTop -= 10;
        var i = document.body.scrollTop;
        if (i <= 0) {
            document.body.scrollTop = 0;
            clearInterval(time1)
        }
    }

    var time1 = setInterval(huiqu, 1);
};


window.onscroll = function () {
    var scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;
    var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollT > 560) {
        jiantou.style.opacity = 1;
    } else {
        jiantou.style.opacity = 0;
    }
    header_input.style.left = scrollT * 1.8 + 'px';
    header_input.parentNode.style.opacity = 20 / scrollT;
    header2_bian.style.opacity = scrollT / 154;
    if (scrollT + clientH >= scrollH - 15) {
        $.ajax({
            url: 'model/storeModel.html',
            success: function (result) {
                oUl.innerHTML += result;
            }
        })
    }

}


