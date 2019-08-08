// 当页面加载完后再执行Javascript代码
window.onload = function () {
    var oSmallBox = document.getElementById("small-box"),
        oSmallImg = oSmallBox.getElementsByTagName("img"),
        oMiddleImg = document.getElementById("middle-img"),
        oLargeImg = document.getElementById("large-img"),
        oMiddleBox = document.getElementById("middle-box"),
        oShadow = document.getElementById("shadow"),
        oLargeBox = document.getElementById("large-box");

    for (var i = 0; i < oSmallImg.length; i++) {

        //绑定onmouseenter事件，当鼠标移入到图像上时触发
        oSmallImg[i].onmouseenter = function () {
            //修改小图片的className
            for (var j = 0; j < oSmallImg.length; j++) {
                oSmallImg[j].className = "";
            }

            this.className = "current";

            //修改中型图片和大型图片的src地址
            oMiddleImg.src = "img/middle" + this.src.slice(this.src.indexOf("-"));
            oLargeImg.src = "img/large" + this.src.slice(this.src.indexOf("-"));

        }

    }

    //鼠标进入middle-box，显示遮罩层和右侧大图区域
    oMiddleBox.onmouseenter = function () {
        oLargeBox.style.display = "block";
        oShadow.style.display = "block";
    }
    //鼠标离开middle-box，隐藏遮罩层和右侧大图区域
    oMiddleBox.onmouseleave = function () {
        oLargeBox.style.display = "none";
        oShadow.style.display = "none";
    }
    var srcoll = 0;
    $(window).scroll(function () {
        srcoll = $(window).scrollTop();
    })
    //给middle-box添加鼠标移动事件
    oMiddleBox.onmousemove = function (e) {
        //事件对象兼容
        var ev = e || window.event;
        var iL = ev.clientX - oMiddleBox.offsetLeft - oShadow.offsetWidth / 2;
        var iT = ev.clientY - oMiddleBox.offsetTop + srcoll - oShadow.offsetWidth / 2;

        //限制左侧方向
        if (iL < 0) {
            iL = 0;
        }
        //限制上侧方向
        if (iT < 0) {
            iT = 0;
        }
        //遮罩层的left移动的最大值
        var iMaxL = oMiddleBox.offsetWidth - oShadow.offsetWidth;
        if (iL > iMaxL) {
            iL = iMaxL;
        }
        //遮罩层的top移动的最大值
        var iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;
        if (iT > iMaxT) {
            iT = iMaxT;
        }

        oShadow.style.left = iL + "px";
        oShadow.style.top = iT + "px";

        //比例：iShadow / iShadowMaxL = iLargeImgL / iLargeImgMaxL 
        //计算大图片所移动的left值

        var iLargeImgL = iL * (oLargeImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
        var iLargeImgT = iT * (oLargeImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;

        oLargeImg.style.left = - iLargeImgL + "px";
        oLargeImg.style.top = - iLargeImgT + "px";

    }
}