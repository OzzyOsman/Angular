var homePageFile = require('../Pages/HomePage.js');

describe('Home Screen:', function () {
    var HomePage;

    beforeEach(function() {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();

        browser.waitForAngular();
    });

    it('Home Page Specs | Has 5 links in Menu | |', function () {
        expect(HomePage.Menu.count()).toBe(5);
    });

    ////////

    it('Home Page Specs | has Add Product link | | ', function () {
        expect(HomePage.AddProductMenu.getText()).toBe(' Add Product');
    });
    
    it('Home Page Specs | can link to Add Product | | ', function () {
        HomePage.AddProductMenu.click().locator();

        browser.sleep(100);

        var heading = element(by.css('.panel-heading'));

        expect(heading.getText()).toBe("Add New Product");
    });

    ///////

    it('Home Page Specs | has Add Price Analystics link | | ', function () {
        expect(HomePage.PriceAnalyticsMenu.getText()).toBe(' Price Analytics');
    });

    it('Home Page Specs | can link to Price Analystics | | ', function () {
        HomePage.PriceAnalyticsMenu.click().locator();

        browser.sleep(100);

        var heading = element(by.css('.panel-heading'));

        expect(heading.getText()).toBe("Price Analytics");
    });

    //////

    it('Home Page Specs | has Add Pop Over link | | ', function () {
        expect(HomePage.PopOverMenu.getText()).toBe(' Pop Over');
    });

    it('Home Page Specs | Can link to Pop Over | | ', function () {
        HomePage.PopOverMenu.click().locator();

        browser.sleep(100);
    });

    //////

    it('Home Page Specs | has Add Product List link | | ', function () {
        expect(HomePage.ProductsListMenu.getText()).toBe(' Product List');
    });

    it('Home Page Specs | Can link to Product List | | ', function () {
        HomePage.ProductsListMenu.click().locator();

        browser.sleep(100);

        var heading = element(by.css('.panel-heading'));

        expect(heading.getText()).toBe("Product List");
    });

});