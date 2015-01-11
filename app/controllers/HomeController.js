app.controller('HomeController', ['$scope', 'adsData', 'authData', function($scope, adsData, authData){
    $scope.pageTitle = 'Home';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();


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

}]);