app.directive('publicCategories', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/categories.html',
        replace: true
    };
});