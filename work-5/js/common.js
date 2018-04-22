$(document).ready(function() {

	$('.dropdown-link').hover(function() {
		$(this).children('.dropdown-block').css('display', 'block');
	}, function() {
		$(this).children('.dropdown-block').css('display', 'none');
	});

	$('.price-title').click(function() {
		$('.price-title.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.price-title-1').click(function() {
		$('.price-text-1').css('display', 'block');
		$('.price-text-2').css('display', 'none');
	});

	$('.price-title-2').click(function() {
		$('.price-text-2').css('display', 'block');
		$('.price-text-1').css('display', 'none');
	});

});