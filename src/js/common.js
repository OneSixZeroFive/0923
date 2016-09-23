$(function(){
	$(window).trigger("scroll");
	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 200){
			$(".top").fadeIn();
		}else{
			$(".top").fadeOut();
		}
	});
	$(".top_guide").on("mouseover",function(){
		$(".top_list").show();
	});
	$(".top_guide").on("mouseout",function(){	
		$(".top_list").hide();
	});
	$(".header_nav").on("mouseover",".header_nav_li",function(){
		$(this).children('a').eq(0).addClass("header_active");
		$(this).siblings().children('a').removeClass("header_active");
		$(this).find("div").show();
		$(this).siblings().find("div").hide();
	
	});
	$(".header_nav").on("mouseout",".header_nav_li",function(){
		$(this).children('a').removeClass("header_active");
		$(this).find("div").hide();
	})
	$(".header_Concern").on("mouseover",function(){
		$(this).find("dd").show();
	});
	$(".header_Concern").on("mouseout",function(){
		$(this).find("dd").hide();
	});
	$(".header_bag_box").on("mouseover",function(){
		$(this).find("dd").show();
		$(this).find("#header_bag_div").show();
	})
	$(".header_bag_box").on("mouseout",function(){
		$(this).find("dd").hide();
		$(this).find("#header_bag_div").hide();
	})
	
	var addgood = 0;
	var allprice = 0;
	$(".describe_btn").on("click",".describe_btn2",function(){
		var hasgood = $(".goodsbox_box").find("div").hasClass("goodsbox");	
		if(hasgood == false){
			addgood = 0;
			allprice = 0;
		}
		addgood++;
		$(".header_bag").find("dt").eq(0).find("em").html(addgood);
		$(".dd1").find("p").eq(0).addClass("bag_p").html("最新加入的商品");
		
		$(".total_prices").show();
		
		
		var src = $(".small_img").find("li").eq(0).find("img").eq(0).attr("src");
		
		var goodsbrand = $(".describe").find("h1").eq(0).find("a").eq(0).html();
		
		var goodsdeta = $(".describe").find("p").eq(0).html();
		
		var goodsprice = $(".nowprice").find("i").eq(0).html();
		
		allprice += parseInt(goodsprice.slice(1,-3));
		
		$(".prices_box").find("p").eq(0).find("span").eq(0).html("￥"+ allprice + ".00");
		 
		
		var $div =$("<div/>").addClass("goodsbox");
		$("<img>").attr("src",src).appendTo($div);
		$("<span/>").html(goodsbrand + "<br/>" + goodsdeta).appendTo($div);
		$("<i/>").html(goodsprice).appendTo($div);
		$("<em/>").html("╳").addClass("good_del").appendTo($div);
		
		$div.appendTo($(".goodsbox_box"))
		

	});
	
	$(".goodsbox_box").on("click",".good_del",function(){
		$(this).parent().remove();
			
		var delgood =  $(".header_bag").find("dt").eq(0).find("em").html();
		delgood--;
		$(".header_bag").find("dt").eq(0).find("em").html(delgood);
		console.log(delgood)
		
		var hasgood = $(".goodsbox_box").find("div").hasClass("goodsbox");	
		if(hasgood == false){
			$(".dd1").find("p").eq(0).removeClass("bag_p").html("您的购物袋是空的。。。");
			$(".total_prices").hide();
			$(".header_bag").find("dt").eq(0).find("em").html(0);
		}
		
		var oldprice = $(".prices_box").find("p").eq(0).find("span").eq(0).html();
		var thisprice = $(this).prev().html();
		thisprice = parseInt(thisprice.slice(1,-3));
		oldprice = parseInt(oldprice.slice(1,-3));
		nweprice = oldprice - thisprice;
		
		$(".prices_box").find("p").eq(0).find("span").eq(0).html("￥"+ nweprice + ".00");
		
	});






























})

