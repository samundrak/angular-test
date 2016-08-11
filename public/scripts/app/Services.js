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
        .factory('Auth', ['DB', function (DB) {
            "use strict";
            return {
                user: function () {
                    return true;//DB.get('name') || false;
                }
            }
        }]);
});