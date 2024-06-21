$(document).ready(function(){

    //幻灯片
    $(".banner").hover(function(){
        $(this).find(".prev,.next").fadeTo("show",0.5);
    },function(){
        $(this).find(".prev,.next").hide();
    })
    /*鼠标移过某个按钮 高亮显示*/
    $(".prev,.next").hover(function(){
        $(this).fadeTo("show",0.8);
    },function(){
        $(this).fadeTo("show",0.5);
    })
    $(".banner").slide({ titCell:".num ul" , mainCell:".51buypic" , effect:"fold", autoPlay:true, delayTime:700 ,interTime:5000 , autoPage:true });

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