define(["jquery"],function(){
	document.documentElement.style.fontSize = innerWidth / 4.14 + "px";
	window.onresize = function(){
		document.documentElement.style.fontSize = innerWidth / 4.14 + "px";
	}
	//#container高度
	$("#container").height($(window).height()-$(".tab_bar").height());
	//tab_bar切换
	$(".tab_bar").find(".col-xs-3").on("touchstart",function(){
		$(".tab_bar").find(".col-xs-3").removeClass("selected");
		$(this).addClass("selected");
	})
	var page = window.location.href.slice(this.length-1) - 1;
	$(".tab_bar").find(".col-xs-3").removeClass("selected").eq(page).addClass("selected");
})

