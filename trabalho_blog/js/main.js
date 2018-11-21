$("#problem1183").hide();
$("#solu1").on("click",function(){
	$("#problem1183").hide();
	$("#problem1070").show();
	$(".flat-button_container").fadeIn(800);
	$("#solu1").addClass("active");
	$("#solu2").removeClass("active");
});
$("#solu2").on("click",function(){
	$("#problem1070").hide();
	$(".flat-button_container").fadeIn(800);
	$("#problem1183").show();
	$("#solu2").addClass("active");
	$("#solu1").removeClass("active");
});
$("#toggleButton").on("click",function(){
	$(".hidden").toggle(600);
})
$("#topButton").on("click",function(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})
$("#likeButton").on("click",function(){
	$("#likeButton").css({"color":"red"});
	$("#likeButton").animate({width: '50px',height:'50px',opacity: '0.8'})
})

