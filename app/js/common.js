$(document).ready(function() {

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
				if (!div.is(e.target) &&
					div.has(e.target).length === 0) {
					$(".modal_window, .types_of_assistance").removeClass('visible');
				}
			});
		} else if ($(".place").hasClass("visible") && $(".place_resul").hasClass("visible")) {
			$(document).mouseup(function(e) {
				var div = $('.place, .place_resul');
				if (!div.is(e.target) &&
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
		asNavFor: '.slider-nav',
		infinite: true,
		dots: false,
		fade: true,
		initialSlide: 2,
		draggable: false,
		swipe: false,
		useTransform: true,
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide-for',
		centerMode: true,
		focusOnSelect: true,
		dots: false,
		centerPadding: '0px',
		arrows: false,
		infinite: false,
		initialSlide: 2,
		variableWidth: true
	});

	$('.one .list').click(function(e) {
		$('.one .list').removeClass('active');
		$(this).toggleClass('active');
		e.preventDefault();
	});
	$('.two .list').click(function(e) {
		$('.two .list').removeClass('active');
		$(this).toggleClass('active');
		e.preventDefault();
	});
	$('.three .list').click(function(e) {
		$('.three .list').removeClass('active');
		$(this).toggleClass('active');
		e.preventDefault();
	});
	$('.four .list').click(function(e) {
		$('.four .list').removeClass('active');
		$(this).toggleClass('active');
		e.preventDefault();
	});



// Checkbox
	$('#assistance').click(function() {
		$(".menu_items").toggleClass('check');
	});

	$(".check_list_of_assistance").click(function() {
		if ($(".menu_items").hasClass("check")) {
			$(document).mouseup(function(e) {
				var div = $('.check_list_of_assistance');
				if (!div.is(e.target) &&
					div.has(e.target).length === 0) {
					$(".menu_items").removeClass('check');
				}
			});
		}
	});




});