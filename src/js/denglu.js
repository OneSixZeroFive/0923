$(function(){
    //$(".registerform").Validform();  //就这一行代码！;
        
    $(".registerform").Validform({
        tiptype:function(msg,o,cssctl){
            if(!o.obj.is("form")){//验证表单元素时o.obj为该表单元素，全部验证通过提交表单时o.obj为该表单对象;
                var objtip=o.obj.siblings(".Validform_checktip");
                cssctl(objtip,o.type);
                objtip.text(msg);
            }
        }
    });
})








