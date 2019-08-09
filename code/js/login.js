$(function () {
    $(".tab-login-item").click(function () {
        var index = $(this).index();
        $(".loginView").eq(index).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })

    $("#loginBtn").click(function () {

        var phone = $("#phone").val();
        var password = $("#password").val();
        console.log(phone, password);


        $.ajax({
            type: "post",
            url: "../api/login.php",
            dataType: "json",
            data: `phone=${phone}&password=${password}`,
            success: function (response) {
                console.log(response);
                alert(response.msg);
                window.location.href="../html/ssw.html";
            }
        });
    })


})