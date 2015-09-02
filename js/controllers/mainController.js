angular.module("mainModule")
	.controller("mainCtrl", function($scope, $interval) {
		
		var currentContentSectionId = "home";

		var hamburgerExpanded = false;

		$scope.expandOrContractHamburger = function() {
			if(hamburgerExpanded === true) {
				var hash = "#" + currentContentSectionId;
				var moveScroll = $(hash).offset().top - $("#mainNavbar").height() + $("#expandedNav").height();
		        $('html, body').animate({
		            scrollTop: moveScroll
		        }, 500);
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
			{title: "Contact", id: "contact", view: "views/contact.html"}
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
				image: "../images/wordsToLiveBy.png"
			},
			{
				id: "trafficDash",
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				id: "weather",
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				id: "twitch",
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				id: "poll",
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/wordsToLiveBy.png"
			}
		];
		
		$scope.aboutMe = [
			"Welcome. My name is Kyle and I'm a California software developer.",
			"I'm a UC Berkeley mathematics graduate with applications in computational statistics.",
			"I build with all things JavaScript: AngularJS, jQuery, Node.js and Express.js.",
			"I'm currently working for a local non-profit, building an AngularJS-based, Google Maps API-enhanced web app to help users locate animal-cruelty-free restaurants."
		];

		// Cycles through 'about me' content:
		$scope.currentAboutMe = $scope.aboutMe[0];
		$scope.prevAboutMe = $scope.aboutMe[$scope.aboutMe.length - 1];
		$scope.nextAboutMe = $scope.aboutMe[1];

		$scope.changeToNextAboutMe = function() {
			$("#currentAbout").hide()
			var currentAboutMeIndex = $scope.aboutMe.indexOf($scope.currentAboutMe);
			$scope.prevAboutMe = $scope.currentAboutMe;
			$scope.currentAboutMe = $scope.aboutMe[(currentAboutMeIndex + 1) % $scope.aboutMe.length];
			$scope.nextAboutMe = $scope.aboutMe[(currentAboutMeIndex + 2) % $scope.aboutMe.length];
			$("#currentAbout").fadeIn(500);
		};

		$interval($scope.changeToNextAboutMe, 7000);

	});