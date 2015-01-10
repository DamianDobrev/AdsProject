app.factory('adsData', ['$resource', 'baseServiceUrl', 'userData', '$location', function ($resource, baseServiceUrl, userData, $location) {
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
        resourceUserAds.post(data)
            .$promise
            .then(function (dat) {
                Dom.createNoty('success', dat.message);
                $location.path('/myAdvs');
            },
            function (error) {
                Dom.createNoty('error', error.message)
            });
    }

    function editAdv(ad, data) {
        var resource = $resource(baseServiceUrl + 'user/ads/' + ad.id, {}, {
            editAdv: {
                method : 'PUT',
                headers: userData.getHeaders()
            }
        });
        resource.editAdv(data)
            .$promise
            .then(function (success) {
                Dom.createNoty('success', success.message);
                $location.path('/myAdvs');
            },
            function (error) {
                console.log(error)
                Dom.createNoty('error', error.data.message);
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
        getAdById : getAdById
    }
}]);