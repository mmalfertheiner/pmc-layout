angular.module('holidu.sample')

    .component('samplePage', {

        controller: function () {

            this.isSidebarLeftShown = false;
            this.isSidebarRightShown = false;

            this.toggleSidebarLeft = function () {
                this.isSidebarLeftShown = !this.isSidebarLeftShown;
            }.bind(this);

            this.toggleSidebarRight = function () {
                this.isSidebarRightShown = !this.isSidebarRightShown;
            }.bind(this);
        },

        templateUrl: '/pmc/sample/views/sample-page.html'

    });
