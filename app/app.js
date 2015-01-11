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
    $routeProvider.when('/myAdvs', {
        templateUrl: 'templates/my-advs.html',
        controller: 'MyAdvController',
        replace: true
    });
    $routeProvider.when('/publishNewAdv', {
        templateUrl: 'templates/publish-new-adv.html',
        controller: 'PublishNewAdvController',
        replace: true
    });
    $routeProvider.when('/editAdv/:id', {
        templateUrl: 'templates/edit-adv.html',
        controller: 'EditAdvController',
        replace: true
    });
    $routeProvider.when('/editProfile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'EditProfileController',
        replace: true
    });
    $routeProvider.otherwise({
        redirectTo: '/',
        replace: true
    });
}]);