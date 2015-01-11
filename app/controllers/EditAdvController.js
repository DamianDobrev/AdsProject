app.controller('EditAdvController', ['$scope', 'adsData', 'userData', '$location', '$routeParams', 'categoriesData', 'townsData', 'authData', function($scope, adsData, userData, $location, $routeParams, categoriesData, townsData, authData){
    $scope.pageTitle = 'Edit Ad';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

    $scope.adv = {};
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();

    adsData.getAdById($routeParams.id)
        .$promise
        .then(function (data) {
            $scope.ad = data;
        }, function (error) {
            console.log('error')
        });

    $scope.editAdv = function (data) {
        adsData.editAdv($scope.ad, data);
    };

}]);