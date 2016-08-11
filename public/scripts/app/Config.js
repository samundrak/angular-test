define(['core'], function (core) {
    "use strict";
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            'use strict';
            $urlRouterProvider.otherwise('/welcome');
            $stateProvider.state('home', {
                url: '/{page}{more:(?:/[^/]+)?}',
                views: {
                    '': {
                        templateUrl: core.templateUrlProvider,
                        controllerProvider: core.controllerProvider
                    },
                    'more@home': {
                        templateUrl: '/views/app/partials/details',
                        controller: 'detailsController'
                    }
                },
                controller :  function($scope, $stateParams){
                    console.log($stateParams.more)
                }
            });
        });

});