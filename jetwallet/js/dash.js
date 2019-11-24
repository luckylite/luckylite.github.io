$(document).ready(function() {

    $('.notifications-icon').click(function() {
        $('.dash__notifications-bar').toggleClass('showed');
        $('.dash__right-bar').toggleClass('hidden');
    });

    $('.dash__notifications-bar .notifics-hide').click(function() {
        $('.dash__notifications-bar').removeClass('showed');
        $('.dash__right-bar').removeClass('hidden');
    });

});