$(document).ready(function() {
    
    $('.mobile-menu_btn').click(function() {
        $('.mobile-menu').toggleClass('mobile-menu--opened');
    });

    $('.mobile-menu_close').click(function() {
        $('.mobile-menu').toggleClass('mobile-menu--opened');
    });

    $('.mobile-menu .mobile-menu_ul li').click(function() {
        $('.mobile-menu').removeClass('mobile-menu--opened');
    });

});