app.controller('PublishNewAdvController', ['$scope', 'adsData', 'userData', 'categoriesData', 'townsData', function($scope, adsData, userData, categoriesData, townsData){
    $scope.pageTitle = 'Publish New Ad';
    $scope.adv = {};
    $scope.categories = categoriesData.getCategories();
    $scope.towns = townsData.getTowns();
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();
    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
    else {
        $scope.username = 'guest';
    }
    $scope.publishNewAdv = function (data) {
        adsData.addNewAdv(data);
    }
}]);