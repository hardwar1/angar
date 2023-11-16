$(function() {

  $('.top_slider__carousel').on('init', function() {
      $('.top_slider__carousel__item.slick-active .top_slider__carousel__item__img img').clone().appendTo(".top_slider__img");
      $('.top_slider__img').fadeIn();
      $('.top_slider__carousel__item.slick-active .top_slider__carousel__item__link').clone().appendTo(".top_slider__link");
  });

  $('.top_slider__carousel').slick({
      infinite: false,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      dots: false,
      arrows: true,
      appendArrows: '.slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  });

  $('.top_slider__carousel').on('afterChange', function() {
      $('.top_slider__img').text('');
      $('.top_slider__img').hide();
      $('.top_slider__carousel__item.slick-active .top_slider__carousel__item__img img').clone().appendTo(".top_slider__img");
      $('.top_slider__img').fadeIn();
      $('.top_slider__link').text('');
      $('.top_slider__carousel__item.slick-active .top_slider__carousel__item__link').clone().appendTo(".top_slider__link");
  });

});

$(function() {
  var $slider = $('.about__slider');

  if ($slider.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = $('.about__slider__counter');


      var updateSliderCounter = function(slick, currentIndex) {
          currentSlide = slick.slickCurrentSlide() + 1;
          slidesCount = slick.slideCount;
          $(sliderCounter).html('<span>' + currentSlide + '</span>' + '/' + slidesCount)
      };

      $slider.on('init', function(event, slick) {
          updateSliderCounter(slick);
      });

      $slider.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
      });

      $slider.slick({
          infinite: false,
          arrows: true,
          appendArrows: '.about__slider_arrows',
          prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
          nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'

      });
  }



});


$(function() {

  $('.objects__slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      appendDots: '.objects__slider__dots',
      dotsClass: 'slider__dots',
  });

});


function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
      menu.toggleClass('burger-menu_active');

      if (menu.hasClass('burger-menu_active')) {
          $('body').css('overlow', 'hidden');
      } else {
          $('body').css('overlow', 'visible');
      }
  }
}

burgerMenu('.burger-menu');

$(function() {
  const btnUp = {
      el: document.querySelector('.btn-up'),
      show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove('btn-up_hide');
      },
      hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add('btn-up_hide');
      },
      addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
              // определяем величину прокрутки
              const scrollY = window.scrollY || document.documentElement.scrollTop;
              // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
              scrollY > 400 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.btn-up').onclick = () => {
              // переместим в начало страницы
              window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
              });
          }
      }
  }

  btnUp.addEventListener();

});


$(".faq__wrap .faq__item__answer").hide().prev().click(function() {
  $(this).parents(".faq__wrap").find($(".faq__item__answer")).not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});


$(".faq__wrap .faq__item__answer").first().css("display", "block");





if (screen.width < 550) {
  $('.reviews__wrap').slick({
      slidesToShow: 2.1,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
      appendArrows: '.reviews__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
};

if (screen.width < 450) {
  $('.preference__wrap').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
      appendArrows: '.preference__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
  $('.services__wrap').slick({
      slidesToShow: 1.6,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
      appendArrows: '.services__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
  $('.advantages__wrap').slick({
      slidesToShow: 2.1,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
      appendArrows: '.advantages__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
  $('.stages__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      appendArrows: '.stages__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
  $('.catalog__wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
            }
          },
      ],
      appendArrows: '.catalog__slider_arrows',
      prevArrow: '<div class="slider_arrow slider_arrow--left"></div>',
      nextArrow: '<div class="slider_arrow slider_arrow--right"></div>'
  })
};



function init() {
  let map = new ymaps.Map('map', {
      center: [54.194910961650216, 37.618357191249544],
      zoom: 11,
      controls: [],
  });

  map.behaviors.disable(['scrollZoom']);

  let placemark1 = new ymaps.Placemark([54.194910961650216, 37.618357191249544], {
      id: 'map__sidebar1'
  }, {

  })

  let placemark2 = new ymaps.Placemark([54.17930114924561, 37.64247825224651], {
      id: 'map__sidebar2'
  }, {

  })

  let placemark3 = new ymaps.Placemark([54.244501002233314, 37.60951926787151], {
      id: 'map__sidebar3'
  }, {

  })


  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);

  map.geoObjects.events.add('click', function(e) {

      var target = e.get('target');
      var id = target.properties.get('id');

      $('.map__sidebar').removeClass('active');
      $('#' + id).addClass('active');

  });
};


ymaps.ready(init);
