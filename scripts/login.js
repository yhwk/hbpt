// JavaScript Document
$(document).ready(function(e) {	
   $("#pname").focus(function(){var v=$(this).val();
    if(v=="用户名"){$(this).val("").css("color","black");}
   })
    $("#pname").focusout(function(){var v=$(this).val();
    if(v==""){$(this).val("用户名").css("color","#999");}
   })
   $("#psd").focus(function(){var v=$(this).val();
    if(v=="密码"){$(this).attr("type","password").val("").css("color","black");}
   })
   $("#psd").focusout(function(){var v=$(this).val();
    if(v==""){$(this).attr("type","text").val("密码").css("color","#999");}
   })
});

$(document).ready(function(e) {
$("#logtle2 p").click(function(){
	$("#logform").fadeOut(200);
	$("#p3").fadeOut(200);
	$("#logtle1").animate({left:'200px'});
	$("#p1").hide();
	$("#logform2").fadeIn(600);
	$("#p2").fadeIn(800);
	});
$("#p2 a").click(function(){
	$("#logform2").fadeOut(200);
	$("#logtle1").animate({left:'0px'});
	$("#p2").hide();
	$("#logform").fadeIn(600);
	$("#p3").fadeIn(800);
	$("#p1").fadeIn(800);
	});

$("#bt").click(function(){$(this).css("box-shadow","none")});
	
	
	});