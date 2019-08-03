$(function () {
    class PuBu {
        constructor(data) {
            this.data = data;
        }
        init() {
            // $("#div8_container").html(this.createHTML());
            // console.log($("#div8_container"));
            this.createHTML();
        }
        createHTML() {


            // let oimg = this.data.map((item) => {
            //     let html = `  <a target="_blank"
            //     href="activity-382.html?cm_re=cn_homepage_mustcheck_asia0801" class="div8_a_odd">
            //     <div class="div8_item div8_item_odd"><img class="div8_img" src="${item.src}">
            //         <div class="div8_info">
            //             <p class="div8_title">${item.title}</p>
            //             <p class="div8_subtit">${item.subtit}</p>
            //             <p class="div8_date">${item.date}</p><span class="div8_btn">${item.btn}</span>
            //         </div>
            // </a>`
            //    // return html;
            // }).join("");
            let html = this.data.map((item) => {
                // console.log(item);

                //   return  `  <a target="_blank"
                //     href="activity-382.html?cm_re=cn_homepage_mustcheck_asia0801" class="div8_a_odd">
                //     <div class="div8_item div8_item_odd"><img class="div8_img" src="${item.src}">
                //         <div class="div8_info">
                //             <p class="div8_title">${item.title}</p>
                //             <p class="div8_subtit">${item.subtit}</p>
                //             <p class="div8_date">${item.date}</p><span class="div8_btn">${item.btn}</span>
                //         </div>
                // </a>`
                return ` <a href="" target="_blank">
                <div class="div9_item" id="iprefix_index_seckill2_596786">
                    <div class="div9_imgWrapper">
                                  <img class="div9_img" src="${item.src}">
                        
                        <i class="div9_count"><b>5.6 <span>折</span></b></i>
                    </div>
                    <div class="div9_info">
            
                        <div class="div9_countdown" id="iprefix_seckill2_time_596786">
                        ${item.countdown}              <!--<span class="day">00</span>天-->
                            <span class="hour">${item.countdown1}</span> : 
                            <span class="minute">${item.countdown2}</span> : 
                            <span class="second">${item.countdown3}</span>                
                                        </div>
                        <div class="div9_detail">
                            <div class="div9_detail_intro"><i class="icon iconfont div9_font_icon"></i>${item.intro}</div>
                            <div class="div9_detail_title">
                                <b class="yew">${item.title}                </div>
                            <div class="div9_detail_price">
                                <div class="div9_pirce_cur"><span class="div9_price_cur_sig">￥</span><span class="div9_price_cur_num">412</span></div>
                                <div class="div9_price_old"><span class="div9_price_old_num">￥736</span></div>
                            </div>
                            
                        </div>
                        <div class="div9_bottom">
                            <div class="div9_sold" style="display: none;">已售<span class="div9_soldnum">122</span>件</div>
                                            <span class="div9_btn">${item.btn}</span>
                                        </div>
                    </div>
                </div>
            </a>`
            }).join("");
            console.log(html);
            //  return oimg;
            $(".div9_container").html(html);
        }
    }
    $.getJSON("../src/index1.json",function(res) {
        let b = new PuBu(res);
        b.init();
    });
})