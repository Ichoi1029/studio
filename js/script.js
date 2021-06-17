'use strict';
/* ========================= header ========================= */
$(function(){
        var $toggle = $('.gnb-toggle-btn'),
        $gnb = $('.gnb');

        $($toggle).click(function(){
        $(this).toggleClass('active');
        $($gnb).toggleClass('active');
        })
})
/* ========================= main banner ========================= */
$(document).ready(function(){
        $('.main__banner').slick({
                dots:true,
                autoplay: true,
                autoplaySpeed: 2000,
        });
});