app.controller('LoginController', ['$scope',  function($scope){
    $scope.pageTitle = 'Login';
    $scope.username = JSON.parse(sessionStorage.access_token).username;
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
}]);