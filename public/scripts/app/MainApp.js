define(['core'], function (core) {
    "use strict";
    return angular.module('app', ['ui.router','ngAnimate'])
        .controller('welcomeController', ['$scope', 'DB', '$state', function ($scope, DB, $state) {
            angular.extend($scope, {
                name: DB.get('name') || ''
            });


            angular.extend($scope, {
                gotoBooksPage: function () {
                    if (!$scope.name.trim().length) return alert('Your name please');

                    DB.set('name', $scope.name);
                    $state.go('home', {page: 'books', 'more': ''});
                }
            });
        }])
        .controller('booksController', ['$scope', '$stateParams', 'DB', 'Auth', '$state',
            function ($scope, $stateParams, DB, Auth, $state) {
                if (!Auth.user())
                    return $state.go('home', {page: 'welcome', more: ''});

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
                    }
                })
                console.log();
            }])
        .controller('checkoutController', ['$scope', 'Auth', function ($scope, Auth) {
            if (!Auth.user())
                return $state.go('home', {page: 'welcome', more: ''});

            angular.extend($scope, {
                checkout: {
                    contact: '',
                    amount : '00.00'
                }
            });
        }])
        .controller('detailsController', ['$scope', 'Auth', '$stateParams', 'DB', function ($scope, Auth, $stateParams, DB) {
            if (!Auth.user())
                return $state.go('home', {page: 'welcome', more: ''});

            angular.extend($scope, {
                bookId: core.optionalParamParser($stateParams.more)
            });
            angular.extend($scope, {
                selectedBook: DB.get('books', []).filter(function (book) {
                    return book.id === +$scope.bookId;
                })[0]
            });

        }]);
})