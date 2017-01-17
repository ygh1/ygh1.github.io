/**
 * Created by luoluo on 2016/9/8.
 */

+function (z) {

    z.luo = {};

//封装取标签的函数
    z.luo.$ = function (ID) {
        return document.getElementById(ID);
    };

//封装可视区宽度的函数
    z.luo.clientW = document.documentElement.clientWidth || document.body.clientWidth;

//封装可视区高度的函数
    z.luo.clientH = document.documentElement.clientHeight || document.body.clientHeight;

//封装定义的高度 页面高度 包含滚动条的厚度
    z.luo.scrollH = document.documentElement.scrollHeight || document.body.scrollHeight;

//封装定义的宽度 页面宽度 包含滚动条的厚度
    z.luo.scrollW = document.documentElement.scrollWidth || document.body.scrollWidth;

//封装上下滚动条距离top的长度
    z.luo.scrollT = document.documentElement.scrollTop || document.body.scrollTop;

//封装左右滚动条距left的长度
    z.luo.scrollL = document.documentElement.scrollLeft || document.body.scrollLeft;

//首节点的兼容:1.谷歌、火狐、IE9及以上版本使用firstElementChild
//            2.IE8及以下版本用firstChild

    HTMLElement.prototype.firstchild = function () {
        if (this.firstElementChild) {
            return this.firstElementChild;
        } else {
            return this.firstChild;
        }
    };

//尾节点的兼容:1.谷歌、火狐、IE9及以上版本使用lastElementChild
//            2.IE8及以下版本用lastChild
    HTMLElement.prototype.lastchild = function () {
        if (this.lastElementChild) {
            return this.lastElementChild;
        } else {
            return this.lastChild;
        }
    };

//兄弟节点的兼容（下一个节点）
//              1.谷歌、火狐、IE9及以上版本使用nextElementSibling
//              2.IE8及以下版本用nextSibling
    HTMLElement.prototype.nextsibling = function () {
        if (this.nextElementSibling) {
            return this.nextElementSibling;
        } else {
            return this.nextSibling;
        }
    };

//兄弟节点的兼容（上一个节点）
//              1.谷歌、火狐、IE9及以上版本使用previousElementSibling
//              2.IE8及以下版本用nextSibling
    HTMLElement.prototype.previoussibling = function () {
        if (this.previousElementSibling) {
            return this.previousElementSibling;
        } else {
            return this.previousSibling;
        }
    };

    //兼容IE8 不能用getElementsByClassName
    z.luo.getClassName = function (className) {
        var all = document.getElementsByTagName('*');
        var arr = [];
        for (var i in all) {
            if (all[i].className == className) {
                arr.push(all[i]);
            }
        }
        return arr;
    };

//获取内部或者外部样式表属性(或者说叫获取行外样式表)
// IE6-8需要使用 currentStyle['属性名'] || currentStyle.属性名
//其他浏览器则使用 window.getComputedStyle(对象,伪类).['属性名'] || window.getComputedStyle(对象,伪类).属性名
    HTMLElement.prototype.getStyle = function (attr) {
        if (this.currentStyle) {
            //IE6-8
            return this.currentStyle[attr];
        } else {
            //IE9以上 /FF / chrome
            return window.getComputedStyle(this, null)[attr];
        }
    };

///DOM2级事件引入方式
//兼容IE9一下不能用addEventListener
//fn可以是匿名函数 也可是引入外部函数
    HTMLElement.prototype.addEvent = function (type, fn) {
        if (this.addEventListener) {
            return this.addEventListener(type, fn);
        } else if (this.attachEvent) {
            return this.attachEvent('on' + type, fn);
        } else {
            this['on' + type] = fn;
        }
    };

///DOM2级事件删除
//兼容IE9一下不能用removeEventListener
//fn是外部引入函数
    HTMLElement.prototype.removeEvent = function (event, fn) {
        if (this.removeEventListener) {
            return this.removeEventListener(event, fn);
        } else {
            return this.detachEvent('on' + event, fn);
        }
    };

//==============================================================================================

    /**
     * 兼容IE8及以下版本的数组判断方法
     * @param obj
     * @returns {boolean}
     */
    Object.prototype.isArray = function () {
        if (Array.isArray) {
            return Array.isArray(this);//返回boolean类型
        } else {
            return this.constructor == Array;
        }
    };

//==============================================================================================
    /**
     *Object.keys兼容 返回obj的所有属性名
     * @param obj
     * @return {Array} 返回obj的所有属性名
     */
    Object.prototype.getAllKeys = function () {
        //判断 Object.keys 是否存在, 存在直接调用
        //....
        if (Object.keys) {
            return Object.keys(this);
        } else {
            //不存在, for in  var i 是属性名, 将所有的i 存储到一个数组中, 最后将数组返回
            var arr = [];
            //arr[arr.length] = 1;// arr[0] = 1;
            //console.log('数组的长度为 ' + arr.length);
            for (var i in this) {
                arr[arr.length] = i;
            }
            return arr;
        }
    };

//==============================================================================================

    /**
     * trim兼容问题  （清楚字符串前后空格）
     * @param str是字符串
     * @returns {*} 返回trim
     */
    String.prototype.trimStr = function () {
        if (this.trim) {
            return this.trim();
        } else {
            return this.replace(/^\s*|\s*$/g, "");
        }
    };

//==============================================================================================

//兼容 禁止事件冒泡
    z.luo.stopBubbleEvent = function (event) {
        var e = event || window.event;
        if (e.stopPropagation) {//IE8及以下不支持次方法
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    };

//==============================================================================================

//兼容 禁止默认事件
    z.luo.stopDefaultEvent = function (event) {
        var e = event || window.event;
        if (e.preventDefault) {
            e.preventDefault();//高级浏览器
        } else {
            e.returnValue = false;//IE6-8
        }
    }
}(window);