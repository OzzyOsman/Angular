(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productService", productService);

    function productService() {
        function calculateMarginPercent(price, cost) {
            var margin = 0;

            if (price && cost) {
                margin = (100 * (price - cost)) / price;
                margin = Math.round(margin);
            }

            return margin;
        }

        function calculateMarginAmount(price, cost) {
            var margin = 0;

            if (price && cost) {
                margin = price - cost;
            }

            return margin;
        }

        function calculatePriceFromPercent(percent, cost) {
            var price = 0;

            if (percent && cost) {
                price = cost + (cost * percent / 100);
                price = Math.round(price * 100) / 100;
            }

            return price;
        }

        function calculatePriceFromAmount(amount, cost) {
            var price = 0;

            if (amount && cost) {
                price = cost + amount;
                price = Math.round(price * 100) / 100;
            }

            return price;
        }

        return {
            calculateMarginPercent: calculateMarginPercent,
            calculateMarginAmount: calculateMarginAmount,
            calculatePriceFromMarkupPercent: calculatePriceFromPercent,
            calculatePriceFromMarkupAmount: calculatePriceFromAmount
        }
    }
})();