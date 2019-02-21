$(document).ready(function() {

	$(window).scroll(function() {

		if ($(window).scrollTop() > 0) {
			$('.top-line').addClass('fixed');
		} else {
			$('.top-line').removeClass('fixed');
		}

	});







	$('.input-select').click(function() {
		$(this).toggleClass('active');
	});

	$('.input-list li').click(function() {
		$('.input-selected').text($(this).text());
	});






	$('.popup-bg').click(function() {
		$('.popup').removeClass('popup-active');
	});

	$('.popup-close').click(function() {
		$('.popup').removeClass('popup-active');
	});



	$('.menu-button').click(function() {
		$('.mobile-menu').fadeIn(0);
		$('.menu-container').animate({
			left: 0
		}, 200);
	});

	$('.menu-close').click(function() {
		$('.menu-container').animate({
			left: "-320px"
		}, 100);

		setTimeout(function() {
			$('.mobile-menu').fadeOut(100);
		}, 100);
	});

	$('.menu-bg').click(function() {
		$('.menu-container').animate({
			left: "-320px"
		}, 100);

		setTimeout(function() {
			$('.mobile-menu').fadeOut(100);
		}, 100);
	});



	$('.question-item').click(function() {
		$(this).toggleClass('opened');
	});





	$('button.popup-button, a.popup-button').click(function() {
		var id = '#' + $(this).attr('popup-id');

		$(id).addClass('popup-active');
	});

});