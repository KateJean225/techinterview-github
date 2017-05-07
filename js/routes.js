// Specify routes for tab controls
angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {



    $urlRouterProvider.otherwise('/generalevents');

        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('generalevents', {
                url: '/generalevents',
                templateUrl: 'partials/generalevents.html',
                controller: 'PublicEventsCtrl'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('userspecific', {
                url: '/userspecific',
                templateUrl: 'partials/userspecific.html',
                controller: 'UserCtrl'
            });
    });