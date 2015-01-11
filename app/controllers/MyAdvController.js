app.controller('MyAdvController', ['$scope', 'adsData', 'userData', '$location', 'authData', function($scope, adsData, userData, $location, authData){
    $scope.pageTitle = 'My Ads';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

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