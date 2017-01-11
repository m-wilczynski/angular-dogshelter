"use strict";

angular.module("dogDetails").component("dogDetails",
{
    template:
        "<div class='container'>" +
            "<div>{{dog.name}}</div>" +
            "<div>{{dog.age}}</div>" +
            "<div>{{dog.broughtToShelter}}</div>" +
            "<div>{{dog.careTaker}}</div>" +
            "<div>{{dog.adopted}}</div>" +
        "</div>",
    controller: ['$routeParams',
        function DogDetailsController($routeParams) {
            alert("Hello" + $routeParams);
        }
    ]
});