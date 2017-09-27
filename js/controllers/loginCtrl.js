   app.controller('loginCtrl', function($scope,$http,$timeout,$window,$location){
           $scope.showErrorMessage=false;
		   // $scope.showRegistrationUnSuccessfulMessage=false;
		   // $scope.redirectionMessage=false;
                    $scope.login = function() {
                    var url = "http://localhost:8080";
             
              
                    $http.post(url + '/login', {
                    
                    "userName":$scope.login.userName,
                    "password":$scope.login.password
                 
                  
                    })  .then(function(response) {
                  
					             
                              $timeout(function() {
                                
                     $location.path('/corePage');
                     }, 2000);
					                    
					           // $scope.showRegistrationSuccessfulMessage=true;
							   // $timeout(function() {
          //       $scope.showRegistrationSuccessfulMessage = false;
				
          //   }, 3000);
			
			// $timeout(function() {
			// 	   $scope.redirectionMessage=true;
             
   //          }, 3500);
			
			// $timeout(function() {
				
   //            $location.path('/corePage');
   //          }, 5000);
			

                },
                     function(response){
                      $scope.showErrorMessage=true;

                      $timeout(function(){
						$scope.showErrorMessage=false;
          },2000);
                      $scope.login={};
                    });
                  
                    }
                    $scope.SignUpRoute=function(){
                      $location.path('/signup');
                    }
                    });