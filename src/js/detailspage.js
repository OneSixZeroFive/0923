$(function(){
	//点击 "回到顶部" 滚动条为0
	$(".drogue_x3").on("click",function(){
		$("html,body").animate({
			scrollTop:0
		});
	});
	
	$(".choose").on("click","li",function(){
		$(this).addClass("boxchangered").siblings("li").removeClass("boxchangered");
	});
//	tab切换部分
	$(".infor_tab").on("click",".tab",function(){
		$(this).addClass("tabclick").siblings(".tab").removeClass("tabclick");
		$("html,body").animate({
			scrollTop:1130
		},200);
		var idx = $(this).index();
		console.log(idx);
		$(".pro_infor").eq(idx).show().siblings(".pro_infor").hide();



	});
	
	$(window).trigger("scroll");
	$(window).on("scroll",function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 1130){
			$(".infor_tab").addClass("tab_fixed");
			$(".infor_box").css("marginTop","80px");
			$(".tab_buy").show();
			$(".tab_addbag").show();
		}else{
			$(".infor_tab").removeClass("tab_fixed");
			$(".infor_box").css("marginTop","40px");
			$(".tab_buy").hide();
			$(".tab_addbag").hide();
		}
	});
	
//	二级菜单Moncler_box的显示隐藏
	$(".way").on("mouseenter",".showMoncler_box",function(){
		$(".Moncler_box").show();
	});
	
	$(".way").on("mouseleave",function(){
		$(".Moncler_box").hide();
	})


	

	
	
//放大镜部分
//	鼠标滑过小图 小图有边框 中图切换
	$(".small_img").on("mouseover","li",function(){
		$(this).addClass("small_img_mouseover").siblings("li").removeClass("small_img_mouseover");
		var idx = $(this).index();
		//console.log(idx);
		$(".big_img_x1").find("img").attr("src","img/h-101889-"+(idx+1)+".jpg")
		$(".big_img_x2").find("img").attr("src","img/h-101889-"+(idx+1)+".jpg")
	});
	
	
	
//	点击中图淡出弹窗
	$(".big_img_x1").on("click",function(){
		$(".pop_mask").fadeIn();
	});
	
	$(".pop_box").on("click","span",function(){
		$(".pop_mask").fadeOut();
	});
	$(".pop_box").on("click",function(event){
//		阻止冒泡
		event.stopPropagation();
	});
	
	
	$(".pop_mask").on("click",function(){
		$(".pop_mask").fadeOut();
	});
	
//点击弹窗的小图  显示对应的大图
	var $big_ulWidth = $(".big_ul").outerWidth();
	var $big_liWidth = $(".big_ul").find("li").eq(0).outerWidth();
	$(".pop_ul").on("click","li",function(){
		var idx = $(this).index();
		
		
		$(".big_ul").stop(true,true).animate({
			left: -idx*$big_liWidth
		},function(){
			var bigLeft = parseInt($(".big_ul").css("left"));
			if(bigLeft == 0){
				$(".btn_left").hide();
			}else{
				$(".btn_left").show();
			}
			
			if(bigLeft == -$big_ulWidth+$big_liWidth){
				$(".btn_right").hide();
			}else{
				$(".btn_right").show();
			}
		});	
	});
