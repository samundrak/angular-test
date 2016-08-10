define(function () {
    "use strict";
    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            'use strict';
            $urlRouterProvider.otherwise('/');
            $stateProvider.state('home', {
                    url: '/',
                    templateUrl: '/views/app/partials/dashboard',
                    controller: 'dashboardCtrl'
                })
                .state('settings', {
                    url: '/settings',
                    templateUrl: '/views/app/partials/settings',
                    controller: 'settingsCtrl'
                });
        });

});