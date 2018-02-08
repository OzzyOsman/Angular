// An example configuration file.
var reporter = require('protractor-multicapabilities-htmlreporter_v2');

var dataPath = './Protractor/AngularDemo/TestData/ptor-out-Chrome.json';
var reportPath = "./Protractor/Reports";

var reportTitle = "UI Tests - Chrome";
var reportFileName = reportPath + '/AngularDemo UI Report_Chrome.html';

exports.config = {
    onPrepare: function () {
        //setup browser size
        browser.driver.manage().window().setSize(1400, 900);

        //browser.getCapabilities().then(function (cap) {
        //    browser.params.browser = cap.caps_.browserName;
        //});
    },

    resultJsonOutputFile: dataPath,

    afterLaunch: function() {
        reporter.generateHtmlReport(dataPath, reportTitle, reportFileName);
    },

    seleniumAddress: "http://localhost:4444/wd/hub",
   

    specs: [
        //'specs/home.spec.js',
        //'specs/productEdit.spec.js',
        //'specs/productEditInfo.spec.js',
        //'specs/productEditPrice.spec.js',
        //'specs/productEditTags.spec.js',
        //'specs/productList.spec.js',
        //'specs/productListFilters.spec.js',
    ],

    suites: {
        AngularDemo: 'specs/*.spec.js',
    },

    multiCapabilities: [
        { 'browserName': 'chrome', shardTestFiles: true, maxInstances: 2 },
    ],
    rootElement: "body", 
    verbose: true,

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    }

}