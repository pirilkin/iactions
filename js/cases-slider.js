$(document).ready(function(){
    $('#cases-slider').slick({
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow:4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    centralMode: true,
                    // arrows : false,
                }
            }
        ]
    });
  });