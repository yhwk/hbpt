function c(){ 
		 var isFocus=$("#st input").is(":focus"); 
         if(true!=isFocus){ $('#st').fadeOut(); }
		 }
		 
$(document).ready(function(e){
	$('#search,#st').hover(function(){
		$('#st').fadeIn();
		$('#st input').focus();
		});

	$('#st input').blur(function(){		
		 var time=0;
		 clearTimeout(time);	
		 time=setTimeout("c()",4000); 
		});

	$('#search').click(function(){	
		if(($('#st input').val()!='')&&($('#st input').val()!='输入想要搜索的内容吧')) {
		$('#search').css("box-shadow","none");
		$("#sf").submit();
		}
		else{$('#st input').val("输入想要搜索的内容吧"); }
	});
	
	$("#st input").focus(function(){
		if($('#st input').val()=='输入想要搜索的内容吧'){$(this).val("");}
		})
	$("#st input").keypress(function(e){	
		var code = event.keyCode; 
		if(($('#st input').val()=='输入想要搜索的内容吧')&&!(13==code)){$(this).val("");}
		})	

	$("#sbox").keypress(function (e){ 
      var code = event.keyCode; 
	  if(13==code){
        if (($('#st input').val()!='')&&($('#st input').val()!='输入想要搜索的内容吧')) { 
	      $('#search').css("box-shadow","none");
	      $("#sf").submit();
         } 
	    else{$('#st input').val("输入想要搜索的内容吧");
	      e.preventDefault();
         }
	  }
    }); 
});
// JavaScript Document