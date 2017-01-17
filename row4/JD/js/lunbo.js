/**
 * Created by luoluo on 2016/10/24.
 */
new Swiper('.img-container', {
    loop: true,
    autoplay: 2000,
    //页码生成的容器
    pagination: '.swiper-pagination',
    //可点击页码
    paginationClickable: true,
    //paginationHide: true
    paginationBulletRender: function (index, cname) {
        return '<span class="' + cname + '">' + '</span>'
    }
});