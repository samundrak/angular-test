define(['core'], function (core) {
    "use strict";
    return angular.module('app', ['ui.router'])
        .controller('welcomeController', ['$scope', 'DB', '$state', function ($scope, DB, $state) {
            angular.extend($scope, {
                name: ''
            });


            angular.extend($scope, {
                gotoBooksPage: function () {
                    if (!$scope.name.trim().length) return alert('Your name please');

                    DB.set('name', $scope.name);
                    $state.go('home', {page: 'books'});
                }
            });
        }])
        .controller('booksController', ['$scope', '$stateParams', 'DB', function ($scope, $stateParams, DB) {
            angular.extend($scope, {
                moreDetails: core.optionalParamParser($stateParams.more)

            });

            console.log(DB);
        }])
        .controller('checkoutController', ['$scope', function ($scope) {
            console.log('checkout')
        }])
        .controller('detailsController', ['$scope', function ($scope) {
            console.log('details');

        }]);
})