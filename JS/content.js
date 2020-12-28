

// -------偵測top add animation----//
        //第1區動畫
        $('.text-wrap-ani-1').css('opacity','0');
        $('.sec1-img-ani-1').css('opacity','0');
        $('.rec-ani-1').css('opacity','0');

        $('.sec1-img-ani-1').css('opacity','1').addClass('animate__animated animate__fadeInLeft');
            $('.text-wrap-ani-1').css('opacity','1').addClass('animate__animated animate__fadeInRight');
            $('.line-1').addClass('anim-typewriter');
            
            //第2區動畫
    
        $('.text-wrap-ani-2').css('opacity','0');
        $('.sec2-img-ani-2').css('opacity','0');
        $('.rec-ani-2').css('opacity','0');
    
            //第3區動畫
        $('.last-sec-img-ani').css('opacity','0');
        $('.last-sec-text-ani').css('opacity','0');
        $('.last-sec-thermo').css('opacity','0');

        
        
    
        $(window).on('scroll',function(){
    
            let a = $(window).height()/5*4;
            // console.log('5分之4:'+a);
            
            let w = $(this).scrollTop();
            // console.log(w);
            
            
            //sec1
            let top = $('.text-wrap-ani-1').offset().top-a;
            let top2 = $('.sec1-img-ani-1').offset().top-a;
            let top3 = $('.rec-ani-1').offset().top-a;
    
            //sec2
            let top4 = $('.text-wrap-ani-2').offset().top-a;
            let top5 = $('.sec2-img-ani-2').offset().top-a;
            let top6 = $('.rec-ani-2').offset().top-a;
    
    
            //sec3
            let top7 = $('.last-sec-img-ani').offset().top-a*1.5;
            let top8 = $('.last-sec-text-ani').offset().top-a;
    
    
            
    
            //第一區
           
            
    
    
            if(w >= top3){
            $('.rec-ani-1').css('opacity','1').addClass('animate__animated animate__fadeInDown');
            }
    
            // //第2區
    
    
            if(w >= top5){
            $('.sec2-img-ani-2').css('opacity','1').addClass('animate__animated animate__fadeInRight');
            $('.text-wrap-ani-2').css('opacity','1').addClass('animate__animated animate__fadeInLeft');
            }
    
            if(w >= top6){
            $('.rec-ani-2').css('opacity','1').addClass('animate__animated animate__fadeInDown');
            
            }
    
    
            // //第3區
    
            if(w >= top7){
    
            $('.last-sec-img-ani').css('opacity','1').addClass('animate__animated animate__fadeInRight');
            $('.last-sec-text-ani').css('opacity','1').addClass('animate__animated animate__fadeInLeft');
            $('.last-sec-thermo').css('opacity','1').addClass('animate__animated animate__fadeInLeft').css('animation-delay','.5s');
            
            }
    
    
            
    
    
    
        })

        //hero animaiton
       
        


        setInterval(function(){
            $('.line-1').toggleClass('anim-typewriter')
            }, 3000
        );

            
    
    // -------------熱門商品區-------------------------
            $(document).ready(function() {
                $(window).trigger('resize');
            });
    
    //熱門商品移動
    
            $(window).on('resize',function(){  
                let w = $(window).width(); 
                let img_wrap = 226;
                // $('.img-wrap').width()
                let margin = (w - img_wrap)/2;
                let move = $(window).width();
                let transmove = move*3;
                let width = move*5;
                let index =0;
                
                
            
    
              if(w < 992){
                  //先設定
                    $('.product-wrap').css('margin-left',margin).css('margin-right',margin);
                    // 複製
                    $('.guessyoullike1 .product-zone:last').clone().insertBefore($('.guessyoullike1 .product-zone:first'));
                    $('.guessyoullike1 .product-zone:nth-child(2)').clone().insertAfter($('.guessyoullike1 .product-zone:last'));
                    $('.guessyoullike .product-zone:last').clone().insertBefore($('.guessyoullike .product-zone:first'));
                    $('.guessyoullike .product-zone:nth-child(2)').clone().insertAfter($('.guessyoullike .product-zone:last'));




                    $('.guessyoullike').css('width',width);
                    $('.guessyoullike').css('left',-move);
                    $('.guessyoullike').addClass('position-absolute');
                    $('.guessyoullike').removeClass('position-relative');;
                    $('.guessyoullike').removeClass('justify-content-center');
                    $('.guessyoullike1').css('width',width);
                    $('.guessyoullike1').css('left',-move);
                    $('.guessyoullike1').addClass('position-absolute');
                    $('.guessyoullike1').removeClass('position-relative');;
                    $('.guessyoullike1').removeClass('justify-content-center');
                    $('.icon-right').css('opacity','1');
                 
                    /////// click movement
                     // Click events
                     $('.icon-left1').on('click',function () { shiftSlide1(1) });
                     $('.icon-right1').on('click',function () { shiftSlide1(-1) });
                     $('.icon-left').on('click',function () { shiftSlide(1) });
                     $('.icon-right').on('click',function () { shiftSlide(-1) });

                       // Transition events
                    $('.guessyoullike1').on('transitionend',checkIndex1);
                    $('.guessyoullike').on('transitionend',checkIndex);

                    function shiftSlide1(dir) {
                        $('.guessyoullike1').addClass('transition');
                        
                          if (dir == 1) {
                            
                            $('.guessyoullike1').css('left','+='+ move);
                            index--;      

                          } else if (dir == -1) {
                            $('.guessyoullike1').css('left','-='+move);
                            index++;      
                          }
                        
                        
                      }
                        
                      function checkIndex1 (){
                        let pos = $('.guessyoullike1').position().left;
                        $('.guessyoullike1').removeClass('transition');
                          
                        
                        console.log('index'+index);
                    
                        if (index == -1) {
                            
                            $('.guessyoullike1').css('left',-transmove);
                            console.log('transitionend'+pos);
                          index = 2;
                        }
                    
                        if (index == 3) {
                            
                            $('.guessyoullike1').css('left',-move);
                            console.log('transitionend'+pos);
                          index = 0;
                        }
                        
                        allowShift = true;
                        
                      }

                    function shiftSlide(dir) {
                        $('.guessyoullike').addClass('transition');
                        
                          if (dir == 1) {
                            
                            $('.guessyoullike').css('left','+='+ move);
                            index--;      

                          } else if (dir == -1) {
                            $('.guessyoullike').css('left','-='+move);
                            index++;      
                          }
                        
                        
                      }
                        
                      function checkIndex (){
                        let pos = $('.guessyoullike').position().left;
                        $('.guessyoullike').removeClass('transition');
                          
                        
                        console.log('index'+index);
                    
                        if (index == -1) {
                            
                            $('.guessyoullike').css('left',-transmove);
                            console.log('transitionend'+pos);
                          index = 2;
                        }
                    
                        if (index == 3) {
                            
                            $('.guessyoullike').css('left',-move);
                            console.log('transitionend'+pos);
                          index = 0;
                        }
                        
                        allowShift = true;
                        
                      }

                    
    
                }else{
                  
                     $('.guessyoullike').css('width','').css('left','');
                     $('.guessyoullike').removeClass('position-absolute');
                     $('.guessyoullike').addClass('position-relative');;
                     $('.guessyoullike').addClass('justify-content-center');
                     $('.guessyoullike1').css('width','').css('left','');
                     $('.guessyoullike1').removeClass('position-absolute');
                     $('.guessyoullike1').addClass('position-relative');;
                     $('.guessyoullike1').addClass('justify-content-center');
                     $('.product-wrap').eq(0).css('margin-right','75px').css('margin-left','0px');
                     $('.product-wrap').eq(1).css('margin-right','75px').css('margin-left','0px');;
                     $('.product-wrap').eq(2).css('margin-right','0px').css('margin-left','0px');;
                     $('.product-wrap').eq(3).css('margin-right','75px').css('margin-left','0px');;
                     $('.product-wrap').eq(4).css('margin-right','75px').css('margin-left','0px');;
                     $('.product-wrap').eq(5).css('margin-right','0px').css('margin-left','0px');;
                }
                           
            })

