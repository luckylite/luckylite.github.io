$(document).ready(function() {

	$('.reg-button').click(function() {
		$('#reg').removeClass('hide-elem');
		$('#auth').addClass('hide-elem');
	});

	$('.login-button').click(function() {
		$('#reg').addClass('hide-elem');
		$('#auth').removeClass('hide-elem');
	});

	$('.password-button').click(function() {
		$('.recollect-password').css('display', 'flex');
		$('.recollect-password').fadeIn(250);
		$('body').css('overflow-y', 'hidden');
	});

	$('.recollect-password_overlay').click(function() {
		$('.recollect-password').fadeOut(250);
		$('.recollect-password').css('display', 'none');
		$('body').css('overflow-y', 'scroll');
	});

	$('.recollect-password_exit').click(function() {
		$('.recollect-password').fadeOut(250);
		$('.recollect-password').css('display', 'none');
		$('body').css('overflow-y', 'scroll');
	});

	$('#password-recoll').submit(function(event) {
		$('#password-recoll *').removeClass('not-valid');
		var name = $('#password-recoll input[name="login"]');

		if (name.val() == '') {
			name.addClass('not-valid');
			event.preventDefault();
		}
	});

	$('#auth').submit(function(event) {
		$('#auth *').removeClass('not-valid');
		var name = $('#auth input[name="login"]');
		var pass = $('#auth input[name="pass"]');

		if (name.val() == '') {
			name.addClass('not-valid');
			event.preventDefault();
		}

		if (pass.val() == '') {
			pass.addClass('not-valid');
			event.preventDefault();
		}
	});

	$('#reg').submit(function(event) {
		$('#reg *').removeClass('not-valid');

		var name = $('#reg input[name="login"]');
		var pass = $('#reg input[name="pass"]');
		var repass = $('#reg input[name="repass"]');

		if (name.val() == '') {
			name.addClass('not-valid');
			event.preventDefault();
		}

		if (pass.val() == '') {
			pass.addClass('not-valid');
			event.preventDefault();
		}

		if (repass.val() == '') {
			repass.addClass('not-valid');
			event.preventDefault();
		}
	});

});