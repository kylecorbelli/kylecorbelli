angular.module("mainModule")
	.controller("mainCtrl", function($scope) {
		
		// When the scrolldown semi-circles are clicked, the pages is navigated to the next section
		$scope.scrollToNext = function(index) {
			var hash = "#" + $scope.contentSections[index + 1].id;
			var moveScroll = $(hash).offset().top - $("#mainNavbar").height();
		        $('html, body').animate({
		            scrollTop: moveScroll
	        }, 750);
		};

		// When the scrollup semi-circles are clicked, the pages is navigated to the previous section
		$scope.scrollToPrev = function(index) {
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
		

	})