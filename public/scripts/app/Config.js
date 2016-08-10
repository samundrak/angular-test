define(['core'], function (core) {
    "use strict";
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            'use strict';
            $urlRouterProvider.otherwise('/welcome');
            $stateProvider.state('home', {
                url: '/:page',
                templateUrl: core.templateUrlProvider,
                controllerProvider: core.controllerProvider
            });
        });

});