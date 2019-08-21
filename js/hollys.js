
$(function(){
$('.loding').css('opacity','0')
setTimeout(function() {$('.loding').remove()}, 1000);
  var bgSlide = new Swiper('.bg-slide .swiper-container', {
      pagination: {
          el: '.swiper-pagination',
        },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var manage = new Swiper('.manage .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
     //링크안타지기
     $('header .top-sub li a,.mamber .detail a,footer a').click(function(e){
      e.preventDefault();
    })
    // 로그인
    $('.top-sub .login').click(function(){
      if($(this).hasClass('on')){
        $('#login').show()
        $(this).removeClass('on')
        $('#id, #password').val('');
      }else{
        $('header .top-sub li:nth-child(1) a').text('login')
        $('header .top-sub li:nth-child(2) a').text('회원가입')
        $(this).addClass('on')
      }      
    })   
    // 로그인창에서 회원가입 열기
    $('#login .idpw .membership').click(function(){
      $('.wrap-form').show()
    })
    $('.wrap-form form i').click(function(){
      $('.wrap-form').hide()
    })
    // 메인화면에서 회원가입 열기
    $('header .top-sub .membership').click(function(){
      $('.wrap-form').show()
    })   
    //아이디찾기 화면열기
    $('#login .idpw #idfind').click(function(){
      $('.idfind').show()
    })
    //  아이디찾기 라디오 버튼 table 보이기
    $('.idfind form .radio').click(function(){
         if($('.radio').is(':checked')==true){
           $('.radio').parent('div').next('table').toggleClass('on')          
        }
      })
    $('.idfind form .certified').click(function(){      
      if($('.idfind .mailss,.idfind .num').val() ==''){
        alert('sns 입력바람')
      }else{
        alert('인증번호를 발송했습니다.')
        $(this).parents('table').find('.read').removeAttr('readonly').css('background','white')
        $(this).parents('table').find('.reads').removeAttr('readonly').css('background','white')
      }      
    })
    $('.idfind span.ok').click(function(){
      var len=$('.idfind .read').val().length      
      if($('.idfind .idone .one').hasClass('on')){
        if($('.idfind .idone .names').val() == ''){
          alert("이름 입력바람");
          $('.idfind .idone .names').focus();  
        }else if($('.idfind .idone .num').val() == ''){
          alert("휴대전화 번호 확인 바람");
          $('.idfind .idone .num').focus();  
        }else if(len == 6){
          alert('아이디를 sns로 보냈습니다.')
          $('.idfind').hide()
          $('.idfind input').val('')
        }else{
          alert('인증번호를 확인해주세요')
        }
      }else{
        var lent=$('.idfind .reads').val().length
        if($('.idfind .two .names').val() == ''){
          alert("이름 입력바람");
          $('.idfind .two .names').focus();
        }else if($('.idfind .two .mailss').val() == ''){
          alert('이메일 확인바람')
          $('.idfind .two .mailss').focus();
        }else if(lent == 6){
          alert('아이디를 sns로 보냈습니다.')
          $('.idfind').hide()
          $('.idfind input').val('')
        }else{
          alert('인증번호를 확인해주세요')
        }
      }            
      })
    $('.idfind i').click(function(){
      $('.idfind').hide()
    })    
  // 비밀번호찾기  
  $('#login .idpw #pwfind').click(function(){
    $('.pwfind').show()
  })
  $('.pwfind form .certified').click(function() {      
    if($('.pwfind .one .num').val() == ''){
      alert('휴대전화 번호를 확인해주세요.')
    }else{
      alert('인증번호를 발송했습니다.')
      $(this).parents('table').find('.read').removeAttr('readonly').css('background','white')
    }    
  }) 
  $('.pwfind span.ok').click(function(){
    var len=$('.pwfind .idone .read').val().length  
    if($('.pwfind .one .id').val() == ''){          
      alert('아이디 입력바람.')
      $('.pwfind .one .id').focus();
    }else if($('.pwfind .one .num').val() == ''){
      alert('휴대전화 번호를 확인해주세요')
      $('.pwfind .one .num').focus();
    }else if(len == 6){
      alert('아이디를 sns로 보냈습니다.')
      $('.pwfind').hide()
      $('.pwfind input').val('')
    }else{
      alert('인증번호를 확인해주세요')
    }
    console.log(len);    
  })
$('.pwfind i').click(function(){
  $('.pwfind').hide()        
  })
    $('.btn').click(function(){      
      var id=$('#id').val(); 
      var password=$('#password').val();      
      $('.message').remove();      
      if(id==''){//아이디 값이 없다(빈값)
          $('#id').after('<p class="message">아이디값을 입력하세요.</p>').focus();
      }else if(password==''){//패스워드 값이 없다(빈값)
          $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
      }else{
        $('#login').hide()
        $('header .top-sub li:nth-child(1) a').text('logout')
        $('header .top-sub li:nth-child(2) a').text('My hollys')        
        }
    })
    $('#login button').click(function(){
      $('#login').hide()
      $('.top-sub li:nth-child(1)').addClass('on')
    })
    // 언어
    $('.top-sub i').click(function(){
      if($(this).hasClass('on')){
        $(this).removeClass('on')
      }else{
        $(this).addClass('on')
      }
      if($(this).prev().hasClass('on')){        
        $(this).prev().find('li:nth-child(2)').hide()
        $(this).prev().find('li:nth-child(3)').hide()
        $(this).prev().removeClass('on')        
      }else{        
        $(this).prev().find('li').show()
        $(this).prev().addClass('on')
      }
    })
    $('.top-sub .lang li').click(function(){
      $(this).prependTo('.top-sub .lang')
      $('.lang li:nth-child(2)').hide()
      $('.lang li:nth-child(3)').hide()
      $('.lang').removeClass('on')
      $('.top-sub i').removeClass('on')
    })
//언어끝------------------------------
    $('.gnb>li>a').mouseenter(function(){
      $('.depth2-bg').show()
      $('.gnb ul').show()
    })
    $('nav').mouseleave(function(){
      $('.depth2-bg').hide()
      $('.gnb ul').hide()
    })
    $('.gnb>li').mouseenter(function(){      
      var a=$(this).find('a#on').text().length
      var small=$(this).find('a#on small').text().length
      var i=$(this).find('a#on').text().slice(0,(a-small));    
      $('nav h2').text(i)
    })
    // 맴버쉽 부분
    $('.mamber .right .postic ul li').click(function(){
      $('.mamber .right .postic ul li').removeClass('on')
      $(this).addClass('on')      
      $('.mamber .right .bg-area div').removeClass('on')      
      if($(this).is('.r')){
        $('.mamber .right .bg-area .red').addClass('on')
      }if($(this).is('.g')){
        $('.mamber .right .bg-area .gold').addClass('on')
      }else{
        $('.mamber .right .bg-area .sliver').addClass('on')
      }  
    })
    // #manage 띄우기
    $('.find .left .box:nth-child(2) span').click(function(){
      $('#manage').show()
      $('#manage+.black').show()
    })
    $('#manage button.close').click(function(){
      $('#manage').hide()
      $('#manage+.black').hide()
      $('#manage input').val('');
    })
    $('#manage+.black').click(function(){
      $(this).hide()
      $('#manage').hide()
      $('#manage input').val('');
      $('#manage .text4 td input:nth-child(2)').val('우편번호 찾기');
      $('#manage').scrollTop(0)
      // #manage 스크롤 내리고 껏을때 스크롤을 위로 올려야되는데 안됨..
    })
    // 약관동의 빈항목이 계속 나온다
    $('#manage .sub').click(function(e){
    if(!$('#manage #che').is(':checked')){
      alert('개인정보 수집에 동의해주십시오.')
    }else if($('#manage #name').val() == ''){
      alert('이름을 입력해주세요')
      $('#manage #name').focus()
    }else if($('#manage #phone').val() == ''){
      alert('휴대전화번호를 입력해주세요')
      $('#manage #phone').focus()
    }else if($('#manage #address').val() == ''){
      alert('이메일을 입력해주세요')
      $('#manage #address').focus()
    }     
  });
  $("#mailselect").on("change", function(){        
    var sel=$('#mailselect option:selected').text();        
   $('#manage #add').val(sel)    
  });
  //지도 열기
  $('.find #find').click(function(){
    $('.map_wrap').css('width','1240px').css('height','540px').css('opacity','1').show(function(){      
      
    })
    $('.find div.black').show()
  })
  $('.find .map_wrap .material-icons').click(function(){
    $('.map_wrap').css('width','0%').css('height','0px').css('opacity','0')
    $('.find div.black').hide()
  })
  $('.find div.black').click(function(){
    $('.map_wrap').css('width','0%').css('height','0px').css('opacity','0')
    $('.find div.black').hide()
  })
    // 할리스 라이브
  $('.hollys-live>div>div').click(function(){
    var src=$(this).find('img').attr('src')
    var alt=$(this).find('img').attr('alt')
    var p=$(this).find('p').text()
    var strong=$(this).find('strong').text()
    $('.hollys-live .popup').show()
    $('.hollys-live .black').show()
    $('.popup .poto img').attr('src',src)
    $('.popup .poto img').attr('alt',alt)
    $('.popup .text p').text(p)
    $('.popup .text strong').text(strong)
  })
  $('.hollys-live .black').click(function(){
    $('.popup').hide()
    $(this).hide()
  })

  $('.hollys-live .popup button').click(function(){
    $('.hollys-live .popup').hide()
    $('.hollys-live .black').hide()
  })  
 


})