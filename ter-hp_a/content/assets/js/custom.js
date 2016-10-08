/**
	* Template Name: Rex
	* Version: 1.0
	* Template Scripts
	* Author: MarkUps
	* Author URI: http://www.markups.io/

	Custom JS

	1. HEADER CONTENT SLIDE
	2. FIXED MENU
	3. COUNTER
	4. TESTIMONIAL SLIDE (SLICK SLIDER)
	5. CLIENT SLIDE (SLICK SLIDER)
	6. SCROLL TOP BUTTON
	7. MENU SMOOTH SCROLLING
	8. MIXIT FILTER ( FOR PORTFOLIO )
	9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW )
	10. MOBILE MENU CLOSE
	11. PRELOADER
	12. INSTAGRAM SLIDER (SLICK SLIDER)
	13. WOW ANIMATION

**/

jQuery(function($){


	/* ----------------------------------------------------------- */
	/*  1. HEADER CONTENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.header-slide').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows:false,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'span',
		fade: true,
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  2. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 700) {
        $('.main-navbar').addClass('navbar-fixed-top');
        $('.logo').addClass('logo-compressed');
        $('.main-nav li a').addClass('less-padding');
        $('.search-area').css('height','44');
        $('.search-area input[type="text"]').css('top','35%');


	    } else {
	        $('.main-navbar').removeClass('navbar-fixed-top');
	        $('.logo').removeClass('logo-compressed');
	        $('.main-nav li a').removeClass('less-padding');
	        $('.search-area').css('height','60');
	        $('.search-area input[type="text"]').css('top','11%');
	    }
	});

	/* ----------------------------------------------------------- */
	/*  3. COUNTER
	/* ----------------------------------------------------------- */

	jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* ----------------------------------------------------------- */
	/*  4. TESTIMONIAL SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 1200,
		arrows:true,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'div',
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  5. CLIENT SLIDE (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	$('.client-table').slick({
	  dots: false,
	  infinite: true,
	  arrows:false,
	  speed: 300,
	  autoplay: true,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  6. SCROLL TOP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  jQuery(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });

	  //Click event to scroll to top

	  jQuery('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });

	/* ----------------------------------------------------------- */
	/*  7. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

		//MENU SCROLLING WITH ACTIVE ITEM SELECTED

		// Cache selectors
		var lastId,
		topMenu = $(".main-nav"),
		topMenuHeight = topMenu.outerHeight()+13,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
		  jQuery('html, body').stop().animate({
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		// Bind to scroll
		jQuery(window).scroll(function(){
		   // Get container scroll position
		   var fromTop = $(this).scrollTop()+topMenuHeight;

		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";

		   if (lastId !== id) {
		       lastId = id;
		       // Set/remove active class
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=#"+id+"]").parent().addClass("active");
		   }
		})

	/* ----------------------------------------------------------- */
	/*  8. MIXIT FILTER ( FOR PORTFOLIO )
	/* ----------------------------------------------------------- */

		jQuery(function(){
		    $('#mixit-container').mixItUp();
		});

	/* ----------------------------------------------------------- */
	/*  9. FANCYBOX ( FOR PORTFOLIO POPUP VIEW )
	/* ----------------------------------------------------------- */

		jQuery(document).ready(function() {
			$(".fancybox").fancybox();
		});

	/* ----------------------------------------------------------- */
	/*  10. MOBILE MENU CLOSE
	/* ----------------------------------------------------------- */

	jQuery('.navbar-nav').on('click', 'li a', function() {
	  $('.in').collapse('hide');
	});

	/* ----------------------------------------------------------- */
	/*  11. PRELOADER
	/* ----------------------------------------------------------- */

	jQuery(window).load(function() { // makes sure the whole site is loaded
      jQuery('.loader').fadeOut(); // will first fade out the loading animation
      jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      jQuery('body').delay(100).css({'overflow':'visible'});
    })

    /* ----------------------------------------------------------- */
	/*  12. INSTAGRAM SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.instagram-feed').slick({
		dots: true,
		infinite: true,
		speed: 500,
		arrows:true,
		autoplay: true,
      	slidesToShow: 1,
		slide: 'div',
		cssEase: 'linear'
	});

	/* ----------------------------------------------------------- */
	/*  13. WOW ANIMATION
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

});
$(function(){

//グローバル変数
var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
var modalClassSyncer = "modal-syncer" ;		//モーダルを開くリンクに付けるクラス名

//モーダルのリンクを取得する
var modals = document.getElementsByClassName( modalClassSyncer ) ;

//モーダルウィンドウを出現させるクリックイベント
for(var i=0,l=modals.length; l>i; i++){

	//全てのリンクにタッチイベントを設定する
	modals[i].onclick = function(){

		//ボタンからフォーカスを外す
		this.blur() ;

		//ターゲットとなるコンテンツを確認
		var target = this.getAttribute( "data-target" ) ;

		//ターゲットが存在しなければ終了
		if( typeof( target )=="undefined" || !target || target==null ){
			return false ;
		}

		//コンテンツとなる要素を取得
		nowModalSyncer = document.getElementById( target ) ;

		//ターゲットが存在しなければ終了
		if( nowModalSyncer == null ){
			return false ;
		}

		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない
		//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する

		//オーバーレイを出現させる
		$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		$( "#modal-overlay" ).fadeIn( "fast" ) ;

		//コンテンツをセンタリングする
		centeringModalSyncer() ;

		//コンテンツをフェードインする
		$( nowModalSyncer ).fadeIn( "slow" ) ;

		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay,#modal-close" ).unbind().click( function() {

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( "#" + target + ",#modal-overlay" ).fadeOut( "fast" , function() {

				//[#modal-overlay]を削除する
				$( '#modal-overlay' ).remove() ;

			} ) ;

			//現在のコンテンツ情報を削除
			nowModalSyncer = null ;

		} ) ;

	}

}

	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( centeringModalSyncer ) ;

	//センタリングを実行する関数
	function centeringModalSyncer() {

		//モーダルウィンドウが開いてなければ終了
		if( nowModalSyncer == null ) return false ;

		//画面(ウィンドウ)の幅、高さを取得
		var w = $( window ).width() ;
		var h = $( window ).height() ;

		//コンテンツ(#modal-content)の幅、高さを取得
		// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
//		var cw = $( nowModalSyncer ).outerWidth( {margin:true} ) ;
//		var ch = $( nowModalSyncer ).outerHeight( {margin:true} ) ;
		var cw = $( nowModalSyncer ).outerWidth() ;
		var ch = $( nowModalSyncer ).outerHeight() ;

		//センタリングを実行する
		$( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

	}

} ) ;
