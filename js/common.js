$(document).ready(function() {

	$('.menu-button').click(function() {

		if ($('.menu-button .hamburger').hasClass('is-active')) {
			$('.menu-button .hamburger').removeClass('is-active');
			$('.menu-content').fadeOut();
		} else {
			$('.menu-button .hamburger').addClass('is-active');
			$('.menu-content').fadeIn();
		}

	});

	$('.slider-blocks').owlCarousel({
		items: 1,
		smartSpeed: 700,
		nav: false
	});

	$('.top-line_create_progect_button a.button').click(function() {
		$('.popap-start_progect').fadeIn();
	});

	$('.popap-window .exit-popap').click(function() {
		$('.popap-start_progect').fadeOut();
	});

});