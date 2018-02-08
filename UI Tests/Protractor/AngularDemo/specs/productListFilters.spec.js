var homePageFile = require('../Pages/HomePage.js');

describe('Product Fiters:', function () {
    var button;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();

        HomePage.ProductsListMenu.click().locator();

        browser.sleep(200);
        browser.waitForAngular();
    });

    it('Product - List  Filter Specs | should reset filters when Clear Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Clear Filter'));
        
        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Contains');
        filterValue.sendKeys('Leaf');

        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);
        
        filterColumn = element(by.model('vm.filterColumn'));

        element(by.model('vm.filterColumn'))
          .$('option:checked')
           .getText()
          .then(function (inputValue) {
              console.log(inputValue);
          });

        expect(filterColumn.getAttribute('value')).toEqual('');
        expect(operatorValue.getAttribute('value')).toBe('');
        expect(filterValue.getAttribute('value')).toBe('');
    });

    //////

    it('Product - List  Filter Specs | should filter by Product Name when "Equals" filter option selected, filter value entered and Apply Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Apply Filter'));

        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Equals');
        filterValue.sendKeys('Leaf Rake');
        
        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);

        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.count()).toBe(1);
        expect(productnNames.get(0).getText()).toMatch('Leaf Rake');
    });

    it('Product - List  Filter Specs | should filter by Product Name when "Contains" filter option selected, filter value entered and Apply Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Apply Filter'));

        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Contains');
        filterValue.sendKeys('Leaf');
        
        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);

        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.count()).toBe(1);
        expect(productnNames.get(0).getText()).toMatch('Leaf Rake');
    });

    it('Product - List  Filter Specs| should filter by Product Name when "Begins With" filter option selected, filter value entered and Apply Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Apply Filter'));

        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Begins With');
        filterValue.sendKeys('Lea');

        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);

        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.count()).toBe(1);
        expect(productnNames.get(0).getText()).toMatch('Leaf Rake');
    });

    it('Product  - List  Filter Specs | should filter by Product Name when "end With" filter option selected, filter value entered and Apply Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Apply Filter'));

        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Ends With');
        filterValue.sendKeys('ake');
        
        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);

        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.count()).toBe(1);
        expect(productnNames.get(0).getText()).toMatch('Leaf Rake');
    });

    it('Product - List  Filter Specs | should filter by Product Name when "Not Equal" filter option selected, filter value entered and Apply Filter is clicked | | ', function () {
        var filterColumn = element(by.model('vm.filterColumn'));
        var operatorValue = element(by.model('vm.operator'));
        var filterValue = element(by.model('vm.filterValue'));

        button = element(by.buttonText('Apply Filter'));

        filterColumn.sendKeys('Product Name');
        operatorValue.sendKeys('Not Equal');
        filterValue.sendKeys('ake');
        
        browser.sleep(100);
        button.sendKeys(protractor.Key.ENTER);
        browser.sleep(100);

        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.count()).toBe(5);
    });
});