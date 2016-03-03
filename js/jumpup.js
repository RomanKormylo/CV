$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideit').each( function(){
            var bottomobject = $(this).offset().top + $(this).outerHeight();
            var bottomwindow = $(window).scrollTop() + $(window).height();
            if( bottomwindow > bottomobject && bottomobject < bottomwindow){
                  $('.jumpup').find('div').delay(1400).animate({
            opacity: 1, 
            left: 0
        }, 'slow'
    );
        };
    });
});