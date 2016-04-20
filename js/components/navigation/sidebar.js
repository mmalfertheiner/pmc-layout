angular.module('holidu.pmc.layout')

    .component('sidebar', {

        bindings: {
            onChangeSize: '&'
        },

        transclude: true,

        controller: ['$location', function ($location) {

            this.isActive = function (path) {
                if ($location.path().substr(0, path.length) === path) {
                    return true
                }

                return false;
            }
        }],

        templateUrl: '/pmc/js/layout/views/navigation/sidebar.html'

    });
