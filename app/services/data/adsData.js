app.factory('adsData', ['$resource', 'baseServiceUrl', 'userData', '$http', function ($resource, baseServiceUrl, userData, $http) {
    var resourceAllAds = $resource(baseServiceUrl + 'ads');
    var resourceUserAds;

    function getAllAds() {
        return resourceAllAds.get();
    }

    function setResource() {
        resourceUserAds = $resource(baseServiceUrl + 'user/ads', {}, {
            get: {
                method : 'GET',
                headers: userData.getHeaders()
            },
            post: {
                method : 'POST',
                headers: userData.getHeaders()
            }
        });
    }

    function getCurrentUserAds() {
        setResource();
        return resourceUserAds.get();
    }

    function addNewAdv(data) {
        setResource();
        resourceUserAds.post(data);
    }

    return {
        getAds: getAllAds,
        getUserAds: getCurrentUserAds,
        addNewAdv : addNewAdv
    }
}]);