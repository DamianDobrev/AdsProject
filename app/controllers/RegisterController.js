app.controller('RegisterController', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    $scope.pageTitle = 'Register';
    $scope.username = JSON.parse(sessionStorage.access_token).username;
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });
    $scope.register = function (user) {
        userData.register(user);
    };
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
}]);