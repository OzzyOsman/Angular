var homePageFile = require('../Pages/HomePage.js');

describe('Products List:', function () {
    var HomePage;
    var button, buttonSort;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();

        HomePage.ProductsListMenu.click().locator();

        browser.sleep(200);
        browser.waitForAngular();
    });
    
    it('Product - List View Specs | should show all Products | | ', function () {
        var products = element.all(by.repeater('product in vm.products'));

        expect(products.count()).toBe(5);
    });

    //////

    it('Product - List View Specs | images should be shown when ShowImage button is clicked | | ', function () {
        button = element(by.buttonText('Show Image'));

        button.click();

        button = element(by.buttonText('Hide Image'));

        var list = element.all(by.css('.panel-body table tr td img'));

        browser.sleep(200);

        expect(button).toBeDefined();

        expect(list.get(0).getAttribute('title')).toMatch('Leaf Rake');
        expect(list.get(1).getAttribute('title')).toMatch('Garden Cart');
        expect(list.get(2).getAttribute('title')).toMatch('Hammer');
        expect(list.get(3).getAttribute('title')).toMatch('Saw');
        expect(list.get(4).getAttribute('title')).toMatch('Video Game Controller');
    });

    ///////

    it('Product - List View Specs | should show Product Names | | ', function () {
        var productnNames = element.all(by.repeater('product in vm.products').column('productName'));

        expect(productnNames.get(0).getText()).toMatch('Leaf Rake');
        expect(productnNames.get(1).getText()).toMatch('Garden Cart');
        expect(productnNames.get(2).getText()).toMatch('Hammer');
        expect(productnNames.get(3).getText()).toMatch('Saw');
        expect(productnNames.get(4).getText()).toMatch('Video Game Controller');

        browser.sleep(100);

    });

    it('Product - List View Specs | Should navigate to Product Detail Page when Product Name is clicked | | ', function () {
        var productNames = element.all(by.repeater('product in vm.products').column('productName'));

        var link = productNames.get(0);

        var productName = productNames
            .get(0)
            .getAttribute('linkText')
            .getText();

        //productName.getText().then(function (inputValue) {
        //    console.log(inputValue);
        //});

        link.click();

        browser.sleep(100);

        var pageTitle = element(by.css('.panel-heading'));

        expect(pageTitle.getText()).toMatch(productName);
    });

    it('Product - List View Specs | should sort by Product Name asc when Product Name is clicked | | ', function () {
        button = element(by.buttonText('Product Name'));

        button.click();

        browser.sleep(100);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('Garden Cart');
    });

    it('Product - List View Specs | should sort by Product Name desc when Product Name sort button is clicked | | ', function () {
        button = element(by.buttonText('Product Name'));
        buttonSort = element(by.css('.sort'));

        button.click();
        buttonSort.click();

        browser.sleep(300);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('Video Game Controller ');
    });

    //////

    it('Product - List View Specs | should show Product Codes | | ', function () {
        var productnNames = element.all(by.repeater('product in vm.products').column('productCode'));

        expect(productnNames.get(0).getText()).toMatch('GDN-0011');
        expect(productnNames.get(1).getText()).toMatch('GDN-0023');
        expect(productnNames.get(2).getText()).toMatch('TBX-0048');
        expect(productnNames.get(3).getText()).toMatch('TBX-0022');
        expect(productnNames.get(4).getText()).toMatch('GMG-0042');
    });
  
    it('Product - List View Specs | should sort by Product Code asc when Product Code is clicked | | ', function () {
        button = element(by.buttonText('Product Code'));

        button.click();

        browser.sleep(100);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('GDN-0011');
    });

    it('Product - List View Specs | should sort by Product Code desc when Product Code sort button is clicked | | ', function () {
        button = element(by.buttonText('Product Code'));
        buttonSort = element(by.css('.sort'));

        button.click();
        buttonSort.click();

        browser.sleep(300);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('TBX-0048');
    });

    //////
    
    it('Product - List View Specs | should show Release Dates | | ', function () {
        var productnNames = element.all(by.repeater('product in vm.products').column('releaseDate'));

        expect(productnNames.get(0).getText()).toMatch('May 10, 2013');
        expect(productnNames.get(1).getText()).toMatch('Mar 18, 2010');
        expect(productnNames.get(2).getText()).toMatch('May 21, 2013');
        expect(productnNames.get(3).getText()).toMatch('May 15, 2009');
        expect(productnNames.get(4).getText()).toMatch('Oct 15, 2002');
    });

    it('Product - List View Specs | should sort by Release Date asc when Release Date is clicked | | ', function () {
        button = element(by.buttonText('Release Date'));

        button.click();

        browser.sleep(100);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('Oct 15, 2002');
    });

    it('Product - List View Specs | should sort by Release Date desc when Release Date sort button is clicked | | ', function () {
        button = element(by.buttonText('Release Date'));
        buttonSort = element(by.css('.sort'));

        button.click();
        buttonSort.click();

        browser.sleep(300);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('May 21, 2013');
    });

    //////

    it('Product - List View Specs | should show Product Prices | | ', function () {
        var productnNames = element.all(by.repeater('product in vm.products').column('price'));

        expect(productnNames.get(0).getText()).toMatch('19.95');
        expect(productnNames.get(1).getText()).toMatch('32.99');
        expect(productnNames.get(2).getText()).toMatch('8.99');
        expect(productnNames.get(3).getText()).toMatch('11.55');
        expect(productnNames.get(4).getText()).toMatch('35.95');
    });
   
    it('Product - List View Specs | should sort by Product Price asc when Price is clicked | | ', function () {
        button = element(by.buttonText('Price'));

        button.click();

        browser.sleep(100);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('8.99');
    });

    it('Product - List View Specs | should sort by Product Price desc when Product Price sort button is clicked | | ', function () {
        button = element(by.buttonText('Price'));
        buttonSort = element(by.css('.sort'));

        button.click();
        buttonSort.click();

        browser.sleep(300);

        var products = element.all(by.repeater('product in vm.products'));

        expect(products.get(0).getText()).toMatch('35.95');
    });

    //////

    it('Product - List View Specs | Should navigate to Product Editor Page when Edit Button is clicked | | ', function () {
        var buttonList = element.all(by.buttonText('Edit'));

        button = buttonList.get(0).click();

        browser.sleep(200);

        var pageTitle = element(by.css('.panel-heading'));

        expect(pageTitle.getText()).toMatch('Edit: Leaf Rake');
    });
});