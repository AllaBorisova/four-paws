$(function () {

  var owl = $('.about__items'),
    owlOptions = {
      loop: true,
      dots: true,
      nav: false,
      navText: ['', ''],
      items: 1,
      margin:10
    };
  var owl3 = $('.life__photos'),
    owlOptions3 = {
      loop: true,
      dots: true,
      nav: false,
      navText: ['', ''],
      items: 1,
      margin:10
    };


  if ($(window).width() < 768) {
    var owlActive = owl.owlCarousel(owlOptions);
    var owlActive3 = owl3.owlCarousel(owlOptions3);
  } else {
    owl.addClass('off');
    owl3.addClass('off');
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      if ($('.owl-carousel').hasClass('off')) {
        var owlActive = owl.owlCarousel(owlOptions);
        owl.removeClass('off');

        var owlActive3 = owl3.owlCarousel(owlOptions3);
        owl3.removeClass('off');
      }
    } else {
      if (!$('.owl-carousel').hasClass('off')) {
        owl.addClass('off').trigger('destroy.owl.carousel');
        owl.find('.owl-stage-outer').children(':eq(0)').unwrap();

        owl3.addClass('off').trigger('destroy.owl.carousel');
        owl3.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  });



  $('.header__hamburger').on('click', function () {
    $(this).addClass('open');
   // console.log('+');
    $.fancybox.open({
      src  : '#header-popup',
      type : 'inline',
      opts : {
        clickOutside: false,
        afterShow : function( instance, current ) {
         // console.info( 'done!' );
        },
        afterClose : function( instance, current ) {
          $('.header__hamburger').removeClass('open');
         // console.info( 'done!!' );
        }
      }
    });
  //  $('.header__right').toggleClass('open');
  })

  $('.career__title').on('click', function () {
    $(this).parent().toggleClass('open');
  })

  $('.news__more').on('click', function () {
    $(this).parents('.news__item').toggleClass('open');
  })

  $('.main-vacancies__slider').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    navText: ['', ''],
    items: 2,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2

      }
    }
  });


  $('.slider').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    navText: ['', ''],
    items: 1
  });

  var owl2 = $('.reviews__slider');
  owl2.owlCarousel({
    loop: true,
    dots: true,
    nav: true,
    navText: ['', ''],
    items: 1
  });
  $('.arrow-left').on('click', function () {
    owl2.trigger('prev.owl.carousel');
  })
  // Go to the previous item
  $('.arrow-right').on('click', function () {
    owl2.trigger('next.owl.carousel');
  })


  $('.tabs').lightTabs();

  //file input 
  $('.form__file-inner').on('click', function () {
    $(this).parents('.form__file-block').find('input').click();
    return false;
  })

  $('.career__aside ul li a').on('click', function () {
    let number = $(this).data('link');

    $(this).parents('.career__inner').find('.career__item').removeClass('active');
    $(this).parents('ul').find('a').removeClass('active');
    $(this).addClass('active');
    $('.career__item[data-number = ' + number + ']').addClass('active');
    return false;
  })



});
