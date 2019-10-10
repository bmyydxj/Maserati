import "../less/service.less";
import "../js/head";
fetch("http://10.2.1.142:8080/banking", {
        method: 'GET'
    }).then(requset => requset.json())
    .then(data => {
        loaddingPhoneList(data);
    })

function loaddingPhoneList(data) {
    let htmlStr = "";
    let parent = document.querySelector(".list");
    data.forEach(banking => {
        htmlStr += `<li>
        <a href="${banking.id}"><img src="${banking.img}"></a>
    <p>${banking.intro}</p>
   
    </li>`;
    });
    parent.innerHTML = htmlStr;
}