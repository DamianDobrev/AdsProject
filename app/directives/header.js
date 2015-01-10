app.directive('headerPane', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/public/header.html',
        replace: true
    };
});