// JavaScript Document
$(document).ready(function(e) {
    $("#inbt").click(function(){
		$("#msginf").animate({marginLeft:"300px"},"1000")
		$("#msgsh").animate({marginTop:"-360px"},"1000")
	});
    $("#down").click(function(){
		$("#msginf").animate({marginLeft:""},"1000")
		$("#msgsh").animate({marginTop:"100px"},"1000")});
});