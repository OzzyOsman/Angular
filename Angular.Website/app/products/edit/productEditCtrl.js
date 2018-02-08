
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("productEditCtrl", ["productService", "productResource", "$stateParams", "$state", productEditCtrl]);

    function productEditCtrl(productService, productResource, $stateParams, $state) {
        var vm = this;
        vm.product = {};
        vm.priceOption = "Percent";

        productResource
            .get({ productId: $stateParams.productId })
            .$promise
            .then(function(data) {
                vm.product = data;
                initialise();
            });

        function initialise() {
            if (vm.product && vm.product.productId) {
                vm.title = "Edit: " + vm.product.productName;
            } else {
                vm.title = "Add New Product";
            }
        }

        vm.marginPercent = function () {
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        }

        vm.CalculatePrice = function() {
            var price = 0;
            vm.product.price = null;

            if (vm.priceOption == 'Amount' && vm.markupAmount) {
                price = productService.calculatePriceFromMarkupAmount(vm.markupAmount, vm.product.cost);
            }

            if (vm.priceOption == 'Percent' && vm.markupAmount) {
                price = productService.calculatePriceFromMarkupPercent(vm.markupAmount, vm.product.cost);
            }

            if (price > 0) {
                vm.product.price = price;
            }
        }

        vm.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = !vm.opened;
        };

        vm.submit = function (isValid) {
            if (isValid) {
                vm.product.$save(function(data) {
                    toastr.success("Save Successful");
                });
            } else {
                toastr.error("Please correct the validation errors first.");
            }
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
