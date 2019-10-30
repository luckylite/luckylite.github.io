$(document).ready(function() {
    $('.read-more_button').click(function() {
        $(this).closest('.result-item').toggleClass('more-info_showed');
    });

    $('.close-more_button').click(function() {
        $(this).closest('.result-item').toggleClass('more-info_showed');
    });
});