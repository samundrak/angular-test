define(['core'], function (core) {
    "use strict";

    angular.module('app')
        .directive('mobileContactParser', [function () {
            return {
                restrict: 'A',
                scope: {
                    contact: '=contact'
                },
                controller: ['$scope', function ($scope) {
                    $scope.$watch('contact', function (newVal, oldVal) {
                        var lastChar = newVal.charAt(newVal.length - 1);
                        if (lastChar != ')' && lastChar != '(' && lastChar != '-') {
                            if (isNaN(+lastChar)) {
                                $scope.contact = oldVal;
                                return;
                            }
                        }
                        var valLength = newVal.length;
                        if (valLength === 3) {
                            $scope.contact = '(' + $scope.contact + ')';
                        }
                        else if (valLength === 8) {
                            $scope.contact = $scope.contact + '-';
                        }
                        else if (valLength > 13) {
                            $scope.contact = oldVal;
                        }
                    });
                }],
            }
        }])
        .directive('currencyParser', [function () {
            return {
                restrict: 'A',
                scope: {
                    amount: '=amount'
                }, controller: ['$scope', function ($scope) {

                    $scope.$watch('amount', function (newVal, oldVal) {

                        var number = +newVal.replace(/[^\d.]/g, '')
                        number = isNaN(number) ? 0 : parseFloat(number.toFixed(2))
                        $scope.amount = '$' + Number(parseFloat(number).toFixed(1)).toLocaleString();

                    });
                }]
            }
        }]);
});