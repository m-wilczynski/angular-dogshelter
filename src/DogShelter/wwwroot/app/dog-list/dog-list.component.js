(function(angular) {
    "use strict";

    angular.module("dogList").component("dogList",
    {
        templateUrl: 'app/dog-list/dog-list.template.html',
        controller: [
            "$http", function DogListController($http) {
                var self = this;
                self.orderProp = "name";

                $http.get('api/dog/').then(function(response) {
                    self.dogs = response.data;
                });
            }
        ]
    });
})(angular);