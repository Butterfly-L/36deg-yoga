    //nav icon hover 效果///
    $('.nav-icon').hover(function(){
        $(this).find('.nav-icon-line').css('fill','#DB5C00').css('transition','.5s');
        $(this).find('.nav-icon-stroke').css('stroke','#DB5C00').css('transition','.5s');
        
      })

      $('.nav-icon').click(function(){
        $(this).find('.nav-icon-line').css('fill','#DB5C00').css('transition','.5s');
        $(this).find('.nav-icon-stroke').css('stroke','#DB5C00').css('transition','.5s');
        
      })

    $('.nav-icon').mouseleave(function(){
          $('.nav-icon-line').css('fill','#004a13').css('transition','.5s');
          $('.nav-icon-stroke').css('stroke','#004a13').css('transition','.5s');
      })
// search-icon

    $('.nav-icon-search').hover(function(){
      $(this).find('.nav-icon-line').css('fill','#DB5C00').css('transition','.5s');
      $(this).find('.nav-icon-stroke').css('stroke','#DB5C00').css('transition','.5s');
      
    })

    $('.nav-icon-search').click(function(){
      $(this).find('.nav-icon-line').css('fill','#DB5C00').css('transition','.1s');
      $(this).find('.nav-icon-stroke').css('stroke','#DB5C00').css('transition','.1s');
      
    })

    $('.nav-icon-search').mouseleave(function(){
        $('.nav-icon-line').css('fill','#004a13').css('transition','.5s');
        $('.nav-icon-stroke').css('stroke','#004a13').css('transition','.5s');
    })


//logo-icon
      $('.nav-logo').hover(function(){
        $(this).find('path').css('fill','#DB5C00').css('transition','.5s');

      })

      $('.nav-logo').click(function(){
        $(this).find('path').css('fill','#DB5C00').css('transition','.5s');

      })


    $('.nav-logo').mouseleave(function(){
          $('.nav-logo').find('path').css('fill','#004a13').css('transition','.5s');
       
      })

         
    // navbar捲動消失//
    let scrollLast = 0;

      $(document).ready(function(){
          let device=$(window).width();
            if (device < 992){
              $('.nav-desktop').removeClass('d-flex').css('display','none');
              $('.nav-mobile').addClass('d-flex').css('display','inline-block');
              $('.navv-mobile').css('display','block');
            

            }else{
              $('.nav-desktop').css('display','inline-block').addClass('d-flex');
              $('.nav-mobile').removeClass('d-flex').css('display','none');
              $('.navv-mobile').css('display','none');
              
              $(window).scroll(function () {

              let scrollNow = $(this).scrollTop();

              if (scrollLast < scrollNow) {
                  $('.nav-desktop').addClass('hide');
              }
              else {
                  $('.nav-desktop').removeClass('hide');
              }

              scrollLast = scrollNow;

              })

            }
      });
///判斷手機版顯示Navbar
      $(window).resize(function(){
        
          let device=$(window).width();
            if (device < 992){
              $('.nav-desktop').removeClass('d-flex').css('display','none');
              $('.nav-mobile').addClass('d-flex').css('display','none');
              $('.navv-mobile').css('display','block');
              
              //inline-block
              

            }else{
              $('.nav-desktop').css('display','inline-block').addClass('d-flex');
              $('.nav-mobile').removeClass('d-flex').css('display','none');
              $('.nav-search-area').removeClass('show');
              $('.navv-mobile').css('display','none');
              $(window).scroll(function () {
                  
                  let scrollNow = $(this).scrollTop();

                  if (scrollLast < scrollNow) {
                      $('nav').addClass('hide');
                  }
                  else {
                      $('nav').removeClass('hide');
                  }

                  scrollLast = scrollNow;

                  })

            }
         
      });

///手機版搜尋點擊顯示   切換其他地方會隱藏
    $('.nav-search').on('click',function(e){
      e.stopPropagation();
      $('.nav-search-area').toggleClass('show');
      $('.nav-icon-mobile').toggleClass('hide');
      $('.nav-logo').toggleClass('hide');
      $('.navv-mobile').toggleClass('hide');
      

      
    })

    



    $(document).click(function(e){
      var target = $(e.target);
      if(target.closest("nav").length != 0) return;
      $('.nav-search-area.show').removeClass('show');
      $('.nav-icon-mobile.hide').removeClass('hide');
      $('.nav-logo.hide').removeClass('hide');
      $('.navv-mobile.hide').removeClass('hide');
  })

  //https://www.jianshu.com/p/42d9bc59e25a



// ----------------------Hamburger

var menu = document.getElementById('menu-toggle'),
    a = false;

  menu.addEventListener( 'click', function() {
    if ( !a ) {
      $(menu).addClass("toggled");
      a = true;
      $('.nav-mobile-side').css('right','0%').css('display','flex').css('opacity','1');     
      $('.side-top').css('display','block');
      
      
    } else {
      $(menu).removeClass("toggled");
      a = false;
      $('.nav-mobile-side').css('right','100%').css('display','none').css('opacity','0');      
      $('.side-top').css('display','none');
    }
  }, false );


  // 點擊手機版會收起來

  window.addEventListener('hashchange', function(e) {
    $(menu).removeClass("toggled");
    a = false;
    $('.nav-mobile-side').css('right','100%').css('display','none').css('opacity','0');      
  }, false);




  // 購物車資訊變動
  const count_badge = $('.cart-badge');

  const productTpl = function(a){
    a.imgs = a.img.split(',');
    return `
    <a class="d-flex " href="product_mat.php?sid=${a.sid} ?>">
    <div class="img-wrap border">
        <img class="product-pic" src="./img/product_list/${a.imgs[1]}.jpg" alt="">
    </div>
    <div class="product-info ml-3">
            <p> ${a.product_name} <br>NT$ ${a.price*a.quantity}</br></p>
        </div>
    </a>
        `;
    };





  
