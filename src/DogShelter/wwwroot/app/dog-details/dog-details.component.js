﻿(function(angular) {
    "use strict";

    angular.module("dogDetails").component("dogDetails",
    {
        templateUrl: 'app/dog-details/dog-details.template.html',
        controller: [
            '$routeParams', '$http',
            function DogDetailsController($routeParams, $http) {

                var self = this;

                $http.get('api/dog/' + $routeParams.dogId).then(function (response) {
                    self.dog = response.data;
                });
            }
        ]
    });
})(angular);