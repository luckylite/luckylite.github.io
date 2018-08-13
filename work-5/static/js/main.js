$(document).ready(function() {
	
	$('#contacts .contacts-close').click(function() {
		$('#contacts .contacts-container').fadeOut();
	});
	
	var main_slider_items = document.querySelectorAll('.banner-slider .banner-slider_item');
	var iter = 0;

	setInterval(function() {
		main_slider_items[iter].classList.remove('showed-slide');
		if (iter >= main_slider_items.length - 1) {
			iter = 0;
		} else {
			iter++;
		}
		main_slider_items[iter].classList.add('showed-slide');
	}, 5000);

	$('.slider').owlCarousel({
		touchDrag: true,
		mouseDrag: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	$('.slider-nav .next').click(function() {
		$('.slider').trigger('next.owl.carousel');
	});

	$('.slider-nav .prev').click(function() {
		$('.slider').trigger('prev.owl.carousel', [300]);
	});

});