$(function () {


    /* 图形验证码 */
    let imgCodeText = "";
    /* 短信验证码 */
    //var msgText = "";
    /* 密码 */
    let passwordAText = "";
    let passwordBText = "";
    /* 用户名 */
    //let usernameText = "";
    /* 手机号码 */
    let phoneText = "";


    //let username = $("#usernameID");
    let phone = $("#phoneID");
    let passwordA = $("#passwordA");
    let passwordB = $("#passwordB");
    let imgCode = $('#imageCode');
    //let sendMsgBtn = $(".code-sms");
    //let msgCode = $("#msgCode");


    /* 验证码处理 */
    (new Captcha({ fontSize: 30 })).draw(document.querySelector('#captcha'), r => {
        console.log(r, '验证码1');
        imgCodeTextReal = r;
        /* 自动触发标签失去焦点的事件 */
        imgCode.trigger("blur");
    });

    /* 正则表达式 */
    //let regUsername = /^[A-Za-z]{6,8}$/;
    let regPhone = /^1[3-9]\d{9}$/; /* 1开头 第二位3-9 后面全都是数字   11位 */
    let regPassword = /^[a-zA-Z0-9]{6,16}$/;


    function formatterDateTime() {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear() +
            "" // "年"
            +
            (month >= 10 ? month : "0" + month) +
            "" // "月"
            +
            (date.getDate() < 10 ? "0" + date.getDate() : date
                .getDate()) +
            "" +
            (date.getHours() < 10 ? "0" + date.getHours() : date
                .getHours()) +
            "" +
            (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                .getMinutes()) +
            "" +
            (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                .getSeconds());
        return datetime;
    }

    // sendMsgBtn.click(function() {
    //     msgCodeText = parseInt(Math.random() * 1000000);
    //     /* 检查手机号码是否正确 */
    //     var text = $.trim(phone.val());
    //     if (text.length != 0 && regPhone.test(text)) {

    //         /* 发送网络请求：发短信 */
    //         $.ajax({
    //             type: 'post',
    //             url: 'http://route.showapi.com/28-1',
    //             dataType: 'json',
    //             data: {
    //                 "showapi_timestamp": formatterDateTime(),
    //                 "showapi_appid": '100963', //这里需要改成自己的appid
    //                 "showapi_sign": '5327fb0bc71848fe8502aabe2bc6726f', //这里需要改成自己的应用的密钥secret
    //                 "mobile": text,
    //                 "content": `{"code":${msgCodeText},"minute":"3","comName":"奶牛养殖公司"}`,
    //                 "tNum": "T150606060601",
    //                 "big_msg": ""
    //             },
    //             error: function(XmlHttpRequest, textStatus, errorThrown) {
    //                 alert("操作失败!");
    //             },
    //             success: function(result) {
    //                 console.log(result) //console变量在ie低版本下不能用
    //                     // alert(result.showapi_res_code)
    //             }
    //         });

    //         var count = 60;
    //         var timer = setInterval(function() {
    //             count--;
    //             if (count <= 0) {
    //                 sendMsgBtn.html("发送短信验证码");
    //                 clearInterval(timer);
    //             } else {
    //                 sendMsgBtn.html("重试 " + count + "s");
    //             }
    //         }, 1000);
    //     } else {
    //         alert("手机号码不正确");
    //     }

    //     /* 开启倒计时：当前的标签不可点击 */
    // });
    /* 监听用户名标签失去焦点的事件 */
    // username.blur(function(e) {
    //     let text = $.trim($(this).val());
    //     usernameText = text;
    //     let parent = $(this).parents(".form-item");
    //     let msg = $(this).nextAll(".form-group__message");

    //     if (text.length == 0) {
    //         parent.addClass("form-group-error");
    //         msg.html("用户名不能为空");
    //     } else if (!regUsername.test(text)) {
    //         parent.addClass("form-group-error");
    //         msg.html("用户名不符合规范！");
    //     } else {
    //         parent.removeClass("form-group-error");
    //     }
    // });

    // msgCode.blur(function(e) {
    //     let text = $.trim($(this).val());
    //     msgText = text;
    //     let parent = $(this).parents(".form-item");
    //     let msg = $(this).parent().nextAll(".form-group__message");

    //     if (text.length == 0) {
    //         parent.addClass("form-group-error");
    //         msg.html("短信验证码不能为空");
    //     } else if (text != msgCodeText) {
    //         parent.addClass("form-group-error");
    //         msg.html("短信验证码不正确");
    //     } else {
    //         parent.removeClass("form-group-error");
    //     }
    // });


    imgCode.blur(function (e) {
        let text = $.trim($(this).val());
        let parent = $(this).parents(".form-item");
        let msg = $(this).nextAll(".image-code-box").children(".message");

        if (text.length == 0) {
            parent.addClass("error");
            msg.html("验证码不能为空");
        } else if (imgCodeText.toLowerCase() != text.toLowerCase()) {
            parent.addClass("error");
            msg.html("验证码不正确！");
        } else {
            parent.removeClass("error");
        }
    });

    phone.focus(function (e) {
        $(this).siblings("error").show();

    });
    phone.blur(function (e) {
        let text = $.trim($(this).val());
        phoneText = text;
        let parent = $(this).siblings("p");

        if (text.length == 0) {
            parent.addClass("error");
            parent.html("手机号码不能为空");
        } else if (!regPhone.test(text)) {
            parent.addClass("error");
            parent.html("请输入正确的手机号码！");
        } else {
            parent.removeClass("error");
            // parent.css("display", "none");
        }
    });

    passwordA.blur(function (e) {
        let text = $.trim($(this).val());
        passwordAText = text;
        let parent = $(this).siblings("p");
        // let msg = $(this).nextAll(".form-group__message");
        console.log($(this)[0]);

        if (text.length == 0) {
            parent.addClass("error");
            parent.html("密码不能为空");
        } else if (!regPassword.test(text)) {
            parent.addClass("error");
            parent.html("您输入的密码不符合规范");
        } else {
            parent.removeClass("error");
            //parent.css("display", "none");
        }
    });

    passwordB.blur(function (e) {
        let text = $.trim($(this).val());
        passwordBText = text;
        let parent = $(this).siblings("p");
        //let msg = $(this).nextAll(".form-group__message");
        // console.log($(this)[0]);

        if (text.length == 0) {
            // parent.css({
            //     "display": "block",
            //     "color": "red"
            // });
            parent.addClass("error");
            parent.html("密码不能为空");
        } else if (passwordAText != text) {
            // parent.css({
            //     "display": "block",
            //     "color": "red"
            // });
            parent.addClass("error");
            parent.html("您输入的密码不匹配");
        } else {
            parent.removeClass("error");
            // parent.css("display", "none");
        }
    });

    /* 点击注册按钮的事件 */
    // (1) 先获取标签绑定点击事件
    // (2) 检查是否满足条件，如果满足条件那么就发送网络请求，否则提示
    // [1] 表单要验证通过  && [2] 勾选同意注册协议
    $("#registerBtn").click(function () {
        let isCheck = $("#protocol").is(":checked");
        if (!isCheck) {
            alert("请阅读并同意用户协议");
            return;
        }

        // usernameText = $("#usernameID").val();
        phoneText = $("#phoneID").val();
        msgText = $("#msgID").val();
        imgCodeText = $("#imageCode").val();
        passwordBText = passwordAText = $("#passwordA").val();

        console.log($(".error").length, imgCodeText == imgCodeTextReal);

        if (
            phoneText.length != 0 &&

            passwordAText.length != 0 &&
            passwordBText.length != 0 &&
            imgCodeText.length != 0 && $(".error").length == 0 &&
            imgCodeText == imgCodeTextReal
        ) {
            console.log("ddd");

            $.ajax({
                type: "post",
                url: "../api/register.php",
                dataType: "json",
                data: `password=${passwordAText}&phone=${phoneText}`,
                // dataType: "dataType",
                success: function (response) {
                    console.log(response);
                    /* 先检查请求的结果，然后做出对应的处理 */
                    if (response.status == "success") {
                        alert(response.msg);
                        /* 跳转到登录页面 */
                        window.location.href = "./ssw.html"
                    } else {
                        alert(response.msg);
                    }
                }
            });
        }

        // http://127.0.0.1/day-31/Code/login/sever/api/register.php 
        // http://127.0.0.1/day-31/Code/login/server/api/register.php
    })

});