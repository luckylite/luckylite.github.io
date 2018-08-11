function GoTo(link) {
	window.open(link.replace("_","http://"));
}

$(document).ready(function() {

	$('#contacts .contacts-close').click(function() {
		$('#contacts .contacts-container').fadeOut();
	});

	$('.mobile-menu_button').click(function() {
		$('.mobile-menu_list').toggle("slow");
	});

	var slider_items = document.querySelectorAll('.banner-slider .banner-slider_item');
	var iter = 0;

	setInterval(function() {
		slider_items[iter].classList.remove('showed-slide');
		if (iter >= slider_items.length - 1) {
			iter = 0;
		} else {
			iter++;
		}
		slider_items[iter].classList.add('showed-slide');
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

	ymaps.ready(init);
      
	function init(){ 
		var myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 7
		}); 

		var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
			hintContent: 'Содержимое всплывающей подсказки',
			balloonContent: 'Содержимое балуна'
		});

		myMap.geoObjects.add(myPlacemark);
	}

});