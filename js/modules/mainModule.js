angular.module("mainModule", []);

// jQuery... Get this stuff integrated into AngularJS
$(document).ready(function(){

	// On document ready, sets the height of each content segment equal to the height of the browser window minus the height of the navbar:
	$(".contentSegment").css("height", $(window).height() + 2 * $("#mainNavbar").height());

	// When the browser window is resized, the content segment height is adjusted once more:
	$(window).on("resize", function(event) {
		$(".contentSegment").css("height", $(window).height() + 2 * $("#mainNavbar").height());
	});

	// Offsets the main content by adding margin to the top equal to the height of the navbar:
	//$("#mainContent").css("margin-top", $("#mainNavbar").height());

	// Provides for the click-to-scroll functionality:
	$(".navLinks").on('click', function(event) {
    	event.preventDefault();
    	var hash = this.hash;
    	var moveScroll = $(hash).offset().top - $("#mainNavbar").height();
        $('html, body').animate({
            scrollTop: moveScroll
        }, 750);
	});

		// The following was an attempt at scroll and snap:
/*
	var contentSegmentPositions = [
		0,
		$("#home").offset().top,
		$("#about").offset().top,
		$("#portfolio").offset().top,
		$("#contact").offset().top
	];

	var closestPosition = 0;

	$(document).on("scrollstop", function() {
		contentSegmentPositions.forEach(function(item) {
			if(Math.abs($(window).scrollTop() - item) < Math.abs($(window).scrollTop() - closestPosition)) {
				closestPosition = item;
			}
		});
		$(window).scrollTop(closestPosition - $("#mainNavbar").height()); // need to have this happen on scroll stop
	});

	contentSegmentPositions.forEach(function(item) {
		console.log(item);
	});
*/

});