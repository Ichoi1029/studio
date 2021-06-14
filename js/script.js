'use strict';

$(document).ready(function(){
    // basic slider
    $('.main__banner').slick({
            dots:true,
            autoplay: true,
            autoplaySpeed: 2000,
    });
    // responsive
    $('.responsive__slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
    });

});