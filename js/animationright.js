$(window).scroll(function () {
    $('.animation').each(function () {
        var imagePosition = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePosition < topOfWindow + imageHeight && imagePosition + imageHeight > topOfWindow) {
            $(this).addClass("slideRight");
        } else {
            $(this).removeClass("slideRight");
        }
    });
});