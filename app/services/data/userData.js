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

    }
    function logoutUser(user) {

    }

    function authenticate() {
        //return true if logged, false if not
        return !!sessionStorage.access_token;
    }
    return {
        register : registerUser,
        login : loginUser,
        logout : logoutUser,
        authenticate : authenticate
    }
}]);