/* jshint -W097 */
'use strict';

angular.module('holidu.sample', [
    'ngRoute',
    'holidu.pmc.common',
    'holidu.pmc.layout',
    'pascalprecht.translate'
]);


/**
 * App configuration
 */
angular.module('holidu.sample')

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/sample', {
                template: '<sample-page></sample-page>',
                name: 'Sample'
            })

    }]);

