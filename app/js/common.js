$(document).ready(function(){

	/* When user clicks the Icon */
	$('.submit a').click(function() {
		$(".modal_window, .types_of_assistance").toggleClass('visible');
	});

	$('.search i').click(function() {
		$(".place, .place_resul").toggleClass('visible');
	});

	$('.exit').click(function() {
		$(".place, .place_resul").removeClass('visible');
	});

	$('.exit_modal').click(function() {
		$(".modal_window, .types_of_assistance").removeClass('visible');
	});
	$(document).click(function() {
		if ($(".modal_window").hasClass("visible")) {
			$(document).mouseup(function(e) { 
				var div = $('.modal_window'); 
				if (!div.is(e.target)
					&&
					div.has(e.target).length === 0) { 
					$(".modal_window, .types_of_assistance").removeClass('visible');
				}
			});
		} else if ($(".place").hasClass("visible") && $(".place_resul").hasClass("visible")) {
			$(document).mouseup(function(e) {
				var div = $('.place, .place_resul');
				if (!div.is(e.target)
					&&
					div.has(e.target).length === 0) { 
					$(".place, .place_resul").removeClass('visible');
				}
			});
		}
	});


	 $('.slide-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		infinite: true,
		dots: false,
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide-for',
		centerMode: true,
		focusOnSelect: true,
		dots: false,
		centerPadding: '100px',
		arrows: false,
		infinite: false,
	});


});