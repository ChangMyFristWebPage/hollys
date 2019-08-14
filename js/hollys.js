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
  
  // 지도
  var markers = [];

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
          center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
      };  
  
  // 지도를 생성합니다    
  var map = new kakao.maps.Map(mapContainer, mapOption); 
  
  // 장소 검색 객체를 생성합니다
  var ps = new kakao.maps.services.Places();  
  
  // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({zIndex:1});
  
  // 키워드로 장소를 검색합니다
  searchPlaces();
  
  // 키워드 검색을 요청하는 함수입니다
  function searchPlaces() {
  
      var keyword = document.getElementById('keyword').value;
  
      if (!keyword.replace(/^\s+|\s+$/g, '')) {
          alert('키워드를 입력해주세요!');
          return false;
      }
  
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      ps.keywordSearch( keyword, placesSearchCB); 
  }
  
  // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
  function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
  
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출합니다
          displayPlaces(data);
  
          // 페이지 번호를 표출합니다
          displayPagination(pagination);
  
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
  
          alert('검색 결과가 존재하지 않습니다.');
          return;
  
      } else if (status === kakao.maps.services.Status.ERROR) {
  
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
  
      }
  }
  
  // 검색 결과 목록과 마커를 표출하는 함수입니다
  function displayPlaces(places) {
  
      var listEl = document.getElementById('placesList'), 
      menuEl = document.getElementById('menu_wrap'),
      fragment = document.createDocumentFragment(), 
      bounds = new kakao.maps.LatLngBounds(), 
      listStr = '';
      
      // 검색 결과 목록에 추가된 항목들을 제거합니다
      removeAllChildNods(listEl);
  
      // 지도에 표시되고 있는 마커를 제거합니다
      removeMarker();
      
      for ( var i=0; i<places.length; i++ ) {
  
          // 마커를 생성하고 지도에 표시합니다
          var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
              marker = addMarker(placePosition, i), 
              itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
  
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          bounds.extend(placePosition);
  
          // 마커와 검색결과 항목에 mouseover 했을때
          // 해당 장소에 인포윈도우에 장소명을 표시합니다
          // mouseout 했을 때는 인포윈도우를 닫습니다
          (function(marker, title) {
              kakao.maps.event.addListener(marker, 'mouseover', function() {
                  displayInfowindow(marker, title);
              });
  
              kakao.maps.event.addListener(marker, 'mouseout', function() {
                  infowindow.close();
              });
  
              itemEl.onmouseover =  function () {
                  displayInfowindow(marker, title);
              };
  
              itemEl.onmouseout =  function () {
                  infowindow.close();
              };
          })(marker, places[i].place_name);
  
          fragment.appendChild(itemEl);
      }
  
      // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
      listEl.appendChild(fragment);
      menuEl.scrollTop = 0;
  
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds);
  }
  
  // 검색결과 항목을 Element로 반환하는 함수입니다
  function getListItem(index, places) {
  
      var el = document.createElement('li'),
      itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                  '<div class="info">' +
                  '   <h5>' + places.place_name + '</h5>';
  
      if (places.road_address_name) {
          itemStr += '    <span>' + places.road_address_name + '</span>' +
                      '   <span class="jibun gray">' +  places.address_name  + '</span>';
      } else {
          itemStr += '    <span>' +  places.address_name  + '</span>'; 
      }
                   
        itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                  '</div>';           
  
      el.innerHTML = itemStr;
      el.className = 'item';
  
      return el;
  }
  
  // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
  function addMarker(position, idx, title) {
      var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
          imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
          imgOptions =  {
              spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
              spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
              offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
          },
          markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
              marker = new kakao.maps.Marker({
              position: position, // 마커의 위치
              image: markerImage 
          });
  
      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker);  // 배열에 생성된 마커를 추가합니다
  
      return marker;
  }
  
  // 지도 위에 표시되고 있는 마커를 모두 제거합니다
  function removeMarker() {
      for ( var i = 0; i < markers.length; i++ ) {
          markers[i].setMap(null);
      }   
      markers = [];
  }
  
  // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
  function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
          fragment = document.createDocumentFragment(),
          i; 
  
      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
          paginationEl.removeChild (paginationEl.lastChild);
      }
  
      for (i=1; i<=pagination.last; i++) {
          var el = document.createElement('a');
          el.href = "#";
          el.innerHTML = i;
  
          if (i===pagination.current) {
              el.className = 'on';
          } else {
              el.onclick = (function(i) {
                  return function() {
                      pagination.gotoPage(i);
                  }
              })(i);
          }
  
          fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
  }
  
  // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
  // 인포윈도우에 장소명을 표시합니다
  function displayInfowindow(marker, title) {
      var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
  
      infowindow.setContent(content);
      infowindow.open(map, marker);
  }
  
   // 검색결과 목록의 자식 Element를 제거하는 함수입니다
  function removeAllChildNods(el) {   
      while (el.hasChildNodes()) {
          el.removeChild (el.lastChild);
      }
  }


        //링크안타지기
        $('header .top-sub li a').click(function(e){
          e.preventDefault();
        })


})