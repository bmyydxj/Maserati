import "./head.js";
import "../less/grzx.less";

fetch("http://10.2.1.142:8080/register", {
    method: 'GET'
}).then(requset => requset.json())
    .then(data => {
        loaddingRegister(data);
        console.log(data);
    })

function loaddingRegister(data) {
    let htmlStr = "";
    let parent = document.querySelector("#infose");
    let usernamenow = sessionStorage.LOGIN_USER;

    data.forEach(user => {
        console.log(user)
        if (user.username == usernamenow) {
            htmlStr += `
            <div>${user.username}</div>
            <div>${user.name}</div>
            <div>${user.theName}</div>
            <div>${user.tel}</div>
            <div>${user.place}</div>
            <div>${user.carType}</div>
            `;
        }

    });

    parent.innerHTML = htmlStr;
}