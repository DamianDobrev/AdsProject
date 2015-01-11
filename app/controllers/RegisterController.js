app.controller('RegisterController', ['$scope', 'townsData', 'userData', 'authData', function($scope, townsData, userData, authData){
    $scope.pageTitle = 'Register';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user);
    };
}]);