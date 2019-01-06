//屏幕滚动导航圆点
/*$("#menu li").hover(function(){
    $(this).find("a").show()
},function(){
    $(this).find("a").hide();
})*/



//鼠标悬停领带上出现加入我们
$('.goRecruit').hover(function(){
	$(this).animate({width:'200px'},"slow")
	$(this).find('span').show();
},function(){
	$(this).animate({width:'65px'},"slow")
	$(this).find('span').hide();
})
$(function(){
    $(".element_to_magnify").css({
  "height":screen.height+'!important'
  });
})

//鼠标悬停我们的服务内容变换效果
$('.ourService ul li').find('.topPic').hover(function(){
	$(this).parent().addClass('on')
},function(){
	$(this).parent().removeClass('on')
})



//小屏状态下单屏大小
if(screen.width<999){
	var Wh=screen.width;
    var Ht=screen.height;
    /*$(".wrapBox").removeClass("wrapBox");*/
    $(".box").css({"height":Ht,"width":Wh});
}



