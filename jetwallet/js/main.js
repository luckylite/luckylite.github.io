$(document).ready(function() {
    $('.form__multiple-inputs input').keyup(function() {
        var length = $(this).val().length;
        var id = parseInt($(this).attr('data-input-id')) + 1;
        var parent = $(this).parent();
        
        parent.children('input[data-input-id="' + id + '"]').focus();
    });

    $('.login__img').css('min-width', ($(window).width() / 2 + 200) + 'px');
});