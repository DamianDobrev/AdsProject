app.directive('publicTowns', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/towns.html',
        replace: true
    };
});