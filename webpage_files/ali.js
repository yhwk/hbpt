$(document).ready(function(e) {   
$(".top").draggable().droppable();
$("#log").draggable().droppable();
$("#sbox").draggable().droppable();

});
$(function(){   
    var scrtime;   
    $("#lb2").hover(function(){   
         clearInterval(scrtime);//停止滚动   
    },function(){   
        scrtime = setInterval(function(){   
                var ul = $("#lb2 ul");   
                var liHeight = ul.find("li:last").height();//计算最后一个li元素的高度   
                ul.animate({marginTop : liHeight+40 +"px"},1000,function(){   
                    ul.find("li:last").prependTo(ul)   
                    ul.find("li:first").hide();   
                    ul.css({marginTop:0});   
                    ul.find("li:first").fadeIn(1000);   
                });           
        },4500);   
     }).trigger("mouseleave"); })
	 ;	 
$(function(){   
    var scrtime; 	   
	 $("#carousel-241380").hover(function(){   
         clearInterval(scrtime);
	 },function(){ 
	    scrtime = setInterval(function(){   
        $("#carousel-241380").carousel('next');         
		},5000); 
}).trigger("mouseleave");
});



$(document).ready(function(e) {
	$("#leftbutton").click(function(){
		$("#left").animate({left:'0px'}, "slow").css('box-shadow','0px 0px 0px 0px' );
		$("#leftbutton2").fadeIn();	
		$(this).fadeOut();	
			
		});

    $("#leftbutton2").click(function(){
		$("#left").animate({left:'-170px'}, "slow").css('box-shadow','5px  5px  5px #CCC' );
		$("#leftbutton").fadeIn();
		$(this).fadeOut();	
		
		});
		
	$("#gcjbxx").click(function(){
		$(window).scrollTop(0);
		});
	$("#cjdwxx").click(function(){
		$(window).scrollTop(1000);
		});

	 });
	 
function gotoTop(min_height){ 
$("#gotoTop").click(
function(){$('html,body').animate({scrollTop:0},800); 
}).hover( 
function(){$(this).addClass("hover");}, 
function(){$(this).removeClass("hover"); 
}); 
min_height ? min_height = min_height : min_height = 450; 
$(window).scroll(function(){ 
var s = $(window).scrollTop();  
if( s > min_height){ 
$("#gotoTop").fadeIn(100); 
}else{ 
$("#gotoTop").fadeOut(200); 
}; 
}); 
};

$(document).ready(function(e) {
	$("#c").click(function(){
	 $("#qbox").css({"transform":"rotate(-90deg)","-ms-transform": "rotate(-90deg)","-webkit-transform": "rotate(-90deg)",                  "-o-transform": "rotate(-90deg)","-moz-transform": "rotate(-90deg)"}).css("margin-top","-43px");
	 $("#bside").fadeIn(1500);	
	});
     
	$("#bside").mouseleave(function(){
	$("#bside").fadeOut(200);	
	$("#qbox").css({"transform":"rotate(0deg)","-ms-transform": "rotate(0deg)","-webkit-transform":"rotate(0deg)",  "-o-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)"}).css("margin-top","-45px");;	
	});	
	
	$("#weixin").mouseover(function(){
		$("#ewm").show();
		});
	$("#fbox").mouseleave(function(){
	$("#ewm").hide();
		});
	
});

$(document).ready(function(e) {
	$("#ltle p").click(function(){
		window.location.href="webpage.html";
		});
	$("#nb1").click(function(){
		window.location.href="webpage.html";
		});
	$("#nb2").click(function(){
		window.location.href="";
		});
	$("#nb3").click(function(){
		window.location.href="login.html";
		});
	$("#nb4").click(function(){
		window.location.href="reg.html";
		});
	$("#nt1").click(function(){
		window.location.href="ind.html";
		});
	$("#nt2").click(function(){
		window.location.href="edu.html";
		});
	$("#nt3").click(function(){
		window.location.href="map.html";
		});
	$("#nt5").click(function(){
		window.location.href="pset.html";
		});
	});