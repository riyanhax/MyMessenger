angular.module('mymessenger')


.controller('CreateRoomCtrl', function($scope, $ionicHistory) {
  console.log("CreateRoom Controller initialized");
   

$scope.goBack = function() {
    $ionicHistory.goBack();
}

});