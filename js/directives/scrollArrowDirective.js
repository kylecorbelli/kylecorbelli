angular.module("mainModule")
	.directive("scrollDownButton", function() {
		return {
			restrict: "EA",
			templateUrl: "views/scrollDown.html"
		};
	})
	.directive("scrollUpButton", function() {
		return {
			restrict: "EA",
			templateUrl: "views/scrollUp.html"
		};
	});