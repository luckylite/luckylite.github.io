$(function() {

	$("a[href*='#']").mPageScroll2id();

	$('.nav-sandwich').click(function() {

		$('.nav-sandwich_content').fadeIn();

	});

	$('.sandwich-close').click(function() {

		$('.nav-sandwich_content').fadeOut();

	});

});
