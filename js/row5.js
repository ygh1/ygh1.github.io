$('#bg5 .gotoTop').on("click",function(){
    var toTop = setInterval(function(){
        document.documentElement.scrollTop -= 15;
        document.body.scrollTop -= 15;
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollTop<=0){
            clearInterval(toTop);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }, 5)
});
