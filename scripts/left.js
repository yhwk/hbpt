// JavaScript Document
$(document).ready(function(e) {
	$("#leftbutton").click(function(){
		$("#leftbar").animate({left:'0px'}, "slow").css('box-shadow','0px 0px 0px 0px' );
		$("#leftbutton2").fadeIn();	
		$(this).fadeOut();		
		});

    $("#leftbutton2").click(function(){
		$("#leftbar").animate({left:'-180px'}, "slow").css('box-shadow','5px  5px  5px #CCC' );
		$("#leftbutton").fadeIn();
		$(this).fadeOut();	
		});
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if($(document).scrollTop()>100){
            $("#leftbar").css({
                'position':'fixed',
                'top':'10px','left':'-170px'
            })
        }else{ $("#leftbar").css({
                'position':'absolute',
				'top':'110px','left':'-178px'
            })
		}
	});   

	
	$(window).load(function(){$("#h1").css("background","#CAE7EA");});
    $("#h1").click(function(){
		$(this).css("background","#CAE7EA");
		$("#h2").css("background","#F2F9F9");
		$("#h3").css("background","#F2F9F9");
		});
	 $("#h2").click(function(){
		$(this).css("background","#CAE7EA");
		$("#h1").css("background","#F2F9F9");
		$("#h3").css("background","#F2F9F9");
		});
	 $("#h3").click(function(){
		$(this).css("background","#CAE7EA");
		$("#h1").css("background","#F2F9F9");
		$("#h2").css("background","#F2F9F9");
		});
	 $("#ann2").click(function(){
		});
	 });