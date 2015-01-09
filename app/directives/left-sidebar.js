app.directive('leftPublicSidebar', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: true
    };
});