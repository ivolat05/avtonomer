//= components/jquery.magnific-popup.js
//= ../../../node_modules/slick-carousel/slick/slick.js
$(function () {
    $('.filtor__city').magnificPopup({
        type: 'inline'
    });

    $('.slider__wrapp').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

});