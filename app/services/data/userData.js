app.factory('userData', ['$resource', 'baseServiceUrl', '$location', function ($resource, baseServiceUrl, $location) {
    function registerUser(user) {
        return $resource(baseServiceUrl + 'user/register')
            .save(user)
            .$promise
            .then(function (data) {
                sessionStorage['access_token'] = JSON.stringify(data);
                $location.path('/');
                Dom.createNoty('success', 'Congrats, you created a new user!')
            }, function (error) {
                Dom.createNoty('error', 'Error!')
            });
    }
    function loginUser(user) {
        return $resource(baseServiceUrl + 'user/login')
            .save(user)
            .$promise
            .then(function (data) {
                $location.path('/');
                sessionStorage['access_token'] = JSON.stringify(data);
                Dom.createNoty('success', 'Congrats, you logged in successfully!')
            }, function (error) {
                Dom.createNoty('error', 'Error!')
            });
    }
    function logoutUser() {
        var res = $resource(baseServiceUrl + 'user/logout', {}, {
            post: {
                method : 'POST',
                headers: getHeaders()
            }
        });
        res.post();
        sessionStorage.clear();
        $location.path('/');
    }

    function getHeaders() {
        var headers = {};
        var userData = JSON.parse(sessionStorage.access_token);
        if (userData) {
            headers.Authorization = 'Bearer ' + userData.access_token;
        }
        return headers;
    }

    return {
        register : registerUser,
        login : loginUser,
        logout : logoutUser,
        getHeaders : getHeaders
    }
}]);