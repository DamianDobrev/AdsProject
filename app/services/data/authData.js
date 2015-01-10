app.factory('authData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {

    function getIsLogged() {
        return !!sessionStorage.access_token;
    }

    function getCurrentUsername () {
        if(getIsLogged()) {
            return JSON.parse(sessionStorage.access_token).username;
        }
        return 'guest'
    }

    return {
        isLogged : getIsLogged,
        getUsername : getCurrentUsername
    }
}]);