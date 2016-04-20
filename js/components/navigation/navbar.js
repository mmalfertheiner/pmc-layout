angular.module('holidu.pmc.layout')

    .component('navbar', {

        bindings: {
            onShowMenu: '&'
        },

        templateUrl: '/pmc/js/layout/views/navigation/navbar.html'

    });
