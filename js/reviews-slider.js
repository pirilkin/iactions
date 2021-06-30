$(document).ready(function(){
    $('#reviews-slider').slick({
        slidesToShow:2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    
                }
            },
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                     dots: true
                }
            }
        ]
    });
  });