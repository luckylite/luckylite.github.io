function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

$(document).ready(function() {

    var with_v = null;
    var time_v = null;
    var plan_v = null;
    var directions_v = [];
    var card_type = 'alpha';
    
    $('.next-tab').click(function() {
        var id = parseInt($(this).attr('data-id'));
        var next_id = id + 1;

        $('.progress-bar__item[data-id="' + id + '"]').removeClass('current');
        $('.progress-bar__item[data-id="' + id + '"]').addClass('passed');

        $('.tab').removeClass('current');
        $('.tab[data-id="' + next_id + '"]').addClass('current');
        $('.progress-bar__item[data-id="' + next_id + '"]').addClass('current');
    });

    $('.prev-tab').click(function() {
        var id = parseInt($(this).attr('data-id'));
        var prev_id = id - 1;

        $('.progress-bar__item[data-id="' + id + '"]').removeClass('current');
        $('.progress-bar__item[data-id="' + id + '"]').removeClass('passed');

        $('.tab').removeClass('current');
        $('.tab[data-id="' + prev_id + '"]').addClass('current');
        $('.progress-bar__item[data-id="' + prev_id + '"]').addClass('current');
    });

    $('*[data-action="set-with"]').click(function() {
        with_v = $(this).text();
        console.log(with_v);
    });

    $('*[data-action="set-time"]').click(function() {
        time_v = $(this).text();
        console.log(time_v);
    });

    $('*[data-action="set-plan"]').click(function() {
        plan_v = $(this).text();
        console.log(plan_v);
    });

    $('*[data-action="set-directions"]').click(function() {
        directions_v = [];
        $.each($(".directions input:checked"), function(){
            directions_v.push($(this).val());
        });
        console.log(directions_v);
    });

    $('.card-images img').click(function() {
        var card = $(this).attr('data-card');

        $('.card-images img').removeClass('active');
        $(this).addClass('active');

        $('.card').removeClass('showed');
        $('.card-' + card).addClass('showed');

        card_type = card;
    });

    $('.form form input').focusin(function() {
        var id = $(this).attr('id');

        $('.form label[for="' + id +'"]').addClass('entered');

        $(this).parent().addClass('focused');

        $('input#phone').inputmask({"mask": "+7 (999) 999 99-99"});
    });

    $('.form form input').focusout(function() {
        var id = $(this).attr('id');
        var value = $(this).val();

        if (value === '' || value === "+7 (___) ___ __-__") {
            $('.form label[for="' + id +'"]').removeClass('entered');
        }

        $(this).parent().removeClass('focused');

        $('input#phone').inputmask('remove');
    });

    $('.form form').submit(function(e) {
        e.preventDefault();

        var name = $('.form input[name="name"]');
        var phone = $('.form input[name="phone"]');
        var email = $('.form input[name="email"]');

        if (name.val() === '') {
            name.focus();
        }

        else if (phone.val().replace(/\D/g,'').length < 11) {
            phone.focus();
        }

        else if (validateEmail(email.val()) === false) {
            email.focus();
        }

        else {
            // ajax

            console.log(with_v);
            console.log(time_v);
            console.log(plan_v);
            console.log(directions_v);
            console.log(card_type);
            console.log(name.val());
            console.log(phone.val());
            console.log(email.val());

            $('span.user-name').text(name.val());
            $('.tab').removeClass('current');
            $('.last-tab').addClass('current');
            $('.progress-bar').fadeOut(0);
        }

    });


});