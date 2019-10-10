import "../less/news_detail.less";
import "../js/head.js";
import Swiper from "../../node_modules/swiper/js/swiper";
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  });