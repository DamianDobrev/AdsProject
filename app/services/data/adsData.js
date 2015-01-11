app.factory('adsData', ['$resource', 'baseServiceUrl', 'userData', '$location', function ($resource, baseServiceUrl, userData, $location) {
    var resourceAllAds = $resource(baseServiceUrl + 'ads');
    var resourceUserAds;

    function getAllAds(pageId) {
        return $resource(baseServiceUrl + 'ads?pagesize=10&startpage=' + pageId)
            .get();
    }

    function setResource(page) {
        resourceUserAds = $resource(baseServiceUrl + 'user/ads?pagesize=10&startpage=' + page, {}, {
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

    function getCurrentUserAds(page) {
        setResource(page);
        return resourceUserAds.get();
    }

    function addNewAdv(data) {
        setResource();
        resourceUserAds.post(data)
            .$promise
            .then(function (success) {
                Dom.createNoty('success', success.message);
                $location.path('/myAdvs');
            },
            function (error) {
                Dom.createNoty('error', error.data.message)
            });
    }

    function editAdv(ad, data) {
        $resource(baseServiceUrl + 'user/ads/' + ad.id, {}, {
            editAdv: {
                method : 'PUT',
                headers: userData.getHeaders()
            }
        }).editAdv(data)
            .$promise
            .then(function (success) {
                Dom.createNoty('success', success.message);
                $location.path('/myAdvs');
            },
            function (error) {
                Dom.createNoty('error', error.data.message);
            });
    }

    function deleteAdv(ad, initAds) {
        $resource(baseServiceUrl + 'user/ads/' + ad.id, {}, {
            deleteAdv: {
                method : 'DELETE',
                headers: userData.getHeaders()
            }
        }).deleteAdv()
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