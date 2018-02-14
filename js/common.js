$(document).ready(function() {

	$('.popular-shops_container').owlCarousel({
		items: 1,
		loop: true,
		responsive: {
			992: {
				items: 4
			},
			650: {
				items: 3
			}
			,
			420: {
				items: 2
			}
		}
	});

	$('.popular-shops_dots .dot-next').click(function() {
	    $('.popular-shops_container').trigger('next.owl.carousel');
	});
	$('.popular-shops_dots .dot-prev').click(function() {
	    $('.popular-shops_container').trigger('prev.owl.carousel');
	});

	$('.menu_button').click(function() {
		$('.menu-mobile').fadeIn(250);
		setTimeout(function() {
			$('.menu-mobile_container').animate({
				right: 0
			}, 100);
		}, 100);
		$('body').css('overflow-y', 'hidden');
	});

	$('.menu-mobile_overlay').click(function() {
		$('.menu-mobile_container').animate({
			right: '-320px'
		}, 100);
		setTimeout(function() {
			$('.menu-mobile').fadeOut(250);
		}, 100);
		$('body').css('overflow-y', 'scroll');
	});

	$('.menu-mobile_exit').click(function() {
		$('.menu-mobile_container').animate({
			right: '-320px'
		}, 100);
		setTimeout(function() {
			$('.menu-mobile').fadeOut(250);
		}, 100);
		$('body').css('overflow-y', 'scroll');
	});

	$('.search_button').click(function() {
		if($('.search-form').hasClass('hide-elem')) {
			$('.search-form').removeClass('hide-elem');
		} else {
			$('.search-form').addClass('hide-elem');
		}
	});


});