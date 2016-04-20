angular.module('holidu.sample')

    .component('sampleMainView', {

        controller: function ($scope) {

            this.isMinimized = true;
            this.isShown = false;

            $scope.$on('$routeChangeStart', function (next, current) {
                this.isShown = false;
            }.bind(this));

            this.changeSize = function () {
                this.isMinimized = !this.isMinimized;
                this.isShown = false;
            }.bind(this);

            this.showMenu = function () {
                this.isShown = !this.isShown;
                this.isMinimized = false;
            }.bind(this);

        },

        templateUrl: '/pmc/sample/sample-main-view.html'

    });
