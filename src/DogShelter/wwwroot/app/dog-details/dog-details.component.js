"use strict";

angular.module("dogDetails").component("dogDetails",
{
    template:
        "<div class='container'>" +
            "<div>{{$ctrl.dog.name}}</div>" +
            "<div>{{$ctrl.dog.age}}</div>" +
            "<div>{{$ctrl.dog.broughtToShelter}}</div>" +
            "<div>{{$ctrl.dog.careTaker}}</div>" +
            "<div>{{$ctrl.dog.adopted}}</div>" +
        "</div>",
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