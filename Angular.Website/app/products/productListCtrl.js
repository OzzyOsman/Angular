(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        vm.showImage = false;

        ////filtering
        vm.filters = [];
        vm.filterColumn = null;
        vm.operator = null;
        vm.filterValue = "";
        vm.tableColumns = [
            { Name: "Product Name", Value: "ProductName", Type: "Text" },
            { Name: "Product Code", Value: "ProductCode", Type: "Text" },
            { Name: "Release Date", Value: "ReleaseDate", Type: "Number" },
            { Name: "Price", Value: "Price", Type: "Number" }
        ];

        vm.Operators = [
            { Name: "Greather Than", Value: "gt", Type: "Number" },
            { Name: "Greather Than Or Equal To", Value: "ge", Type: "Number" },
            { Name: "Equals", Value: "eq", Type: "Any" },
            { Name: "Less Than", Value: "lt", Type: "Number" },
            { Name: "Les Than Or Equal To", Value: "le", Type: "Number" },
            { Name: "Not Equal", Value: "ne", Type: "Any" },
            { Name: "Begins With", Value: "startswith", Type: "Text" },
            { Name: "End With", Value: "endswith", Type: "Text" },
            { Name: "Contains", Value: "contains", Type: "Text" }
        ];

        vm.filterOperators = [];

        ///Sorting
        vm.sortProperty = "";
        vm.sortDirection = "asc";
        vm.sort = null;

        ////functions
        vm.setSort = setSort;
        vm.toggleSortDirection = toggleSortDirection;
        vm.filterData = filterData;
        vm.toggleImage = toggleImage;
        vm.setCell = setCell;
        vm.resetFilter = resetFilter;
        vm.setOperators = setOperators;

        vm.filterData();

        /////////////////

        function setSort(sortColumn) {
            vm.sortProperty = sortColumn;

            vm.filterData();
        }

        function toggleSortDirection() {
            vm.sortDirection = (vm.sortDirection === "asc") ? vm.sortDirection = "desc" : vm.sortDirection = "asc";

            vm.filterData();
        }

        function resetFilter() {
            vm.filterColumn = null;
            vm.operator = null;
            vm.filterValue = "";

            vm.filter = null;

            vm.filterData();
        }

        function filterData() {
            if (vm.filterColumn && vm.operator && vm.filterValue) {
          
                switch (vm.operator.Value) {
                    case "eq":
                        if (vm.filterColumn.Type === "Text") {
                            vm.filter = "tolower(" + vm.filterColumn.Value + ") " + vm.operator.Value + " '" + vm.filterValue.toLowerCase() + "'";
                        } else {
                            vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        }
                        break;
                    case "ne":
                        if (vm.filterColumn.Type === "Text") {
                            vm.filter = "tolower(" + vm.filterColumn.Value + ") " + vm.operator.Value + " '" + vm.filterValue.toLowerCase() + "'";
                        } else {
                            vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        }
                        break;
                    case "gt":
                        vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        break;
                    case "ge":
                        vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        break;
                    case "lt":
                        vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        break;
                    case "le":
                        vm.filter = vm.filterColumn.Value + " " + vm.operator.Value + " " + vm.filterValue;
                        break;
                    case "startswith":
                        vm.filter = "startswith(tolower(" + vm.filterColumn.Value + "), '" + vm.filterValue.toLowerCase() + "')";
                        break;
                    case "endswith":
                        vm.filter = "endswith(tolower(" + vm.filterColumn.Value + "), '" + vm.filterValue.toLowerCase() + "')";
                        break;
                    case "contains":
                        vm.filter = "contains(tolower(" + vm.filterColumn.Value + "), '" + vm.filterValue.toLowerCase() + "')";
                        break;
                }
            };

            vm.sort = (vm.sortProperty) ? vm.sortProperty + " " + vm.sortDirection : null;

            productResource.query(
                {
                    $filter: vm.filter,
                    $orderby: vm.sort
                },
                function (data) {
                    vm.products = data;
            });
        }

        function setOperators() {
            vm.filterOperators = [];

            for (var i = 0; i < vm.Operators.length; i++) {
                if (vm.Operators[i].Type === vm.filterColumn.Type || vm.Operators[i].Type === "Any") {
                    vm.filterOperators.push(vm.Operators[i]);
                }
            }
        }
        
        function toggleImage() {
            vm.showImage = !vm.showImage;
        }

        function setCell(item) {
            vm.cellValue = item;
        }
    }
}());
