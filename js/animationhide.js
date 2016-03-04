$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideit').each( function(){
            var bottomobject = $(this).offset().top + $(this).outerHeight();
            var bottomwindow = $(window).scrollTop() + $(window).height()*1.1;
            if( bottomwindow > bottomobject && bottomobject < bottomwindow){
                $(this).animate({'opacity':'1'},500);
            }else{
                $(this).animate({'opacity':'0'},0);
            }
        });

    });

});