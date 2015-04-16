// Navigation
(function($) {

	var body = $('body');

	// When toggle-icon is clicked toggle the menu
	// $('#navbar__toggle-icon').click(function(e){
	// 	e.preventDefault();
	// 	$('.site__pusher').toggleClass('navbar__open');
	// });

    // if navbar-fixed class has been added to #navbar then
    // add class navbar__fixed-padding to body...
    //if ( $('#navbar').hasClass( 'navbar__fixed' )) {
    //	body.addClass( 'navbar__fixed-padding' );
    //}
    //
    
    $('#navbar__toggle-icon').on('click', function(e){
      e.preventDefault();
      //$(this).parent().toggleClass('nav--active');
      $('.site__pusher').toggleClass('navbar--active');

    });

    // When Overlay is click toggle back the menu that is opened
    $('#site__overlay, .menu a').click(function(e){
      $('.site__pusher').removeClass('navbar--active');
    });

})(jQuery);
 