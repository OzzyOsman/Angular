var homePageFile = require('../Pages/HomePage.js');
var productPageFile = require('../Pages/ProductPage.js');

describe('Edit Product Tags:', function () {
    var HomePage, ProductPage;
    var addButton;

    beforeEach(function () {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();
        ProductPage = new productPageFile();

        HomePage.AddProductMenu.click().locator();
        ProductPage.SearchTagsButton.click().locator();

        addButton = element(by.buttonText('Add'));

        browser.sleep(200);

        browser.waitForAngular();
    });

    it('Product - Edit Tags Specs | Add button should add new search tag if tag entered | | ', function () {
        var newTag = "Hello";
        element(by.model('vm.newTags')).sendKeys(newTag);
        addButton.click();

        browser.sleep(200);

        tagButton = element(by.buttonText(newTag));
        var tagsList = element.all(by.repeater('vm.product.tags'));

        expect(tagButton).toBeDefined();
        expect(tagsList.count()).toBe(1);
        expect(tagsList.get(0).getText()).toMatch(newTag);
    });

    it('Product - Edit Tags Specs | Add button should show error toast if new search tag not entered | | ', function () {
        addButton.click();

        var toast = element(by.css('.toast toast-error'));

        browser.sleep(300);

        expect(toast).toBeDefined();
    });

    it('Product - Edit Tags Specs | tag button should remove new search tag when clicked | | ', function () {
        var newTag = "Hello";
        element(by.model('vm.newTags')).sendKeys(newTag);
        addButton.click();

        tagButton = element(by.buttonText(newTag));
        
        tagButton.click();

        var tagsList = element.all(by.model('vm.product.tags'));

        browser.sleep(200);

        expect(tagsList.count()).toBe(0);
    });

    it('Product - Edit Tags Specs | when cancel button clicked should navigate to product list page | | ', function () {
        ProductPage.CancelButton.click();

        var heading = element(by.css('.panel-heading'));

        browser.sleep(200);

        expect(heading.getText()).toBe("Product List");
    });
});