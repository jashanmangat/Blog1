$(document).ready(function(){

	$('.worksList li').mouseenter(function(){

		var hoveredThumb=$(this);
		hoveredThumb.css('opacity','1');
		$('.worksList li').not(hoveredThumb).css('opacity','0.4');
	});
	$('.worksList li').mouseleave(function(){

		var hoveredThumb=$(this);
		hoveredThumb.css('opacity','1');


	});


	$('.teamImg').mouseenter(function(){

		
		$(this).css('border','5px solid silver');
	});

	$('.worksList').mouseleave(function(){
		$('.worksList li').css('opacity','1');
	});


// Main Menu Animations


var speedOfScroll=666;

$('#homeLink').click(function(){

	$('html,body').animate({ scrollTop: $('.topSliderContainer').offset().top },speedOfScroll);
});
$('#galleryLink').click(function(){

	$('html,body').animate({ scrollTop: $('.worksContainer').offset().top - 84 },speedOfScroll);
});


$('#servicesLink').click(function(){

	$('html, body').animate({
		scrollTop: $(".servicesContainer").offset().top - 84 },speedOfScroll);
});



$('#teamLink').click(function(){

	$('html,body').animate({ scrollTop: $('.aboutMeContainer').offset().top-84 },speedOfScroll);
});

$('#clientsLink,#testimonialssLink').click(function(){


	$('html,body').animate({ scrollTop: $('.clientsAndTestimonialsContainer').offset().top },speedOfScroll);
});

$('#teamLink').click(function(){


	$('html,body').animate({ scrollTop: $('.aboutMeContainer').offset().top },speedOfScroll);
});

$('#aboutLink').click(function(){


	$('html,body').animate({ scrollTop: $('.aboutContainer').offset().top },speedOfScroll);
});

$('#blogLink').click(function(){


	$('html,body').animate({ scrollTop: $('.blogContainer').offset().top - 84 },speedOfScroll);
});
$('#contactLink').click(function(){


	$('html,body').animate({ scrollTop: $('.contactContainer').offset().top - 84 },speedOfScroll);
});

// Scroll to Top Function

$('.scrollToTopContainer').click(function(){


 $("html, body").animate({ scrollTop: 0 }, 1000);
});


  $(window).scroll(function(){
        if ($(window).scrollTop() > 300){
         // $('#topSocialIconsList').hide();
         // $('.topNav').css('min-height','40px');
         // $('#topLogo').css('margin-top','-41px');


        }
        else if ($(window).scrollTop() < 300) {

        	//          $('#topSocialIconsList').show();
         // $('.topNav').css('min-height','40px');
         // $('#topLogo').css('margin-top','0px');

        };

    });




});

