$(function() {
	const bodyEl = $('.js-body');
	const burgerMenuEl = $('.js-header__burger-menu');
	const menuListEl = $('.js-header__nav');
	const sliderEl = $('.main__slider-list');

	bodyEl.removeClass('no-js');

	//Открытие/закрытие бургер меню

	burgerMenuEl.click(function() {
		$(this).toggleClass('active');

		menuListEl.fadeToggle(400, 'linear');
	});

	sliderEl.slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
					
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},

		]
	})
});
