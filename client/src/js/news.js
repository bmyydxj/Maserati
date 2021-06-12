import "../less/news.less";
import "../js/head.js";

fetch("http://10.2.1.142:8080/news", {
    method: 'GET'
}).then(requset => requset.json())
    .then(data => {
        loaddingNews(data);
    })

function loaddingNews(data) {
    let htmlStr = "";
    let parent = document.querySelector(".newsclass");
    data.forEach(news => {
        htmlStr += `
        <div class="news_list">
        <h4>${news.time}</h4>
        <a href="http://10.2.1.142:5500/dist/static/pages/news_detail.html">
        <img src="${news.img}"
            alt="">
            </a>
        
        <p>${news.brief}</p>
    </div>
        `;
    });
    parent.innerHTML = htmlStr;
}