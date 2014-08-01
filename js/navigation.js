$(document).ready(function(){

	$('#toggle-menu').click(function(e){

		e.preventDefault();
		$('.nav ul').slideToggle();
		return false;
	});

});