// 首頁 scrolldown
// 點擊 移動頁面
$('.scrollbox').on('click',function(){
    $('html,body').animate( { scrollTop:$('#content_part1').offset().top } ,600);
});

// 首頁 scrolldown
// 下滑移動 
$(window).scroll(function(){
    // console.log($(this).scrollTop()); 

    let w = $(window).width(); 
    if(w>992){
        if ($(window).scrollTop()>=450){
            $('.scrollbox').css('height','80px').css('transition-duration','.5s');
    
            $('.sec1-img').css('z-index','1');
        }    
        else {
            $('.scrollbox').css('height','170px').css('transition-duration','.5s');
            $('.sec1-img').css('z-index','1');
        } 

    }

    else{
       
        if ($(window).scrollTop()>=210){
            $('.srolldown_btn_mobile').addClass('srolldown_btn_mobile_h').css('transition-duration','.5s');
    
            $('.sec1-img').css('z-index','1');
        }    
        else {
            $('.srolldown_btn_mobile').removeClass('srolldown_btn_mobile_h').css('transition-duration','.5s');
            $('.sec1-img').css('z-index','1');
        } 

    }
    
    

    
});  


// 首頁 scrolldown
// hover
$('.scrollbox').on('mouseenter', function () {
    $(this).css('height','80px').css('transition-duration','.5s');
    $('.sec1-img').css('z-index','1');
});
$('.scrollbox').on('mouseleave', function () {
    $(this).css('height','170px').css('transition-duration','.5s');
    $('.sec1-img').css('z-index','1');
});
    
           
    