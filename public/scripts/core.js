define(function () {
    // "use strict";
    return {
        templateUrlProvider: $stateParams => '/views/app/partials/' + $stateParams.page,
        controllerProvider: $stateParams => $stateParams.page + "Controller"
}
});