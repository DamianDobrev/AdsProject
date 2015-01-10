app.controller('EditAdvController', ['$scope', 'adsData', 'userData', '$location', '$routeParams', 'categoriesData', 'townsData', function($scope, adsData, userData, $location, $routeParams, categoriesData, townsData){
    $scope.pageTitle = 'Edit Ad';
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();

    adsData.getAdById($routeParams.id)
        .$promise
        .then(function (data) {
            $scope.ad = data;
        }, function (error) {
            console.log('error')
        });

    $scope.adv = {};
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();

    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }
    $scope.editAdv = function (data) {
        adsData.editAdv($scope.ad, data);
    }

}]);