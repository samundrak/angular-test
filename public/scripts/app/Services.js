define(['core'], function (core) {

    angular.module('app')
        .factory('DB', function () {
            "use strict";
            var data = {

                books: core.fakeBooksDetails
            };
            return {
                data: data,
                get: function (key, defaultValue) {
                    return data.hasOwnProperty(key) ? data[key] : defaultValue;
                },
                set: function (key, value) {
                    return data[key] = value;
                }
            }
        })
        .factory('Auth', ['DB', '$state', function (DB, $state) {
            "use strict";
            return {
                user: function () {
                    return DB.get('name') || false;
                },
                redirect: function () {
                    return $state.go('home', {
                        page: 'welcome',
                        more: ''
                    });
                }
            }
        }])
        .factory('focus', function ($timeout, $window) {
            return function (id) {
                $timeout(function () {
                    var element = $window.document.getElementById(id);
                    if (element)
                        element.focus();
                });
            };
        });
});