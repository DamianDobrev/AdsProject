app.controller('RegisterController', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    $scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });
    $scope.register = function (user) {
        userData.register(user);
    };
    $scope.isAuthenticated = (function () {
        console.log(!!sessionStorage.access_token)
        return !!sessionStorage.access_token;
    })();
}]);