$(document).ready(function() {

    $('.dash .notifications-icon').click(function() {
        $('.dash__notifications-bar').toggleClass('showed');
        $('.dash__right-bar').toggleClass('hidden');
    });

    $('.dash__notifications-bar .notifics-hide').click(function() {
        $('.dash__notifications-bar').removeClass('showed');
        $('.dash__right-bar').removeClass('hidden');
    });

    $('.mobile-header .mobile-button').click(function() {
        $(this).toggleClass('mobile-button--opened');
        $('.mobile-header').toggleClass('mobile-header--opened');
        $('.mobile-menu-dash').toggleClass('mobile-menu--opened');
    });

    $('.mobile-header .notifications-icon').click(function() {
        $(this).toggleClass('opened');
        $('.mobile-menu-dash .mobile-menu__notifics').toggleClass('showed');
        $('.mobile-menu-dash .mobile-menu__accounts').toggleClass('hidden');
    });




    $('.form__multiple-inputs input').keyup(function() {
        var length = $(this).val().length;
        var id = parseInt($(this).attr('data-input-id'));
        var parent = $(this).parent();
        
        if (length == 1) {
            parent.children('input[data-input-id="' + (id + 1) + '"]').focus();
        } else {
            parent.children('input[data-input-id="' + (id - 1) + '"]').focus();
        }
    });

});