app.controller('coreCtrl', function($scope, $http, $timeout,$location) {

   $scope.showMe = false;
    $scope.showSuccessMessage = false;
    $scope.showErrorMessage = false;
    $scope.showErrorMessage = false;
    $scope.showTotalContacts = false;
     $scope.emptyArray = [];
     
    var url = "http://localhost:8080";
     $http.post(url + '/all').then(function(response) {
                $scope.emptyArray = response.data
            });
        
        // , function(response) {
        //     $scope.showErrorMessage = true;
        //     $timeout(function() {
        //         $scope.showErrorMessage = false;
        //     }, 3000);
            
        // });
  
   
    $scope.ClickToPreviewForm = function() {
        $scope.showMe = !$scope.showMe;
        $scope.showSuccessMessage = false;
        $scope.showErrorMessage = false;
    }

    $scope.addContacts = function() {
        // $scope.emptyArray.push($scope.user);
        var url = "http://localhost:8080";
        // $scope.showSuccessMessage = false;
        $http.post(url + '/contacts', {
            "contactName": $scope.user.nameOfContact,
            "contactNumber": $scope.user.UserNumber
        }).then(function(response) {
            // setTimeout(function(){ $scope.showSuccessMessage = true;},3000);
            $scope.showSuccessMessage = true;
            $scope.user = {};
            $scope.showDeleteMessage = true;
            $timeout(function() {
				
                $scope.showSuccessMessage = false;
				
            
            }, 3000);
			
			
		 $http.post(url + '/all').then(function(response) {
                $scope.emptyArray = response.data
            });
        }, function(response) {
            $scope.showErrorMessage = true;
            $timeout(function() {
                $scope.showErrorMessage = false;
            }, 3000);
			
        });
    }
    $scope.delete = function(userid) {
        var url = "http://localhost:8080";
        $http.delete(url + '/contacts/' + userid).then(function(response) {
            $http.post(url + '/all').then(function(response) {
                $scope.emptyArray = response.data
            });
        }, function(response) {
            // alert("error");
        });
    }
    $scope.deleteAllContacts = function() {
        var url = "http://localhost:8080";
        $scope.showTotalContacts = true;
        $http.delete(url + '/deleteAll').then(function(response) {
          
            $http.post(url + '/all').then(function(response) {
                $scope.emptyArray = response.data
            });
         }, function(response) {
            // alert("error");
        });
    }
    $scope.edit = function(user, deleteindex, userid) {
         $scope.showMe = true;
        var url = "http://localhost:8080";
        $scope.emptyArray.splice(deleteindex, 1);
    $scope.user={};
        $scope.user.nameOfContact = user.contactName;
        $scope.user.UserNumber = user.contactNumber;
       $http.delete(url+'/contacts/'+userid).then(function(response) {
        },function(response){
            // alert("error");
        });
       
       
       $http.put(url+'/editUser',{
        "$scope.user.nameOfContact":user.contactName,
        "$scope.user.UserNumber":user.contactNumber
       }).then(function(response){
        // alert("success");
       },function(response){
        // alert("error");
       });


    }
});