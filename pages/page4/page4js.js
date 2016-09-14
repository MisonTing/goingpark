define(["text!./pages/page4/page4.html","css!./pages/page4/page4.css"],function(page){
	function render(){
		$("#container").html(page);
	}	
	return{
		render:render
	}
})