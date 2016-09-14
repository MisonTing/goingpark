require.config({
	paths:{
		jquery:"./js/jquery-2.2.3",
		indexjs:"./js/index",
		underscore:"./js/underscore",
		backbone:"./js/backbone",
		router:"./js/router",
		text:"./js/text",
		css:"./js/css",
		page1js:"./pages/page1/page1js",
		page2js:"./pages/page2/page2js",
		page3js:"./pages/page3/page3js",
		page4js:"./pages/page4/page4js"
	}
})

require(["backbone","router","indexjs"],function(backbone,router){
			
			//监听地址栏锚点的变化
			backbone.history.start();
})