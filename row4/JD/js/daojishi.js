/**
 * Created by luoluo on 2016/10/24.
 */
var spans = document.getElementById('row4P').getElementsByTagName('span');
var row4Img = document.getElementById('row4Img');
var num1 = 59, num2 = 59, num3 = 0, num4 = 2;
setInterval(function () {
    num3++;
    if (num1 < 10) {
        spans[4].innerHTML = '0' + num1--;
    } else {
        spans[4].innerHTML = num1--;
    }
    if (num1 == -1) {
        num1 = 59;
        num2--;
        if (num2 < 10) {
            spans[2].innerHTML = '0' + num2;
        } else {
            spans[2].innerHTML = num2;
        }
    }
    if (num3 % 3 == 0) {
        if (num4 == 4) {
            num4 = 1;
        }
        row4Img.src = 'img/row-4/1-' + num4 + '.jpg';
        num4++;
    }
}, 1000)
