require.config({
    paths: {
        'core': 'core',
        'angular': '../angular/angular.min',
        'ui.router': '../angular-ui-router/release/angular-ui-router.min',
        'pace': '../PACE/pace.min',
        'app': 'app/MainApp',
        'appServices': 'app/Services',
        'appConfig': 'app/Config',
        'appFilters': 'app/Filters',
        'appDirectives': 'app/Directives',
    },
    shim: {
        app: {
            deps: ['angular', 'core', 'ui.router']
        },
        appConfig: {
            deps: ['app', 'core']
        },
        appServices: {
            deps: ['app']
        }
    }
});

require(['app', 'appConfig', 'appServices'], function () {
    "use strict";
    setTimeout(function () {
        angular.bootstrap(document, ['app']);
    }, 0);
});