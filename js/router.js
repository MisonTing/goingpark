define(["backbone"],function(backbone){
	var Router = backbone.Router.extend({
		routes:{
			"page1":"page1fn",
			"page2":"page2fn",
			"page3":"page3fn",
			"page4":"page4fn"
		},
		page1fn:function(){
//			console.log("1");
			require(["page1js"],function(cb){
				cb.render();
			});
		},
		page2fn:function(){
//			console.log("2");
			require(["page2js"],function(cb){
				cb.render();
			});
		},
		page3fn:function(){
//			console.log("3");
			require(["page3js"],function(cb){
				cb.render();
			});
		},
		page4fn:function(){
//			console.log("4");
			require(["page4js"],function(cb){
				cb.render();
			});
		}
	});
	var router = new Router();
})
