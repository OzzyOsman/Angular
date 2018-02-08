(function() {
    'use strict';

    angular
        .module('productManagement')
        .directive('eventTemplate', function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "app/directives/templates/eventTemplate.html",
                scope: {         //use scope to make the scope of each element using this directive unique
                    event: "=myEvent"  // OR "@myEvent" OR "&myEvent"
                } 
            };
        });
}());