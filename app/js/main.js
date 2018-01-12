$(document).ready(function(){

/* mobile menu */
	$('.sandwich-menu').on('click', function(event){
		$(this).parents('.wrapper').children('.mobile').addClass('open');
		event.preventDefault();
	});
	$('.mobile .close').on('click', function(){
		$(this).parents('.mobile').removeClass('open');

		return false;
	});
/* end mobile menu */

/* height section */
	var height = $(window).height();
	$('main section').height(height);
	$(window).on('load resize', function(){
		var w = $(window).width();
		if(w <= 762) {
			$('main section').css('height','auto');
			$('.popup').addClass('mob');
		}
		else {
			$('.popup').removeClass('mob');	
			$('main section').height(height);
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
	$('.scroll-down').click(function(event){
		event.preventDefault();
		$(this).parents('section').removeClass('active').next().addClass('active');
	});
/* end scroll-down button */

/* window load */
$(window).on('load', function(){
	$('header, main>section:first-child').addClass('onView');

});
/* end window load */

/* back to top button */
	$('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $(this).parents('section').removeClass('active');
      $('.main-view').addClass('active');
    });
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

/* social block */
$('.link-board a').click(function(){
	var tab_id = $(this).parent('li').attr('data-tab');

	$('.link-board li').removeClass('active');
	$('.link-visual li').removeClass('active');

	$(this).parent('li').addClass('active').siblings('li').children('.line').css('width','0px');
	$("#"+tab_id).addClass('active');

	return false;
});
$('.link-board li').hover(
	function(event){
		$(this).siblings('li.active').children('.line').css('width','60px');
	}, function(event){
		$(this).siblings('li.active').children('.line').css('width','120px');
		if ($(this).hasClass('active')) {
			$(this).children('.line').css('width','120px');
		}
});
/* end social block */

/* gif block */
	(new Image()).src = "../img/Iphone-animation.gif"; 
  $(".phoneHolder").click(function () {
  	$(this).addClass('animated');
  	$(".phoneHolder > img").attr("src", "img/Iphone-animation.gif");

  });
/* end gif block*/

/* scroll through slides */
	$('#fullpage').fullpage({
		scrollOverflow: true,
		loopTop: false,
		loopBottom: false,
		afterLoad: function(link,index) {
			console.log(link+' | '+index);
			if (index == 1) {
				$('.circle').addClass('shown');
			}
			if (index == 2) {
				
				$('#page2 .bottom-line').animate({'width':'150px'},300);
				
			}
			if (index == 3) {
				$('#page3 .bottom-line').animate({'width':'150px'},200);
				$('.circle-3').addClass('shown');
			}
			if (index == 4) {
				$('.circle-2').addClass('shown');
				setTimeout(function(){
			       $('.phonebox>div').addClass('shadow');
				}, 1500);
				$('#page4 .bottom-line').animate({'width':'150px'},100);
			}
			if (index == 5) {
			}
			if (index == 6) {
			}
			if (index == 7) {
			}
		}
	});
/* end scroll through slides */

});