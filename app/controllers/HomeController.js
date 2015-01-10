app.controller('HomeController', ['$scope', 'adsData', 'userData', 'authData', function($scope, adsData, userData, authData){


    $scope.pageTitle = 'Home';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();


    adsData.getAds()
        .$promise
        .then(function (data) {
            $scope.ads = data;
        });

}]);