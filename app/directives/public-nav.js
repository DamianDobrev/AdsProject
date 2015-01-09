app.directive('publicNav', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/nav.html',
        replace: true
    };
});