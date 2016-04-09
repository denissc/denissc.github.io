var app = angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when( '/', { controller: 'pokeController' });
        $routeProvider.otherwise({ redirectTo: '/' });
    });