angular.module("mainModule")
	.controller("mainCtrl", function($scope) {
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
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				title: "Words to Live By",
				url: "http://codepen.io/pacificLiving/full/ZGPeZg/",
				image: "../images/wordsToLiveBy.png"
			},
			{
				title: "Landing Page",
				url: "http://landingpage.comyr.com/",
				image: "../images/wordsToLiveBy.png"
			}
		];
		

	})