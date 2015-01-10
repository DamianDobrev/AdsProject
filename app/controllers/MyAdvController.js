app.controller('MyAdvController', ['$scope', 'adsData', 'userData', '$location', '$routeParams', function($scope, adsData, userData, $location, $routeParams){
    $scope.pageTitle = 'My Ads';
    function initAds() {
        $scope.ads = {};
        adsData.getUserAds()
            .$promise
            .then(function (data) {
                $scope.ads = data;
            });
    }
    initAds();

    $scope.deleteAdv = function (ad) {
        adsData.deleteAdv(ad, initAds);
    };
    $scope.editAdv = function (ad) {
        $location.path('/editAdv/' + ad.id);
    };

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