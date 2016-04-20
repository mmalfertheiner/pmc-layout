angular.module('holidu.pmc.layout')

    .component('innerSidebarLeft', {

        bindings: {
            pathSegment: '<'
        },

        transclude: true,

        controller: ['$location', '$window', function ($location, $window) {

            this.isActive = function (path) {

                var actualPath = $location.path().split('/');

                return actualPath.length >= (this.pathSegment + 1) && actualPath[this.pathSegment].substr(0, path.length) === path;

            };

            this.changePath = function (path) {

                var actualPath = $location.path().split('/');
                var newPath = '';

                for (var i = 1; i < this.pathSegment; i++) {
                    newPath += actualPath[i] + '/';
                }

                newPath += path;

                $location.path(newPath);
            };

            this.scrollTop = function () {
                $window.scrollTo(0, 0);
            }
        }],

        templateUrl: '/pmc/js/layout/views/navigation/inner-sidebar-left.html'

    });
