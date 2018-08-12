$(document).ready(function() {

	function sidebar_height() {
		if ($(window).width() >= 1000) {
			$('.article-menu').css("min-height", $('.article-content').height() + "px");
		}
	}

	sidebar_height();

	$(window).resize(sidebar_height());

	$('.article-menu li').click(function() {
		$(this).toggleClass('active');
	});
	
});