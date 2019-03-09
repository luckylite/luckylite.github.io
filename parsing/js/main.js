$(document).ready(function() {

	$('.mobile-menu_button').click(function() {
		$('.mobile-menu').toggleClass('active');
	});



	$('.select-menu').click(function() {
		$(this).toggleClass('active');
	});

	$('.menu-list li').click(function() {
		var val = $(this).html();
		var menu = $(this).closest('.select-menu');
		var selected = menu.children('.selected');

		selected.html(val);
	});


	$('.checkbox').click(function() {
		$(this).toggleClass('active');
	});


	bodyPadding();

	$(window).resize(function() {
		bodyPadding();
	});

});

function bodyPadding() {
	$('body').css('padding-bottom', $('.footer').height() + 'px');
}