"use strict";

var dogShelterApp = angular.module("dogShelterApp", [
    "ngRoute",
    "dogList",
    "dogDetails"
]);

dogShelterApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
              template: '<dog-list></dog-list>'
          }).
          when('/:dogId', {
              template: '<dog-details></dog-details>'
          }).
          otherwise('/');
    }
]);