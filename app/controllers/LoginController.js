app.controller('LoginController', ['$scope', 'userData',  function($scope, userData){
    $scope.pageTitle = 'Login';

    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();


    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }
    $scope.login = function (user) {
        userData.login(user);
    };
}]);