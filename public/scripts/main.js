require.config({
    paths: {
        'core': 'core',
        'angular': '../angular/angular.min',
        'ui.router': '../angular-ui-router/release/angular-ui-router.min',
        'ngAnimate': '../angular-animate/angular-animate.min',
        'pace': '../PACE/pace.min',
        'app': 'app/MainApp',
        'appServices': 'app/Services',
        'appConfig': 'app/Config',
        'appFilters': 'app/Filters',
        'appDirectives': 'app/Directives',
    },
    shim: {
        app: {
            deps: ['angular', 'core', 'ui.router','ngAnimate']
        },
        appConfig: {
            deps: ['app', 'core']
        },
        appServices: {
            deps: ['app']
        },
        appDirectives: {
            deps: ['app']
        }
    }
});

require(['app', 'appConfig', 'appServices', 'appDirectives'], function () {
    "use strict";
    setTimeout(function () {
        angular.bootstrap(document, ['app']);
    }, 0);
});