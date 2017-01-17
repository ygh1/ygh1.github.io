/**
 * Created by luoluo on 2016/10/26.
 */
var oUl = document.getElementById('fenleiUl1');
var lis = oUl.children;
var content = document.getElementById('content');
var scrollW = document.documentElement.scrollWidth || document.body.scrollWidth;
content.style.width = scrollW - 90 + 'px';
oUl.onclick = function (event) {
    content.getElementsByTagName('ul')[0].innerHTML = '';
    var classifyModel = '';
    var e = event || window.event;
    var element = e.target || e.srcElement;
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = '';
    }
    element.className = 'bianhua';
    var bigPartId = element.getAttribute('data_num');

    $.ajax({
        url: 'model/liModel.html',
        //result: 请求完成响应的li 数据
        success: function (result) {

            content.getElementsByTagName('ul')[0].innerHTML = result;
        }
    });
};