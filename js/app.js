angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: "packagesController",
                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsController',
                controllerAs: 'vm'
            })
            .state('home.adventurers',{
                url:'/adventurers',
                templateUrl: "../views/about-adventurers.html"
            })
            .state('home.contact',{
                url:'/contact',
                templateUrl: "../views/contact.html"
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedController',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/');
    });
