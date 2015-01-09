app.directive('publicAdvs', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/advs.html',
        replace: true
    };
});