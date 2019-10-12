function fade() {
    let slides = document.querySelectorAll(".head .slide");
    let paginationItems = [...document.querySelectorAll(".head .pagination-item")];
    let wrapper = document.querySelector(".head .wrapper")
    let curIndex = 0,
        lasIndex = 0,
        length = slides.length,
        timer = null;
    play();
    wrapper.onmouseenter = stop;
    wrapper.onmouseleave = play;
    paginationItems.forEach(pagination => {
        pagination.onclick = function () {
            let index = paginationItems.indexOf(this);
            if (index == curIndex) { return; }
            curIndex = index;
            tab();
        }
    });
    function play() {
        timer = setInterval(() => {
            curIndex = curIndex == length - 1 ? 0 : ++curIndex;
            tab();
        }, 5000);
    }
    function stop() {
        clearInterval(timer);
    }
    function tab() {
        removeClass(slides[lasIndex], "show");
        removeClass(paginationItems[lasIndex], "sel");
        addClass(slides[curIndex], "show");
        addClass(paginationItems[curIndex], "sel");
        lasIndex = curIndex;
    }
    function removeClass(el, className) {
        el.classList.remove(className);
    }
    function addClass(el, className) {
        el.classList.add(className);
    }

}



function popUp() {
    var menu_items = Array.from(document.querySelectorAll(".menus .item"));
    var ct_items = Array.from(document.querySelectorAll(".contents .item"));
    var last_sel_index = 0;
    menu_items.forEach(function (menu_item, index) {
        menu_item.onmouseover = function () {
            var index = menu_items.indexOf(this);
            menu_items[last_sel_index].classList.remove("sel");
            ct_items[last_sel_index].classList.remove("show");
            this.classList.add("sel");
            ct_items[index].classList.add("show");
            last_sel_index = index;
        }
        menu_item.onmouseout = function (contents) {
            menu_items[last_sel_index].classList.remove("sel");
            ct_items[last_sel_index].classList.remove("show");
        }
    });

}


function scrollToTop(options) {
    let { el, duration, pageScroll, complete } = options;
    duration = duration || 1000;
    let offset = 0,
        interval = 15,
        speed = null,
        timer = null;
    window.onscroll = function () {
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        pageScroll && pageScroll(offset);
    }
    el.onclick = function () {
        speed = Math.ceil(offset / (duration / interval));
        timer = setInterval(function () {
            if (offset > 0) {
                document.body.scrollTop = document.documentElement.scrollTop = offset - speed;
            } else {
                clearInterval(timer);
                timer = null;
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                complete && complete();
            }
        }, interval);
    }
}



// function countTdown() {

//     // 倒计时
//     (function () {

//         // 倒计时
//         let shijian = new Date("October 1, 2019");
//         let biao    = new Date();
//         let lets    = document.querySelectorAll('.item');
//         let game    = 0,
//             one     = 0,
//             twe     = 0,
//             three   = 0,
//             four    = 0,
//             tiwe    = null;
//         let t = setInterval(function () {
//             biao = new Date();
//             game = shijian - biao;
//             if (game < 0) {
//                 clearInterval(t);
//                 return;
//             }
//             one   = Math.floor(game / 1000 / 60 / 60 / 24);
//             twe   = Math.floor(game / 1000 / 60 / 60 % 24);
//             three = Math.floor(game / 1000 / 60 % 60);
//             four  = Math.floor(game / 1000 % 60);
    
//             one   = one   < 10 ? "0" + one   : one;
//             twe   = twe   < 10 ? "0" + twe   : twe;
//             three = three < 10 ? "0" + three : three;
//             four  = four  < 10 ? "0" + four  : four;
    
//             tiwe = [one, twe, three, four];
//             for (let i = 0; i < lets.length; i++) {
//                 lets[i].textContent = tiwe[i];
//             }
//         }, 1000);
//     })();
// };