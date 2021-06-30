$(document).ready(function(){
    $('.recommends-slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
  });