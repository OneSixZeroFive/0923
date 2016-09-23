$(function(){
    console.log("magnifier");

        $('#myTab a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
        })
        $(function(){
            // 实现放大镜效果
            $('.lxzoom').lxzoom({
                width:500,
                height:300
            })
        }) 

    /*点击加入购物车，加入购物车，并且有一个弹出框*/
    var $shopcat=$(".but2");
    var i=0;
    $shopcat.on("click",function(){
        var num=199.00;   
        i++;
        num=num*i;
        // console.log("click",+num);
        var $div=$("<div id='js-div'></div>");
        var $h2=$("<h2>商品已添加到购物车</h2>").appendTo($div);
        var $clone=$("<span class='close'>x</span>").appendTo($h2);
        $clone.on("click",function(){
            $div.remove();
        });
        var $p=$("<p>购物车共有<span class='number'>"+i+"</span>件商品 , 总价<span>"+num+"</span></p>").appendTo($div);
        var $p1=$("<p></p>");
        var $a=$("<a class='settle' href='gwc.html'>去购物车结算</a>").appendTo($p1);
        var $a=$("<a href='../index.html'>继续购物</a>").appendTo($p1);
        
        $p1.appendTo($div);
        $div.appendTo("body");
        
    });
    var str=getCookie("arr");
    var arr=[];
    if (str!="") {
        arr=eval(str);
    }
    $shopcat.on("click",function(){
        console.log("cilick2");
        /*代码执行到这里了 获取要添加的购物车的图片，单贾 标题*/
        var title=document.getElementsByClassName("bt_f2")[0];
        var discount=document.getElementsByClassName("jg_li1")[0].getElementsByTagName("span")[0]; 
        var simg=document.getElementsByClassName("lxzoom")[0].getElementsByTagName("img")[0];
        var obj={};
        obj.simg=simg.innerHTML;
        obj.title=title.innerHTML;
        obj.discount=discount.innerHTML;
        /*obj.img="<img src='../img/magnifier/hasee.png' height='150'/>";*/
        arr.push(obj);
        addCookie("arr",arr.toSource(),7);
    });
    
    
});
