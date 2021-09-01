//= components/jquery.magnific-popup.js
//= ../../../node_modules/slick-carousel/slick/slick.js
$(function () {
    $('.filtor__city').magnificPopup({
        type: 'inline'
    });

    $('.slider__wrapp').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

});