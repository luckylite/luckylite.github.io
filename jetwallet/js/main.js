$(document).ready(function() {
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

    $('.login__img').css('min-width', ($(window).width() / 2 + 200) + 'px');

    $('.mobile-button').click(function() {
        $(this).toggleClass('mobile-button--opened');
        $('.mobile-menu').toggleClass('mobile-menu--opened');
    });
});