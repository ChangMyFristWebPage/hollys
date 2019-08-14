$(function(){
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
     $('header .top-sub li a').click(function(e){
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

  $('.pwfind form .certified').click(function(){      
    alert('인증번호를 발송했습니다.')
    $(this).parents('table').find('.read').removeAttr('readonly').css('background','white')
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
    $('.map_wrap').css('width','1240px').css('height','540px').css('opacity','1')
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
    // 우편번호
      //본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
      function sample4_execDaumPostcode() {
      new daum.Postcode({
        oncomplete: function(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          var roadAddr = data.roadAddress; // 도로명 주소 변수
          var extraRoadAddr = ''; // 참고 항목 변수

          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
              extraRoadAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if(data.buildingName !== '' && data.apartment === 'Y'){
              extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){
              extraRoadAddr = ' (' + extraRoadAddr + ')';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          document.getElementById('sample4_postcode').value = data.zonecode;
          document.getElementById("sample4_roadAddress").value = roadAddr;
          document.getElementById("sample4_jibunAddress").value = data.jibunAddress;
          
          // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
          if(roadAddr !== ''){
              document.getElementById("sample4_extraAddress").value = extraRoadAddr;
          } else {
              document.getElementById("sample4_extraAddress").value = '';
          }

          var guideTextBox = document.getElementById("guide");
          // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
          if(data.autoRoadAddress) {
              var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
              guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
              guideTextBox.style.display = 'block';

          } else if(data.autoJibunAddress) {
              var expJibunAddr = data.autoJibunAddress;
              guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
              guideTextBox.style.display = 'block';
          } else {
              guideTextBox.innerHTML = '';
              guideTextBox.style.display = 'none';
          }
        }
      }).open();
    }

    var infowindow = new kakao.maps.InfoWindow({zIndex:1});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.573378, 126.974237), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('할리스', placesSearchCB); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
})