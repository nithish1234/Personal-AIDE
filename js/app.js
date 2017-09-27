var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/signup", {
        templateUrl : "signup.html",
        controller:"myCtrl"
    })
    .when("/corePage", {
        templateUrl : "corePage.html",
        controller:"coreCtrl"

    })
	.when("/login", {
		templateUrl:"login.html",
	     controller:"loginCtrl"
		 
	})
	.when("/SignOut", {
		templateUrl: "FirstPage.html"
		
	})
	.when("/", {
templateUrl:"FirstPage.html"
		 	})
      .otherwise({
		 //redirectTo:'ErrorPage.html'
		 //templateUrl:"ErrorPage.html",
	template:"<style type='text/css'>.appBg {background-image: url('images/page-not-found-error-404_23-2147508324.jpg');background-repeat:no-repeat;background-size: cover}</style><body class='appBg'><h1> 404 Not Found</h1></body>"
		 
 //       redirectTo:"file:///E:/eclipse_program/frontend/personal_aide/ErrorPage.html"
		});	

});