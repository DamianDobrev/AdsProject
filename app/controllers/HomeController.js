app.controller('HomeController', ['$scope', 'adsData', 'userData', function($scope, adsData, userData){
    $scope.pageTitle = 'Home';
    $scope.username = JSON.parse(sessionStorage.access_token).username;
    adsData.getAds()
        .$promise
        .then(function (data) {
            $scope.ads = data;
        });
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();

}]);