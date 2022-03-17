$(function () {
  'use strict';

  // for navbar background color when scrolling
  $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
    var bc2top = $('#back-top-btn');
    var stickytop = $('.navbar');
    if ($scrolling >= 50) {
      stickytop.addClass('sticky');
    } else {
      stickytop.removeClass('sticky');
    }
    if ($scrolling > 50) {
      bc2top.fadeIn(1000);
    } else {
      bc2top.fadeOut(1000);
    }
  });

  /* -------------------------------------
	         Animated Scroll Start js				
	 	-------------------------------------- */
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 50,
          },
          1500
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll link is clicked
  $('.nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  /* -------------------------------------
	         Back to top js				
	 	-------------------------------------- */
  var bc2top = $('.back-top-btn');
  bc2top.on('click', function () {
    html_body.animate(
      {
        scrollTop: 0,
      },
      1300
    );
  });

  /* -------------------------------------
	          Preloader				
	 	-------------------------------------- */
  $('#preloader').delay(2500).fadeOut(1000);

  /* -------------------------------------
	          Datepicker				
	 	-------------------------------------- */

  $('#datepicker').datepicker();

  /* -------------------------------------
          HOME BANNER SLIDER				
 	-------------------------------------- */
  var _tg_homeslider = jQuery('#tg-homeslider');
  _tg_homeslider
    .pogoSlider({
      pauseOnHover: false,
      autoplay: false,
      generateNav: false,
      displayProgess: false,
      autoplayTimeout: 6000,
      targetHeight: 495,
      responsive: true,
      onSlideStart: function () {
        var _slideslength = jQuery('.pogoSlider-slide').length;
        var _currentSlide = this.currentSlideIndex + 1;
        jQuery('#tg-totalslides').text(_slideslength);
        jQuery('#tg-currentslide').text(_currentSlide);
      },
    })
    .data('plugin_pogoSlider');

  /* -------------------------------------
          Testimonials JS Slick				
 	-------------------------------------- */
  $('.testimonial-details').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    arrows: false,
    autoplay: true,
    asNavFor: '.testimonial-slider-img',
  });

  $('.testimonial-slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 766,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    horizontal: true,
    asNavFor: '.testimonial-details',
    dots: false,
    arrows: false,
    centerPadding: '0px',
    centerMode: true,
    focusOnSelect: true,
  });

  /* -------------------------------------
         Chef JS Slick				
 	-------------------------------------- */

  $('.chef-slick').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* -------------------------------------
       dish JS Slick			
 	-------------------------------------- */

  $('.s_dish-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /* -------------------------------------
                blog JS Slick		
 	-------------------------------------- */
  $('.blog-slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: true,
    prevArrow: '<i class="fas fa-long-arrow-alt-right slidNext"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left slidprev"></i>',
    dots: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
