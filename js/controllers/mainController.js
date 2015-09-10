angular.module("mainModule")
	.controller("mainCtrl", function($scope, $interval, $window) {
		
		angular.element(document).ready(function() {

			// On document ready, sets the height of each content segment equal to the height of the browser window minus the height of the navbar:


			$(".contentSegment").css("min-height", $(window).height() - $("#mainNavbar").height());

			// When the browser window is resized, the content segment height is adjusted once more:
			angular.element($window).on("resize", function(event) {
				$(".contentSegment").css("min-height", $(window).height() - $("#mainNavbar").height());
			});

			// Offsets the main content by adding margin to the top equal to the height of the navbar:
			$("#mainContent").css("margin-top", $("#mainNavbar").height());

			// Creates an array of all the offset values of the content sections:
/*			
			var contentOffsets = $scope.contentSections.map(function(section) {
				var hash = "#" + section.id;
				return $(hash).offset().top;
			});

			// Returns the lowest contentId
			$scope.contentSections.forEach(function(section) {
				var hash = "#" + section.id;
				if($window.pageYOffset >= $(hash).offset().top) {
					currentContentSectionId = section.id;
				}
			});

			angular.element($window).on("scroll", function() {
				$scope.contentSections.forEach(function(section) {
					var hash = "#" + section.id;
					if($window.pageYOffset >= $(hash).offset().top - $("#mainNavbar").height()) {
						currentContentSectionId = section.id;
						console.log(currentContentSectionId);
					}
				});
			});
*/


		});

		var currentContentSectionId = "home";

		// Used to set the "active" class to the current contenct selection nav button
		$scope.activeSection = function(id) {
			if(id === currentContentSectionId) {
				return "active";
			} else {
				return;
			}
		};

		$scope.isLastSegment = function(index) {
			if(index === $scope.contentSections.length - 1) {
				return true;
			} else {
				return false;
			}
		}

		var hamburgerExpanded = false;

		$scope.expandOrContractHamburger = function() {
			if(hamburgerExpanded === true) {
				var hash = "#" + currentContentSectionId;
				var moveScroll = $(hash).offset().top - $("#mainNavbar").height() + $("#expandedNav").height();
		        $('html, body').animate({
		            scrollTop: moveScroll
		        }, 250);
				hamburgerExpanded = false;
				// Scroll to the right spot
			} else {
				hamburgerExpanded = true;
			}
		}

		$scope.scrollToSection = function(id) {
			currentContentSectionId = id;
			var hash = "#" + id;
			if(hash === "#about") {
				$scope.currentAboutMe = $scope.aboutMe[0];
				$scope.startInterval();
			}
			var moveScroll = $(hash).offset().top - $("#mainNavbar").height();
	        $('html, body').animate({
	            scrollTop: moveScroll
	        }, 750);
		};

		// When the scrolldown semi-circles are clicked, the pages is navigated to the next section
		$scope.scrollToNext = function(index) {
			// When scrolling to the "about" section, restart the slideshow
			if($scope.contentSections[index + 1].id === "about") {
				$scope.currentAboutMe = $scope.aboutMe[0];
				$scope.startInterval();
			}
			currentContentSectionId = $scope.contentSections[index + 1].id;
			var hash = "#" + $scope.contentSections[index + 1].id;
			var moveScroll = $(hash).offset().top - $("#mainNavbar").height();
		        $('html, body').animate({
		            scrollTop: moveScroll
	        }, 750);
		};

		// When the scrollup semi-circles are clicked, the pages is navigated to the previous section
		$scope.scrollToPrev = function(index) {
			// When scrolling to the "about" section, restart the slideshow
			if($scope.contentSections[index - 1].id === "about") {
				$scope.currentAboutMe = $scope.aboutMe[0];
				$scope.startInterval();
			}
			currentContentSectionId = $scope.contentSections[index - 1].id;
			var hash = "#" + $scope.contentSections[index - 1].id;
			var moveScroll = $(hash).offset().top - $("#mainNavbar").height();
	        $('html, body').animate({
	            scrollTop: moveScroll
        }, 750);
		};



		// These are the navbar titles and corresponding content sections:
		$scope.contentSections = [
			{
				title: "Home",
				id: "home",
				view: "views/home.html"
			},
			{
				title: "About",
				id: "about",
				view: "views/about.html"
			},
			{
				title: "Portfolio",
				id: "portfolio",
				view: "views/portfolio.html"
			},
			{
				title: "Contact",
				id: "contact",
				view: "views/contact.html"
			}
		];


		$scope.socialIcons = [
			{
				id: "LinkedIn",
				faIcon: "fa-linkedin",
				href: "https://www.linkedin.com/in/kylecorbelli"
			},
			{
				id: "Twitter",
				faIcon: "fa-twitter",
				href: "https://twitter.com/pacific_living"
			},
			{
				id: "GitHub",
				faIcon: "fa-github",
				href: "https://github.com/pacificLiving/"
			}
		];

		$scope.projects = [
			{
				id: "wordsToLiveBy",
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				id: "landingPage",
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/mortgage-Cropped.jpg"
			},
			{
				id: "comingSoon1",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			},
			{
				id: "comingSoon2",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			},
			{
				id: "comingSoon3",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			},
			{
				id: "comingSoon4",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			},
			{
				id: "comingSoon5",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			},
			{
				id: "comingSoon6",
				title: "Coming Soon!",
				url: "",
				image: "../images/blueprint-Cropped.jpg"
			}
		];
		
		$scope.aboutMe = [
			"Welcome. My name is Kyle and I'm a California software developer.",
			"I'm a UC Berkeley mathematics graduate with applications in computational statistics.",
			"I custom build applications with JavaScript (including AngularJS, jQuery, jQuery Mobile, jQuery UI), PHP, MySQL and, of course, HTML and CSS (including Bootstrap and MDL).",
			"I'm currently working for a local non-profit, building an AngularJS-based, Google Maps API-enhanced web app to help users locate animal-cruelty-free restaurants."
		];

		// Cycles through 'about me' content:
		$scope.currentAboutMe = $scope.aboutMe[0];
		$scope.prevAboutMe = $scope.aboutMe[$scope.aboutMe.length - 1];
		$scope.nextAboutMe = $scope.aboutMe[1];

		$scope.changeToNextAboutMe = function() {
			$("#currentAbout").hide()
			var currentAboutMeIndex = $scope.aboutMe.indexOf($scope.currentAboutMe);
			$scope.currentAboutMe = $scope.aboutMe[(currentAboutMeIndex + 1) % $scope.aboutMe.length];
			$("#currentAbout").fadeIn(500);
		};

		$scope.changeToPrevAboutMe = function() {
			$("#currentAbout").hide()
			var currentAboutMeIndex = $scope.aboutMe.indexOf($scope.currentAboutMe);
			var newAboutMeIndex = currentAboutMeIndex - 1;
			if(newAboutMeIndex === -1) {
				newAboutMeIndex = $scope.aboutMe.length - 1;
			}
			$scope.currentAboutMe = $scope.aboutMe[(newAboutMeIndex) % $scope.aboutMe.length];
			$("#currentAbout").fadeIn(500);
		};

		$scope.pauseThenChangeToNextAboutMe = function() {
			$scope.stopInterval();
			$scope.changeToNextAboutMe();
		};

		$scope.pauseThenChangeToPrevAboutMe = function() {
			$scope.stopInterval();
			$scope.changeToPrevAboutMe();
		};

		var intervalPromise;

		$scope.startInterval = function() {
			$scope.stopInterval();
			intervalPromise = $interval($scope.changeToNextAboutMe, 4500);
		};

		$scope.stopInterval = function() {
			$interval.cancel(intervalPromise);
		}

		$scope.startInterval();

		$scope.todaysDate = new Date();

	});