//	左右移动按钮  到了向左或向右最后一张时 按钮隐藏  反向按时另一个出现
	$(".btn_left").on("click",function(){
		$(".btn_right").fadeIn();
		var bigLeft = parseInt($(".big_ul").css("left"));
		if(bigLeft >= 0){
				$(".btn_left").hide();
			}else{
				$(".big_ul").stop(true,true).animate({
					left:bigLeft+$big_liWidth
				});
			}
	});
	
	$(".btn_right").on("click",function(){
		$(".btn_left").fadeIn();
		var bigLeft = parseInt($(".big_ul").css("left"));
		if(bigLeft <= -$big_ulWidth+$big_liWidth){
				$(".btn_right").hide();
			}else{
				$(".big_ul").stop(true,true).animate({
					left:bigLeft-$big_liWidth
				});
			}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
// jQuery.prototype = jQuery.fn
;(function($){
	$.fn.lxzoom = function(opts){
		// 这里的this指向jquery实例（选择器得到的对象）
		var defaults = {
			position:'right',//大图显示的位置
			gap:20,//小图与大图的距离
			width:300,
			height:200,
		}

		this.each(function(){
			// 这里的this为DOM节点
			var $self = $(this);

			// 把传入的参数opts扩展到defaults
			// 如果有同名属性：覆盖
			// 如果defaults中没有相应属性：则添加
			// 返回目标对象本身
			var opt = $.extend({},defaults,opts);
			// $.extend([d],target,obj1,obj2,...,[objN])

			

			var $smallPic = $(this).find('img');
			var $minZoom;

			// 大图容器
			var $bigWrap;

			// 大图
			var $bigPic;

			// 大图与小图的比例
			var ratio;

			// 绑定mousemove事件
			var smallPicPos;

			$self.on('mouseenter',function(){
				// 绑定mousemove事件
				smallPicPos = {x:$smallPic.offset().left,y:$smallPic.offset().top};
				// 初始化
				console.log(smallPicPos);
				init($smallPic.attr('src'));
			})
			

			$self.on('mousemove',function(e){
				// 鼠标的位置距离小图左上角的偏移量
				var oLeft = e.pageX - smallPicPos.x;
				var oTop = e.pageY - smallPicPos.y;

				// 半透明方块的左上角位置
				var minPos = {
					top: oTop- $minZoom.outerHeight()/2,
					left:oLeft - $minZoom.outerWidth()/2
				}


				// 判断不让它超出小图的区域（水平+垂直）
				if(minPos.left < 0){
					minPos.left = 0;
				}else if(minPos.left >= $smallPic.outerWidth() - $minZoom.outerWidth()){
					minPos.left = $smallPic.outerWidth() - $minZoom.outerWidth();
				}
				if(minPos.top < 0){
					minPos.top = 0;
				}else if(minPos.top >= $smallPic.outerHeight() - $minZoom.outerHeight()){
					minPos.top = $smallPic.outerHeight() - $minZoom.outerHeight()
				}

				// 定位minizoom位置
				$minZoom.css(minPos);


				// 定位大图
				var bigPos = {left:minPos.left*ratio,top:minPos.top*ratio};

				// 判断大图到底后不再移动
				if(bigPos.top >= $bigPic.outerHeight()-$bigWrap.outerHeight()){
					bigPos.top = $bigPic.outerHeight()-$bigWrap.outerHeight()
				}
				if(bigPos.left >= $bigPic.outerWidth()-$bigWrap.outerWidth()){
					bigPos.left = $bigPic.outerWidth()-$bigWrap.outerWidth()
				}
				$bigPic.css({
					left:-bigPos.left,
					top:-bigPos.top
				});
			});

			// 鼠标移开
			$self.on('mouseleave',function(){
				remove();
			})

			function init(src){
				// 生成html结构
				$bigPic = $('<img/>').attr('src',src);
				$bigPic.load(function(){
					// 大图加载完后计算比率
					ratio = $bigPic.outerWidth()/$smallPic.outerWidth();

					// 设置放大镜尺寸（与大图可视区域长宽比相同）
					$minZoom = $('<span/>').addClass('minzoom').css({
						width:opt.width/ratio,
						height:opt.height/ratio
					}).appendTo($self);
				});
				$bigWrap = $('<div/>').addClass('lxbzoom').append($bigPic).appendTo('body');

				if(opt.position == 'right'){
					var left = smallPicPos.x + $self.outerWidth() + opt.gap;
					var top = smallPicPos.y;
				}

				$bigWrap.css({
					left:left,
					top:top,
					width:opt.width,
					height:opt.height
				});
				
			}

			function remove(){
				$bigWrap.remove();
				$minZoom.remove();
			}
		})

		// 为了链式调用
		return this;
	}
})(jQuery);
