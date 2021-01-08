function goBack(){
    event.preventDefault();
    window.history.go(-1);

}

    //換進度條=====

    // 看做到第幾題了
    let data = JSON.parse(localStorage.getItem('listData')) || [];
    let testAns = JSON.parse(localStorage.getItem('listData')) || [];
    let countQ = testAns.length;
    // let prevQ = countQ;
    console.log('data:'+data);

    if(!countQ){
        $('.yellow-rock').addClass('yellow-rock-ani');
        $('.green-rock').addClass('green-rock-ani');
        $('.orange-rock').addClass('orange-rock-ani');
        $('.content-wrapper').addClass('ani');
        

    }

    if (countQ == 5){
        
        window.location.href="../yogatest-result.html";
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
    question: "1.請問你的身高？",
    ans: {
    "170 cm 以下": "180",
    "170-180 cm": "180",
    "180 cm 以上": "215"
        }
    },

    {
        question: "2.請問你做瑜珈的目的？",
        ans: {
        "健身或瘦身":"達到最佳健身效果",
        "放鬆減壓":"得到最深層的放鬆",
        "修復傷口":"得到最深層的放鬆",
        "柔軟度":"有最深層的伸展",
        "增強肌耐力":"達到最佳健身效果",
        "改善身體循環":"能夠穩定、改善循環",
        "調節呼吸":"能夠抓穩節奏、調節呼吸",
        },
    },


    {
        question: "3.常做瑜珈的種類？",
        ans: {
            "哈達瑜珈":"做哈達瑜珈",	
            "阿斯坦加瑜珈":"做阿斯坦加瑜珈",	
            "和緩瑜珈":"做和緩瑜珈",	
            "動瑜珈":"做動瑜珈",	
            "陰瑜珈":"做陰瑜珈",	
            "熱瑜珈":"做熱瑜珈",	
            "修復瑜珈":"做修復瑜珈",
        },
    },

    {
        question: "4.做瑜珈的地點？",
        ans: {
            "瑜珈教室":"1",
            "家裡":"2",
            "戶外":"3",	
            "健身房":"4",
        },
    },

    {
        question: "5.你做瑜珈的頻率？",
        ans: {
            "第一次練習":"5",	
            "1-2次/周":"6",	
            "3-4次/周":"7",	
            "幾乎每天":"8",
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

    todo[countQ]=ans;

    data.push(todo);

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

        <button type="button" class="btn_l choice" value="${ansSet[i]}">${i}</button>

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


