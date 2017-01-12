(function (angular) {
    "use strict";

    angular.module("dogAdd").component("dogAdd",
    {
        templateUrl: 'app/dog-add/dog-add.template.html',
        controller: [
            '$http', '$location',
            function DogAddController($http, $location) {

                var location = $location;

                this.submit = function (form, dog) {
                    if (form.$valid) {
                        $http(
                        {
                            url: 'api/dog/add',
                            method: 'POST',
                            data: dog,
                            headers: { 'Content-Type': 'application/json' }
                        }).success(function (response) {
                            if (!response.success) {
                                alert(response.message);
                                return;
                            }
                            location.path('/details/' + response.modelId);
                        }).error(function(response) {
                            alert(response.message);
                        });
                    }
                }
            }
        ]
    });
})(angular);