app.controller('LogoutController', ['$scope', 'userData', '$location',  function($scope, userData, $location){
    $scope.logout = function () {
        console.log("LOGOUT");
        userData.logout();
        sessionStorage.clear();
        $location.path('/home');
        Dom.createNoty('success', 'Congrats, you logged out successfully!')
    };
}]);