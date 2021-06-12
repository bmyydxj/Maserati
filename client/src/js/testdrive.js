import "../less/testdrive.less";
import "../js/head.js";
import "../../node_modules/jquery/dist/jquery.js"




function sdsjhs() {
    let namele = $("#namele").val();
    let theName = $("#theName").val();
    let clse1 = $("#clse1 option:selected").text();
    let clse2 = $("#clse2 option:selected").text();
    let telred = $('#telred').val();
    let checkbox1 = $("#checkbox1");
    let checkbox2 = $('#checkbox2');
    if (namele && theName && (/^1(3|4|5|6|7|8|9)\d{9}$/.test(telred)) && clse1 && clse2 && checkbox1[0].checked && checkbox2[0].checked) {
        $("button").removeClass("buon");
        $("button").on("click", function () {
            let usernamenow = sessionStorage.LOGIN_USER;
            let userinfo = { namele, theName, clse1, clse2, telred, usernamenow };
            fetch("http://10.2.1.142:8080/user/test", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userinfo)
            }).then(response => response.json())
        })
    }
    else {
        $("button").addClass("buon");
    }

    // console.log((namele.value, theName.value, clse1.selectedOptions[0].text, clse2.selectedOptions[0].text, telred.value, checkbox1.checked, checkbox2.checked))

    // }
    // $(".buon").on("click", function () {
    //     sdsjhs()
    // })
}

$("input").on("input", function () {
    sdsjhs();
});