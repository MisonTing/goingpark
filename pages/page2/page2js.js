define(["text!./pages/page2/page2.html","css!./pages/page2/page2.css"],function(page){
	function render(){
		$("#container").html(page);
		//page2数据
		function myAjax(arg_obj){
			$.ajax({
				type:"get",
				url:"http://duif.applinzi.com/leyuan/leyuan_data.php",
				async:true,
				data:arg_obj,
				success:function(res){
					var obj = JSON.parse(res);
	//				console.log(obj);
					setData(obj.data);
				}
			});
		}
		myAjax({address:"全城"});
		function setData(arr){
			for(var i = 0;i < arr.length;i ++){
				var divObj = $('<div class="list_cell"> <img src="'+ arr[i].img +'" alt="" /><span class="weizhi"></span> <span class="name">'+ arr[i].name +'</span> <span class="addr">'+ arr[i].address +'</span> <span class="dist">'+ arr[i].dist +'公里</span><div class="cover"></div></div>')
				$('.page2_list').append(divObj);
			}
			
		}
		//菜单高度
		$(".page2_nav").find(".nav_list").height($("#container").height() - $(".page2_nav").find(".nav_cell").height())
		
		//tital导航切换
		var blockOne = -1;
		$(".page2_nav").find(".nav_cell").on("touchstart",function(){
			if(blockOne == $(this).index()){
				$(".page2_nav").find(".nav_list").eq($(this).index()).toggle();
				return;
			}
			blockOne = $(this).index();
			$(".page2_nav").find(".nav_cell").removeClass("selected");
			$(this).addClass("selected");
			$(".page2_nav").find(".nav_list").css("display","none").eq($(this).index()).css("display","block");
		})
		//点击其他区域隐藏nav_list
		$(".nav_list").on("touchstart",function(e){
//			console.log($(e.target));
//			console.log($(".nav_list").eq(blockOne));
			if($(e.target)[0] == $(".nav_list").eq(blockOne)[0]){
				$(".page2_nav").find(".nav_list").css("display","none");
			}
		})
		//点击选择区域
		$(".page2_nav").find(".nav_list").on("touchstart",function(e){
			$(".page2_nav").find(".nav_list").css("display","none");
//			console.log($(e.target)[0].className);
			if($(e.target)[0].className != "col-xs-4"){
				return;
			}
//			console.log($(this).index())
			var arg = $(this).attr("data-arg");
			var addr = $(e.target).html();
			$(".page2_nav").find(".nav_cell").eq($(this).index() - 3).html(addr);
//			console.log(arg);
//			console.log(addr);
			$('.page2_list').empty();
			var obj = {};
			obj[arg] = addr;
//			console.log(obj)
			myAjax(obj);
		})
		
	}	
	return{
		render:render
	}
})