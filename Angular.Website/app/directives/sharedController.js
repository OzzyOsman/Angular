(function() {
    "use strict";

    angular
        .module('productManagement')
        .directive('greetingsDirective', function () {
            return {
                restrict: "E",
                replace: true,
                priority: -1,
                scope: {},
                template: "<button class='btn btn-sm btn-primary' ng-click='sayHello()'>Say Hello</button>",
                controller: function($scope) {
                    $scope.sayHello = sayHello;
                    this.addGreeting = addGreeting;


                    var greetings = ["Hello !"];

                    function sayHello() {
                        alert(greetings.join());
                    }

                    function addGreeting(greeting) {
                        greetings.push(greeting);
                    }
                }
            }
        });

    angular
        .module('productManagement')
        .directive('greetingsTurkish', function () {
            return {
                restrict: "A",
                priority: -1,                                                    
                //terminal: true,                                                 //prevents directives with lower priority from executing afterwards
                require: "greetings-directive",
                link: function(scope, element, attrs, controller) {
                    controller.addGreeting(" Selam !");
                }
            }
        });


    angular
        .module('productManagement')
        .directive('greetingsFinish', function () {
            return {
                restrict: "A",
                priority: -2,
                require: "greetingsDirective",
                link: function (scope, element, attrs, controller) {
                    controller.addGreeting(" Hei !");
                }
            }
        });

}());