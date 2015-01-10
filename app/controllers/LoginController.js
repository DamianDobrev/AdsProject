app.controller('LoginController', ['$scope',  function($scope){
    $scope.pageTitle = 'Login';
    $scope.isAuthenticated = (function () {
        console.log(!!sessionStorage.access_token)
        return !!sessionStorage.access_token;
    })();
}]);