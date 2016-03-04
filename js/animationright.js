$(document).ready(function() { 
   $(window).scroll(function () {
      $('.animation').each(function () {
       var bottomobject = $(this).offset().top + $(this).outerHeight();
        var bottomwindow = $(window).scrollTop() + $(window).height()*1.1;
        if (bottomwindow > bottomobject && bottomobject < bottomwindow) {
            $(this).addClass("slideRight");
        } else {
            $(this).removeClass("slideRight");
        }
    });
});
});