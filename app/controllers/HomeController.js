app.controller('HomeController', ['$scope', 'adsData', 'userData', function($scope, adsData, userData){
    $scope.pageTitle = 'Home';
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
    adsData.getAds()
        .$promise
        .then(function (data) {
            $scope.ads = data;
        });
    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }

}]);