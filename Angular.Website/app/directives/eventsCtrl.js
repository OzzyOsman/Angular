
(function () {
    "use strict";

    angular
        .module("productManagement")
        .controller("eventsCtrl", [eventsCtrl]);

    function eventsCtrl(logger) {
        var vm = this;

        vm.sampleData1 = "some data";
        vm.sampleData2 = "";
        vm.votesCount = 1;
        vm.field = { Id: 1, Value: 10000 };

        vm.fieldArray = [
          { Id: 1, Value: 1000.00, Cost: 987.00 },
          { Id: 2, Value: 1200.00, Cost: 680.00 },
          { Id: 3, Value: 8600.00, Cost: 353.00 }
        ];

        vm.editFieldId = null;

        vm.events = [
            {
                Name: "Event 1",
                Date: "01 Jul 2015",
                Time: "20:00",
                Location: {
                    Address: "Street 1",
                    City: "City 1",
                    Province: "Province 1"
                }
            },
            {
                Name: "Event 2",
                Date: "02 Aug 2015",
                Time: "21:00",
                Location: {
                    Address: "Street 2",
                    City: "City 2",
                    Province: "Province 2"
                }
            },
            {
                Name: "Event 3",
                Date: "03 Sep 2015",
                Time: "19:30",
                Location: {
                    Address: "Street 3",
                    City: "City 3",
                    Province: "Province 3"
                }
            },
            {
                Name: "Event 4",
                Date: "04 Oct 2015",
                Type: "19:00",
                Location: {
                    Address: "Street 4",
                    City: "City 4",
                    Province: "Province 4"
                }
            }
        ];

        vm.mainEvent = vm.events[0];

        vm.voteUp = voteUp;
        vm.voteDown = voteDown;
        vm.setEditable = setEditable;
        ////////
        
        function setEditable(fieldId) {
            vm.editFieldId = fieldId;

            if (fieldId == null) {
                toastr.warning("Save data and then do other stuff here", "Warning");
            }
        }

        function voteUp() {
            vm.votesCount++;
        }

        function voteDown() {
            if (vm.votesCount > 0) {
                vm.votesCount--;
            }
        }
    }
}());
