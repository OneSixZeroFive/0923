$(function(){
	$(".memu_x1").on("click","li",function(){
		$(this).find("ul").toggle(400);
		$(this).find(".triangle").toggle(400);
		$(this).find(".triangle2").toggle(400);
	});
	$("#memu_x2").on("click","li",function(){
		$(this).find(".triangle").toggle(400);
		$(this).find(".triangle2").toggle(400);
		$(this).siblings("li").find("#pull_down").toggle(400);
	});
	$("#memu_xx2").on("click","li",function(){
		$(this).find(".triangle").toggle(400);
		$(this).find(".triangle2").toggle(400);
		$(this).siblings("li").find("#pull_down1").toggle(400);
	});
//	当下拉到一定位置的时候memu 定位在那个位置
//当scrollTop()=170时
	$(window).on('scroll',function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>=170){
			$(".memu").addClass("memu_fixed");
		}else{
			$(".memu").removeClass("memu_fixed");
		}
	});
//点击 "回到顶部" 滚动条为0
	$(".drogue_x3").on("click",function(){
		$("html,body").animate({
			scrollTop:0
		});
	});


//	懒加载
	var $lazyload_ul = $('#lazyload_ul');
			var pageNum = 1;

			// 全局配置
			$.ajaxSetup({
				url:'/ajax/weibo',
				data:{pageNo:pageNum},
				dataType:'json',
				success:function(res){
					console.log(res);
					$.each(res, function(idx,val) {
						var $Li = $("<li/>");
						var $a1 = $("<a href='#'></a>");
						var $img = $("<img>");
						var $p = $("<p/>");
						var $a2 = $("<a href='#'></a>");
						var $div = $("<div/>");
						var $i = $("<i/>");
						var $span = $("<span/>");

						$img.attr("src",val.address).appendTo($a1);
						$a1.appendTo($Li);
						$a2.html(val.brand+"<br/>"+val.details).appendTo($p);
						$p.appendTo($Li);
						$i.html(val.oldprice).appendTo($div);
						$span.html(val.price).appendTo($div);
						$div.appendTo($Li);
						$Li.appendTo($lazyload_ul);
					});
				
				}
			});

			// 页面一加载就请求服务器的数据
			$.ajax();

			$(window).on('scroll',function(){
				var scrollTop = $(window).scrollTop();

				// 懒加载：滚动《快到底部》的时候再加载
				if(scrollTop >= $(document).height() - $(window).height() - 30){
					pageNum++;
					if(pageNum>=4){
						pageNum = 1;
					}

					$.ajax({
						data:{pageNo:pageNum}
					});
				}
			});

			// 手动触发滚动事件
			$(window).trigger('scroll');
})
