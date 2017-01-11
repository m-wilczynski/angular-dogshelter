"use strict";

var dogShelterApp = angular.module("dogShelterApp", [
    "ngRoute",
    "dogList",
    "dogDetails",
    "dogEdit"
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
          when('/edit/:dogId', {
              template: '<dog-edit></dog-edit>'
          }).
          when('/add/',
          {
            template: '<dog-add></dog-add>'
          }).
          otherwise('/');
    }
]);