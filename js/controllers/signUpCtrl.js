   app.controller('myCtrl', function($scope, $http, $timeout, $window, $location) {
       $scope.showRegistrationSuccessfulMessage = false;

       $scope.showRegistrationUnSuccessfulMessage = false;
       $scope.statusCode = 0;
       $scope.redirectionMessage = false;
       $scope.UserSignUp = function() {
           var url = "http://localhost:8080";

           var data = {

               "userName": $scope.register.userName,
               "password": $scope.register.password,
               "confirmPassword": $scope.register.confirmPassword

           };
      
           $http.post(url + '/register', data).then(function(response) {
                   $scope.register = {};
        $scope.showRegistrationSuccessfulMessage = true;
                   $timeout (function(){
        $scope.showRegistrationSuccessfulMessage = false;

             },2000);
                   $timeout(function(){
                           $scope.redirectionMessage = true;

                   },3000)
                   $timeout(function(){
                     
                    $location.path('/login')
                   },5000)
             //       if(response.status=200){
             //       $timeout(function() {
             //           $scope.showRegistrationUnSuccessfulMessage = false;
             //           $location.path('/corePage');
             //       }, 3000)
               
             // }

               },
               function(response) { 

   
                //   $timeout(function() {
                       $scope.showRegistrationUnSuccessfulMessage = true;
                      // alert("sampk");
                     //  $location.path('/corePage');
                  // }, 3000)
               
             
          
            
             // else if(response.status=404||response.status=400){
             //  alert("error");
             // }
                   // $scope.showRegistrationUnSuccessfulMessage = true;
    
             // if(response.status=400){
             //   $timeout(function() {
             //           $scope.showRegistrationUnSuccessfulMessage = false;
             //           // $location.path('/corePage');
             //       }, 3000)
          
             
            

               });


       }
   });