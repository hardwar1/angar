'use strict';

window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.hero__inner', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.pagination__btn--prev',
      nextEl: '.pagination__btn--next',
    },
  });

  const swiper2 = new Swiper('.about__slider-inner', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.about .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.pagination__btn--prev',
      nextEl: '.pagination__btn--next',
    },
  });

  const swiper3 = new Swiper('.facilities__swiper', {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 'auto',

    pagination: {
      el: '.facilities .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.pagination__btn--prev',
      nextEl: '.pagination__btn--next',
    },
  });

  const swiper4 = new Swiper('.materials__swiper', {
    speed: 400,
    spaceBetween: 32,
    slidesPerView: 'auto',

    pagination: {
      el: '.materials .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.pagination__btn--prev',
      nextEl: '.pagination__btn--next',
    },
  });

  const swiper5 = new Swiper('.slider__thumb-slider', {
    speed: 400,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      1200: {
        spaceBetween: 29,
      }
    }
  });

  const swiper6 = new Swiper('.slider__swiper', {
    speed: 400,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper5,
    },
  });

  $('.header__menu-btn').click(function () {
    $(this).toggleClass('active');
    $('.header__mobile-wrap').toggleClass('active');
    $('body').toggleClass('lock');
  });

  function closePopaps() {
    $('body').removeClass('lock');
    $('.js-active.active').removeClass('active');
  }

  function openPopaps(name) {
    $('body').addClass('lock');
    $(name).addClass('active');
    $(`.overlay`).addClass('active');
  }

  $('.open-application-js').click((e) => {
    e.preventDefault();
    openPopaps('.application');
  });

  $('.overlay').click(closePopaps);

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closePopaps();
    }
  });


  $('.padding-top').css('padding-top', $('.header').height() + 'px');

  window.addEventListener('resize', () => {
    $('.padding-top').css('padding-top', $('.header').height() + 'px');
  });

  $('.drop-menu-body').hide();
  $('.drop-menu-btn').click(function (e) {
    e.preventDefault();
    const menu = $(this).parent('*').find('.drop-menu-body').slideToggle();
  });

  const quizNext = document.querySelectorAll('.quiz-next');
  if (quizNext.length > 0) {
    const quizPrevs = document.querySelectorAll('.quiz-prev');
    const tabsBody = document.querySelectorAll('.tabs-body');
    for (let i = 0; i < quizPrevs.length; i++) {
      quizPrevs[i].addEventListener('click', () => {
        console.log('prev');
        tabsBody[i + 1].classList.remove('active');
        tabsBody[i + 1].classList.remove('done');
        tabsBody[i].classList.remove('done');
        tabsBody[i].classList.add('active');
      });
    }

    for (let i = 0; i < quizNext.length; i++) {
      quizNext[i].addEventListener('click', () => {
        console.log('next');
        tabsBody[i].classList.add('done');
        tabsBody[i].classList.remove('active');
        tabsBody[i + 1].classList.add('active');
      });
    }
  }

  const quizNumberBoxs = document.querySelectorAll('.quiz__number-box');
  if (quizNumberBoxs.length > 0) {
    for (const box of quizNumberBoxs) {
      const input = box.querySelector('input');
      const plusBtn = box.querySelector('.quiz__number-btn--plus');
      const minusBtn = box.querySelector('.quiz__number-btn--minus');

      plusBtn.addEventListener('click', () => {
        input.value = Number(input.value) + 1;
      })

      minusBtn.addEventListener('click', () => {
        if ( Number(input.value) > 0) {
          input.value = Number(input.value) - 1;
        }
      });
    }
  }


});

