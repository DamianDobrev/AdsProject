'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource']);
app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        replace: true
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        replace: true
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController',
        replace: true
    });
    $routeProvider.otherwise({
        redirectTo: '/',
        replace: true
    });
}]);