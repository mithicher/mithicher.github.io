$(document).ready(function() {
    
    var triggerButton = $('.nav__trigger');
    
    triggerButton.on('click', function(){
        $('.menu').toggleClass('nav--open');
        $('.ripple').toggleClass('animate');
        triggerButton.toggleClass('nav--open');
    });
    
});