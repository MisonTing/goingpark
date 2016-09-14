define(["text!./pages/page1/page1.html","css!./pages/page1/page1.css"],function(page){
	function render(){
		$("#container").html(page);
		//数据
		$.ajax({
			type:"get",
			url:"http://duif.applinzi.com/leyuan/home_data.php",
			async:true,
			success:function(res){
				var obj = JSON.parse(res);
				setData(obj);
			}
		});
		function setData(obj){
			//轮播图
			for(var i = 0;i < obj.slider.length;i ++){
				var imgObj = $("<img src='" + obj.slider[i].img + "'/>");
				$(".swiper").find(".img_box").append(imgObj);
			}
			//专区
			for(var i = 0;i < obj.arealist.length;i ++){
				var aObj = $('<a href="'+ obj.arealist[i].href +'"><img src="'+ obj.arealist[i].img +'" alt="" /></a>');
				$(".zhuanqu").append(aObj);
			}
			//精彩推荐
			for(var i = 0;i < obj.reclist.length;i ++){
				var imgObj = $("<img src='" + obj.reclist[i].img + "'/>");
				$(".jctj_list").append(imgObj);
			}
		}
	}
	return{
		render:render
	}
})
