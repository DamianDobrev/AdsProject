app.directive('publicRightSidebar', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/right-sidebar.html',
        replace: true
    };
});