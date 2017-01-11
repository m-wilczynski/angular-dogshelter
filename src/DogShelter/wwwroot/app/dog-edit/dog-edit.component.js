"use strict";

angular.module("dogEdit").component("dogEdit",
{
    templateUrl: 'app/dog-edit/dog-edit.template.html',
    controller: ['$routeParams', '$http',
        function DogEditController($scope, $http) {

            $scope.model = {};
            $scope.submit = function(dog) {
                console.log(dog);
            }
            $scope.dog = angular.copy($scope.model);
        }
    ]
});