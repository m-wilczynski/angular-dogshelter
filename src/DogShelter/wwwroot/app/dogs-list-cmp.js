"use strict";

angular.module("dogShelterApp").component("dogsList",
{
    template:
        "<div class='container'>" +
        "<table class='table'>" +
            "<thead>" +
                "<tr>" +
                    "<th>Name</th>" +
                    "<th>Age</th>" +
                    "<th>Brought to shelter on</th>" +
                    "<th>Caretaker</th>" +
                    "<th>Adopted?</th>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
                "<tr ng-repeat='dog in $ctrl.dogs'>" +
                    "<td>{{dog.name}}</td>" +
                    "<td>{{dog.age}}</td>" +
                    "<td>{{dog.broughtToShelter}}</td>" +
                    "<td>{{dog.careTaker}}</td>" +
                    "<td>{{dog.adopted}}</td>" +
                "</tr>" +
            "</tbody>" +
        "</table>" +
        "</div>",
    controller: function DogListController() {
        this.dogs = [
            {
                name: "Piksel",
                age: 10,
                broughtToShelter: "01-10-2017",
                careTaker: "Michal",
                adopted: true
            },
            {
                name: "Zuzia",
                age: 4,
                broughtToShelter: "01-10-2017",
                careTaker: "Michal",
                adopted: true
            },
            {
                name: "Ruby",
                age: 7,
                broughtToShelter: "01-10-2017",
                careTaker: "Michal",
                adopted: true
            }
        ];
    }
});