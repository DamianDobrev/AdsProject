app.controller('LoginController', ['$scope', 'userData', 'authData',  function($scope, userData, authData){
    $scope.pageTitle = 'Login';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

    $scope.login = function (user) {
        userData.login(user);
    }
}]);