window.addEventListener('load', () => {
  $('.slider__img').css('height', ($('.for-slider').height() - $('.slider__thumb-slider').height() - 33) + 'px');

  window.addEventListener('resize', () => {
    $('.slider__img').css('height', ($('.for-slider').height() - $('.slider__thumb-slider').height() - 33) + 'px');
  });

  // контентный аккардион обнуление высоты
  const accordionHideboxs = document.querySelectorAll('.accordion > li > div');
  if (accordionHideboxs.length > 0) {
    for (const box of accordionHideboxs) {
      box.setAttribute('height-content', box.offsetHeight);
      box.setAttribute('style', 'height: 0; padding-top: 0; padding-bottom: 0');
    }
  }

  accardionOn('.accordion > li > *:first-child', '.accordion > li', '.accordion > li > div', '', 16, 24, true, true);

  function accardionOn(selectorBtn, selectorParrent, selectorHideBox, openAllBtn = '', paddingTop = '', paddingBottom = '', data = false, noHideAll = false) {
    const accordionBtns = document.querySelectorAll(selectorBtn);

    if (accordionBtns.length > 0) {
      for (const btn of accordionBtns) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const hideBox = this.closest(selectorParrent).querySelector(selectorHideBox);
          let hideBoxHeight;

          if (data) {
            hideBoxHeight = hideBox.getAttribute('height-content');
          } else {
            hideBoxHeight = hideBox.querySelector(`${selectorHideBox} > *`).offsetHeight;
          }

          this.classList.toggle('active');

          if (this.classList.contains('active')) {
            if (!noHideAll) {
              const hideBoxes = document.querySelectorAll(selectorHideBox);
              for (const i of hideBoxes) {
                i.setAttribute('style', `height: 0; padding-top: 0; padding-bottom: 0`);
                i.classList.remove('active');
              }

              for (const btn of accordionBtns) {
                btn.classList.remove('active');
              }
            }

            hideBox.setAttribute('style', `height: ${Number(hideBoxHeight) + Number(paddingTop) + Number(paddingBottom)}px; padding-bottom: ${paddingBottom}px; padding-top: ${paddingTop}px`);
            hideBox.classList.add('active');
            this.classList.add('active');
          } else {
            if (!noHideAll) {
              const hideBoxes = document.querySelectorAll(selectorHideBox);
              for (const i of hideBoxes) {
                i.classList.remove('active');
                if (data) {
                  i.setAttribute('style', `height: 0; padding-top: 0; padding-bottom: 0;`);
                } else {
                  i.setAttribute('style', `height: 0;`);
                }

                for (const btn of accordionBtns) {
                  btn.classList.remove('active');
                }
              }
            }

            if (data) {
              hideBox.setAttribute('style', `height: 0; padding-top: 0; padding-bottom: 0;`);
            } else {
              hideBox.setAttribute('style', `height: 0;`);
            }

            this.classList.remove('active')
          }
        })
      }

      if (openAllBtn !== '') {

        const openBtn = document.querySelector(openAllBtn);
        openBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openBtn.classList.toggle('active');
          const hideBoxes = document.querySelectorAll(selectorHideBox);

          if (openBtn.classList.contains('active')) {
            openBtn.textContent = 'Свернуть все';
            let hideBoxHeight;

            for (const hideBox of hideBoxes) {
              if (data) {
                hideBoxHeight = hideBox.getAttribute('height-content');
              } else {
                hideBoxHeight = hideBox.querySelector(`${selectorHideBox} > *`).offsetHeight;
              }
              hideBox.setAttribute('style', `height: ${Number(hideBoxHeight) + Number(paddingTop) + Number(paddingBottom)}px; padding-bottom: ${paddingTop}px; padding-top: ${paddingBottom}px`);
              hideBox.classList.add('active');
            }

            for (const btn of accordionBtns) {
              btn.classList.add('active');
            }

          } else {
            openBtn.textContent = 'Раскрыть всё';
            for (const hideBox of hideBoxes) {
              hideBox.setAttribute('style', `height: 0; padding-top: 0; padding-bottom: 0;`);
              hideBox.classList.remove('active');
            }

            const allSelectors = document.querySelectorAll(selectorBtn);
            for (const selector of allSelectors) {
              selector.classList.remove('active');
            }

          }
        })
      }
    }
  }
});

