app.controller('HomeController', ['$scope', 'adsData', 'userData', function($scope, adsData, userData){
    $scope.pageTitle = 'Home';
    adsData.getAds()
        .$promise
        .then(function (data) {
            $scope.ads = data;
        });
    $scope.isAuthenticated = (function () {
        console.log(!!sessionStorage.access_token)
        return !!sessionStorage.access_token;
    })();

}]);