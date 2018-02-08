(function() {
    angular.module("productManagement")
        .directive('controllerDirectiveTwo', function() {
            return {
                restrict: "E",
                replace: true,
                template: "<button class='btn btn-sm btn-danger' ng-click='showError()'>Click Me</button>",
                controller: toastCtrl
            }
        });

    angular
        .module('productManagement')
        .controller('toastCtrl', [toastCtrl]);

    function toastCtrl($scope) {
        $scope.showError = showError;

        function showError() {
            toastr.error("Omg, you clicked the button", "Error");
        }
    }
}());