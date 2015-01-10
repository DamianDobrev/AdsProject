app.factory('adsData', ['$resource', 'baseServiceUrl', 'userData', '$location', function ($resource, baseServiceUrl, userData, $location) {
    var resourceAllAds = $resource(baseServiceUrl + 'ads');
    var resourceUserAds;

    function getCurrentAdv() {
        return currentAdv;
    }

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

    function editAdv(ad) {
        var resource = $resource(baseServiceUrl + 'user/ads/' + id, {}, {
            editAdv: {
                method : 'PUT',
                headers: userData.getHeaders()
            }
        });
        resource.editAdv()
            .$promise
            .then(function () {
                Dom.createNoty('success', 'Ad edited successfully')
            });
    }

    function deleteAdv(ad, initAds) {
        var resource = $resource(baseServiceUrl + 'user/ads/' + ad.id, {}, {
            deleteAdv: {
                method : 'DELETE',
                headers: userData.getHeaders()
            }
        });
        resource.deleteAdv()
            .$promise
            .then(function () {
                Dom.createNoty('success', 'Ad deleted successfully');
                initAds();
            });
    }

    function getAdById(id) {
        return $resource(baseServiceUrl + 'user/ads/' + id, {}, {
            get: {
                method : 'GET',
                headers: userData.getHeaders()
            }
        } ).get();
    }

    return {
        getAds: getAllAds,
        getUserAds: getCurrentUserAds,
        addNewAdv : addNewAdv,
        deleteAdv : deleteAdv,
        editAdv : editAdv,
        getCurrentAdv : getCurrentAdv,
        getAdById : getAdById
    }
}]);