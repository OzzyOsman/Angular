var homePageFile = require('../Pages/HomePage.js');
var productPageFile = require('../Pages/ProductPage.js');

describe('Edit Product Basic Info:', function () {
    var HomePage, ProductPage;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();
        ProductPage = new productPageFile();

        HomePage.AddProductMenu.click().locator();
        ProductPage.InformationButton.click().locator();

        browser.sleep(200);

        browser.waitForAngular();
    });

    it('Product - Edit Info Specs | save button should be disabled when page first loaded | | ', function () {
        var css = ProductPage.SaveButton.getAttribute('disabled');

        expect(css).toMatch('true');
    });

    it('Product - Edit Info Specs | when only productName entered should NOT enable save button | | ', function () {
        element(by.model('vm.product.productName')).sendKeys('New Product');

        browser.sleep(300);

        var css = ProductPage.SaveButton.getAttribute('disabled');

        expect(css).toMatch('true');
    });

    it('Product - Edit Info Specs | when productName and Code entered should enable save button | | ', function () {
        element(by.model('vm.product.productName')).sendKeys('New Product');

        element(by.model('vm.product.productCode')).sendKeys('asdf1de');

        browser.sleep(300);

        var css = ProductPage.SaveButton.getAttribute('disabled');

        expect(css).not.toMatch('true');
    });

    it('Product - Edit Info Specs | when save button clicked should show success toast | | ', function () {
        element(by.model('vm.product.productName')).sendKeys('New Product');

        element(by.model('vm.product.productCode')).sendKeys('asdf1de');

        ProductPage.SaveButton.click().locator();
 
        var toast = element(by.css('.toast toast-success'));
        
        browser.sleep(200);

        expect(toast).toBeDefined();
    });

    it('Product - Edit Info Specs | when cancel button clicked should navigate to product list page | | ', function () {
        ProductPage.CancelButton.click();

        var heading = element(by.css('.panel-heading'));

        browser.sleep(200);

        expect(heading.getText()).toBe("Product List");
    });
});