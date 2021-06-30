AOS.init({

});
// burger
const burgerClass = document.querySelector('.burger');
const headerPopup = document.querySelector('.popup-menu');
burgerClass.onclick = () => {
    burgerClass.classList.toggle('active');
    headerPopup.classList.toggle('active');
    let burger = document.getElementById("burger")
    let toggleBurger = () => {
        burger.classList.toggle("active")
    }
}
//fancybox
$("a.recommends-slider__block").fancybox();
//bootbox
// $(document).on("click", ".callback_order", function(e) {
//     var bootboxHtml = $('#callback-container').html().replace('callback-form', 'js-bootboxForm');
//     bootbox.confirm(bootboxHtml, function(result) {
//     //   console.log($('#ex1', '.js-bootboxForm').val());
//     //   console.log($('#ex2', '.js-bootboxForm').val());
//     });
// });
// обсудить проект
// $(document).on("click", ".discussing", function(e) {
//    var bootboxHtml = $('#custom-modal').html().replace('form-custom', 'js-bootboxForm');
//    $('.modal-dialog').addClass('custom-modal__smth')
//    bootbox.confirm(bootboxHtml, function(result) {
//        //   console.log($('#ex1', '.js-bootboxForm').val());
//        //   console.log($('#ex2', '.js-bootboxForm').val());
//     });
//     // console.log($('.form-custom').hasClass("modal-dialog"));
// });
// $('.products-slider__top').carousel();

// switch form
const switchElem = document.querySelectorAll('.switch');
const switchNow = document.querySelector('.switch_now');
const switchLater = document.querySelector('.switch_later');
const switchTextarea = document.querySelector('#textarea');

for (let k = 0; k < switchElem.length; k++) {
    switchElem[k].onclick = (e) => {
        e.preventDefault();
        switchElem[k].classList.add('active');
        if (switchElem[k] == switchNow) {
            switchLater.classList.remove('active');
            switchTextarea.style.display = "none";
        }
        if (switchElem[k] == switchLater) {
            switchNow.classList.remove('active');
            switchTextarea.style.display = "block";
        }
    }
}
// filter instruments-block 
$(".filter-button").click(function () {
    let value = $(this).attr('data-filter');
    $(".filter-button").removeClass("active")
    $(this).addClass("active");

    $(".filter").not('.' + value).hide('3000');
    $(".filter").filter('.' + value).show('3000');
})
// filter markethelp 
$(".rubrics__link").click(function (e) {
    e.preventDefault();
    let value = $(this).attr('data-news');
    $(".rubrics__link").removeClass("active")
    $(this).addClass("active");

    $(".market-tabs-item").not('.' + value).hide();
    $(".market-tabs-item").filter('.' + value).show();
})
// filter portfolio 
$(".portfolio__link").click(function (e) {
    e.preventDefault();
    let value = $(this).attr('data-folio');
    $(".portfolio__link").removeClass("active")
    $(this).addClass("active");

    $(".portfolio-tabs-items").not('.' + value).hide();
    $(".portfolio-tabs-items").filter('.' + value).show();
})

// filter cases-tags
$(".cases-tags__element").click(function () {
    let value = $(this).attr('data-cases');
    $(".cases-tags__element").removeClass("active")
    $(this).addClass("active");
    // $(this).style.pointerEvents='none';
    //     $(".filter-tags").not('.' + value).hide('3000');
    //     $(".filter-tags").filter('.' + value).show('3000');
})

//filer-client
$(".products-tags__element").click(function () {
    let value = $(this).attr('data-elem');
    $(".products-tags__element").removeClass("active")
    $(this).toggleClass("active");
    //     // $(this).style.pointerEvents='none';s
    if (value == 'All'){
        $(".client-slider__slide").show('1000');
    }
    else {
        $(".client-slider__slide").not('.' + value).hide('3000');
        $(".client-slider__slide").filter('.' + value).show('3000');
        // $(this).removeClass("active");
        // $(".client-slider__slide").show('3000');
    }
})
//clients slider
let client_slider = new Swiper('.client-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 12,
    //отключение слайдера если слайдов меньше чем надо
    watchOverflow: true,
    spaceBetween: 12,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    initialSlide: 1,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
        },
        320: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true
        },
        380: {
            slidesPerView: 4,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 4,

        },
        567: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        992: {
            slidesPerView: 5.5,
        },
        1199: {
            slidesPerView: 12,
        },
    }
});
let adap_slider = new Swiper('.adap-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 3,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 30,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    initialSlide: 1,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        567: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 3.3,
            spaceBetween: 30,
        },
        1499: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
    }
});
let experts_slider = new Swiper('.experts-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 3,
    //отключение слайдера если слайдов меньше чем надо
    watchOverflow: true,
    spaceBetween: 30,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    initialSlide: 0,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        567: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
        },
    }
});
let news_slider = new Swiper('.news-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 3,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 30,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    initialSlide: 1,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        567: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3.3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 3.3,
            spaceBetween: 30,
        },
        1499: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
    }
});
let reviews_slider = new Swiper('.reviews-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 2,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 0,
    //активный слайд по центру страницы
    centeredSlides: false,
    //стартовый слайд начианется с 0
    initialSlide: 1,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
            // watchOverflow: true,
        },
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: true,
            spaceBetween: 0,
            // watchOverflow: true,
        },
        380: {
            slidesPerView: 1,
            centeredSlides: false,
            loop: true,
            // watchOverflow: true,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
            // watchOverflow: true,
        },
        567: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
            // watchOverflow: true,
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
            // watchOverflow: true,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: false,
            // watchOverflow: true,
        },
    }
});
let recommends_slider = new Swiper('.recommends-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 4,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 30,
    //активный слайд по центру страницы
    centeredSlides: false,
    //стартовый слайд начианется с 0
    initialSlide: 0,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: true,
        },
        567: {
            slidesPerView: 3.2,
            spaceBetween: 15,
            centeredSlides: true,

        },
        992: {
            slidesPerView: 4.5,
            spaceBetween: 15,
            centeredSlides: true,

        },
        1199: {
            slidesPerView: 4.5,
            centeredSlides: false,
            spaceBetween: 30,
        },
    }
});
let licenses_sliders = new Swiper('.licenses-sliders', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
    },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 4,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 30,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    initialSlide: 0,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
        },
        380: {
            slidesPerView: 1.2,
            centeredSlides: true,
            loop: true
        },
        480: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: true,
        },
        567: {
            slidesPerView: 4.2,
            spaceBetween: 15,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 4.2,
            spaceBetween: 15,
            centeredSlides: true,
        },
        1199: {
            slidesPerView: 3.8,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                // dynamicBullets: true,
            },
        },
    }
});
//всплывающие подсказки
$('[data-toggle="tooltip"]').tooltip();

//iframe
$('.location iframe').click(function () {
    $('.location iframe').css("pointer-events", "auto");
});

$( ".location iframe" ).mouseleave(function() {
  $('.location iframe').css("pointer-events", "none"); 
});
// hover
// $('body').on('touchstart', function() {});