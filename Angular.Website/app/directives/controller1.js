(function() {
    angular.module("productManagement")
        .directive('controllerDirectiveOne', function() {
            return {
                restrict: "E",
                replace: true,
                template: "<button class='btn btn-sm btn-warning' ng-click='showWarning()'>Click Me</button>",
                controller: function($scope) {
                    $scope.showWarning = showWarning;
                    
                    function showWarning() {
                        toastr.warning("Omg, you clicked the button", "Warning");
                    }
                }
            }
        });
}());