app.controller('MyAdvController', ['$scope', 'adsData', 'userData', '$location', '$routeParams', function($scope, adsData, userData, $location, $routeParams){
    $scope.pageTitle = 'My Ads';
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }

    function initAds(page) {
        $scope.ads = {};
        adsData.getUserAds(page)
            .$promise
            .then(function (data) {
                $scope.ads = data;
                $scope.numPages = Dom.makeArray(data.numPages);
            });
    }
    initAds(1);

    $scope.setPage = function () {
        $scope.currentPage = this.page;
        initAds($scope.currentPage + 1);
    };

    $scope.deleteAdv = function (ad) {
        adsData.deleteAdv(ad, initAds);
    };
    $scope.editAdv = function (ad) {
        $location.path('/editAdv/' + ad.id);
    };

}]);