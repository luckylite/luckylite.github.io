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

	$('.add-button').click(function() {
		var parent = $(this).closest('.add-box');
		var form = parent.children('.add-form');

		$(this).toggleClass('active');
		$(form).toggleClass('active');
	});

	$('.add-form button').click(function() {
		var parent = $(this).closest('.add-box');
		var form = parent.children('.add-form');
		var button = parent.children('.add-button');

		$(button).removeClass('active');
		$(form).removeClass('active');
		form.children('input').val('');
	});



	bodyPadding();
	sideBarHeight();

	$(window).resize(function() {
		bodyPadding();
		sideBarHeight();
	});

});

function bodyPadding() {
	$('body').css('padding-bottom', $('.footer').height() + 'px');
}

function sideBarHeight() {
	$('.sidebar').css('height', $('html').height() - $('.top-line').height() - $('.menu').height() - $('.progress-info').height() - $('.footer').height() + 'px');
}