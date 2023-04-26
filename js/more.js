$(function() {
	
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');
		} else {
			$(".top").addClass('on');
		};
	});
	
	$('.navbar li').hover(function() {
		var leftP = $(this).position();
		$('.scroll-nav').stop().animate({
			'left': leftP.left + 30
		}, 300);
	}, function() {
		$('.scroll-nav').stop().animate({
			'left': '30px'
		}, 300);
	});
	
	$('.searchbtn').click(function() {
		$('.sousuo').toggleClass('on')
	})	
	jQuery(".newstip").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true});

	//大图切换
	jQuery(".index-sec1").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200});
	//小图左滚动切换
	jQuery(".index-sec1 .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:5,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext" });
	
	jQuery(".index-sec3").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:2});

	$(".menuTitle3").click(function(){

		$(this).next("div").slideToggle("slow")

		.siblings(".menuContent3:visible").slideUp("slow");

		$(this).toggleClass("activeTitle3");

		$(this).siblings(".activeTitle3").removeClass("activeTitle3");

	});
	
	jQuery(".about-sec4").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:3});

})