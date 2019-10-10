$(function(){
    $('.seles li').each(function(){
        $('.seles li').mouseover(function(){
            var index = $(this).index();
            $('.tab').removeClass('show');
            $('.tab').eq(index-1).addClass('show');
        });
        $('.seles li').mouseout(function(){
            $('.tab').removeClass('show');
        });
        $('.seles ul').mouseout(function(){
            $('.tab').removeClass('show');
        });
    })
})


// $(function() {
//     let menu_items = Array.from(document.querySelectorAll(".seles li"));
//     let ct_items = Array.from(document.querySelectorAll(".tab"));
//     let last_sel_index = 0;
//     menu_items.forEach(function (menu_item, index) {
//         menu_item.onmouseover = function () {
//             let index = menu_items.indexOf(this);
//             ct_items[last_sel_index].classList.remove("show");
//             ct_items[index].classList.add("show");
//             last_sel_index = index;
//         }
//         menu_item.onmouseout = function (contents) {
//             ct_items[last_sel_index].classList.remove("show");
//         }
//     });

// })