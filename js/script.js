'use strict';
/* ========================= header ========================= */
$(function(){
        var $toggle = $('.gnb-toggle-btn'),
        $gnb = $('.gnb');

        $toggle.click(function(){
        $(this).toggleClass('active');
        $gnb.toggleClass('active');
        })
/* ========================= main banner ========================= */
        // main slider
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
});

// responsive
$('.responsive__slider').slick({
        dots: true,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
});

        
})

