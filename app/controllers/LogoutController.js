app.controller('LogoutController', ['$scope', 'userData', '$location',  function($scope, userData, $location){
    $scope.logout = function () {
        userData.logout();
    };
}]);