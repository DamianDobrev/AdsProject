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
        $resource(baseServiceUrl + 'user/logout', {}, {
            post: {
                method : 'POST',
                headers: getHeaders()
            }
        }).post();
    }

    function getHeaders() {
        var headers = {};
        var userData = JSON.parse(sessionStorage.access_token);
        if (userData) {
            headers.Authorization = 'Bearer ' + userData.access_token;
        }
        return headers;
    }

    function changeUserProfile(user) {
        console.log(user);
        $resource(baseServiceUrl + 'user/profile', {}, {
            put: {
                method : 'PUT',
                headers : getHeaders()
            }
        }).put(user)
            .$promise
            .then(function (success) {
                Dom.createNoty('success', success.message);
            });
    }

    function changeUserPassword(password) {
        console.log(password);
        $resource(baseServiceUrl + 'user/ChangePassword', {}, {
            put: {
                method : 'PUT',
                headers : getHeaders()
            }
        }).put(password)
            .$promise
            .then(function (success) {
                Dom.createNoty('success', success.message);
            });
    }

    return {
        register : registerUser,
        login : loginUser,
        logout : logoutUser,
        getHeaders : getHeaders,
        changeUserProfile : changeUserProfile,
        changeUserPassword : changeUserPassword
    }
}]);