var homePageFile = require('../Pages/HomePage.js');
var productPageFile = require('../Pages/ProductPage.js');

describe('Edit Product Price:', function () {
    var HomePage, ProductPage;

    var MarkupPercentButton, MarkupAmountButton, CalculateButton, MarkupLabel;
    var CostInput, PriceInput, MarkupInput;
    var Price;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();
        ProductPage = new productPageFile();

        HomePage.AddProductMenu.click().locator();
        ProductPage.PriceOptionsButton.click().locator();

        MarkupPercentButton = element(by.buttonText('Markup %'));
        MarkupAmountButton = element(by.buttonText('Markup $'));
        CalculateButton = element(by.buttonText('Calculate'));

        CostInput = element(by.name('inputCost'));
        MarkupInput = element(by.name('inputMarkup'));

        browser.sleep(500);

        browser.waitForAngular();
    });

    it('Product - Edit Price Specs | when MarkupPercent button clicked should change label and price option on view model | | ', function () {
        MarkupPercentButton.click();

        MarkupLabel = element(by.name('labelMarkup'));

        browser.sleep(200);

        expect(MarkupLabel.getText()).toBe("Markup Percentage");
    });

    it('Product - Edit Price Specs | when MarkupAmount button clicked should change label and price option on view model | | ', function () {
        MarkupAmountButton.click();

        MarkupLabel = element(by.name('labelMarkup'));

        browser.sleep(200);

        expect(MarkupLabel.getText()).toBe("Markup Amount");
    });

    it('Product - Edit Price Specs | when Calculate button clicked should calculate Price if Markup Percent selected | | ', function () {
        CostInput.sendKeys('15');
        MarkupInput.sendKeys('10');

        CalculateButton.click();

        PriceInput = element(by.name('inputPrice'));
        Price = element(by.model('vm.product.price'));

        browser.sleep(200);

        expect(PriceInput.getAttribute('value')).toBe("16.5");
        expect(Price.getAttribute('value')).toBe('16.5');
    });

    it('Product - Edit Price Specs | when Calculate button clicked should calculate Price if Markup Percent selected | | ', function () {
        MarkupAmountButton.click();

        CostInput.sendKeys('15');
        MarkupInput.sendKeys('10');

        CalculateButton.click();

        PriceInput = element(by.name('inputPrice'));
        Price = element(by.model('vm.product.price'));

        browser.sleep(200);

        expect(PriceInput.getAttribute('value')).toBe("25");
        expect(Price.getAttribute('value')).toBe('25');
    });
    
    it('Product - Edit Price Specs | when Calculate button clicked should not calculate Price if Markup not entered | | ', function () {
        CostInput.sendKeys('15');

        CalculateButton.click();

        PriceInput = element(by.name('inputPrice'));
        Price = element(by.model('vm.product.price'));

        browser.sleep(200);

        expect(PriceInput.getText()).toBe('');
        expect(Price.getAttribute('value').getText()).toBe('');
    });

    it('Product - Edit Price Specs | when cancel button clicked should navigate to product list page | | ', function () {
        ProductPage.CancelButton.click();

        var heading = element(by.css('.panel-heading'));

        browser.sleep(200);

        expect(heading.getText()).toBe("Product List");
    });
});