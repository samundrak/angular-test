define(['core'], function (core) {
    "use strict";
    return angular.module('app', ['ui.router', 'ngAnimate'])
        .controller('welcomeController', ['$scope', 'DB', '$state', function ($scope, DB, $state) {
            angular.extend($scope, {
                name: DB.get('name') || ''
            });


            angular.extend($scope, {
                gotoBooksPage: function () {
                    if (!$scope.name.trim().length) return alert('Your name please');

                    DB.set('name', $scope.name);
                    $state.go('home', {
                        page: 'books',
                        'more': ''
                    });
                }
            });
        }])
        .controller('booksController', ['$scope', '$stateParams', 'DB', 'Auth', '$state',
            function ($scope, $stateParams, DB, Auth, $state) {
                if (!Auth.user())
                    Auth.redirect();


                var listOfBooks = DB.get('books')
                angular.extend($scope, {
                    auth: Auth,
                    moreInfo: core.optionalParamParser($stateParams.more),
                    booksLists: listOfBooks,
                    selectedBook: listOfBooks[0],
                    selectedItems: DB.get('selectedItems', []),
                });
                angular.extend($scope, {
                    sum: core.getSum,
                    bookSelected: function (book, index) {
                        book.index = index;
                        $scope.selectedItems.push(book);
                        $scope.booksLists.splice(index, 1);
                        DB.set('selectedItems', $scope.selectedItems);
                    },
                    moreDetails: function (book) {
                        console.log($stateParams.more)
                        window.location.hash = "#/books/" + book.id;
                    },
                    removeSelectedBook: function (selectedItemIndex, book) {
                        $scope.booksLists.push(book);
                        $scope.selectedItems.splice(selectedItemIndex, 1);
                    },
                    proceedToCheckout: function () {
                        if (!$scope.selectedItems.length) return alert('No Item Selected');

                        $state.go('home', {
                            page: 'checkout',
                            more: ''
                        });
                    }
                })
                console.log();
            }
        ])
        .controller('checkoutController', ['$scope', 'Auth', '$state', 'focus', function ($scope, Auth, $state, focus) {
            if (!Auth.user())
                Auth.redirect();


            angular.extend($scope, {
                checkout: {
                    contact: '',
                    amount: '00.00',
                    fullname: [{
                        placeholder: 'First Name'
                    }, {
                        placeholder: 'Middle Name'
                    }, {
                        placeholder: 'LastName'
                    }],
                    amounts: [0, 0, 0],
                    lastTouched: undefined,
                    sum: 0,
                    presistSumValue: 0
                }
            });

            angular.extend($scope, {
                amountChanged: function (index) {
                    $scope.checkout.lastTouched = index;
                    $scope.checkout.sum = $scope.allAmountSum();
                    $scope.checkout.presistSumValue = $scope.allAmountSum();
                },
                sumHasAltered: function () {
                    if ($scope.checkout.lastTouched === undefined) return;
                    var lastTouchedIndexNewVal = $scope.checkout.amounts[$scope.checkout.lastTouched] / $scope.checkout.presistSumValue * 100;
                    var shareForRemaingAmount = (100 - lastTouchedIndexNewVal ) / 2
                    $scope.checkout.amounts.forEach(function (item, index) {
                        if (index === $scope.checkout.lastTouched) {
                            $scope.checkout.amounts[index] = lastTouchedIndexNewVal / 100 * $scope.checkout.sum;
                            return;
                        }
                        $scope.checkout.amounts[index] = shareForRemaingAmount / 100 * $scope.checkout.sum;
                    });
                    $scope.checkout.presistSumValue = $scope.checkout.sum;
                },
                restrictCharLength: function (index, item) {
                    if (item.value === undefined) return;
                    if (item.value.length > 5) {
                        item.value = item.value.substr(0, item.value.length - 1);
                        focus('fullname_' + (index + 1));
                        return;
                    }

                    if (item.value.length < 1) {
                        focus('fullname_' + (index - 1));
                    }
                },
                allAmountSum: function () {
                    return $scope.checkout.amounts.reduce(function (prev, cur) {
                            return prev + parseInt(cur, 10);
                        }, 0) || 0;
                },

            });

        }])
        .controller('detailsController', ['$scope', 'Auth', '$stateParams', 'DB', '$state', function ($scope, Auth, $stateParams, DB, $state) {
            if (!Auth.user())
                Auth.redirect();

            angular.extend($scope, {
                bookId: core.optionalParamParser($stateParams.more)
            });
            angular.extend($scope, {
                selectedBook: DB.get('books', []).filter(function (book) {
                    return book.id === +$scope.bookId;
                })[0]
            });

        }])
        .controller('finishController', ['$scope', 'DB', 'Auth', function ($scope, DB, Auth) {
            if (!Auth.user())
                Auth.redirect();

            $scope.user = DB.get('name');
        }]);
})