app.controller('HomeController', ['$scope', 'adsData', 'userData', 'authData', function($scope, adsData, userData, authData){

    $scope.pageTitle = 'Home';

    adsData.getAds()
        .$promise
        .then(function (data) {
            $scope.ads = data;
        });
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }


}]);