app.directive('publicCategories', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/public/categories.html',
        replace: true
    };
});