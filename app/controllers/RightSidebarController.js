app.controller('RightSidebarController', ['$scope', 'townsData', 'categoriesData', function($scope, townsData, categoriesData){
    $scope.towns = townsData.getTowns();
    $scope.categories = categoriesData.getCategories();
}]);