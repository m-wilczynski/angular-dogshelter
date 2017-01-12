"use strict";

angular.module("dogEdit").component("dogEdit",
{
    templateUrl: 'app/dog-edit/dog-edit.template.html',
    controller: ['$routeParams', '$http',
        function DogEditController($scope, $http) {

            this.model = {};
            this.submit = function (form, dog) {
                if (form.$valid) {
                    alert(dog);
                }
            }
            this.dog = angular.copy($scope.model);
        }
    ]
});