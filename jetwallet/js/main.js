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






    var select_value = $('select[name="currency"]').val().split(';');
    var btc_currency = parseFloat(select_value[1]);
    var quantity = parseInt($('.calculator input[id="quantity"]').val());

    $('.calculator__quantity span.currency').html(select_value[0]);
    $('.calculator__quantity p.small-text span').html((btc_currency * quantity).toFixed(4));

    $('.calculator input[type="range"]').on('input', function() {
        var id = $(this).attr('data-range-value');
        var value = $(this).val();

        $('input[id="' + id + '"]').val(value);
        $('.calculator span.' + id).html(value);

        var quantity = parseInt($('.calculator input[id="quantity"]').val());
        $('.calculator__quantity p.small-text span').html((btc_currency * quantity).toFixed(4));
    });

    $('.calculator input[type="range"]').on('input', function() {
        var v = $(this).val();
        var m = $(this).attr('max');
        v = v * 100 / m;

        $(this).css({
            background: 'linear-gradient(90deg, #0d5dfe ' + v + '%, #dadee6 ' + v + '%)'
        });

        var quantity = parseInt($('.calculator input[id="quantity"]').val());
        $('.calculator__quantity p.small-text span').html((btc_currency * quantity).toFixed(4));
    });

    $('.calculator input#quantity').change(function() {
        var value = parseInt($(this).val());
        var m = parseInt($('.calculator input[id="quantity_range"]').attr('max'));
        var mn = parseInt($('.calculator input[id="quantity_range"]').attr('min'));

        if (value > m) {
            value = m;
            $(this).val(value);
        }

        if (value < mn) {
            value = mn;
            $(this).val(value);
        }

        var r_v = value * 100 / m;

        $('.calculator span.quantity').html(value);
        $('.calculator input[id="quantity_range"]').val(value);

        $('.calculator input[id="quantity_range"]').css({
            background: 'linear-gradient(90deg, #0d5dfe ' + r_v + '%, #dadee6 ' + r_v + '%)'
        });

        var quantity = parseInt($('.calculator input[id="quantity"]').val());
        $('.calculator__quantity p.small-text span').html((btc_currency * quantity).toFixed(4));
    });

    $('select[name="currency"]').change(function() {
        var value = $(this).val().split(';');
        btc_currency = parseFloat(value[1]);
        var quantity = parseInt($('.calculator input[id="quantity"]').val());

        $('.calculator__quantity span.currency').html(value[0]);
        $('.calculator__quantity p.small-text span').html((btc_currency * quantity).toFixed(4));
    });



    var deadline_value = $('select[id="deadline_select"]').val().split(';');
    var percent = parseFloat(deadline_value[0]);

    $('.calculator__deadline p.small-text span.percent').html(deadline_value[1]);


    $('.calculator input#deadline').change(function() {
        var value = parseInt($(this).val());
        var m = parseInt($('.calculator input[id="deadline_range"]').attr('max'));
        var mn = parseInt($('.calculator input[id="deadline_range"]').attr('min'));

        if (value > m) {
            value = m;
            $(this).val(value);
        }

        if (value < mn) {
            value = mn;
            $(this).val(value);
        }

        var r_v = value * 100 / m;

        $('.calculator input[id="deadline_range"]').val(value);

        $('.calculator input[id="deadline_range"]').css({
            background: 'linear-gradient(90deg, #0d5dfe ' + r_v + '%, #dadee6 ' + r_v + '%)'
        });

        var quantity = parseInt($('.calculator input[id="deadline"]').val());
        

        deadline_value = $('select[id="deadline_select"]').val().split(';');
        $('.calculator__deadline p.small-text span.percent').html(deadline_value[1]);
    });

    $('.calculator select#deadline_select').change(function() {
        deadline_value = $('select[id="deadline_select"]').val().split(';');
        percent = parseFloat(deadline_value[0]);
        $('.calculator__deadline p.small-text span.percent').html(deadline_value[1]);
    });


    $('.about-big-image').css('min-width', ($(window).width() / 2 + 200) + 'px');
    $('.about-big-image').css('right', (($(window).width() / 2 + 200) / 2) + 'px');



    $('.how-it-works__tab').click(function() {
        var item = $(this).attr('data-item');

        $('.how-it-works__tab').removeClass('how-it-works__tab--active');
        $(this).addClass('how-it-works__tab--active');
        $('.how-it-works__tab-item').removeClass('active-tab');
        $('.how-it-works__tab-items__' + item).addClass('active-tab');
    });


    $('.questions__question').click(function() {
        var item = $(this).parent('.questions__item');

        item.toggleClass('opened');
    });




    $('.dash__right-bar .notifications-icon').click(function() {
        $('.dash__notifications-bar').addClass('showed');
    });

    $('.dash__notifications-bar .notifics-hide').click(function() {
        $('.dash__notifications-bar').removeClass('showed');
    });

});