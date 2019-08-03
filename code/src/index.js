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
                return ` <a href="" class="div8_a_odd">
                    <div class="div8_item div8_item_odd">
                         <div><img class="div8_img" src="${item.src}" alt=""></div>
                     <div class="div8_info">
                      <p class="div8_title">${item.title}</p>
                      <p class="div8_subtit">${item.subtit}</p>
                      <p class="div8_date">${item.date}</p><span class="div8_btn">${item.btn}</span>
                      
                     </div>
                    </div>
                     </a>`
            }).join("");
            console.log(html);
            //  return oimg;
            $("#div8_container").html(html);
        }
    }
    $.getJSON("../src/index.json", function (res) {
        let b = new PuBu(res);
        b.init();
    });
})