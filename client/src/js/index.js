import "../less/index.less";
import "./head.js";
// import "./lunbo.js";
import Swiper from "swiper";
// import $ from "jquery";

$(function () {
    let mySwiper = new Swiper('.cleses', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
})

$(function () {
    var swiper = new Swiper('#swiper-container2', {
        loop: true,
        slidesPerView: 3,
        loopedSlides: 5,
        spaceBetween: 30,
        // centeredSlides : true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
})
