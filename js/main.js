$(document).ready(function() {
	
	 $("#my-calendar").zabuto_calendar();
	 
	 $("header div.left a").click(function(event) {
	 	$("aside").toggleClass('active');
	 	$("div.shadow").toggleClass('active');
	 });

	 $("div.shadow").click(function(event) {
	 	$(this).removeClass('active');
	 	$("aside").removeClass('active');
	 });


});