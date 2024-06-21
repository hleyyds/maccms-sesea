$(document).ready(function(){

    //懒加载
    $(function() {
        $(".lazyload").lazyload({effect: "fadeIn"});
    });

    //选集
    $(function(){
        $("#tag a").click(
            function(){
                $(this).addClass("active").siblings().removeClass("active");
                index = $("#tag a").index(this);
                $("#tagContent #playsx").eq(index).fadeIn(800).siblings().hide();
                $("#tagContent #playsx").eq(index).addClass("daoxu").siblings().removeClass("daoxu");
            }
        )
    });

    //公告
    $(function(){
        $(".gonggao").click(
            function(){
                $(".gongao").show();
            }
        );
        $(".gonhide").click(
            function(){
                $(".gongao").hide();
            }
        )
    });
});
var clickindex=2;
function change(data){
    var data = '.'+data+" .change"+clickindex;
   $(data).siblings().css("display","none");
   $(data).show();
    if(clickindex==2){
        clickindex=1;
    }else{
        clickindex=2;
    }
    $(".lazyload").lazyload({effect: "show"});
};