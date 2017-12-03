$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black' ],
		offCanvas: {
			position: 'right'
		},
		navbar: false
	});

  var api = $("#my-menu").data( "mmenu" );

  api.bind("open:start", function() {
     $('.hamburger').addClass('is-active');
  });

  api.bind("close:start", function() {
     $('.hamburger').removeClass('is-active');
  });

	$('.p-items').mixItUp();

	$('.p-nav li').click(function() {
		$('.p-nav li').removeClass('active');
		$(this).addClass('active');
	});

	$("a[href*='#']").mPageScroll2id();

});
