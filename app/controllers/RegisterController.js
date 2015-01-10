app.controller('RegisterController', ['$scope', 'townsData', 'userData', function($scope, townsData, userData){
    $scope.pageTitle = 'Register';

    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();

    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });
    $scope.register = function (user) {
        userData.register(user);
    };
}]);