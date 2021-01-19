// 若題數未滿，倒回去
let testAns = JSON.parse(localStorage.getItem('listData')) || [];
let countQ = testAns.length;

if(countQ < 5){
        window.location.href="yogatest-q.html";
    }


const myQuestions = [
    {
    question: "1.有做過瑜珈嗎？",
    ans: {
    "完全沒有": "初學瑜珈",
    "有一點基礎": "有一點基礎的你",
    "瑜珈經驗者": "有瑜珈經驗的你"
        }
    },
    
    {
    question: "2.為什麼想做瑜珈呢？",
    ans: {
        "健身，增強肌耐力":{
            
            "比較靜態":{
                "完全沒有":"流瑜珈",
                "有一點基礎":"阿斯坦加瑜珈",
                "瑜珈經驗者":"阿斯坦加瑜珈"
            },
            "動態，但不希望流太多汗":{
                "完全沒有":"流瑜珈",
                "有一點基礎":"阿斯坦加瑜珈",
                "瑜珈經驗者":"阿斯坦加瑜珈"
            },
            "動態，想要爆汗":{
                "完全沒有":"熱瑜珈",
                "有一點基礎":"熱瑜珈",
                "瑜珈經驗者":"熱瑜珈"
            },
        },
        "調節呼吸，放鬆減壓":{
            
            "比較靜態":"陰瑜珈",
            "動態，但不希望流太多汗":"流動瑜珈",
            "動態，想要爆汗":"流動瑜珈",
        },
        
        "修復傷口":{
            
            "比較靜態":"修復瑜珈",
            "動態，但不希望流太多汗":"修復瑜珈",
            "動態，想要爆汗":"修復瑜珈",
        },
        "增加柔軟度，改善循環":{
            
            "比較靜態":"陰瑜珈",
            "動態，但不希望流太多汗":"流動瑜珈",
            "動態，想要爆汗":"流動瑜珈",
        },
       
        },
    },

    {
        question: "3.希望做哪一類的瑜珈？",
        ans: {
            "比較靜態":"",	
            "動態，但不希望流太多汗":"",	
            "動態，想要爆汗":"",	
        },
        },


    

    {
        question: "4.希望做瑜珈的地點？",
        ans: {
            "瑜珈教室":"",
            "家裡":"",
            "戶外":"",	
            "健身房":"",
        },
    },

    {
        question: "5.選擇瑜珈用品最大考量？",
        ans: {
            "希望是環保材質":["材質可以選擇","NR 天然橡膠","，只滑效果好，但重量較重、價格高。"],	
            "比較在意價格":["材質可以選擇","PVC 聚氯乙烯","，價格便宜、耐用。"],	
            "希望很輕便":["材質可以選擇","TPE 熱塑性彈性體","，輕便、彈性較佳。"],	
            
            
        },
    },

    

    ];

    
    const recommendYogaDes = {

    "des":{
        "熱瑜珈":"熱瑜珈可以加快身體變熱的速度，在高溫的教室裡，讓身體快速變得柔軟、增強延展度，搭配系列動作，適合有一點基礎的練習者。",
        "流動瑜珈":"流動瑜珈，介於哈達至阿斯坦加瑜珈中間的難度，藉由一連串的動作搭配呼吸，增強心肺能力。",
        "阿斯坦加瑜珈":"阿斯坦加強度大，練習時需要大量的專注、肌耐力與柔軟度，系列動作包括站姿，平衡，扭轉，倒立等，適合中高階練習者。",
        "陰瑜珈":"陰瑜珈緩慢，透過每個動作的停留、刺激淋巴，很適合各種程度的練習者。幫助伸展筋膜、釋放體內壓力。",
        "哈達瑜伽":"哈達瑜伽是所有瑜珈的起源，是學習瑜珈的基礎，動作比較慢，涵蓋站姿、坐姿、呼吸與順位練習、，非常適合初學者。",
        "修復瑜珈": "修復瑜珈和緩、無壓，透過體位法練習，讓身體的器官調回到正確的位置，放鬆平日過度使用的肌肉、修復身體。",
 
    },

    "img":{
        "熱瑜珈":"./img/yogatest/yoga-0.jpg",
        "流動瑜珈":"./img/yogatest/yoga-1.jpg",
        "阿斯坦加瑜珈":"./img/yogatest/yoga-2.jpg",
        "哈達瑜伽":"./img/yogatest/yoga-3.jpg",
        "陰瑜珈":"./img/yogatest/yoga-4.jpg",
        "修復瑜珈":"./img/yogatest/yoga-5.jpg",

    },
    "yogamat":{
        "完全沒有":{
            "熱瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "流動瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "阿斯坦加瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "哈達瑜伽":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "陰瑜珈":["可以選擇","6mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
            "修復瑜珈":["可以選擇","6mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
        },

        "有一點基礎":{
            "熱瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "流動瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "阿斯坦加瑜珈":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "哈達瑜伽":["可以選擇","4mm","以上的瑜珈墊，不要過厚，可以保持運動中身體的平衡。"],
            "陰瑜珈":["可以選擇","6mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
            "修復瑜珈": ["可以選擇","6mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
        },
        "瑜珈經驗者":{
            "熱瑜珈":["核心力量夠的話，可以選擇","3mm","以下的瑜珈墊，保持身體的穩定度。"],
            "流動瑜珈":["核心力量夠的話，可以選擇","3mm","以下的瑜珈墊，保持身體的穩定度。"],
            "阿斯坦加瑜珈":["核心力量夠的話，可以選擇","3mm","以下的瑜珈墊，保持身體的穩定度。"],
            "陰瑜珈":["可以選擇","3mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
            "哈達瑜伽":["可以選擇","3mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],
            "修復瑜珈": ["可以選擇","3mm以上","偏厚的瑜珈墊，在停留時間較長的動作中，身體部位會更舒服。"],

        }
    },

    "yogamatProduct":{
            "希望是環保材質":{
                "img":"./img/yogacontent/product_01.jpg",
                "product":"環保瑜珈墊",
                "price":"NT$ 1,800",
               
            },
    
            "比較在意價格":{
                "img":"./img/yogacontent/product_02.jpg",
                "product":"防滑瑜珈墊",
                "price":"NT$ 900",
               
            },
            "希望很輕便":{
                "img":"./img/yogacontent/product_04.jpg",
                "product":"輕便瑜珈墊",
                "price":"NT$ 1,200",
                
    
            },
 
    },
    
}

    let key0 = testAns[0];
    let key1 = testAns[1];
    let key2 = testAns[2];
    let key4 = testAns[4];
    if(key1 == '健身，增強肌耐力'){
        var recommendYoga = myQuestions[1]['ans'][key1][key2][key0];

    }else{
        var recommendYoga = myQuestions[1]['ans'][key1][key2];
    }
    
    console.log('recommendYoga'+recommendYoga);
    console.log('key0'+key0);
    console.log('key1'+key1);
    console.log('key2'+key2);

    // 最適合的瑜珈
    $('#recommend-yoga').html(recommendYoga);
    $('#recommend-yoga-title').html(recommendYoga);
    $('#recommend-yoga-des').html(recommendYogaDes['des'][recommendYoga]);

    //瑜珈墊推薦
    $('#recommend-yoga-status').html(myQuestions[0]['ans'][key0]);
    $('#recommend-yoga-mat-0').html(recommendYogaDes['yogamat'][key0][recommendYoga][0]);
    $('#recommend-yoga-mat-1').html(recommendYogaDes['yogamat'][key0][recommendYoga][1]);
    $('#recommend-yoga-mat-2').html(recommendYogaDes['yogamat'][key0][recommendYoga][2]);
    
    //瑜珈材質
    $('#recommend-yoga-mat-material-0').html(myQuestions[4]['ans'][key4][0]);
    $('#recommend-yoga-mat-material-1').html(myQuestions[4]['ans'][key4][1]);
    $('#recommend-yoga-mat-material-2').html(myQuestions[4]['ans'][key4][2]);

    //瑜珈墊
    
    $('#yoga-mat-product').html(recommendYogaDes['yogamatProduct'][key4]['product']);
    $('#yoga-mat-price').html(recommendYogaDes['yogamatProduct'][key4]['price']);

    //圖片
    $('#yoga-style-img').attr("src",recommendYogaDes['img'][recommendYoga]);
    $('#yoga-mat1-img').attr("src",recommendYogaDes['yogamatProduct'][key4]['img']);
 

    //media size

    //coupon-pop-up
    $('.close').on('click', function() {
        $('#couponModal').modal('show');

    })




    //margin between products
    let margin_between = ($('.result-content-wrapper').width() - 320 - 200 - 200) * 0.5;

    console.log('img:' + margin_between);
    $('.content-product:first-child').css('margin-right', margin_between);


    function marginBetween() {

        let w = $(window).width();
        if (w > 1024) {
            if(margin_between<0){
                $('.content-title+.result-content-wrapper').css('padding','0 0');
                $('.content-product:first-child').css('margin-right','5pt');
            
            
            }else{
                $('.content-product:first-child').css('margin-right', margin_between).addClass('justify-content-end').removeClass('justify-content-center');
            }
            

            
            $('.result-content-wrapper .content-product:first-child').removeClass('mb-5');
            $('.mobile-text').addClass('w-100');


        } else {
            $('.content-product:first-child').css('margin-right', '0').removeClass('justify-content-end').addClass('justify-content-center');
            $('.result-content-wrapper .content-product:first-child').addClass('mb-5');
            $('.mobile-text').removeClass('w-100').css('width','320px');
            // $('.result-content-wrapper').removeClass('align-items-end');


        };

    }


    $(window).on('resize', function() {
        marginBetween();

    });

    $(document).ready(function() {
        marginBetween();
    });


    function CopyTextToClipboard(id) {

        var TextRange = document.createRange();

        TextRange.selectNode(document.getElementById(id));

        sel = window.getSelection();

        sel.removeAllRanges();

        sel.addRange(TextRange);

        document.execCommand("copy");

        alert("折扣碼複製成功！");


    }

   
    

    