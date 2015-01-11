app.controller('EditProfileController', ['$scope', 'userData', '$location', 'townsData', 'authData', function($scope, userData, $location, townsData, authData){
    $scope.pageTitle = 'Edit Profile';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

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

}]);