import "../less/register.less"


// 1. 获取元素
let inputs = [...document.querySelectorAll("input")];
let registerBtn = document.querySelector("#button");
// 2. 登陆
registerBtn.onclick = function () {
    // 获取用户输入的信息
    let user = {};
    inputs.forEach(input => {
        user[input.id] = input.value;
    });
    // 判断是否为空
    if(!user.username || !user.password) {
        alert("请完善信息！");
        return;
    }
    // 执行注册
    fetch("http://10.2.1.142:8080/user/register", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == "201") {
            alert("用户已存在！");
        }else if(data.status == "200") {
            alert("注册成功！");
            sessionStorage.LOGIN_USER = JSON.stringify(user);
            location.href = "http://10.2.1.142:5500/dist/";
        }
    });
}


