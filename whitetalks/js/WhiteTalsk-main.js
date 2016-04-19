jQuery(function($) {
	$("#includedContent").load("modal.html");

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function() {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/1.5);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/1.5);
		});
	});

	//
	//	//portfolio
	//	$(window).load(function(){
	//		$portfolio_selectors = $('.portfolio-filter >li>a');
	//		if($portfolio_selectors!='undefined'){
	//			$portfolio = $('.portfolio-items');
	//			$portfolio.isotope({
	//				itemSelector : 'li',
	//				layoutMode : 'fitRows'
	//			});
	//			$portfolio_selectors.on('click', function(){
	//				$portfolio_selectors.removeClass('active');
	//				$(this).addClass('active');
	//				var selector = $(this).attr('data-filter');
	//				$portfolio.isotope({ filter: selector });
	//				return false;
	//			});
	//		}
	//	});

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});


});

//dropdown hover
if(window.location.hash) {
	  var id = $(window.location.hash).offset().top-80;
	  $(window).scrollTop(id);
	}

$(document).ready(function() {
	function minHeight() {
		$('.content-collaborate, .content-vote, .content-about').css('min-height',$(window).height()-($('#nav').height()+$('#footer').height())-84+'px')
	}
	minHeight();
	$(window).resize(function() {
		minHeight();
	});
});
