( function () {
	'use strict';

	/*
		Masonry
	*/
	$(window).load(function() {    
		$( '.masonry' ).masonry({
		  	itemSelector: '.masonry__item',
		  	//columnWidth: '.grid-sizer',
		 	isAnimated: true
		 	//isFitWidth: true
		});
	});

})();