$(document).ready(function(){
    $('.products-slider').slick({
        rows: 2,
        slidesPerRow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 2
                }
            },

        ]
    });
  });

  