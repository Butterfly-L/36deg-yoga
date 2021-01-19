function goBack(){
    event.preventDefault();
    window.history.go(-1);

}

    //換進度條=====

    // 看做到第幾題了
    let data = JSON.parse(localStorage.getItem('listData')) || [];
    // let testAns = JSON.parse(localStorage.getItem('listData')) || [];
    let countQ = data.length;
    
    console.log('data:'+data);

    if(!countQ){
        $('.yellow-rock').addClass('yellow-rock-ani');
        $('.green-rock').addClass('green-rock-ani');
        $('.orange-rock').addClass('orange-rock-ani');
        $('.content-wrapper').addClass('ani');
        

    }


    if (countQ == 5){     
        window.location.href="yogatest-result.html";
    }



    //把頭扣掉算要跑多長
    let hhh = ($('.thermometer_line').height() - 24) / 5;
    let www = ($('.thermometer_line').width() - 24) / 5;

    let qqq = countQ+1;
    let move = hhh * qqq + 24;
    let movew = www * qqq + 24;
    // console.log(qqq);

    //數字的樣式
    $('.pro-number .number').eq(qqq - 1).css('color', '#db5c00');


    //換進度條
    function progress(a = qqq) {

        let w = $(window).width();
        if (w < 992) {
            $('.thermometer_move').css('width', movew);
            $('.thermometer_move').css('height', '100%').css('transition','.5s');

        } else {
            $('.thermometer_move').css('height', move);
            $('.thermometer_move').css('width', '100%').css('transition','.5s');

        };

    };


    $(window).on('resize', function() {
        progress();

    });

    $(document).ready(function() {
        progress();
    });

//test Questions
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
            "動態，想要爆汗":"熱瑜珈",
        },
        "調節呼吸，放鬆減壓":{
            
            "比較靜態":"陰瑜珈",
            "動態，但不希望流太多汗":"流動瑜珈",
            "動態，想要爆汗":"流動瑜珈",
        },
        
        "修復傷口":"修復瑜珈",
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

    let ans = $('.btn-wrapper').find('.clicked').val();
    $('.alert').html('');

// 點下一步
$('#btnv').on('click',function(){
    // console.log('todo:'+todo);
    ans = $('.btn-wrapper').find('.clicked').val();
    if(!ans){
        $('.alert').html('請選擇');

    }else{

    var todo={};

    // todo[countQ]=ans;

    data.push(ans);

    // updateList(data);
    localStorage.setItem('listData', JSON.stringify(data));
    location.reload();}

});  

//點上一步

$('#btnp').on('click',function(){
    
    data.pop();
    localStorage.setItem('listData', JSON.stringify(data));
    location.reload();


});


// console.log(myQuestions[0].ans);

function buildQuiz(){
    let str = '';
    let ansSet = myQuestions[countQ].ans;
    for (var i in ansSet){
        str +=
        `<div class="btn-wrap col-6 d-flex justify-content-center animate__animated animate__fadeInUp">

        <button type="button" class="btn_l choice" value="${i}">${i}</button>

        </div>`;

    };
    // console.log(str);
    $('.btn-wrapper').html(str);
    $('.title').html(myQuestions[countQ].question);


    // 點選項
    $('.choice').on('click', function() {
            $(this).addClass('clicked').parent().siblings().find('.choice').removeClass('clicked');
            console.log('clicked');


    

        });
  
    
}

buildQuiz();


