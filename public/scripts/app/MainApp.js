define(function () {
    "use strict";
    var app = angular.module('app', ['ui.router'])
        .controller('welcomeController', ['$scope', function ($scope) {
            $scope.name = 'samundra';
            console.log('home')
        }])
        .controller('booksController', ['$scope', function ($scope) {
            console.log('book')
        }])
        .controller('checkoutController', ['$scope', function ($scope) {
            console.log('checkout')
        }]);
})