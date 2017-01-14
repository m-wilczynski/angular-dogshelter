(function(angular) {
    "use strict";

    angular.module("dogEdit").component("dogEdit",
    {
        templateUrl: 'app/dog-edit/dog-edit.template.html',
        controller: [
            '$http', '$routeParams', '$location', '$scope',
            function DogEditController($http, $routeParams, $location, $scope) {

                var self = this;
                var location = $location;
                var scope = $scope;

                $http.get('api/dog/' + $routeParams.dogId).then(function (response) {
                    if (response.data.broughtToShelter)
                        response.data.broughtToShelter = new Date(response.data.broughtToShelter);
                    if (response.data.adoptedOn)
                        response.data.adoptedOn = new Date(response.data.adoptedOn);
                    scope.dog = response.data;
                });

                this.submit = function (form, dog) {
                    if (form.$valid) {
                        $http(
                        {
                            url: 'api/dog/edit',
                            method: 'PUT',
                            data: dog,
                            headers: { 'Content-Type': 'application/json' }
                        }).success(function (response) {
                            if (!response.success) {
                                alert(response.message);
                                return;
                            }
                            location.path('/details/' + response.modelId);
                        }).error(function (response) {
                            alert(response.message);
                        });
                    }
                }
            }
        ]
    });
})(angular);