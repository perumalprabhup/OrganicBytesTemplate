
function main() {

(function () {
   'use strict';
    // ---------------------------------------------- //
    // nav Bar to close Automatically Based upon the selection 
    // ---------------------------------------------- //
	$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
	});
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
	
	//install Pagination	   
	$(window).bind("load resize slid.bs.carousel", function() {
		var imageHeight = $(".active .holder").height();
		$(".controllers").height( imageHeight );
		console.log("Slid");
	});

	
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