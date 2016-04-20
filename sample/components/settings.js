angular.module('holidu.sample')

    .component('settings', {

        bindings: {},

        controller: function () {

            this.scrollTop = function () {
                $window.scrollTo(0, 0);
            };

        },

        templateUrl: '/pmc/sample/views/settings.html'

    });
