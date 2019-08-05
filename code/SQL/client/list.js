$(function () {

    let orderType = 0;
    let getList = (page) => {
        $.ajax({
            type: "post",
            url: "../serve/getDataList.php",
            data: `page=${page}&orderType=${orderType}`,
            dataType: "json",
            success: function (response) {
                console.log(response);
                // [2] 根据数据渲染页面
                var res = response.data.map(ele => {
                    return `
                    <div class="app-1">
            <img src="${ele.src}" alt="">
            <div class="div6">
                <span class="span6">${ele.hd1}</span><del>${ele.hd2}</del><span class="span7">${ele.hd}</span>
            </div>
            <div class="div7">
                <b class="yew">${ele.name}</b>
                <a href="">${ele.name1}</a>
                <p class="p1">${ele.price}</p>
                <p class="p2">${ele.pri}</p>
                <p class="p3">${ele.btn}</p>
            </div>
        </div>
    </div> `
                }).join("");
                $("#app").html(res);
            }
        });

    }

    //[1] 获取服务器存储商品数据
    getList(0);

    //[2] 获取总页码
    $.ajax({
        type: "post",
        url: "../serve/getPageCount.php",
        dataType: "json",
        success: function (response) {
            let pageSize = response.data.count;
            var res = '';
            for (let i = 0; i < pageSize; i++) {
                $("#page").append(`<a href="javascript:;">${i + 1}</a>`)
            }
            $("#page").children("a").eq(0).addClass("active");
        }
    });

    $("#page").on("click", "a", function () {
        var index = $(this).index();
        /* (1) 设置当前标签的选中状态 */
        $(this).addClass("active").siblings().removeClass("active");
        /* (2) 发送网络更新页面 */
        getList(index);
    })

    $("#nav li").click(function () {
        orderType = $(this).index();
        getList(0);
    })
})