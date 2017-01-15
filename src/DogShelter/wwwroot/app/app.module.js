"use strict";

var dogShelterApp = angular.module("dogShelterApp", [
    "ngRoute",
    "dogList",
    "dogDetails",
    "dogEdit",
    "dogAdd"
]);

(function(dogShelterApp) {
    dogShelterApp.config([
        '$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/',
            {
                template: '<dog-list></dog-list>'
            }).when('/details/:dogId',
            {
                template: '<dog-details></dog-details>'
            }).when('/edit/:dogId',
            {
                template: '<dog-edit></dog-edit>'
            }).when('/add',
            {
                template: '<dog-add></dog-add>'
            }).otherwise('/');
        }
    ]);
})(dogShelterApp);

(function(dogShelterApp) {
    dogShelterApp.filter('yesNo',
        function() {
            return function(input) {
                return input ? 'YES' : 'NO';
            }
        });
})(dogShelterApp);