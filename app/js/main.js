$(document).ready(function(){

/* height section */
	var height = $(window).height();
	$('.scrollable').height(height);
	$(window).on('load resize', function(){
		var w = $(window).width();
		if(w <= 762) {
			$('.scrollable').css('height','auto');
			$('.popup').addClass('mob');
		}
		else {
			$('.popup').removeClass('mob');	
			$('.scrollable').height(height);
		}
	});
/* end height section */

/* width section */
  $('section .circle').delay(2000).fadeIn(500);
	var width = $(window).width();
	if (width<=768) {
    $('section .circle').css('display','none');
		$('section .circle-2').css('display','none');
		$('section .circle-3').css('display','none');
	}
/* width section */

/* scroll-down button */
	$(".scroll-down").click(function(event) {
			event.preventDefault();
			var next = $(this).parents('section').next().offset();
			var top = next.top;
			$('body,html').animate({scrollTop: top}, 1500);
	});
/* end scroll-down button */

/* scroll window detect */
	$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
  $('.scrollable').each(function() {
    if ($(this).isInViewport()) {
      $(this).addClass('onView');
      $(this).addClass('active');
      $('.scrollable p').delay(1500).fadeIn(500);
      $('section .circle-2').delay(200).fadeIn(500);
      $('section .circle-3').delay(2000).fadeIn(500);
    } else {
      //$(this).removeClass('onView');
      
  	}
	});
});
/* end scroll window detect */

/* window load */
$(window).on('load', function(){
	$('header, main>section:first-child').addClass('onView');

});
/* end window load */

/* back to top button */
	if ($('.back-to-top').length) {
    var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
              $('.back-to-top').addClass('show');
          } else {
              $('.back-to-top').removeClass('show');
          }
        };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
      	scrollTop: 0
      }, 700);
    });
	};
/* end back to top button */

/* popup */
	$('.order').click(function(){
		$(this).parents('.wrapper').children('.popupBox').fadeIn(500);
		return false;
	});
	$('.popup .close').click(function(){
		$('.popupBox').fadeOut(500);
		return false;
	});
/* end popup */

/* mobile menu */
	$('.sandwich-menu').click(function(){
		$(this).parents('.wrapper').children('.mobile').fadeIn(500);
		return false;
	});
	$('.mobile .close').click(function(){
		$(this).parents('.mobile').fadeOut(300);
		return false;
	});
/* end mobile menu */

/* social block */
$('.link-board a').click(function(){
	var tab_id = $(this).parent('li').attr('data-tab');

	$('.link-board li').removeClass('active');
	$('.link-visual li').removeClass('active');

	$(this).parent('li').addClass('active');
	$("#"+tab_id).addClass('active');

	return false;
});
/* end social block */

/* gif block */
	(new Image()).src = "../img/Iphone-animation.gif"; 
  $(".phoneHolder").click(function () {
  	$(this).addClass('animated');
  	$(this).children("img").attr("src", "img/Iphone-animation.gif");
    /*if ($(this).children("img").attr("data-state") == "static") {
      $(this).children("img").attr("src", "img/Iphone-animation.gif");
    } else {
      $(this).children("img").attr("src", "img/iphone.png");
    }*/
  });
/* end gif block*/

/*
 scroll through slides */
	/*$(window).scroll( function(){
	  $('.section').each( function(i){
	    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	    var bottom_of_window = $(window).scrollTop() + $(window).height();
	    
	    if( bottom_of_window > bottom_of_object ){
	      $(this).animate({'opacity':'1'},500);
	    }
	  }); 
	});*/

	/*$('#fullpage').fullpage({
		css3: true,
		scrollingSpeed: 500,
		fitToSectionDelay: 500,
		fadingEffect: true
	});

	if ($('section.fp-section').hasClass('active')) {
			$(this).children('p').delay(1500).fadeIn(500);
      $(this).children('.circle-2').delay(2000).fadeIn(500);
	}*/
/* end scroll through slides */

});