app.controller('EditProfileController', ['$scope', 'userData', '$location', 'townsData', function($scope, userData, $location, townsData){
    $scope.pageTitle = 'Edit Profile';
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.editProfile = function (user) {
        userData.changeUserProfile(user);
    };

    $scope.changePassword = function (password) {
        userData.changeUserPassword(password);
    };

    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }

}]);