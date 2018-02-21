$(document).ready(function() {

	$('.reg-button').click(function() {
		$('#reg').removeClass('hide-elem');
		$('#auth').addClass('hide-elem');
	});

	$('.login-button').click(function() {
		$('#reg').addClass('hide-elem');
		$('#auth').removeClass('hide-elem');
	});

});