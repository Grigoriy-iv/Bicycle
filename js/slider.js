$(document).ready(function () {
	$('.slider__slick').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		//slidesToScroll: 2,
		//infinite: true,
		//speed: 1000,
		//autoplay: true,
		autoplaySpeed: 3000,
		//pauseOnFocus: true,
		//pauseOnHover: true,
		//pauseOnDotsHover: true,
		//draggable: true,
		//swipe: true,
		//touchThreshold: 10,
		//touchMove: true,
		//waitForAnimate: true,
		//centerMode: false,
		//variableWidth: false,
		//fade: true,
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
});