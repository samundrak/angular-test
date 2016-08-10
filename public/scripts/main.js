require.config({
    paths: {
        'angular': '../angular/angular.min',
        'ui.router': '../angular-ui-router/release/angular-ui-router.min',
        'pace': '../PACE/pace.min',
        'core': 'core',
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
            deps: ['app', 'core']
        },
    }
});

require(['pace', 'appConfig'], function () {
    "use strict";
    setTimeout(function () {
        angular.bootstrap(document, ['app']);
    }, 0);
});