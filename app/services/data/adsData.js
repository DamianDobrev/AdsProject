app.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var resource = $resource(baseServiceUrl + 'ads');

    function getAllAds() {
        console.log(resource.get());
        return resource.get();
    }
    return {
        getAds: getAllAds
    }
}]);