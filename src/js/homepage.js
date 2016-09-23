$(function(){

// $('.banner').myFocus({
// 	imgs:["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg]
// })




	var $banner_ul = $(".banner").find("ul");
	var $banner_li = $banner_ul.find("li");
	var $Liwidth = $banner_li.outerWidth();
	var timer;
	var t = 2000;
	var i = 0;
	$(".banner").on("mouseover",function(){
		clearInterval(timer);
		$(".banner_left").show();
		$(".banner_right").show();
		
		
	});
	$(".banner").on("mouseout",function(){
		$(".banner_left").hide();
		$(".banner_right").hide();
		timer = setInterval(startmove,t);

	});
	$(".banner_left").on("click",function(){
		
		clearInterval(timer);
		i-=2;
		
		if (i<=0) {
				i=$banner_li.length-2;//6
				$banner_ul.css('left','-6720px');
				console.log(i);
			}
		startmove();
	});
	$(".banner_right").on("click",function(){
		clearInterval(timer);
		startmove();
	});
	timer = setInterval(startmove,t);
	function startmove(){
		i++ ;
		iLeft = -1*i*$Liwidth ;
		$banner_ul.stop().animate({
			left:iLeft,
		},function(){
			if (i>=$banner_li.length-1) {
				i=0;
				$banner_ul.css('left','0');
			}
		});
	}
	
	

	
})
