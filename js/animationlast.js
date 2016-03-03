$(window).scroll(function () {
    $('.animlast').each(function () {
        var imagePosition = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        if (imagePosition < topOfWindow + imageHeight && imagePosition + imageHeight > topOfWindow) {
            $(this).addClass("slideLeft");
        } else {
            $(this).removeClass("slideLeft");
        }
    });
});