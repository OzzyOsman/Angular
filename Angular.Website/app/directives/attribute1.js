(function () {
    "use strict";

    angular
        .module("productManagement")
        .directive('attributeOne', function() {
        return {
            restrict: 'E',
            template: "<input type='text' ng-model='vm.sampleData1' /> {{ vm.sampleData1 }} <br/>"
        };
    });
}());