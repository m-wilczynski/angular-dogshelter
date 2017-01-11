"use strict";

angular.module("dogDetails").component("dogDetails",
{
    templateUrl:  'app/dog-details/dog-details.template.html',
    controller: ['$routeParams', '$http',
        function DogDetailsController($routeParams, $http) {
            var self = this;
            self.orderProp = "name";

            $http.get('api/dog/'+$routeParams.dogId).then(function (response) {
                self.dog = response.data;
            });
        }
    ]
});