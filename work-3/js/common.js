$(document).ready(function() {

	$('.header-right ul.ul-main li').click(function() {

		if ($(this).children('.nav-dropdown').hasClass('flex-toggle')) {
			$(this).children('.nav-dropdown').removeClass('flex-toggle');
		} else {
			$('.header-right ul li .nav-dropdown').removeClass('flex-toggle');
			$(this).children('.nav-dropdown').addClass('flex-toggle');
		}	
	});

	$('.header-right ul.ul-main li').mouseout(function() {
		setInterval(function() {
			if (!$(this).hover()) {
				$(this).children('.nav-dropdown').removeClass('flex-toggle');
			}
		}, 1000);
	});

	$('.menu-button').click(function() {
		$('.menu-mobile').fadeIn(250);
		setTimeout(function() {
			$('.menu-mobile-container').animate({
				right: 0
			}, 100);
		}, 100);
		$('body').css('overflow-y', 'hidden');
	});

	$('.menu-mobile-overlay').click(function() {
		$('.menu-mobile-container').animate({
			right: '-320px'
		}, 100);
		setTimeout(function() {
			$('.menu-mobile').fadeOut(250);
		}, 100);
		$('body').css('overflow-y', 'auto');
	});

	$('.menu-mobile-exit').click(function() {
		$('.menu-mobile_container').animate({
			right: '-320px'
		}, 100);
		setTimeout(function() {
			$('.menu-mobile').fadeOut(250);
		}, 100);
		$('body').css('overflow-y', 'auto');
	});

});