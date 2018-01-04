
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
   
     // ---------------------------------------------- //
     //show more and less Jquery Plugin
    // ---------------------------------------------- //
  	$(document).ready(function() {
	
		$(".menu-item-description").shorten({
			"showChars" : 60,
			"moreText"	: "See More",
			"lessText"	: "Less",
		});

		$(".whyMunch").shorten({
			"showChars" :350,
			"moreText"	: "See More",
			"lessText"	: "Less",
		});
	
	
	});
	
	   //new Modifications due to first page Carousel
	   
//stall Pagination	   
	    $(window).bind("load resize slid.bs.carousel", function() {
  var imageHeight = $(".active .holder").height();
  $(".controllers").height( imageHeight );
  console.log("Slid");
});


    // ---------------------------------------------- //
    // Navbar Shrinking Behavior
    // ---------------------------------------------- //
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) {
            $('nav.navbar').addClass('shrink');
        } else {
            $('nav.navbar').removeClass('shrink');
        }
    });

    // ---------------------------------------------- //
    // Menu Section tabs
    // ---------------------------------------------- //
    $('.menu nav a').click(function (e) {
        e.preventDefault();
        $(this).tab('fadeIn');
    });

    // ---------------------------------------------- //
    // OWl Carousel
    // ---------------------------------------------- //
    $('.owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        navText: [
            "<i class='icon-arrow-left'></i>",
            "<i class='icon-arrow-right'></i>"
        ],
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            757: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // ---------------------------------------------- //
    // Label color changing on focus
    // ---------------------------------------------- //
    $('input, textarea').focus(function () {
        $(this).parent('label').addClass('active');
    });
    $('input, textarea').blur(function () {
        $(this).parent('label').removeClass('active');
    });

    // ---------------------------------------------- //
    // Date picker initialization
    // ---------------------------------------------- //
    $('#date').datepicker({
        todayButton: new Date()
    });

    // ---------------------------------------------- //
    // Time picker initialization
    // ---------------------------------------------- //
    $('.timepicker').timepicki();

    // ---------------------------------------------- //
    // Time picker initialization
    // ---------------------------------------------- //
    $('body').scrollspy({
        target: '.navbar',
        offset: 80
    });

    // ---------------------------------------------- //
    // Preventing URL update on navigation link click
    // ---------------------------------------------- //
    $('.navbar-nav a, #scroll-down').bind('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    // ---------------------------------------------- //
    // Scroll to top button
    // ---------------------------------------------- //
    $('#scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1500) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

   
 
    // ---------------------------------------------- //
    // Hero Carousel initialization
    // ---------------------------------------------- //
    var Page = (function () {
        var $navArrows = $('#nav-arrows'),
            $nav       = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange : function (slide, pos) {
                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');
                }
            }),
            init = function () {
                initEvents();
            },
            initEvents = function () {
                // add navigation events
                $navArrows.children(':last').on('click', function () {
                    slitslider.next();
                    return false;
                });
                $navArrows.children(':first').on('click', function () {
                    slitslider.previous();
                    return false;
                });
                $nav.each(function (i) {
                    $(this).on('click', function (event) {
                        var $dot = $(this);
                        if (!slitslider.isActive()) {
                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');
                        }
                        slitslider.jump(i + 1);
                        return false;
                    });
                });
            };
        return { init : init };
    })();
    Page.init();


	
	    // ---------------------------------------------- //
    // Reservation Modal Opening & Closing
    // ---------------------------------------------- //
    $('#open-reservation').click(function (e) {
        e.preventDefault();
        $('.reservation-overlay').fadeIn();
        $('body').css({'overflow': 'hidden'});

        setTimeout(function () {
            $('#reservation-modal').addClass('is-visible');
        }, 100);
    });

    $('#close').click(function () {
        $('.reservation-overlay').fadeOut();
        setTimeout(function () {
            $('body').css('overflow', 'auto');
        }, 400);
        $('#reservation-modal').removeClass('is-visible');
    });

	// set focus when modal is opened
$('#modal-content').on('shown.bs.modal', function () {
    $("#txtname").focus();
});

// show the modal onload
$('#modal-content').modal({
    show: true
});
//veggies model
 $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

}());


}
main();