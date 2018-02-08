var homePageFile = require('../Pages/HomePage.js');
var productPageFile = require('../Pages/ProductPage.js');

describe('Edit Product:', function () {
    var HomePage, ProductPage;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();
        ProductPage = new productPageFile();

        HomePage.AddProductMenu.click().locator();

        browser.sleep(100);

        browser.waitForAngular();
    });

    it('Product - Edit specs | when Basic Information clicked should show Product Information | | ', function () {
        ProductPage.InformationButton.click();

        browser.sleep(200);

        var heading = element(by.tagName('legend'));

        expect(heading.getText()).toBe("Product Information");
    });
    
    it('Product - Edit specs | when Price Details clicked should show Product Price Details | | ', function () {
        ProductPage.PriceOptionsButton.click();

        browser.sleep(200);

        var heading = element(by.tagName('legend'));

        expect(heading.getText()).toBe("Product Price Details");
    });

    it('Product - Edit specs | when Search Tags clicked should show Product Search Tags | | ', function () {
        ProductPage.SearchTagsButton.click();

        browser.sleep(200);

        var heading = element(by.tagName('legend'));

        expect(heading.getText()).toBe("Product Search Tags");
    });

    it('Product - Edit specs | when cancel button clicked should navigate to product list page | | ', function () {
        ProductPage.CancelButton.click();

        var heading = element(by.css('.panel-heading'));

        browser.sleep(200);

        expect(heading.getText()).toBe("Product List");
    });
});