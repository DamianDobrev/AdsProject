app.directive('publicPublishAds', function(){
    return {
        controller: 'HomeController',
        restrict: 'E',
        templateUrl: 'templates/public/publish.html',
        replace: true
    };
});