app.controller('PublishNewAdvController', ['$scope', 'adsData', 'userData', 'categoriesData', 'townsData', 'authData', function($scope, adsData, userData, categoriesData, townsData, authData){
    $scope.pageTitle = 'Publish New Ad';
    $scope.isAuthenticated = authData.isLogged();
    $scope.username = authData.getUsername();

    $scope.adv = {};
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();

    $scope.publishNewAdv = function (data) {
        adsData.addNewAdv(data);
    }
}]);