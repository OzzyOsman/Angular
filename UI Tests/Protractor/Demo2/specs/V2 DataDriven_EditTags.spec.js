var homePageFile = require('../Pages/HomePage.js');

describe('Home Screen:', function () {
    var HomePage;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();

        browser.waitForAngular();
    });

    it('Home Page Specs | test 1 |  | ', function () {
        expect(HomePage.Menu.count()).toBe(5);
    });

    ////////

    it('Home Page Specs | test 2 |  | ', function () {
        expect(HomePage.AddProductMenu.getText()).toBe(' Add Product');
    });

    it('Home Page Specs | test 3 |  | ', function () {
        HomePage.AddProductMenu.click().locator();

        browser.sleep(100);

        var heading = element(by.css('.panel-heading'));

        expect(heading.getText()).toBe("Add New Product");
    });

    ///////

    it('Home Page Specs | test 4 |  | ', function () {
        expect(HomePage.PriceAnalyticsMenu.getText()).toBe(' Price Analytics');
    });
});