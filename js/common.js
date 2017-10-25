$(document).ready(function() {

	$('.button-start_progect').click(function() {
		$('.popap-start_progect-container').fadeIn();
	});

	$('.popap-exit_button').click(function() {
		$('.popap-start_progect-container').fadeOut();
	});

	$('.slider_content').slick({
		dots: true,
    customPaging: function(slick,index) {
        return '<div class="slide-page_button"></div>';
    }
	});

	$('.menu-button').click(function() {
		$('.menu-content').fadeIn();
	});

	$('.menu-button-top_line').click(function() {
		$('.menu-content').fadeIn();
	});

	$('.menu-exit').click(function() {
		$('.menu-content').fadeOut();
	});

	$('#name_m').keyup(function() {
		var name_m_val = $('#name_m').val();
		if (name_m_val.length >= 5) {
			$('.menu-content').fadeOut();
			$('.popap-start_progect-container').fadeIn();
			$('#name').val(name_m_val);
			$('#name').focus();
			$('#name_m').val('');
		}
	});

});