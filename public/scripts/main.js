require.config({
    paths: {
        'domReady': '../requirejs-domready/domReady',
        'core': 'core',
        'angular': '../angular/angular.min',
        'uiRouter': '../angular-ui-router/release/angular-ui-router.min',
        'ngAnimate': '../angular-animate/angular-animate.min',
        'app': 'app/MainApp',
        'appServices': 'app/Services',
        'appConfig': 'app/Config',
        'appFilters': 'app/Filters',
        'appDirectives': 'app/Directives',
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
         'ngAnimate': {
            deps: ['angular']
        },
        app: {
            deps: ['angular', 'core', 'uiRouter', 'ngAnimate']
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

require(['app', 'appConfig', 'appServices', 'appDirectives'], function() {
    "use strict";
    setTimeout(function() {
        angular.bootstrap(document, ['app']);
    }, 0);
});