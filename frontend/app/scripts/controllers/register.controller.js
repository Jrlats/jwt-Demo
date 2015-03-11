angular
  .module('psJwtApp')
  .controller('registerController', function($scope,$http, $rootScope, alert){
    $scope.submit=function(){

      var url = '/';
      var user = {};
      $http.post(url,user)
        .success(function(response){
          alert('success', 'OK!', 'You are now registered!');
        })
        .error(function(err){
          alert('warning', 'Oops!', 'could not register');
        })
    }
  });
