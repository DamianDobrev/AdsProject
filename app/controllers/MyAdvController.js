app.controller('MyAdvController', ['$scope', 'adsData', 'userData', function($scope, adsData, userData){
    $scope.pageTitle = 'My Ads';
    adsData.getUserAds()
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