// JavaScript Document
$(document).ready(function(e) {
   $("#rpname").focus(function(){var v=$(this).val();
    if(v=="用户名"){$(this).val("").css("color","black");}
   })
   $("#rpname").focusout(function(){var v=$(this).val();
    if(v==""){$(this).val("用户名").css("color","#999");}
   })
   $("#rpsd").focus(function(){var v=$(this).val();
    if(v=="密码（6-16个字符区分大小写）"){$(this).attr("type","password").val("").css("color","black");}
   })
   $("#rpsd").focusout(function(){var v=$(this).val();
    if(v==""){$(this).attr("type","text").val("密码（6-16个字符区分大小写）").css("color","#999");}
   })
   $("#repsd").focus(function(){var v=$(this).val();
    if(v=="确认密码"){$(this).attr("type","password").val("").css("color","black");}
   })
   $("#repsd").focusout(function(){var v=$(this).val();
    if(v==""){$(this).attr("type","text").val("确认密码").css("color","#999");}
   })
   $("#eml").focus(function(){var v=$(this).val();
    if(v=="邮箱"){$(this).val("").css("color","black");}
   })
   $("#eml").focusout(function(){var v=$(this).val();
    if(v==""){$(this).val("邮箱").css("color","#999");}
   })
    $("#mphone").focus(function(){var v=$(this).val();
    if(v=="手机号码"){$(this).val("").css("color","black");}
   })
   $("#mphone").focusout(function(){var v=$(this).val();
    if(v==""){$(this).val("手机号码").css("color","#999");}
   })
});