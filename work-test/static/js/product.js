$(document).ready(function() {

	function sidebar_height() {
		if ($(window).width() >= 1000) {
			$('.product-menu').css("min-height", $('.product-info').height() + "px");
		}
	}

	sidebar_height();

	$(window).resize(sidebar_height());

	$('.product-menu li').click(function() {
		$(this).toggleClass('active');
	});

	var product_slider_items = document.querySelectorAll('.product-slides .product-slides_item');
	var iter = 0;

	$('.product-slider_prev').click(function() {
		product_slider_items[iter].classList.remove('showed-slide');
		if (iter <= 0) {
			iter = product_slider_items.length - 1;
		} else {
			iter -= 1;
		}
		product_slider_items[iter].classList.add('showed-slide');
	});

	$('.product-slider_next').click(function() {
		product_slider_items[iter].classList.remove('showed-slide');
		if (iter >= product_slider_items.length - 1) {
			iter = 0;
		} else {
			iter += 1;
		}
		product_slider_items[iter].classList.add('showed-slide');
	});

	$('.product-slides').click(function() {
		product_slider_items[iter].classList.remove('showed-slide');
		if (iter >= product_slider_items.length - 1) {
			iter = 0;
		} else {
			iter += 1;
		}
		product_slider_items[iter].classList.add('showed-slide');
	});

	$('.input-check-mark').click(function() {
		$(this).toggleClass('active');
	});

	$('.product-form form').submit(function(e) {
		$('.product-form form .form-error').empty();

		var name = $('.product-form form input[name=name]').val();
		var phone = $('.product-form form input[name=phone]').val();
		var mail = $('.product-form form input[name=mail]').val();
		var checkMark = $('.product-form form .input-check-mark');

		var error = '';

		if (name === '' || name === ' ') {
			e.preventDefault();
			error = 'Имя введено не корректно!';
		} else if (!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) || phone === '' || phone === ' ') {
			e.preventDefault();
			error = 'Телефон введен не корректно!';
		} else if (!mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || mail === '' || mail === ' ') {
			e.preventDefault();
			error = 'Е-майл введен не корректно!';
		} else if (!checkMark.hasClass('active')) {
			e.preventDefault();
			error = 'Вы не подтвердили условия пользования!';
		}

		if (error !== '') {
			$('.product-form form .form-error').html(error);
		}


	});
	
});