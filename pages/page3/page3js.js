define(["text!./pages/page3/page3.html","css!./pages/page3/page3.css"],function(page){
	function render(){
		$("#container").html(page);
	}	
	return{
		render:render
	}
})