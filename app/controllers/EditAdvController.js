app.controller('EditAdvController', ['$scope', 'adsData', 'userData', '$location', '$routeParams', function($scope, adsData, userData, $location, $routeParams){
    $scope.pageTitle = 'Edit Ad';
    $scope.isAuthenticated = (function () {
        return !!sessionStorage.access_token;
    })();

    adsData.getAdById($routeParams.id)
        .$promise
        .then(function (data) {
            $scope.ad = data;
        }, function (error) {
            console.log('error')
        });


    if ($scope.isAuthenticated) {
        $scope.username = JSON.parse(sessionStorage.access_token).username;
    }
//    $scope.editAdvert = function () {
//
//    }
    else {
        $scope.username = 'guest';
    }

}]);