

$(function () {
    $('.seles li').each(function () {
        $('.seles li').mouseover(function () {
            var index = $(this).index();
            $('.tab').removeClass('show');
            $('.tab').eq(index - 1).addClass('show');
        });
        $('.seles li').mouseout(function () {
            $('.tab').removeClass('show');
        });
        $('.seles ul').mouseout(function () {
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



fetch("http://10.2.1.142:8080/type", {
    method: 'GET'
}).then(requset => requset.json())
    .then(data => {
        loaddingType(data);
    })

function loaddingType(data) {
    let htmlStr = "";
    let parent = document.querySelector(".stk");
    data.forEach(type => {
        htmlStr += `<li>
        <div class="tex">
        <div>${type.name}</div>
        <img src="${type.img}">
        <div>建议零售价</div>
        <div>${type.cost}万RMB起</div>
        <div><a href="${type.id}">了解更多</a></div>
        <div>个性化配置</div>
    </div>
   
    </li>`;
    });
    parent.innerHTML = htmlStr;
}



// 判断用户是否登录
tabLoginState();
// 注销登录
$(".zx").on("click", function () {
    if (confirm("您确定要退出登录么？")) {
        sessionStorage.removeItem("LOGIN_USER");
        tabLoginState();
    }
});


function tabLoginState() {
    if (sessionStorage.LOGIN_USER) {
        // 已登录
        $(".username").text(`${JSON.parse(sessionStorage.LOGIN_USER).username}`);
        $(".logout").show();
        $(".login").hide();

    } else {
        $(".login").show();
        $(".logout").hide();
    }
}