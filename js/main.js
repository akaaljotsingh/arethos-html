'use strict';
// var mainDocument = $(document);

// init foundation
// $(document).foundation();

// Init all plugin when document is ready 
$(document).on('ready', function () {
	// 0. Init console to avoid error
	var method;
	var noop = function () { };
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});
	var contextWindow = $(window);
	var $root = $('html, body');
	while (length--) {
		method = methods[length];
		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	// page behavior
	var fullpageContainer = $('.fullpage-container');

	// 1. Background image as data attribut 
	var list = $('.bg-img');
	for (var i = 0; i < list.length; i++) {
		var src = list[i].getAttribute('data-image-src');
		list[i].style.backgroundImage = "url('" + src + "')";
		list[i].style.backgroundRepeat = "no-repeat";
		list[i].style.backgroundPosition = "center";
		list[i].style.backgroundSize = "cover";
	}
	// Image block to Background image 
	var listImgBlock = $('.img-block');
	for (var i = 0; i < listImgBlock.length; i++) {
		var src = listImgBlock[i].getAttribute('src');
		var divBlock = document.createElement("div");
		divBlock.setAttribute("class", "img");
		divBlock.style.backgroundImage = "url('" + src + "')";
		divBlock.style.backgroundRepeat = "no-repeat";
		divBlock.style.backgroundPosition = "center";
		divBlock.style.backgroundSize = "cover";
		$(listImgBlock[i]).after(divBlock);
		listImgBlock[i].style.display = "none";
	}
	// 2. Background Color as data attribut
	var listColor = $('.bg-color');
	for (var i = 0; i < listColor.length; i++) {
		var src = listColor[i].getAttribute('data-bgcolor');
		listColor[i].style.backgroundColor = src;
	}


	// 3. Show/hide menu when icon is clicked
	var menuItems = $('.all-menu-wrapper .nav-link');
	var menuIcon = $('.menu-icon, #navMenuIcon');
	var menuBlock = $('.all-menu-wrapper');
	var reactToMenu = $ ('.page-main, .navbar-sidebar, .page-cover, .body-page');
	var menuLinks = $(".navbar-mainmenu a, .navbar-sidebar a, .navbar-nav-menu a");
	var menuBg = $(".navbar-mainmenu .mainmenu-bg");
	// Menu icon clicked
	menuIcon.on('click', function () {
		menuIcon.toggleClass('menu-visible');
		menuBlock.toggleClass('menu-visible');
		menuItems.toggleClass('menu-visible');
		reactToMenu.toggleClass('menu-visible');
		return false;
	});

	// Hide menu after a menu item clicked
	menuLinks.on('click', function () {
		menuIcon.removeClass('menu-visible');
		menuBlock.removeClass('menu-visible');
		menuItems.removeClass('menu-visible');
		reactToMenu.removeClass('menu-visible');
		return true;
	});

	// Hide menu after menu bg clicked
	menuBg.on('click', function () {
		menuIcon.removeClass('menu-visible');
		menuBlock.removeClass('menu-visible');
		menuItems.removeClass('menu-visible');
		reactToMenu.removeClass('menu-visible');
		return true;
	});

	// 4 Slideshow / Slider
	// vegas slideshow background
	var imageList = $('.slide-show .img');
	var imageSlides = [];
	for (var i = 0; i < imageList.length; i++) {
		var src = imageList[i].getAttribute('data-src');
		imageSlides.push({ src: src });
	}
	$('.slide-show').vegas({
		delay: 5000,
		shuffle: true,
		slides: imageSlides,
		animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
	});

	// Slider Alpha : Projects slider
	var sliderAlpha =  Swiper('.slider-swiper-alpha .swiper-container', {
		pagination: '.slider-swiper-alpha .items-pagination',
		paginationClickable: '.slider-swiper-alpha .items-pagination',
		nextButton: '.slider-swiper-alpha .items-button-next',
		prevButton: '.slider-swiper-alpha .items-button-prev',
		loop: true,
		grabCursor: true,
		centeredSlides: false,
		autoplay: 5000,
		// autoplay: 0, // for a non-autoplay slider
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'slide',
		init: false,
	});
	var sliderAlphaInit = function () {
		if ($('.slider-swiper-alpha .swiper-container').length) {
			sliderAlpha.init();
		}
	}

	// Slider Beta : Team slider
	var sliderBeta = new Swiper('.slider-swiper-beta .swiper-container', {
		pagination: '.slider-swiper-beta .items-pagination',
		paginationClickable: '.slider-swiper-beta .items-pagination',
		nextButton: '.slider-swiper-beta .items-button-next',
		prevButton: '.slider-swiper-beta .items-button-prev',
		loop: true,
		grabCursor: true,
		centeredSlides: false,
		autoplay: 5000,
		// autoplay: 0, // for a non autoplay slider
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'slide',
		init: false,
	});
	var sliderBetaInit = function () {
		if ($('.slider-swiper-beta .swiper-container').length) {
			sliderBeta.init();
		}
	}

	// Slider Gamma : Testimony slider
	var sliderGamma = Swiper('.slider-swiper-gamma .swiper-container', {
		pagination: '.slider-swiper-gamma .items-pagination',
		paginationClickable: '.slider-swiper-gamma .items-pagination',
		nextButton: '.slider-swiper-gamma .items-button-next',
		prevButton: '.slider-swiper-gamma .items-button-prev',
		loop: true,
		grabCursor: true,
		centeredSlides: false,
		autoplay: 5000,
		// autoplay: 0,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'slide',
		init: false,
	});
	var sliderGammaInit = function( ) {
		if ($('.slider-swiper-gamma .swiper-container').length) {
			sliderGamma.init();
		}
	}

	sliderAlphaInit();
	sliderBetaInit();
	sliderGammaInit();
	
	// 5. Init video background
	var videoBg = $('.video-container video, .video-container object');
	// Fix video background
	videoBg.maximage('maxcover');

	// 6. Parallax js
	// home screen parallax
	var homeScreenImg = document.getElementById('home-parralax-img')
	if (homeScreenImg) {
		var homeScreenImgInstance = new Parallax(homeScreenImg);
	}
	var homeScreenText = document.getElementById('home-parralax-text');
	if (homeScreenText) {
		var homeScreenTextInstance = new Parallax(homeScreenText);
	}
	// section title parallax
	var parallaxTitle = new Rellax('.section-title .parallax-anim', {
		center: true,
		speed: -2,
	});
	// cover image parallax
	var parallaxCover = new Rellax('.section-cover .parallax-anim .img', {
		center: true,
		speed: 2,
	});

	var parallaxSpeed0 = new Rellax('.parallax-anim .parallax-speed-0', {
		center: true,
		speed: 0,
	})
	var parallaxSpeed1 = new Rellax('.parallax-anim .parallax-speed-1', {
		center: true,
		speed: -1,
	})
	var parallaxSpeed2 = new Rellax('.parallax-anim .parallax-speed-2', {
		center: true,
		speed: 1,
	})
	var parallaxSpeed3 = new Rellax('.parallax-anim .parallax-speed-3', {
		center: true,
		speed: 2,
	})
	var parallaxGrid = new Rellax('.parallax-grid .item .media-body', {
		center: true,
		speed: 1,
	})

	// 7. Contact form
	var showInfoBtn = $('.show-contact-information');
	var showMessageBtn = $('.show-contact-message');
	var contactSwiper = new Swiper('.slider-swiper-contact .swiper-container', {
		grabCursor: true,
		centeredSlides: false,
		autoplay: 0,
		autoplayDisableOnInteraction: false,
		slidesPerView: 1,
		spaceBetween: 16,
		autoHeight: true,
		effect: 'slide',
	});

	showMessageBtn.on('click', function () {
		contactSwiper.slideTo($('.contact-message-slide').index(), 300, false);
		return false;
	});
	showInfoBtn.on('click', function () {
		contactSwiper.slideTo($('.contact-information-slide').index(), 300, false);
		return false;
	});
	// init contact form
	// Default server url
	var newsletterServerUrl = './ajaxserver/serverfile.php';
	var messageServerUrl = './ajaxserver/serverfile.php';

	var sendEmailForm = $('.send_email_form');
	var sendMessageForm = $('.send_message_form');
	// Use form define action attribute
	if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
		newsletterServerUrl = sendEmailForm.attr('action');
	}
	if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
		messageServerUrl = sendMessageForm.attr('action');
	}

	sendEmailForm.initForm({
		serverUrl: newsletterServerUrl,
	});
	sendMessageForm.initForm({
		serverUrl: messageServerUrl,
	});
	

	// 8. Prepare content for animation
	$('.section .content .anim.anim-wrapped').wrap("<span class='anim-wrapper'></span>");

	 
	// Scroll to  next/previous section
	$('.scrolldown a, .scroll.down').on('click', function () {
		contextWindow.scrollTop(window.innerHeight);

	});
	$('.scroll.up').on('click', function () {
		contextWindow.scrollTop(-window.innerHeight);
		$root.animate({
				scrollTop: window.innerHeight
			}, 400, function () {
		});
	});

	// 9. Scrolling animation
	var scrollHeight = $(document).height() - contextWindow.height();
	var siteSections = $('.scroll-anim .section');
	contextWindow.on('scroll', function () {
		var scrollpos = $(this).scrollTop();
		var siteHeaderFooter = $('.page-footer, .page-header, .page-cover');
		// if (scrollpos > 10 && scrollpos < scrollHeight - 100) {
		// hide some ui on scroll
		if (scrollpos > 100) {
			siteHeaderFooter.addClass("scrolled");
		}
		else {
			siteHeaderFooter.removeClass("scrolled");
		}
		// sections animations
		siteSections.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("active"); 
			}
		});
	});

	// 9. Page Loader : hide loader when all are loaded
	contextWindow.on('load', function () {
		$('#page-loader').addClass('p-hidden');
		$('.section').addClass('anim');
		$('.scrollpage-container .section-home').addClass('active');
		
		siteSections.each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
				el.addClass("active"); 
			} 
		});
	});

});

