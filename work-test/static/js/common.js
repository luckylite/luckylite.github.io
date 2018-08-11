function GoTo(link) {
	window.open(link.replace("_","http://"));
}

$(document).ready(function() {

	$('.mobile-menu_button').click(function() {
		$('.mobile-menu_list').toggle("slow");
	});

});