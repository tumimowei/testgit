/**
 * Created by Administrator on 2016/12/8.
 */
$(function(){
    var index = 0;
    var timer = null;
    var moveBox = $(".boxContainer");
    var bigbox = $(".bigbox");
    timer = setInterval(move,2000);

        //点击标签实现相对应的轮播选项
    $("li").click(function(){
        index = $(this).index();
        $("li").eq(index).addClass("active").siblings().removeClass("active");
        moveBox.animate({
            "left":-index*300+"px"
        },1000)
    });
    //鼠标滑入停止轮播
    bigbox.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(move,2000);
    })

    //封装轮播代码
    function move(){
        index++;
        if(index>5){
            index = 1;
            moveBox.css("left",0);
        }
        moveBox.animate({
            "left":-index*300+"px"
        })

        //实现自动轮播标签切换
        if(index==5){
            $("li").eq(0).addClass("active").siblings().removeClass("active");
        }else{
            $("li").eq(index).addClass("active").siblings().removeClass("active");
        }
    }
        //点击右边按钮
    $(".right").click(function () {
        clearInterval(timer);
        move();
    })
    //点击左边的按钮
    $(".left").click(function(){
        clearInterval(timer);
        index--;
        if(index<0){
            index = 4;
            moveBox.css("left","-1500px");
        }
        moveBox.animate({
            "left":-index*300+"px"
        });
        if(index==5){
            $("li").eq(0).addClass("active").siblings().removeClass("active");
        }else{
            $("li").eq(index).addClass("active").siblings().removeClass("active");
        }
    })
});//等待整个html页面加载完成以后再执行