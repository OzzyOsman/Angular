var homePageFile = require('../Pages/HomePage.js');
var productPageFile = require('../Pages/ProductPage.js');

var testData = require('../TestData/SearchTagData.json');

describe('Data Driven Tests:', function() {
    var HomePage, ProductPage;
    var addButton;
    var testName, newTag;

    beforeEach(function() {
        browser.get('http://localhost/Angular.Website/#/');

        HomePage = new homePageFile();
        ProductPage = new productPageFile();

        HomePage.AddProductMenu.click().locator();
        ProductPage.SearchTagsButton.click().locator();

        addButton = element(by.buttonText('Add'));

        browser.sleep(200);
        browser.waitForAngular();
    });

    it('Datadriven EditTags Specs | should run data driven tests |  | ', function () {
        console.log(testData);

        if (browser.params.browser == "safari" || browser.params.browser == "firefox") {
            //Do it special
        }
    });

    testData.tagData.forEach(function (data) {
        newTag = data.tag;
        testName = 'Datadriven EditTags Specs | ' + data.testDescription + " |  | ";

        it(testName, function () {
            element(by.model('vm.newTags')).sendKeys(newTag);
            addButton.click();

            browser.sleep(2000);

            tagButton = element(by.buttonText(newTag));
            tagsList = element.all(by.repeater('vm.product.tags'));

            expect(tagButton).toBeDefined();
            expect(tagsList.get(0).getText()).toMatch(newTag);
        });
    });        


    it('Datadriven EditTags Specs | Add button should add 2 new search tags |  | ', function () {
        for (var i = 0; i < testData.tagData.length; i++) {
            newTag = testData.tagData[i].tag;

            //console.log(newTag);

            element(by.model('vm.newTags')).sendKeys(newTag);
            addButton.click();

            browser.sleep(200);

            tagButton = element(by.buttonText(newTag));
            var tagsList = element.all(by.repeater('vm.product.tags'));

            expect(tagButton).toBeDefined();
            expect(tagsList.get(i).getText()).toMatch(newTag);
        };
    });
});