app.controller('HomeController', ['$scope', 'adsData', function($scope, adsData){
    $scope.pageTitle = 'Home';
    $scope.currentPage = 0;

    function getAds(page) {
        adsData.getAds(page)
            .$promise
            .then(function (data) {
                $scope.ads = data;
                $scope.numPages = Dom.makeArray(data.numPages);
            });
    }
    getAds(1);


    $scope.setPage = function () {
        $scope.currentPage = this.page;
        getAds($scope.currentPage + 1);
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