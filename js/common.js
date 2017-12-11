$(document).ready(function () {

    $('.hamburger-menu').fadeOut();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.header').height()) {
            $('.top-line').addClass('fixed-nav');
        } else {
            $('.top-line').removeClass('fixed-nav');
        }
    });

    function p_item_height () {
        $('.p-item').css('height', $('.p-item').width() / (1920 / 1080) + 'px');
    }

    p_item_height();

    $(window).resize(p_item_height());

    $('.hamburger').click(function () {
        if ($('.hamburger-menu').is(':visible')) {
            $('.hamburger-menu').fadeOut();
        } else {
            $('.hamburger-menu').fadeIn();
        }
    });

    $("a[href*='#']").mPageScroll2id();

});

$(window).load(function () {
    setTimeout(function () {
        $('.preloader').fadeOut()
    }, 1000);
});