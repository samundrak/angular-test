define(function () {
    "use strict";
    var app = angular.module('app', ['ui.router'])
        .controller('homeController', function ($scope) {
            $scope.name = 'samundra';
        })
})