"use strict";

function eventHandler() {
  Fancybox.bind('[data-fancybox]', {
    //
  });    

  var catalogSwiper = new Swiper('.slider--js', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    loop: true,
  });

  var gallerySwiper = new Swiper('.gallery--js', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });

  let upToDate = document.querySelector('.js-calc-date');
  if (upToDate) {
    const date = new Date();
    let textMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    
    let day = date.getDate();
    let month = date.getMonth();
    let futureDay = day + 4;
    let setDate = `${futureDay} ${textMonth[month]}`;
    upToDate.innerText = setDate;
  }
  

  $('.' + 'tabs' + '__caption').on('click', '.' + 'tabs' + '__btn:not(.active)', function (e) {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.' + 'tabs').find('.' + 'tabs' + '__content').hide().removeClass('active')
      .eq($(this).index()).fadeIn().addClass('active');

  });

  $('.dd-head-js').on('click', function () {
    let clickedHead = this;
    $(this).parent().toggleClass('active');
    $(this)
      .next()
      .slideToggle(function () {
        $(this).toggleClass('active');
      });
  });
  
  $('.toggle-show').on('click', function() {
    $(this).toggleClass('active');
    $('.r-tabs-nav').slideToggle();
  });
};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}