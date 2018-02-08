
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("productTagCtrl", ["productService", "productResource", "$stateParams", "$state", productTagCtrl]);

    function productTagCtrl(productService, productResource, $stateParams, $state) {
        var vm = this;
        vm.product = {};
       
        productResource
            .get({ productId: $stateParams.productId })
            .$promise
            .then(function(data) {
                vm.product = data;
            });


        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.cancel = function () {
            $state.go('productList');
        };

        vm.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                toastr.error("Please enter one or more tags separated by commas");
            }
        };

        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    }
}());
