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

	$('.content-slider').owlCarousel({
		items: 1
	});

});