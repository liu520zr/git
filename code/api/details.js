// 当页面加载完后再执行Javascript代码
window.onload = function () {

    let gid = decodeURI(location.search).slice(1);
    let itemData;
    console.log(gid);
    $.ajax({
        type: "post",
        url: "http://127.0.0.1/code/ssw/git/code/api/details.php",
        data: gid,
        dataType: "json",
        success: function (str) {
            console.log(str);
            itemData = str[0];
            let html = str.map(ele => {
                return `
               
                <div class="div1">
        <div class="div4-1-2-1">
            <span class="span1">欢迎光临莎莎网！ <a href="./log.html"><span class="span1-1">登录</span></a> 或 <a
                    href="./register.html"><span class="span1-1">注册</span></a> </span>
            <div class="right">
                <dl class="dl1">
                    <dt>我的账户</dt>
                    <div>
                        <dd><a href="" id="a1">我的订单</a></dd>
                        <dd><a href="" id="a1">我的订单</a></dd>
                        <dd><a href="" id="a1">我的订单</a></dd>
                    </div>
                </dl>
                <dl class="dl1">
                    <dt>我的购物车</dt>
                </dl>
                <dl class="dl1">
                    <dt>我的收藏</dt>
                </dl>
                <dl class="dl1">
                    <dt>我的站内信</dt>
                </dl>
                <dl class="dl1">
                    <dt>积分中心</dt>
                </dl>
                <dl class="dl1">
                    <dt>Global site</dt>
                </dl>
                <dl class="dl1">
                    <dt>关注我们</dt>
                </dl>
            </div>
        </div>
    </div>
    <div class="div2">
        <div class="div2-1">
            <div class="div2-1-1">
                <a href="http://www.sasa.com/index.html" target="_blank">
                    <img src="http://cn02alicdn.sasa.com/public/images/aa/8d/1f/eaeed01271e12415fe463de41c4c09d9dcdc6139.png?1550670401#w"
                        alt="欢迎光临莎莎网" width="170" height="42">
                </a>
            </div>
        </div>
        <div class="div2-2">
            <div class="div2-2-1">
                <input type="text" placeholder="防晒">
                <button>搜索</button>
            </div>
            <div class="div2-2-1">
                <a href="">面膜</a>
                <a href="">欧莱雅</a>
                <a href="">SK-ll</a>
                <a href="">口红</a>
                <a href="">安耐晒</a>
                <a href="">香水</a>
                <a href="" style="border-right: none;">雅诗兰黛</a>
            </div>
        </div>
    </div>
    <div class="div3">
        <div class="div3-1">
            <ul class="list1">
                <li><a href="../SQL/client/list.html">香港特快直送</a><span class="span-1">/</span></li>
                <li><a href="../SQL/client/list.html">闪电保税仓</a><span class="span-1">/</span></li>
                <li><a href="../SQL/client/list.html">限时特卖</a><span class="span-1">/</span></li>
                <li><a href="../SQL/client/list.html">贵宾专享</a><span class="span-1">/</span></li>
                <li><a href="../SQL/client/list.html">莎莎Outlet</a></li>
            </ul>
        </div>
    </div>
    <div class="div4">
        <div class="div4-1">
            <span class="span3">☰ </span>全部分类
        </div>
        <ul class="list-li">
            <li>
                <div class="div-li">面部护肤</div>
                <div class="div4-2">
                    <dl class="dl2">
                        <dt><a href="../SQL/client/list.html">洁面/磨砂</a> </dt>
                        <dd><a href="../SQL/client/list.html">泡沫洁面乳</a> </dd>
                        <dd><a href="../SQL/client/list.html">洁面摩丝</a> </dd>
                        <dd><a href="../SQL/client/list.html">洁面啫喱</a> </dd>
                        <dd><a href="../SQL/client/list.html">洁面奶</a> </dd>
                        <dd><a href="../SQL/client/list.html">洁面皂</a> </dd>
                        <dd><a href="../SQL/client/list.html">洁面粉</a> </dd>
                        <dd><a href="../SQL/client/list.html">磨砂膏</a> </dd>
                        <dd><a href="../SQL/client/list.html">磨砂啫喱</a> </dd>
                    </dl>
                    <dl class="dl2">
                        <dt><a href="../SQL/client/list.html">眼部/唇部/颈部护理</a> </dt>
                        <dd><a href="../SQL/client/list.html">眼霜</a> </dd>
                        <dd><a href="../SQL/client/list.html">眼部精化/疗程</a> </dd>
                        <dd><a href="../SQL/client/list.html">眼膜</a> </dd>
                        <dd><a href="../SQL/client/list.html">睡眠免洗式眼膜</a> </dd>
                        <dd><a href="../SQL/client/list.html">润唇膏</a> </dd>
                        <dd><a href="../SQL/client/list.html">唇部精化</a> </dd>
                        <dd><a href="../SQL/client/list.html">唇膜</a> </dd>
                        <dd><a href="../SQL/client/list.html">唇部磨砂</a> </dd>
                        <dd><a href="../SQL/client/list.html">颈霜</a> </dd>
                        <dd><a href="../SQL/client/list.html">颈精华</a> </dd>
                        <dd><a href="../SQL/client/list.html">颈膜颈膜</a> </dd>
                    </dl>
                    <dl class="dl2">
                        <dt><a href="../SQL/client/list.html">面膜</a> </dt>
                        <dd><a href="../SQL/client/list.html">面膜贴</a> </dd>
                        <dd><a href="../SQL/client/list.html">水洗式面膜</a> </dd>
                        <dd><a href="../SQL/client/list.html">睡眠面膜</a> </dd>
                        <dd><a href="../SQL/client/list.html">面膜粉</a> </dd>
                        <dd><a href="../SQL/client/list.html">面膜泥</a> </dd>
                    </dl>
                </div>
            </li>
            <li>面部护肤</li>
            <li>面部护肤</li>
            <li>面部护肤</li>
            <li>面部护肤</li>
            <li>面部护肤</li>
            <li>面部护肤</li>
            <li>面部护肤</li>
        </ul>
    </div>
    <div class="div5">
        <div class="bread-crumbs">
            <a href="http://www.sasa.bread-crumbscom">首页 /</a>
            <a href="/facial-care">面部护肤 /</a>
            <a href="/facial-care/sunscreen">防晒护理 /</a>
            <a href="/facial-care/sunscreen_sunscreen-gel">防晒啫喱 /</a>
            <h1 class="now"><a href="/facialcare/Kose_Cosmeport-109262304006.html">SPF50+PA++++高效防晒凝胶 (樱花限量版)</a></h1>
        </div>
    </div>
    <div id="box">
        <div id="middle-box">
            <img src="${ele.middle1}" id="middle-img">
            <div id="shadow"></div>
        </div>
        <div id="large-box">
            <img src="${ele.big1}" id="large-img">
        </div>
        <div id="small-box">
            <img src="${ele.small1}" class="current">
            <img src="${ele.small2}">
            <img src="${ele.small3}">
            <img src="${ele.small4}">
            <img src="${ele.small5}">
        </div>
    </div>

    <div class="div7">
        <div class="div-1">
            <i>香港特快直送</i>
            <i>零扣关</i>
            <i>包税</i>
            <a href="/brand/kose-cosmeport" target="_blank">
                高丝魅宝 </a>

            &nbsp;SPF50+PA++++高效防晒凝胶 (樱花限量版)&nbsp;(100克)
        </div>
        <div class="detailwords">
            <a href="/search?scontent=n&amp;efficacy_id[]=138">防晒</a>
        </div>
        <div class="product-concerns">
            <ul>
                <li class="item">
                    <span class="detail">
                        <b class="price"><ins class="action-price">￥70.0</ins></b>
                        <span class="old-price"><del>市场价</del><del class="grey action-mktprice">￥103.8</del></span>
                        <i class="syew f16"><span class="action-saveprice">6.7折</span></i>
                    </span>
                </li>
                <!-- 会员价 begin -->
                <li class="item action-memberprice"></li>
                <!-- 会员价 end -->

            </ul>
        </div>
        <div class="div8">
            <div class="div-2">
                <i>打折</i>
                <span>
                    买此產品2件, 即享优惠套装价138元, 平均每件69到手</span>
            </div>
            <div class="div-2">
                <i>订单促销</i>
                <span>香港特快直送商品满￥288 免邮</span>
            </div>
            <div class="div-2">
                <i>订单促销</i>
                <span>香港特快直送商品满￥288 免邮</span>
            </div>
        </div>
        <div class="ruleWrap">
            <ul class="dispatching" id="J-dispatching">
                <li>
                    <div class="one">配送</div>
                    <div class="two">香港发货，香港直送时间为3-10个工作天</div>
                </li>
                <li>
                    <div class="one">运费</div>
                    <div class="two pro-rule"><span id="J-rule1" class="pulldown js-rule">满￥288免运费</span>
                        <p class="hid">香港特快直送商品订单满￥288免运费；订单满￥144减运费￥45；未满￥144运费￥90</p>
                    </div>
                </li>
                <li>
                    <div class="one">税费</div>
                    <div class="two pro-rule">
                        <font style="color:#EC3E7C;">本商品包税，无需再额外缴纳。</font>如有疑问，请联系客服咨询。

                    </div>
                </li>
                <li>
                    <div class="one">服务</div>
                    <div class="two service"><span class="icon67">30日退换保证</span><span class="icon67">正品保障</span><span
                            class="icon67">价格承诺</span></div>
                </li>
            </ul>
        </div>
        <div class="product-buy">

            <div class="product-action">
                <ul>
                    <!--商品库存-->
                    <li class="product-buy-quantity">
                        <label class="item-label" for="for_quantity_input">数量：</label>
                        <span class="item-content"><span class="p-quantity"><a href="javascript:void(0);"
                                    class="btn-decrease">-</a><input type="text" name="goods[num]"
                                    class="action-quantity-input" value="1" min="1" max="36" limit="36" cartnum="0"><a
                                    href="javascript:void(0);" class="btn-increase">+</a></span><span
                                class="p-store hide"><i class="iconfont"></i></span><input type="hidden" name="stock"
                                value="418"></span>
                    </li>

                    <!--购买按钮-->
                    <li class="product-buy-action">
                        <!--
                <button type="submit" class="btn btn-import btn-huge action-buynow" rel="_request"><span><span>立即购买</span></span></button>-->

                        <!--判断是否是预售商品和预售商品的时间判断-->
                        <button type="submit" class="btn btn-major btn-huge action-addtocart"
                            rel="_request"><span><span>加入购物车</span></span></button>
                        <!-- <button type="button"
                            class="btn btn-caution btn-huge action-notify hide"><span><span>到货通知</span></span></button> -->
                        <span class="code-pro pop-wrapper action-scanbuy">
                            <button type="button" class="btn-major">扫扫即加入购物车 <i class="icon icon-qrcode"></i>
                                <i class="iconfont"></i></button>
                            <div class="pop-body" style="display:none;">
                                <img src="http://cn02alicdn.sasa.com/public/images/d8/b8/e6/6e9d692c2307862a532fcbe148c8fb2b0a3e069f.png?1552467024#h"
                                    alt="商品二维码" width="196" height="196">
                            </div>
                        </span>
                    </li>
                    <!--判断是预售商品-->
                </ul>
            </div>
            <!-- 评分 -->

        </div>
    </div>
    <div class="cart-list">
    <h4>购物车</h4>
    <span id="catShow">0</span>
</div>
                `;

            })
            $("body").html(html);
            console.log($("body")[0]);

            var oSmallBox = document.getElementById("small-box"),
                oSmallImg = oSmallBox.getElementsByTagName("img"),
                oMiddleImg = document.getElementById("middle-img"),
                oLargeImg = document.getElementById("large-img"),
                oMiddleBox = document.getElementById("middle-box"),
                oShadow = document.getElementById("shadow"),
                oLargeBox = document.getElementById("large-box"),
                oBody = document.getElementsByTagName("body")[0],
                oBox = document.getElementById("box");

            for (var i = 0; i < oSmallImg.length; i++) {

                //绑定onmouseenter事件，当鼠标移入到图像上时触发
                oSmallImg[i].onmouseenter = function () {

                    //修改中型图片和大型图片的src地址
                    oMiddleImg.src = "../SQL/images/middle" + this.src.slice(this.src.indexOf("-"));
                    console.log(oMiddleImg.src);
                    oLargeImg.src = "../SQL/images/big" + this.src.slice(this.src.indexOf("-"));
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
                console.log(srcoll);

                var ev = e || window.event;
                var iL = ev.clientX - (oBody.clientWidth - 1190) / 2 - oShadow.offsetWidth / 2;
                var iT = ev.clientY - oBox.offsetTop + srcoll - oShadow.offsetHeight / 2;
                //console.log(iL, iT,);

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

                oLargeImg.style.left = -iLargeImgL + "px";
                oLargeImg.style.top = -iLargeImgT + "px";

            }
        }
    });

    /* 加入购物车的功能 */
    $("body").on("click", ".btn-major", function () {
        // console.log(itemData);
        var index = $(this).parent().data("index");
        var goodid = itemData.gid;
        var price = itemData.pri;
        console.log(goodid);

        $.ajax({
            type: "get",
            url: "../MyCart/server/addCart.php",
            data: `goodid=${goodid}&price=${price}`,
            dataType: "json",
            success: function (response) {
                // console.log(response);
                var text = response["totalRow"];
                $("#catShow").html(text)

            }
        });

    })

    /* 给购物车按钮添加点击事件 */
    // $(".cart-list").click(function() {
    //     window.open("../jiaoben/index.html")
    // });

    $("body").on("click", ".cart-list", function () {
        window.open("../html/index.html")
    })
}