$(document).ready(function() { 
   $(window).scroll(function () {
      $('.zoomout').each(function () {
       var bottomobject = $(this).offset().top + $(this).outerHeight();
        var bottomwindow = $(window).scrollTop() + $(window).height()*1.1;
        if (bottomwindow > bottomobject && bottomobject < bottomwindow) {
            $(this).addClass("zoomRight");
        } else {
            $(this).removeClass("zoomRight");
        }
    });
});
});