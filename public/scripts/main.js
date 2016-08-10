require.config({
    paths: {
        'angular': '../angular/angular.min',
        'ui.router': '../angular-ui-router/release/angular-ui-router.min',
        'app': 'app/MainApp',
        'appConfig': 'app/Config',
        'appFilters': 'app/Filters',
        'appServices': 'app/Services',
        'appDirectives': 'app/Directives',
    },
    shim: {
        app: {
            deps: ['angular', 'ui.router']
        },
        appFilters: {
            deps: ['app']
        },
        appConfig: {
            deps: ['app']
        }
    }
});

require(['app', 'appFilters', 'appConfig'], function () {
    "use strict";
    angular.bootstrap(document, ['app']);
});