$('#row4Zuopin div').on('click', function () {
    window.open('row4/' + this.getAttribute('data-href')+'/'+this.getAttribute('data-href') + '.html');
})

//transform: translate(-300px, -300px);
//

//向下的箭头
document.getElementById('goDown4').onclick = function () {
    var num = 1;
    var num2 = 8;

    function bg1timerFn() {
        document.documentElement.scrollTop += num;
        document.body.scrollTop += num;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= clientH * 4 / 13 * 12) {
            num = 1;
        } else if (scrollTop >= clientH * 4 / 12 * 11) {
            num = 2;
        } else if (scrollTop >= clientH * 4 / 11 * 10) {
            num = 3;
        } else if (scrollTop >= clientH * 4 / 10 * 9) {
            num = 4;
        } else if (scrollTop >= clientH * 4 / 9 * 8) {
            num = 5;
        } else if (scrollTop >= clientH * 4 / 8 * 7) {
            num = 6;
        } else if (scrollTop >= clientH * 4 / 7 * 6) {
            num = 7;
            num2 = 20;
        } else if (scrollTop >= clientH * 4 / 2) {
            num = 8;
        } else if (scrollTop >= clientH * 4 / 3) {
            num = 6;
        } else if (scrollTop >= clientH * 4 / 4) {
            num = 5;
        } else if (scrollTop >= clientH * 4 / 5) {
            num = 3;
        } else if (scrollTop >= clientH * 4 / 6) {
            num = 2;
        } else if (scrollTop >= clientH * 4 / 7) {
            num = 1;
        } else if (scrollTop >= clientH * 4 / 8) {
            num = 1;
        }
        if (scrollTop >= clientH * 4) {
            document.documentElement.scrollTop = clientH * 4;
            document.body.scrollTop = clientH * 4;
            clearInterval(bg1timer);
        }
    }
    var bg1timer = setInterval(bg1timerFn, num2)
};

