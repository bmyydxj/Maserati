import "../less/ghibli_car.less";
import "../less/before-after.less";
import "../js/before-after.min.js";
import "../less/ghibli_car.less";
import "./head.js";
import Swiper from "swiper";
let swiper = new Swiper('.selse', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // slidesPerView: 4,
    // spaceBetween: 30,
    // 分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    noSwiping: true,
    noSwipingSelector: 'span',
});
$(function () {
    let swiper = new Swiper('.special', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        slidesPerView: 4,
        spaceBetween: 30,
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // 滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        noSwiping: true,
        noSwipingSelector: 'span',
    });
})