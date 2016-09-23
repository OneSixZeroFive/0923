$(function(){
//     var pagnum=1;

//     $.ajaxSetup({
//         url:"http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=20",
//         dataType:"jsonp",
//         success:function(res){       
//         console.log("加载");   
//             var $ul=$("#conttt2").find("ul");
//             $.each(res.song_list, function(idx,val) {
//                 var discount=(val.hot)/100;
//                 // console.log(val);
//                 var $div=$("<div></div>");
//                 var $li=$("<li></li>");
//                 $("<img />").attr({
//                     "src":val.pic_small,
//                     "width":200
//                 }).appendTo($div);
//                 $("<p></p>").html(val.album_title).appendTo($div);
//                 var $p=$("<p></p>").appendTo($div);
                
//                  $("<span></span><br />").html("￥"+discount).appendTo($p);
                
//                 /*销售数，评论数file_duration*/
//                 $("<span></span>").html("销售数"+val.file_duration).appendTo($p);
//                 $("<span></span>").html("评论数"+val.rank).appendTo($p);
                
//                 $("<p></p>").html(val.album_title).appendTo($div);
                
//                 $div.appendTo($li);
//                 $li.appendTo($ul);
//             });
//         }
//     })
//     /*在写两边，都不懂*/
//     $.ajax();
//     $(window).on("scroll",function(){
//         var scroll=0;
//         var scrollTop=$(window).scrollTop();   //滚动条高度
//         if (scrollTop>=$(document).height()-$(window).height()-400) {
            
//             pagnum++;
//             $.ajax({
//                 url:"http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=1&offset="+pagnum+"",
//             });
//             if (scrollTop>=5000) {
//                 $(window).off();
//             }
//         };
//     });
//     $(window).trigger("scroll");
    
    
// });



// 懒加载

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


});
