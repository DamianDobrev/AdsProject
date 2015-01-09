'use strict';

var app = angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'HomeController'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);